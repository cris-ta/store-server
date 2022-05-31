import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

const validateRequest = (context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const user = request.user;
  if (!user) {
    return false;
  }
  return true;
};

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return validateRequest(context);
  }
}
