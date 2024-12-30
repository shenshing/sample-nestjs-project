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
      clientID: process.env.LOGIN_WITH_GOOGLE_CLIENT_ID,
      clientSecret: process.env.LOGIN_WITH_GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.LOGIN_WITH_GOOGLE_CALLBACK_URL,
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
