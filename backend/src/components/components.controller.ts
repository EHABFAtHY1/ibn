import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CreateComponentDto } from './dto/create-component.dto';
import { UpdateComponentDto } from './dto/update-component.dto';
import { ComponentsService } from './components.service';

@ApiTags('components')
@Controller('components')
export class ComponentsController {
  constructor(private readonly componentsService: ComponentsService) {}

  @Post()
  @ApiBearerAuth()
  @ApiCreatedResponse({ description: 'Create a component entry.' })
  @UseGuards(JwtAuthGuard)
  create(@Body() dto: CreateComponentDto) {
    return this.componentsService.create(dto);
  }

  @Get()
  @ApiOkResponse({ description: 'List all components.' })
  findAll() {
    return this.componentsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ description: 'Get a single component by id.' })
  findOne(@Param('id') id: string) {
    return this.componentsService.findOne(id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Update a component.' })
  @UseGuards(JwtAuthGuard)
  update(@Param('id') id: string, @Body() dto: UpdateComponentDto) {
    return this.componentsService.update(id, dto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @ApiOkResponse({ description: 'Delete a component.' })
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string) {
    return this.componentsService.remove(id);
  }
}
