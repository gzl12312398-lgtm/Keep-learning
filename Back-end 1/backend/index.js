console.log("🔥 我真的启动了");

// 导入 express 模块，用于创建 Web 服务器
const express = require("express");
// 导入 cors 模块，用于解决跨域问题
const cors = require("cors");

// 创建 express 应用实例
const app = express();

app.use(cors());
app.use(express.json());

// 模拟数据库
let users = [
  {
    username: "test1",
    password: "123",
  },
];

// 注册接口
app.post("/Register", (req, res) => {
  console.log("注册收到的数据:", req.body);
  // 从请求体中解构出 username 和 password
  const { username, password } = req.body;

  // 将新用户对象添加到 users 数组中 (模拟存入数据库)
  users.push({ username, password });
  console.log("注册后 users:", users);

  // 向客户端返回成功响应
  res.json({ success: true });
});

// 登录接口
app.post("/Login", (req, res) => {
  console.log("====== 登录调试 ======");
  console.log("当前 users:", users);
  console.log("收到的数据:", req.body);

  // 从请求体中获取用户名和密码
  const { username, password } = req.body;

  // 条件：用户名相等 且 密码相等
  const user = users.find(
    (u) => u.username === username && u.password === password,
  );

  console.log("匹配到的 user:", user);

  // 判断是否找到了用户
  if (user) {
    // 找到用户，登录成功
    res.json({ success: true });
  } else {
    // 未找到用户 (用户名错误或密码错误)，登录失败
    res.json({ success: false });
  }
});

// 查看用户列表
app.get("/users", (req, res) => {
  // 返回整个 users 数组
  res.json(users);
});

// --- 启动服务器 ---
app.listen(3000, () => {
  console.log("服务器运行在 http://localhost:3000");
});
