import { Test, TestingModule } from '@nestjs/testing';
import { MariadbTypeormConfigFactoryService } from './mariadb-typeorm-config-factory.service';

describe('MariadbTypeormConfigFactoryService', () => {
  let service: MariadbTypeormConfigFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MariadbTypeormConfigFactoryService],
    }).compile();

    service = module.get<MariadbTypeormConfigFactoryService>(MariadbTypeormConfigFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
