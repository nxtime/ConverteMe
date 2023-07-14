"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crud_services_1 = __importDefault(require("./templates/crud-services"));
const services = {
    user: crud_services_1.default,
    post: crud_services_1.default,
    comment: crud_services_1.default,
    follower: crud_services_1.default,
};
exports.default = services;
