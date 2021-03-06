import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class VerifyUser implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}

@Injectable()
export class VerifyMe implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Verify Me...');
    next();
  }
}
