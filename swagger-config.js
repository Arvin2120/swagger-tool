const config = {
    info: {
        title: '测试swagger 文档',
        version: '1.0.0',
    },
    host: 'localhost:3000', // 你的 API 主机地址
    basePath: '/',          // 你的 API 基路径
    schemes: ['http', 'https'], // 支持的协议
    consumes: ['application/json'],
    produces: ['application/json'],
}
const apiConfig = {
    tags: ['AXFORM'],
    summary: 'hello world !!!',
    description: '详细描述 ||ヽ(*￣▽￣*)ノミ|Ю'
}
export {
    config,
    apiConfig
}