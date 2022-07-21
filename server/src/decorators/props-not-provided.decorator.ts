import { NotFoundException } from '@nestjs/common';

export function PropNotProvided(name: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;

      descriptor.value = function (...args) {
        if (!args[0]) {
          throw new NotFoundException(`${name} not provided`)
        }

        const result = originalMethod.apply(this, args);
        return result;
      };
    }
}
