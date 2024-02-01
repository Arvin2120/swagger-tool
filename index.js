// const express = require('express');
// const swaggerAutogen = require('swagger-autogen')();
// const app = express();
// const port = 3000;

// /**
//  * @swagger
//  * /api/users:
//  *   get:
//  *     summary: 获取所有用户
//  *     description: 获取系统中的所有用户列表
//  *     tags:
//  *       - Users
//  *     parameters:
//  *       - name: page
//  *         in: query
//  *         description: 页码
//  *         required: false
//  *         schema:
//  *           type: integer
//  *       - name: pageSize
//  *         in: query
//  *         description: 每页数量
//  *         required: false
//  *         schema:
//  *           type: integer
//  *     responses:
//  *       200:
//  *         description: 成功获取用户列表
//  *         content:
//  *           application/json:
//  *             example:
//  *               users: [{ id: 1, username: 'user1' }, { id: 2, username: 'user2' }]
//  */
// app.get('/api/users', (req, res) => {
//   const users = [
//     { id: 1, username: 'user1' },
//     { id: 2, username: 'user2' },
//   ];

//   res.status(200).json({ users });
// });

// // 设置 Swagger 自动生成
// const swaggerConfig = {
//   info: {
//     title: 'Express API',
//     version: '1.0.0',
//     description: '示例 Express API 文档',
//   },
//   host: 'localhost:3000',
//   basePath: '/',
//   schemes: ['http'],
//   consumes: ['application/json'],
//   produces: ['application/json'],
//   tags: [
//     {
//       name: 'Users',
//       description: '用户操作',
//     },
//   ],
// };

// const outputFile = './swagger_output.json';
// const endpointsFiles = ['./index.js']; // 包含Swagger注释的文件

// swaggerAutogen(outputFile, endpointsFiles, swaggerConfig).then(() => {
//   // 启动应用
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// });
