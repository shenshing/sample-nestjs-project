import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
// import config from '../../config/config';
// import { User } from '../../users/entities/user.entity';
import { Strategy, VerifyCallback } from "passport-google-oauth2";

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, "google") {
  constructor() // @InjectRepository(User) private userRepository: Repository<User>, // @Inject(config.KEY) private configService: ConfigType<typeof config>,
  {
    super({
      //   clientID: configService.google.clientID,
      //   callbackURL: configService.google.callbackURL,
      //   clientSecret: configService.google.clientSecret,
      clientID:
        "889937243306-khd3ll7p57gtctefac0jrdcnaq2ts1di.apps.googleusercontent.com",
      clientSecret: `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`,
      callbackURL: "http://localhost:3000/authentication/google/redirect",
      scope: ["profile", "email"],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback
  ): Promise<any> {
    const { name, emails, photos } = profile;
    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };
    console.log("this is the user:", user);
    done(null, user);
  }
}
