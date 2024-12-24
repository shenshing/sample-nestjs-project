import { Inject, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import config from '../../config/config';
// import { User } from '../../users/entities/user.entity';
import { Strategy, VerifyCallback } from 'passport-google-oauth2';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    // @Inject(config.KEY) private configService: ConfigType<typeof config>,
    // @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    super({
    //   clientID: configService.google.clientID,
    //   callbackURL: configService.google.callbackURL,
    //   clientSecret: configService.google.clientSecret,
      clientID: `889937243306-khd3ll7p57gtctefac0jrdcnaq2ts1di.apps.googleusercontent.com`,
      clientSecret: `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`,
      callbackURL: `http://localhost:3000/api/auth/google/callback`,
      scope: ['profile', 'email'],
    });
  }

  async validate(
    _accessToken: string,
    _refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    console.log(`---> inside validate function <---`);
    const { id, name, emails, photos } = profile;

    const user = {
      provider: 'google',
      providerId: id,
      email: emails[0].value,
      name: `${name.givenName} ${name.familyName}`,
      picture: photos[0].value,
    };

    done(null, user);
  }

// import { PassportStrategy } from '@nestjs/passport';
// import { Strategy, VerifyCallback } from 'passport-google-oauth20';
// import { config } from 'dotenv';

// import { Injectable } from '@nestjs/common';

// config();

// @Injectable()
// export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {

//   constructor() {
//     super({
//       clientID: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//       callbackURL: 'http://localhost:3000/google/redirect',
//       scope: ['email', 'profile'],
//     });
//   }

//   async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
//     const { name, emails, photos } = profile
//     const user = {
//       email: emails[0].value,
//       firstName: name.givenName,
//       lastName: name.familyName,
//       picture: photos[0].value,
//       accessToken
//     }
//     done(null, user);
//   }
// }
}