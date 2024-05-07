import { Module } from '@nestjs/common';
import { Mo1Service } from './mo1.service';
import { Mo1Controller } from './mo1.controller';

@Module({
  providers: [Mo1Service],
  controllers: [Mo1Controller],
})
export class Mo1Module {}
