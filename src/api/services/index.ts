import CrudServices from "./templates/crud-services";
import { TModels } from "../../database/entities";

const services: {
  [Key in TModels]: typeof CrudServices
} = {
  user: CrudServices,
  post: CrudServices,
  comment: CrudServices,
  follower: CrudServices,
};

export default services;