import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'postgres',
      database: 'primo_test',
      autoLoadEntities: true,
      synchronize: true,
      logging: 'all',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
