import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { VerifyUser, VerifyMe } from '../../common/middleware';

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyUser)
      .forRoutes({ path: '/user', method: RequestMethod.GET })
      .apply(VerifyMe)
      .forRoutes({ path: '/user', method: RequestMethod.POST });
  }
}
