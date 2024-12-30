import { Injectable } from "@nestjs/common";
// import { ItemsService } from "./items/items.service";
import { CategoriesService } from "./categories/categories.service";
@Injectable()
export class AppService {
  constructor(
    // private readonly itemsService: ItemsService,
    private readonly categoriesService: CategoriesService
  ) // private readonly configService: ConfigService
  {}

  getHello(): string {
    // const databaseConnectionString = this.configService.get<string>('DATABASE_CONNECTION');
    const databaseConnectionString = process.env.DATABASE_CONNECTION_URI;
    // const databaseConnectionString = process.env.DATABASE_CONNECTION;

    console.log("databaseConnectionString :>> ", databaseConnectionString);
    // this.itemsService.justLog();
    // this.categoriesService.justLog();
    return "Hello World";
  }

  async someAsyncMethod() {
    // This will throw an uncaught error because we're not handling it properly
    throw new Error("Something went wrong!");
  }
}
