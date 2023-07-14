"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../../controllers"));
class CrudRouter {
    constructor(model) {
        this.router = (0, express_1.Router)();
        this.model = model;
        this.routes();
    }
    routes() {
        const controller = new controllers_1.default[this.model](this.model);
        this.router.post("/create", controller.create);
        this.router.post("/create/many", controller.createMany);
        this.router.patch("/:id", controller.update);
        this.router.post("/update/many", controller.updateMany);
        this.router.delete("/:id", controller.delete);
        this.router.post("/delete/many", controller.deleteMany);
        this.router.get("/all", controller.getAll);
        this.router.get("/:id", controller.getOne);
    }
}
exports.default = CrudRouter;
