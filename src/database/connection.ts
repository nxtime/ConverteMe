import { Comment } from "./entities/comment.entity";
import { DataSource } from "typeorm";
import { Follower } from "./entities/follower.entity";
import { Post } from "./entities/post.entity";
import { User } from "./entities/user.entity";

const DatabaseProvider = new DataSource({
  type: process.env.SQL_TYPE as any,
  database: process.env.RDS_DB_NAME,
  host: process.env.RDS_HOSTNAME,
  port: 3306,
  username: process.env.RDS_USERNAME,
  password: process.env.RDS_PASSWORD,
  synchronize: true,
  entities: [User, Post, Comment, Follower],
  subscribers: [],
  migrations: [],
});

export default DatabaseProvider;