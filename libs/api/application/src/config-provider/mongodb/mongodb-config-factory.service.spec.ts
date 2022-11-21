import { Test, TestingModule } from '@nestjs/testing';
import { MongodbConfigFactoryService } from './mongodb-config-factory.service';

describe('MongodbConfigFactoryService', () => {
  let service: MongodbConfigFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MongodbConfigFactoryService],
    }).compile();

    service = module.get<MongodbConfigFactoryService>(MongodbConfigFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
