import * as dotenv from 'dotenv';
import merge from 'lodash.merge';
import { configType } from "./production"
dotenv.config();

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const stage = process.env.NODE_ENV;
let envConfig;

if (stage == 'production') {
    envConfig = require('./production').default;
} else {
    envConfig = require('./development').default;
}
// console.log(envConfig);

const config: configType = merge(
    {
        PORT: 1000,
        STATE: "ABC",
        LOGGING: true
    },
    envConfig
);
export default config