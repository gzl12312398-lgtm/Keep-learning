const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json()); // 解析前端发来的 JSON 数据

let db;

const SECRET = "my-super-secret-key"; // 定义一个密钥用于 JWT 签名，实际项目中应使用更安全的方式管理密钥

// 初始化数据库
(async () => {
  db = await open({
    filename: "./database.db",
    driver: sqlite3.Database,
  });

  // 创建用户表
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      username TEXT UNIQUE,
      password TEXT
    )
  `);
  console.log("Database connected and table created.");
})();

// --- API 路由 ---

// 注册接口
app.post("/api/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    await db.run("INSERT INTO users (username, password) VALUES (?, ?)", [
      username,
      password,
    ]);
    res.json({ success: true, message: "注册成功" });
  } catch (err) {
    res.status(400).json({ success: false, message: "用户名已存在" });
  }
});

// 登录接口
app.post("/api/login", async (req, res) => {
  const { username, password } = req.body;
try {
  const user = await db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );
  if (user) {
    // 验证成功，用户存在，生成 JWT
    const accessToken = jwt.sign({ username }, SECRET, {
      expiresIn: "15m", // 访问令牌有效期为 15 分钟
    });
    const refreshToken = jwt.sign({ username }, SECRET, {
      expiresIn: "7d", // 刷新令牌有效期为 7 天
    });
    res.json({ success: true, message: "登录成功", accessToken, refreshToken });
  
} else {
  res.status(401).json({ success: false, message: "用户名或密码错误" });
} catch (error) {
  res.status(500).json({ success: false, message: "服务器错误" });
}

});


app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
