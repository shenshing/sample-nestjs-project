import { HttpException, HttpStatus } from "@nestjs/common";


export class UnAuthorizeException extends HttpException {
  constructor() {
    super("Unauthorize", HttpStatus.UNAUTHORIZED);
  }

  saveLog(errorMessage: string) {
    console.log(`Saving log ${errorMessage}`);
  }

  throwWithCustomMessage(errorMessage: string) {
    throw new HttpException(errorMessage, HttpStatus.FORBIDDEN)
  }
}
