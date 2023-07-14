import { DeepPartial, DeleteResult } from "typeorm";
import models, { TModelTypes, TModels, modelsRelations } from "../../../database/entities";
import repositories from "../../../database/repositories";

class CrudServices {
  model: TModels;
  repository: typeof repositories[TModels];

  constructor(model: TModels) {
    this.model = model;
    this.repository = repositories[model];
  }

  async create(data: DeepPartial<TModelTypes>): Promise<TModelTypes> {
    const createdItem = this.repository.manager.create(
      models[this.model],
      data
    ) as unknown as TModelTypes;

    return await createdItem.save();
  }

  async createMany(data: DeepPartial<TModelTypes>[]): Promise<TModelTypes[]> {
    const createdItems: TModelTypes[] = [];

    await Promise.all(data.map(async (item) => {
      createdItems.push(await this.create(item));
    }));

    return createdItems;
  }

  async update(id: number, data: DeepPartial<typeof models[TModels]>): Promise<TModelTypes> {
    const updatedItem = await this.repository.manager.update(
      models[this.model],
      {
        where: {
          id
        }
      },
      data
    ) as unknown as InstanceType<typeof models[TModels]>;

    return await updatedItem.save();
  }

  async updateMany(ids: number[], data: DeepPartial<typeof models[TModels]>[]): Promise<string> {
    const response: TModelTypes[] = [];

    await Promise.all(ids.map(async (id, index) => {
      response.push(await this.update(id, data[index]));
    }));

    return response.join(", ");
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }

  async deleteMany(ids: number[]): Promise<DeleteResult[]> {
    const response: DeleteResult[] = [];

    await Promise.all(ids.map(async (id) => {
      response.push(await this.delete(id));
    }));

    return response;
  }

  async getAll(): Promise<TModelTypes[]> {
    return this.repository.find({
      relations: modelsRelations[this.model]
    });
  }

  async getOne(id: number): Promise<TModelTypes> {
    const foundItem = await this.repository.findOne({
      where: {
        id
      },
      relations: modelsRelations[this.model]
    });

    if (!foundItem) throw new Error(`No ${this.model} found with id ${id}`);

    return foundItem;
  }
}

export default CrudServices;