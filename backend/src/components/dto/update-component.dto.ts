import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsObject, IsOptional, IsString } from 'class-validator';

export class UpdateComponentDto {
  @ApiPropertyOptional({ example: 'hero' })
  @IsString()
  @IsOptional()
  key?: string;

  @ApiPropertyOptional({ example: 'Hero Section' })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({ type: 'object', example: { headline: 'IBN', subtitle: 'Engineering' } })
  @IsObject()
  @IsOptional()
  data?: Record<string, unknown>;
}
