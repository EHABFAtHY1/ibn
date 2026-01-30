import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';

export class CreateComponentDto {
  @ApiProperty({ example: 'hero' })
  @IsString()
  key: string;

  @ApiProperty({ example: 'Hero Section' })
  @IsString()
  title: string;

  @ApiProperty({ type: 'object', example: { headline: 'IBN', subtitle: 'Engineering' } })
  @IsObject()
  data: Record<string, unknown>;
}
