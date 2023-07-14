import CrudController from "./templates/crud-controller";
import { TModels } from "../../database/entities";

const controllers: {
  [Key in TModels]: typeof CrudController
} = {
  user: CrudController,
  post: CrudController,
  comment: CrudController,
  follower: CrudController,
};

export default controllers;