"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeCrudRoutes = void 0;
const entities_1 = __importDefault(require("../../database/entities"));
const crud_router_1 = __importDefault(require("./templates/crud-router"));
const express_1 = require("express");
const token_validation_1 = __importDefault(require("../middlewares/token-validation"));
const routes = (0, express_1.Router)();
const initializeCrudRoutes = () => {
    Object.keys(entities_1.default).forEach((model) => {
        const crudRouter = new crud_router_1.default(model);
        routes.use(`/${model}`, token_validation_1.default, crudRouter.router);
    });
};
exports.initializeCrudRoutes = initializeCrudRoutes;
exports.default = routes;
