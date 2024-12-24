import { Module } from '@nestjs/common';
import { TopicsModule } from './src/topics/topics.module';
import { UsersModule } from './src/auth/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    /**
     * Con este metodo tiene todas las configuraciones para nuestra conexión
     * con la BD (puedes ver todas las opciones que nos ofrece typeOrm acá:
     * https://typeorm.io/data-source-options)
     */
    TypeOrmModule.forRoot({
      ssl: process.env.STAGE === 'prod',
      extra: {
        ssl:
          process.env.STAGE === 'prod' ? { rejectUnauthorized: false } : null,
      },
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true, // al cambiar entidades en codigo se cambian en la DB
    }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'public') }),
    TopicsModule,
    UsersModule,
  ],
})
export class AppModule {}
