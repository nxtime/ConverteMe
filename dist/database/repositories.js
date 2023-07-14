"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const comment_entity_1 = require("./entities/comment.entity");
const connection_1 = __importDefault(require("./connection"));
const follower_entity_1 = require("./entities/follower.entity");
const post_entity_1 = require("./entities/post.entity");
const user_entity_1 = require("./entities/user.entity");
const repositories = {
    user: connection_1.default.getRepository(user_entity_1.User),
    post: connection_1.default.getRepository(post_entity_1.Post),
    comment: connection_1.default.getRepository(comment_entity_1.Comment),
    follower: connection_1.default.getRepository(follower_entity_1.Follower),
};
exports.default = Object.assign({}, repositories);
