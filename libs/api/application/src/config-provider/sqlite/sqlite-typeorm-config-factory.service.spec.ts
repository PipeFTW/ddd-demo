import { Test, TestingModule } from '@nestjs/testing';
import { SqliteTypeormConfigFactoryService } from './sqlite-typeorm-config-factory.service';

describe('SqliteTypeormConfigFactoryService', () => {
  let service: SqliteTypeormConfigFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SqliteTypeormConfigFactoryService],
    }).compile();

    service = module.get<SqliteTypeormConfigFactoryService>(SqliteTypeormConfigFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
