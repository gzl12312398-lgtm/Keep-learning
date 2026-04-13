const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

const app = express();
app.use(cors());
app.use(express.json()); // 解析前端发来的 JSON 数据

let db;

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
  const user = await db.get(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password],
  );

  if (user) {
    res.json({ success: true, message: "登录成功" });
  } else {
    res.status(401).json({ success: false, message: "用户名或密码错误" });
  }
});

app.listen(3000, () => {
  console.log("Server is running at http://localhost:3000");
});
