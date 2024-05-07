import { Controller, Get } from '@nestjs/common';

@Controller('mo1')
export class Mo1Controller {
  @Get()
  ping(): string {
    return 'HTUq!';
  }
}
