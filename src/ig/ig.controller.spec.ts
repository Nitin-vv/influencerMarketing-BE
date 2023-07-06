import { Test, TestingModule } from '@nestjs/testing';
import { IgController } from './ig.controller';

describe('IgController', () => {
  let controller: IgController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IgController],
    }).compile();

    controller = module.get<IgController>(IgController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
