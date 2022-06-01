import { Inject, Injectable } from '@nestjs/common';
import { EnvConfig } from 'src/interfaces/env-config.interface';
import * as dotenv from 'dotenv';
import { join } from 'path';
import * as fs from 'fs';

export const CONFIG_OPTIONS = 'CONFIG_OPTIONS';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject(CONFIG_OPTIONS) private options: EnvConfig) {
    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = join(__dirname, '../../../', filePath);
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
