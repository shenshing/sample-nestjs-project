import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorizationDto } from './create-authorization.dto';

export class UpdateAuthorizationDto extends PartialType(CreateAuthorizationDto) {}
