import { Injectable } from '@nestjs/common';
import { CreateAuthenticationDto } from './dto/create-authentication.dto';
import { UpdateAuthenticationDto } from './dto/update-authentication.dto';
import { JwtService } from '@nestjs/jwt';
import { Role } from 'src/authorization/enum/role.enum';

@Injectable()
export class AuthenticationService {
    private readonly users = [
        {
          userId: 1,
          username: 'john',
          password: '12345678',
          roles: [Role.Admin]
        },
        {
          userId: 2,
          username: 'maria',
          password: '12345678',
          roles: [Role.User]
        },
      ];
    constructor(private readonly jwtService: JwtService) {

    }
  create(createAuthenticationDto: CreateAuthenticationDto) {
    return 'This action adds a new authentication';
  }

  findAll() {
    return `This action returns all authentication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authentication`;
  }

  update(id: number, updateAuthenticationDto: UpdateAuthenticationDto) {
    return `This action updates a #${id} authentication`;
  }

  remove(id: number) {
    return `This action removes a #${id} authentication`;
  }

  async login(credential: {username: string, password: string}) {

    const {username, password} = credential;
    
    const isValidUser = this.users.find(u => u.username === username && u.password === password);

    console.log('isValidUser :>> ', isValidUser);

    // return isValidUser ? {message: 'Login succeed'} : {message: "Incorrect username or password."}
    

    if (isValidUser) {
      return {
        message: 'Login succeed',
        access_token: await this.jwtService.signAsync({...credential}, {
            // secret: '123'
        }),
      };
    } else {
      return {
        message: 'Invalid credential'
      };
    }

  }
}
