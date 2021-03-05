import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BasegoogleModule } from '@app/basegoogle'
import config from '@config/index';
import { CoreModule } from '@libs/core';

@Module({
  imports: [
    CoreModule,
    BasegoogleModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
      load: config,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
