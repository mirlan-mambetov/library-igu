import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getTypeOrmConfig } from './config/typeorm.config';
import { HeroModule } from './hero/hero.module';
import { PageModule } from './page/page.module';
import { TabsModule } from './tabs/tabs.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { JournalModule } from './journal/journal.module';


@Module({
  imports: [
    ServeStaticModule.forRoot({
     rootPath: join(__dirname, '..', 'uploads')
    }),
    ConfigModule.forRoot({ envFilePath: './src/config/.env'}),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTypeOrmConfig
    }),
    HeroModule,
    PageModule,
    TabsModule,
    UsersModule,
    AuthModule,
    JournalModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
