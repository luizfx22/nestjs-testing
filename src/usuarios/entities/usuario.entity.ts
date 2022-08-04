import { INTEGER, TEXT } from "sequelize";
import { Column, Table, Model } from "sequelize-typescript";

@Table({
  tableName: "usuarios",
})
export class Usuario extends Model {
  @Column({ allowNull: false, type: TEXT })
  nome: string;

  @Column({ allowNull: false, type: INTEGER })
  idade: number;
}
