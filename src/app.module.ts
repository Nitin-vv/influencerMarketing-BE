import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IgController } from './ig/ig.controller';
import { IgService } from './ig/ig.service';
// import { HeaderMiddleware } from './middlewares/header.middleware';

@Module({
  imports: [],
  controllers: [AppController, IgController],
  providers: [AppService, IgService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(HeaderMiddleware).forRoutes('*');
  }
}
