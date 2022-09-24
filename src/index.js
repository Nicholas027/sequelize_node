import app from "./app.js";
import { sequelize } from "./database/database.js";
import "dotenv/config";

async function main() {
  try {
    await sequelize.sync({ alter: true });
    await sequelize.authenticate();
    console.log(
      "================== Conexion a Postgres exitosa ✔ ==================="
    );
    app.listen(3000, () => {
      console.log("Sever running on 3000");
    });
  } catch (error) {
    console.log("Connection database error: " + error);
  }
}

main();
