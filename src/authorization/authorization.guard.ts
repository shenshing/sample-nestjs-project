
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Roles, ROLES_KEY } from './roles.decorator';
import { Role } from './enum/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    console.log('---> can activate in role guard <---');


    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    console.log('---> require roles: ', requiredRoles);
    if (!requiredRoles) {
      return true;
    }
    
    // console.log('context: ', context.switchToHttp().getRequest());
    const { user } = context.switchToHttp().getRequest();
    console.log('user is: ', user);
    return requiredRoles.some((role) => user.roles?.includes(role));
  }
}
