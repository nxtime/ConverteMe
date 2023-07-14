"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const entities_1 = __importDefault(require("../../database/entities"));
const connection_1 = __importDefault(require("../../database/connection"));
const app_1 = __importDefault(require("../../api/app"));
const body_1 = __importDefault(require("../models/body"));
const supertest_1 = __importDefault(require("supertest"));
const endpoints = [
    {
        name: "create",
        url: "create",
        method: "POST",
        statusCode: 201,
        expected: "all",
    },
];
describe("API Endpoints", () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield connection_1.default.initialize();
    }));
    Object.keys(entities_1.default).forEach((model) => {
        if (model === "follower")
            return;
        describe(model, () => {
            endpoints.forEach((endpoint) => {
                if (endpoint.expected !== "all" && endpoint.expected !== model)
                    return;
                it(`Should ${endpoint.name} ${model}`, () => __awaiter(void 0, void 0, void 0, function* () {
                    const response = yield (0, supertest_1.default)(app_1.default)[endpoint.method.toLowerCase()](`/${model}/${endpoint.url}`)
                        .send(body_1.default[model]);
                    expect(response.statusCode).toBe(endpoint.statusCode);
                }));
            });
        });
    });
});
