import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  UnauthorizedException,
  UseFilters,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { ForbiddenException } from "./exception-handler/forbidden.exception";
import { HttpExceptionFilter } from "./exception-handler/http-exception.filter";
import { UnAuthorizeException } from "./exception-handler/unauthorize-exception";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/test-exception-handler")
  @HttpCode(HttpStatus.ACCEPTED)
  testExceptionHandler() {
    // throw ('This is error');
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    // try {
    //   // await this.service.findAll()
    //   throw "This is error";
    // } catch (error) {
    //   throw new HttpException(
    //     {
    //       status: HttpStatus.FORBIDDEN,
    //       error: "This is a custom message",
    //     },
    //     HttpStatus.FORBIDDEN
    //   );
    // }
    const errorMessage = "This is custom error";
    // const error = new ForbiddenException();
    // error.saveLog(errorMessage);
    // throw error.throwWithCustomMessage(errorMessage);
    //    throw new HttpException('Ok', HttpStatus.OK);
    //    return {
    //     status:
    //    }
    const error = new UnAuthorizeException();
    error.saveLog(errorMessage);
    throw error.throwWithCustomMessage(errorMessage);
  }

  @Get("/test-custom-exception-filter")
  @UseFilters(HttpExceptionFilter)
  testCustomExceptionFilter() {
    const exception = new HttpException(
      "This is custom error",
      HttpStatus.FORBIDDEN
    );
    throw exception;
  }
}
