import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginDTO {
    @IsEmail()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;

}