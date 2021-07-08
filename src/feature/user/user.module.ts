import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

import { VerifyUser } from '../../common/middleware';

@Module({
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(VerifyUser)
      .forRoutes({ path: '/', method: RequestMethod.GET });
  }
}
