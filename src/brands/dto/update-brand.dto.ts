/* import { PartialType } from '@nestjs/mapped-types';
//PartialType es para que todos los atributos de esta clase sean opcionales
import { CreateBrandDto } from './create-brand.dto';

export class UpdateBrandDto extends PartialType(CreateBrandDto) {} */

import { IsString, MinLength } from "class-validator";

export class UpdateBrandDto {
    @IsString()
    @MinLength(1)
    name:string;
}


