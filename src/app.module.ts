import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Room, RoomSchema, User, UserSchema } from './forms/schema.schema';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SttModule } from './stt/stt.module';
import { SocketModule } from './socket/socket.module';
import { RoomModule } from './room/room.module';
import { GptService } from './room/gpt.service';
import { MulterModule } from '@nestjs/platform-express';
import { S3 } from 'aws-sdk';
import { S3Service } from './room/s3.service';
import { TwilioService } from './twilio.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name: User.name, schema: UserSchema},{name: Room.name, schema: RoomSchema}]),
  
    // MongooseModule.forRoot("mongodb+srv://rlaehddbs2238:rlaehddbs123@cluster0.uusqfxm.mongodb.net/?retryWrites=true&w=majority"),
    MongooseModule.forRoot("mongodb://gyuranz:0812@15.164.100.230:27017/admin"),
    SttModule,
    AuthModule,
    SocketModule,
    RoomModule,
    MulterModule.register(),
  ],
  controllers: [AppController],
  providers: [AppService,TwilioService],
})
export class AppModule {}
