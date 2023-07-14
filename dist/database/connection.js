"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const comment_entity_1 = require("./entities/comment.entity");
const typeorm_1 = require("typeorm");
const follower_entity_1 = require("./entities/follower.entity");
const post_entity_1 = require("./entities/post.entity");
const user_entity_1 = require("./entities/user.entity");
const DatabaseProvider = new typeorm_1.DataSource({
    type: process.env.SQL_TYPE,
    database: process.env.RDS_DB_NAME,
    host: process.env.RDS_HOSTNAME,
    port: 3306,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    synchronize: true,
    entities: [user_entity_1.User, post_entity_1.Post, comment_entity_1.Comment, follower_entity_1.Follower],
    subscribers: [],
    migrations: [],
});
exports.default = DatabaseProvider;
