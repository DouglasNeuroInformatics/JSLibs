import { Inject, Injectable, type OnModuleInit } from '@nestjs/common';
import type { PrismaClient } from '@prisma/client';

import { PRISMA_CLIENT_TOKEN } from './prisma.constants';

@Injectable()
export class PrismaService implements OnModuleInit {
  constructor(@Inject(PRISMA_CLIENT_TOKEN) public readonly client: PrismaClient) {}

  async dropDatabase() {
    return this.client.$runCommandRaw({
      dropDatabase: 1
    });
  }

  async getDbName() {
    return await this.client.$runCommandRaw<{ db: string }>({ dbStats: 1 }).then((stats) => stats.db);
  }

  async listCollections() {
    return this.client.$runCommandRaw({
      listCollections: 1
    });
  }

  async onModuleInit() {
    await this.client.$connect();
  }
}
