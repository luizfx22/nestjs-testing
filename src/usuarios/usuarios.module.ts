import { Module } from "@nestjs/common";
import { UsuariosService } from "./usuarios.service";
import { UsuariosController } from "./usuarios.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { Usuario } from "./entities/usuario.entity";
import { ContarUsuariosService } from "./contar-usuarios/contar-usuarios.service";

@Module({
  imports: [SequelizeModule.forFeature([Usuario])],
  controllers: [UsuariosController],
  providers: [UsuariosService, ContarUsuariosService],
})
export class UsuariosModule {}
