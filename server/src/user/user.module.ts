import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from '@root/user/user.controller';
import { UserService  } from '@root/user/user.service';
import { User } from '@root/user/user.entity';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
  ],
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UserService]
})


export class UserModule {}
