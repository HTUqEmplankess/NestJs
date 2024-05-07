import { Test, TestingModule } from '@nestjs/testing';
import { Mo1Service } from './mo1.service';

describe('Mo1Service', () => {
  let service: Mo1Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Mo1Service],
    }).compile();

    service = module.get<Mo1Service>(Mo1Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
