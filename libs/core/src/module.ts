import { Module, Global } from '@nestjs/common';
import { BaseValidator } from './validator';
import { getProviders } from './providers';
import { BaseModel } from './db';
import { DiscoveryModule } from '@nestjs/core';

@Global()
@Module({
  imports: [DiscoveryModule],
  providers: [
    ...getProviders(),
  ],
  exports: [BaseValidator],
})
export class CoreModule {}
