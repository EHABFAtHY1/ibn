import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { Component, ComponentSchema } from './component.schema';
import { ComponentsController } from './components.controller';
import { ComponentsService } from './components.service';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Component.name, schema: ComponentSchema }]),
  ],
  controllers: [ComponentsController],
  providers: [ComponentsService],
})
export class ComponentsModule {}
