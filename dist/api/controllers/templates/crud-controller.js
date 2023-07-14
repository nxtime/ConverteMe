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
const logger_1 = __importDefault(require("../../../utils/logger"));
const services_1 = __importDefault(require("../../services"));
class CrudController {
    constructor(model) {
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            var _a;
            try {
                const createdItem = yield ((_a = this === null || this === void 0 ? void 0 : this.service) === null || _a === void 0 ? void 0 : _a.create(req.body));
                if (createdItem instanceof Error)
                    throw createdItem;
                res.status(201).json(createdItem);
            }
            catch (err) {
                logger_1.default.error(err.message);
                res.status(err.statusCode || 500).send({ message: err.message });
            }
        });
        this.createMany = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const createdItems = yield this.service.createMany(req.body);
                if (createdItems instanceof Error)
                    throw createdItems;
                res.status(201).json(createdItems);
            }
            catch (err) {
                logger_1.default.error(err.message);
                res.status(err.statusCode || 500).send({ message: err.message });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                console.log("Body: ", req.body);
                const updatedItem = this.service.update(Number(id), req.body);
                if (updatedItem instanceof Error)
                    throw updatedItem;
                res.status(200).send(`Updated ${this.model} of id ${id} successfully`);
            }
            catch (err) {
                logger_1.default.error(err.message);
                res.status(err.statusCode || 500);
            }
        });
        this.updateMany = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ids = req.body.ids;
                const updatedItems = yield this.service.updateMany(ids, req.body);
                if (!updatedItems)
                    throw updatedItems;
                res.status(200).send(`Updated ${this.model}s of ids ${ids.join(", ")} successfully`);
            }
            catch (err) {
                logger_1.default.error(err.message);
                res.status(err.statusCode || 500).json({ message: err.message });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const deletedItem = yield this.service.delete(Number(id));
                if (deletedItem instanceof Error)
                    throw deletedItem;
                res.status(200).send(`Removed ${this.model} of id ${id} successfully`);
            }
            catch (err) {
                logger_1.default.error(err.message);
                res.status(err.statusCode || 500).json({ message: err.message });
            }
        });
        this.deleteMany = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const ids = req.body.ids;
                const deletedItems = yield this.service.deleteMany(ids);
                if (deletedItems instanceof Error)
                    throw deletedItems;
                res.status(200).send(`Removed ${this.model}s of ids ${ids.join(", ")} successfully`);
            }
            catch (err) {
                logger_1.default.error(err.message);
                res.status(err.statusCode || 500);
            }
        });
        this.getAll = (_req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const allItems = yield this.service.getAll();
                if (allItems instanceof Error)
                    throw allItems;
                res.status(200).send(allItems);
            }
            catch (err) {
                logger_1.default.error(err.message);
                res.status(err.statusCode || 404).json({ message: err.message });
            }
        });
        this.getOne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const oneItem = yield this.service.getOne(Number(id));
                if (oneItem instanceof Error)
                    throw oneItem;
                res.status(200).send(oneItem);
            }
            catch (err) {
                logger_1.default.error(err.message);
                res.status(err.statusCode || 404).json({ message: err.message });
            }
        });
        this.model = model;
        this.service = new services_1.default[model](model);
    }
}
exports.default = CrudController;
