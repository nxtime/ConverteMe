"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeEnvVariables = void 0;
const ENV = {
    APP_NAME: process.env.APP_NAME,
    PORT: process.env.PORT,
    SQL_TYPE: ((_a = process.env.SQL_TYPE) !== null && _a !== void 0 ? _a : "mysql"),
    RDS_HOSTNAME: process.env.RDS_HOSTNAME,
    RDS_PORT: process.env.RDS_PORT,
    RDS_DB_NAME: process.env.RDS_DB_NAME,
    RDS_USERNAME: process.env.RDS_USERNAME,
    RDS_PASSWORD: process.env.RDS_PASSWORD
};
const initializeEnvVariables = () => new Promise((resolve) => {
    var _a;
    ENV.APP_NAME = process.env.APP_NAME;
    ENV.PORT = process.env.PORT;
    ENV.SQL_TYPE = ((_a = process.env.SQL_TYPE) !== null && _a !== void 0 ? _a : "mysql");
    ENV.RDS_HOSTNAME = process.env.RDS_HOSTNAME;
    ENV.RDS_PORT = process.env.RDS_PORT;
    ENV.RDS_DB_NAME = process.env.RDS_DB_NAME;
    ENV.RDS_USERNAME = process.env.RDS_USERNAME;
    ENV.RDS_PASSWORD = process.env.RDS_PASSWORD;
    resolve("done");
});
exports.initializeEnvVariables = initializeEnvVariables;
exports.default = ENV;
