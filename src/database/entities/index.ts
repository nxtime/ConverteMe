import { Comment } from "./comment.entity";
import { Follower } from "./follower.entity";
import { Post } from "./post.entity";
import { User } from "./user.entity";

const models = {
  user: User,
  follower: Follower,
  post: Post,
  comment: Comment
};

export const modelsRelations: { [Key in TModels]: string[] } = {
  comment: ["user"],
  follower: ["user"],
  post: ["user", "comments"],
  user: ["posts", "followers.follower", "following.following", "comments"]
};

export type TModels = keyof typeof models;

export type TModelTypes = InstanceType<typeof models[TModels]>;

export default models;