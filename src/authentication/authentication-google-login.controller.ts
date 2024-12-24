import { Controller, Post, Get, Req } from "@nestjs/common";

@Controller('/api/auth/google')
export class GoogleLoginController {

    @Get('/callback')
    callback(@Req() req) {

        console.log(req.body);
        return 'ik';
    }
}