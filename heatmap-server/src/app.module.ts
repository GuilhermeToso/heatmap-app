import { Module } from '@nestjs/common';
import { AppGateway } from './app/app.gateway';
import { AppService } from './app/app.service';

@Module({
  imports: [],
  controllers: [],
  providers: [AppGateway, AppService],
})
export class AppModule {}
