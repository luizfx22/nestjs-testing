import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Usuario } from "./entities/usuario.entity";

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario)
    private userModel: typeof Usuario,
  ) {}

  create(createUsuarioDto: any) {
    return this.userModel.create(createUsuarioDto);
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: number) {
    return this.userModel.findByPk(id);
  }

  update(id: number, updateUsuarioDto: any) {
    return this.userModel.update(updateUsuarioDto, { where: { id } });
  }

  remove(id: number) {
    return this.userModel.destroy({ where: { id } });
  }
}
