import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Res,
  HttpStatus,
} from "@nestjs/common";
import { AuthenticationService } from "./authentication.service";
// import { CreateAuthenticationDto } from "./dto/create-authentication.dto";
// import { UpdateAuthenticationDto } from "./dto/update-authentication.dto";
import { AuthGuard } from "./guards/authentication.guard";
import { Roles } from "src/authorization/roles.decorator";
import { Role } from "src/authorization/enum/role.enum";
import { RolesGuard } from "src/authorization/authorization.guard";
import { GoogleOauthGuard } from "./guards/google-login.guard";
import { LoginDTO } from "./dto/login.dto";

@Controller("authentication")
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post("/login")
  async login(@Body() loginDto: LoginDTO) {
    return this.authenticationService.login(loginDto);
  }
  @Get("/login-with-google")
  @UseGuards(GoogleOauthGuard)
  async loginWithGoogl() {
    return "ok";
  }

  @UseGuards(AuthGuard)
  @Get("/userInfo")
  getUserInfo() {
    return {
      name: "John",
      password: "12345678",
    };
  }

  @Get("/google/redirect")
  @UseGuards(GoogleOauthGuard)
  callback(@Req() req, @Res() res) {

    console.log('google is triggered');
    // return {
    //   message: 'user from google',
    //   user: req.user,
    // };

    // return 'ok';
    res.end();
    return res.status(HttpStatus.OK);
  }

  @UseGuards(AuthGuard, RolesGuard)
  //   @Roles(Role.Admin)
  @Roles(Role.User)
  @Get("/password")
  getPassword() {
    return "This is the password";
  }


//   @Post()
//   create(@Body() createAuthenticationDto: CreateAuthenticationDto) {
//     return this.authenticationService.create(createAuthenticationDto);
//   }

//   @Get()
//   findAll() {
//     return this.authenticationService.findAll();
//   }

//   @Get(":id")
//   findOne(@Param("id") id: string) {
//     return this.authenticationService.findOne(+id);
//   }

//   @Patch(":id")
//   update(
//     @Param("id") id: string,
//     @Body() updateAuthenticationDto: UpdateAuthenticationDto
//   ) {
//     return this.authenticationService.update(+id, updateAuthenticationDto);
//   }

//   @Delete(":id")
//   remove(@Param("id") id: string) {
//     return this.authenticationService.remove(+id);
//   }
}
