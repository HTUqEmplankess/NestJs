import { Test, TestingModule } from '@nestjs/testing';
import { Mo1Controller } from './mo1.controller';

describe('Mo1Controller', () => {
  let controller: Mo1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Mo1Controller],
    }).compile();

    controller = module.get<Mo1Controller>(Mo1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
