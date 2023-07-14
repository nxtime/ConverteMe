"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const entities_1 = __importStar(require("../../../database/entities"));
const logger_1 = __importDefault(require("../../../utils/logger"));
const repositories_1 = __importDefault(require("../../../database/repositories"));
class CrudServices {
    constructor(model) {
        this.model = model;
        this.repository = repositories_1.default[model];
    }
    create(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdItem = this.repository.manager.create(entities_1.default[this.model], data);
            return yield createdItem.save();
        });
    }
    createMany(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdItems = [];
            yield Promise.all(data.map((item) => __awaiter(this, void 0, void 0, function* () {
                createdItems.push(yield this.create(item));
            })));
            return createdItems;
        });
    }
    update(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedItem = yield this.repository.update({
                    id
                }, data);
                console.log(data, updatedItem);
                return updatedItem;
            }
            catch (err) {
                logger_1.default.error(err);
                throw new Error(`Error updating ${this.model} of id ${id}`);
            }
        });
    }
    updateMany(ids, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = [];
                yield Promise.all(ids.map((id, index) => __awaiter(this, void 0, void 0, function* () {
                    response.push(yield this.update(id, data[index]));
                })));
                return response.join(", ");
            }
            catch (err) {
                logger_1.default.error(err);
                throw new Error(`Error updating ${this.model} of ids ${ids.join(", ")}`);
            }
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.delete(id);
        });
    }
    deleteMany(ids) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = [];
            yield Promise.all(ids.map((id) => __awaiter(this, void 0, void 0, function* () {
                response.push(yield this.delete(id));
            })));
            return response;
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.repository.find({
                relations: entities_1.modelsRelations[this.model]
            });
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const foundItem = yield this.repository.findOne({
                where: {
                    id
                },
                relations: entities_1.modelsRelations[this.model]
            });
            if (!foundItem)
                throw new Error(`No ${this.model} found with id ${id}`);
            return foundItem;
        });
    }
}
exports.default = CrudServices;
