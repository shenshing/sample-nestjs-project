import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UserModule } from "./user/user.module";
import { ItemsModule } from "./items/items.module";
import { CategoriesModule } from "./categories/categories.module";
import { ConfigModule } from "@nestjs/config";
import { AuthenticationModule } from "./authentication/authentication.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthorizationModule } from "./authorization/authorization.module";
import { APP_GUARD } from "@nestjs/core";
import { RolesGuard } from "./authorization/authorization.guard";
import { AuthGuard } from "./authentication/guards/authentication.guard";

@Module({
  imports: [
    UserModule,
    ItemsModule,
    CategoriesModule,
    JwtModule.register({
      global: true,
      secretOrPrivateKey: process.env.JWT_SECRET || "defaultSecretKey",

      signOptions: { expiresIn: "2 days" },
    }),

    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available globally
      envFilePath: `${process.env.NODE_ENV}.env`,
    }),
    AuthenticationModule,
    AuthorizationModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
