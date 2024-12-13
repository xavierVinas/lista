// auth-token.interceptor.ts
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
} from '@angular/common/http';
import { SessionData } from '../models/enums/storare.enum';

export const authTokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  console.log('0intercept');
  const token = JSON.parse(localStorage.getItem(SessionData.TOKEN)!);

  if (token) {
    console.log('entro al if');

    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `${token}`,
      },
    });
    return next(clonedRequest);
  }

  return next(req);
};
