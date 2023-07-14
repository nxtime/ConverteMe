"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crud_controller_1 = __importDefault(require("./templates/crud-controller"));
const controllers = {
    user: crud_controller_1.default,
    post: crud_controller_1.default,
    comment: crud_controller_1.default,
    follower: crud_controller_1.default,
};
exports.default = controllers;
