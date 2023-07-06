import { Test, TestingModule } from '@nestjs/testing';
import { IgService } from './ig.service';

describe('IgService', () => {
  let service: IgService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IgService],
    }).compile();

    service = module.get<IgService>(IgService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
