import { Controller, Post, Get, Req, Res, UseGuards } from "@nestjs/common";
import { GoogleOauthGuard } from "./guards/google-login.guard";

@Controller('/api/auth/google')
export class GoogleLoginController {

    
}