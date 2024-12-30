import { HttpException, HttpStatus } from "@nestjs/common";

export class ForbiddenException extends HttpException {
  constructor() {
    super("Forbidden", HttpStatus.FORBIDDEN);
  }

  saveLog(errorMessage: string) {
    console.log(`Saving log ${errorMessage}`);
  }

  throwWithCustomMessage(errorMessage: string) {
    throw new HttpException(errorMessage, HttpStatus.FORBIDDEN)
  }
}
