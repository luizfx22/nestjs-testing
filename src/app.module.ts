import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { join } from "path";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsuariosModule } from "./usuarios/usuarios.module";

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: "sqlite",
      host: join(__dirname, "dbo.sqlite"),
      autoLoadModels: true,
      synchronize: true,
    }),
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
