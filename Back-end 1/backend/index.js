console.log("🔥 我真的启动了");

// 导入 express 模块，用于创建 Web 服务器
const express = require("express");
// 导入 cors 模块，用于解决跨域问题 (允许前端不同端口的页面访问此后端)
const cors = require("cors");

// 创建 express 应用实例
const app = express();

// 【重要】启用 CORS 中间件
// 这允许前端 (如运行在 localhost:5173 的 Vue 项目) 向后端 (localhost:3000) 发送请求
// 如果没有这行，浏览器会拦截请求并报错 "CORS policy"
app.use(cors());
// 【重要】启用 JSON 解析中间件
// 自动将请求体 (req.body) 中的 JSON 字符串解析为 JavaScript 对象
// 否则 req.body 将是 undefined，无法获取用户名和密码
app.use(express.json());

// 模拟数据库
// 使用一个空数组来存储用户数据
// ⚠️ 注意：数据只存在内存中，重启服务器后数据会丢失
let users = [
  {
    username: "test1",
    password: "123",
  },
];

// 注册接口
// 定义一个 POST 请求处理函数，路径为 '/register'
app.post("/register", (req, res) => {
  console.log("注册收到的数据:", req.body);
  // 从请求体中解构出 username 和 password
  // 前提：前端发送的是 JSON 格式，且上面启用了 express.json()
  const { username, password } = req.body;

  // 将新用户对象添加到 users 数组中 (模拟存入数据库)
  // ⚠️ 实际项目中：这里需要检查用户名是否已存在，且密码必须加密 (如使用 bcrypt) 后才能存储
  users.push({ username, password });
  console.log("注册后 users:", users);

  // 向客户端返回成功响应
  res.json({ success: true });
});

// 登录接口
// 定义一个 POST 请求处理函数，路径为 '/login'
app.post("/login", (req, res) => {
  console.log("====== 登录调试 ======");
  console.log("当前 users:", users);
  console.log("收到的数据:", req.body);

  // 从请求体中获取用户名和密码
  const { username, password } = req.body;

  // 在 users 数组中查找匹配的用户
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

// 查看用户列表（等下用）
// 定义一个 GET 请求，路径为 '/users'
// 用途：通常用于调试，方便你在浏览器直接访问 http://localhost:3000/users 查看当前所有注册用户
app.get("/users", (req, res) => {
  // 返回整个 users 数组
  // ⚠️ 注意：实际项目中绝对不能直接暴露所有用户的密码！这里仅用于学习演示
  res.json(users);
});

// --- 启动服务器 ---
// 监听端口 3000
// 回调函数会在服务器成功启动后执行
app.listen(3000, () => {
  console.log("服务器运行在 http://localhost:3000");
  // 此时你可以在终端看到这条消息，表示后端已就绪，可以接收前端请求了
});
