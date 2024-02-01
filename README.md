
# 使用方式

## 1、入参考虑到需要写必传和非必传状态 (官方正常写)
```
#swagger.parameters['name'] = { description: 'User 名称', required: true }
```
## 2、出参快捷写法-》生成会包括默认配置项和返回两个部分
- 参数1：当前的返回内容 （你可以根据前端接口调用后得到的数据进行填充，也可以自己写一套假数据填充）
```
  writeCommentsWithApi(result)
```
- 说明：当接口触发后  更新生成新的swagger，完成后此方法会自动销毁变成注释
- 事例 :http://localhost:3000/api/hello 调用接口

```vue 
// 调用前
myRouter.get('/api/hello', (req, res) => {
  // 假数据，也可用真实的res数据
  const result = {
    name: '张三',
    age: '18',
    about: '关于张三'
  }
  /*
    #swagger.parameters['id'] = { description: 'User ID', required: true }
    #swagger.parameters['name'] = { description: 'User 名称', required: true }
   */
  writeCommentsWithApi(result)
  res.json({ message: 'Hello, World!', ...req });
});

```

```vue 
// 调用后
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
      #swagger.tags = ["AXFORM"]
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

```
# 最后别忘记运行 
```
npm run build:swagger 
```
- 将json 导入yapi即可