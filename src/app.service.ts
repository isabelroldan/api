import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaService } from './prima.service';

@Injectable()
export class AppService extends PrismaService implements OnModuleInit {
   async onModuleInit(){
    await this.$connect();
  }
}
