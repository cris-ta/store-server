import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

const matchRoles = (context: ExecutionContext, roles: string[]) => {
  const request = context.switchToHttp().getRequest();
  const user = request.user;
  const hasRole = () => user.roles.some((role) => roles.includes(role));
  return user && user.roles && hasRole();
};

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    return matchRoles(context, roles);
  }
}
