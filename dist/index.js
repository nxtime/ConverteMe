"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const envs_enum_1 = __importDefault(require("./constants/envs.enum"));
const app_1 = __importDefault(require("./api/app"));
const logger_1 = __importDefault(require("./utils/logger"));
app_1.default.listen(envs_enum_1.default.PORT, () => {
    console.clear();
    logger_1.default.info(`Listening on port ${envs_enum_1.default.PORT}! 🚀`);
});
