import models, { TModels } from "../../database/entities";
import CrudRouter from "./templates/crud-router";
import { Router } from "express";
import tokenValidation from "../middlewares/token-validation";

const routes = Router();

// Create crud routes for each model
export const initializeCrudRoutes = () => {
  (Object.keys(models) as TModels[]).forEach((model) => {
    const crudRouter = new CrudRouter(model);

    routes.use(`/${model}`, tokenValidation, crudRouter.router);
  });
};

export default routes;