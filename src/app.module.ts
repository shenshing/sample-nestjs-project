import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
// import { ItemsModule } from "./items/items.module";
import { CategoriesModule } from "./categories/categories.module";
import { ConfigModule } from "@nestjs/config";
import { AuthenticationModule } from "./authentication/authentication.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthorizationModule } from "./authorization/authorization.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/entities/user.entity";
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    UserModule,
    // ItemsModule,
    CategoriesModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET || "defaultSecretKey",

      signOptions: { expiresIn: "2 days" },
    }),
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT, 10),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        // entities: [__dirname + '/../**/*.entity.{js,ts}'],
        // entities: ['src/**/*.entity.{ts,js}'],
        entities: [
            User
        ],
        synchronize: true,
      }),
    AuthenticationModule,
    AuthorizationModule,
    BooksModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
