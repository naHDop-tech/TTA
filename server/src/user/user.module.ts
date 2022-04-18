import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from '@root/user/user.controller';
import { UserService  } from '@root/user/user.service';
import { UserEntity } from '@root/user/user.entity';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
  ],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [UserService]
})


export class UserModule {}
