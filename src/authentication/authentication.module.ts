import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { GoogleStrategy } from "./strategies/google.strategy";
import { GoogleLoginController} from './authentication-google-login.controller';
import { UserModule } from "src/user/user.module";

@Module({
  imports: [UserModule],
  controllers: [AuthenticationController, GoogleLoginController],
  providers: [AuthenticationService, GoogleStrategy],
})
export class AuthenticationModule {}
