import { Module } from '@nestjs/common';
import { VideosModule } from './videos/videos.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [VideosModule,MongooseModule.forRoot('mongodb+srv://monu:admin@cluster0.bzvoelw.mongodb.net')],
  controllers: [],
  providers: [],
})
export class AppModule {}
