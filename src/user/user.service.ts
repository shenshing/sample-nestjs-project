import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { compareHash, generateHash } from "src/helper/password";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  /**
   * Create or register user.
   * @param createUserDto
   * @returns
   */
  async create(createUserDto: CreateUserDto) {
    console.log("payload is: ", JSON.stringify(createUserDto, null, 2));

    // Extract all fields from the request's payload.
    const { name, address, phone_number, password } = createUserDto;

    // Hash the password
    const hashPassword = generateHash(password);

    console.log(compareHash(password, hashPassword));
    // Save into database.
    // const saveResult = await this.userRepository.save({
    //   ...createUserDto,
    //   password: hashPassword,
    // });
    // console.log("---> save result: ", JSON.stringify(saveResult, null, 2));

    return "This action adds a new user";
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  /**
   * Find a user by email.
   * @param email
   * @returns
   */
  async findOneByEmail(email: string) {
    if (!email) return;

    return await this.userRepository.findOneBy({ email });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
