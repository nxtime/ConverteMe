"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelsRelations = void 0;
const comment_entity_1 = require("./comment.entity");
const follower_entity_1 = require("./follower.entity");
const post_entity_1 = require("./post.entity");
const user_entity_1 = require("./user.entity");
const models = {
    user: user_entity_1.User,
    follower: follower_entity_1.Follower,
    post: post_entity_1.Post,
    comment: comment_entity_1.Comment
};
exports.modelsRelations = {
    comment: ["user"],
    follower: ["user"],
    post: ["user", "comments"],
    user: ["posts", "followers.follower", "following.following", "comments"]
};
exports.default = models;
