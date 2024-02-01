
import swaggerAutogen from 'swagger-autogen';
import { config } from '../swagger-config.js';
const generateSwagger = swaggerAutogen();
const outputFile = '../doc/swagger_output.json';
const endpointsFiles = ['./routes/*.js'];
generateSwagger(outputFile, endpointsFiles, config).then(() => {
    console.log(`导出${outputFile}:成功`)
}).catch((error) => {
    console.error('Error:', error);
});
