import { Module } from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
import { AuthenticationController } from "./authentication.controller";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { GoogleStrategy } from "./strategies/google.strategy";
import { GoogleLoginController} from './authentication-google-login.controller';

@Module({
  imports: [],
  controllers: [AuthenticationController, GoogleLoginController],
  providers: [AuthenticationService, GoogleStrategy],
})
export class AuthenticationModule {}
