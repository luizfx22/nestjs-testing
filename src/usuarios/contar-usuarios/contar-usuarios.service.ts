import { Injectable } from "@nestjs/common";
import { Interval } from "@nestjs/schedule";
import { InjectModel } from "@nestjs/sequelize";
import { Usuario } from "../entities/usuario.entity";

@Injectable()
export class ContarUsuariosService {
  constructor(
    @InjectModel(Usuario)
    private userModel: typeof Usuario,
  ) {}

  @Interval(5000)
  async countUsuarios() {
    console.log("MANO!?");
  }
}
