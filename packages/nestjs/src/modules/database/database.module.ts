/* eslint-disable @typescript-eslint/no-explicit-any */

import { type DynamicModule, Module } from '@nestjs/common';
import { Db, MongoClient } from 'mongodb';
import type { Promisable } from 'type-fest';

import { DATABASE_CONNECTION_TOKEN, MODULE_OPTIONS_TOKEN } from './database.constants';
import { DatabaseRepository } from './database.repository';
import { getRepositoryToken } from './database.utils';

import type { EntityClass } from '../../core/types';

type DatabaseModuleOptions = {
  dbName: string;
  uri: string;
};

type DatabaseModuleAsyncOptions = {
  inject?: any[];
  useFactory: (...args: any[]) => Promisable<DatabaseModuleOptions>;
};

@Module({})
export class DatabaseModule {
  static forFeature(entities: EntityClass[]): DynamicModule {
    const providers = entities.map((entity) => ({
      provide: getRepositoryToken(entity),
      useClass: DatabaseRepository(entity)
    }));
    return {
      exports: providers.map(({ provide }) => provide),
      module: DatabaseModule,
      providers
    };
  }
  static forRootAsync(options: DatabaseModuleAsyncOptions): DynamicModule {
    return {
      exports: [DATABASE_CONNECTION_TOKEN],
      global: true,
      module: DatabaseModule,
      providers: [
        {
          inject: options.inject,
          provide: MODULE_OPTIONS_TOKEN,
          useFactory: options.useFactory
        },
        {
          inject: [MODULE_OPTIONS_TOKEN],
          provide: DATABASE_CONNECTION_TOKEN,
          useFactory: async ({ dbName, uri }: DatabaseModuleOptions): Promise<Db> => {
            const client = new MongoClient(uri);
            await client.connect();
            return client.db(dbName);
          }
        }
      ]
    };
  }
}
