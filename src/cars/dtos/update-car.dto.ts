/**
 * Data Transfer Object - DTO
 * Es una clase que crea un objeto plano que me sirve para tranferir data/información entre diferentes piezas/componentes de mi aplicación
 * No son interfaces porque los dtos me van a servir para hacer validaciones de la data (que estoy esperando recibir) y esas validaciones no pueden realizarse con un interfaz
 */

import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto{
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id?: string;
    
    @IsString()
    @IsOptional()
    readonly brand?: string;

    @IsString()
    @IsOptional()
    readonly model?: string;
}