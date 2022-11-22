import { Test, TestingModule } from '@nestjs/testing';
import { GraphqlConfigFactoryService } from './graphql-config-factory.service';

describe('GraphqlConfigFactoryService', () => {
  let service: GraphqlConfigFactoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GraphqlConfigFactoryService],
    }).compile();

    service = module.get<GraphqlConfigFactoryService>(GraphqlConfigFactoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
