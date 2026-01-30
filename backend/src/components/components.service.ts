import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Component, ComponentDocument } from './component.schema';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';

@Injectable()
export class ComponentsService {
  constructor(
    @InjectModel(Component.name)
    private readonly componentModel: Model<ComponentDocument>,
  ) {}

  async create(dto: CreateComponentDto) {
    const exists = await this.componentModel.findOne({ key: dto.key }).lean();
    if (exists) {
      throw new BadRequestException('Component key already exists');
    }

    return this.componentModel.create(dto);
  }

  findAll() {
    return this.componentModel.find().sort({ createdAt: -1 }).lean();
  }

  async findOne(id: string) {
    const component = await this.componentModel.findById(id).lean();
    if (!component) {
      throw new NotFoundException('Component not found');
    }
    return component;
  }

  async update(id: string, dto: UpdateComponentDto) {
    if (dto.key) {
      const existing = await this.componentModel
        .findOne({ key: dto.key, _id: { $ne: id } })
        .lean();
      if (existing) {
        throw new BadRequestException('Component key already exists');
      }
    }

    const component = await this.componentModel
      .findByIdAndUpdate(id, dto, { new: true })
      .lean();
    if (!component) {
      throw new NotFoundException('Component not found');
    }
    return component;
  }

  async remove(id: string) {
    const component = await this.componentModel.findByIdAndDelete(id).lean();
    if (!component) {
      throw new NotFoundException('Component not found');
    }
    return component;
  }
}
