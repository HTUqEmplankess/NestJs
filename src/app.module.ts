import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Mo1Module } from './mo1/mo1.module';

@Module({
  imports: [Mo1Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
