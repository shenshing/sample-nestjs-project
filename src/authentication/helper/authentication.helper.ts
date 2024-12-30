import { JwtService } from "@nestjs/jwt";
import { LoginDTO } from "../dto/login.dto";

export const returnToken = async (
  jwtService: JwtService,
  credential: LoginDTO
) => {
  return await jwtService.signAsync(
    { ...credential },
    {
      secret: process.env.JWT_SECRET,
    }
  );
};
