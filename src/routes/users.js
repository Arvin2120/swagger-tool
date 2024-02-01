
import express from 'express';
import { writeCommentsWithApi } from '../../reCode.js'
const myRouter = express.Router();
myRouter.get('/api/users', (req, res) => {
  // #swagger.tags = ['AXFORM']
  // #swagger.summary = '我是接口/api/users'
  // #swagger.description = '详细描述'
  // #swagger.parameters['id'] = { description: 'User ID', required: true }
  // #swagger.parameters['name'] = { description: 'User 名称', required: true }
  /* #swagger.responses[200] = {
            description: 'Some description...',
            schema: {
                name: 'John Doe',
                age: 29,
                about: ''
            }
  } */
  const users = [
    { id: 1, username: 'user1' },
    { id: 2, username: 'user2' },
    ...req
  ];
  res.status(200).json(users);
});

myRouter.get('/api/hello', (req, res) => {
  const result = {
    name: '张三',
    age: '18',
    about: '关于张三'
  }
  /*
    #swagger.parameters['id'] = { description: 'User ID', required: true }
    #swagger.parameters['name'] = { description: 'User 名称', required: true }
   */
  
    /*
      #swagger.tags = ["AXFORM","axxx"]
      #swagger.summary = "hello world !!!"
      #swagger.description = "详细描述 ||ヽ(*￣▽￣*)ノミ|Ю"
      #swagger.responses[200] = {
        description: '返回内容的描述',
        schema: {
        "name": "张三",
        "age": "18",
        "about": "关于张三"
}
      }
     */
  res.json({ message: 'Hello, World!' });
});
export default myRouter
