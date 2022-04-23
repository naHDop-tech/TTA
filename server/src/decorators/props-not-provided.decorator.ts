import { NotFoundException } from '@nestjs/common';

export function PropNotProvided(name: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(name);
      console.log(target);
      console.log(propertyKey);
      console.log(descriptor);
    }
}
