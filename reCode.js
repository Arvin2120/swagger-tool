import fs from 'fs';
import path from 'path';
import { apiConfig } from './swagger-config.js';
// 定义 Swagger 注释生成方法
const writeCommentsWithApiCode = (res) => {
  return `
    /*
      #swagger.tags = ${JSON.stringify(apiConfig.tags)}
      #swagger.summary = ${JSON.stringify(apiConfig.summary)}
      #swagger.description = ${JSON.stringify(apiConfig.description)}
      #swagger.responses[200] = {
        description: '返回内容的描述',
        schema: ${JSON.stringify(res, null, 8)}
      }
     */`;
}

// 写入的内容
const writeCommentsWithApi = (res) => {
  // 第一步，加注释
  // 获取目标目录下的所有 JavaScript 文件
  const sourceDirectory = 'src/routes/';
  const files = fs.readdirSync(sourceDirectory).filter(file => path.extname(file) === '.js');

  files.forEach(file => {
    const sourceFile = path.join(sourceDirectory, file);
    let sourceCode = fs.readFileSync(sourceFile, 'utf-8');

    // 匹配注释占位符，并替换
    // const regex = /\/\*\s*\$\{writeCommentsWithApi\(([^)]+), ([^)]+), ([^)]+)\)\}\s*\*\//g;
    const regex = /writeCommentsWithApi\(([^,]+)\)/g;
    sourceCode = sourceCode.replace(regex, (match, resultParam, urlParam, reqParam) => {
      // 替换注释占位符
      const swaggerComments = writeCommentsWithApiCode(res);
      return swaggerComments;
    });

    // 写回源文件
    fs.writeFileSync(sourceFile, sourceCode, 'utf-8');
    console.log('重新写入代码成功！！！');
  });
}
/**
 * 更新返回
 */
const updataResult = () => {

}
export {
  writeCommentsWithApi,
  updataResult
} 