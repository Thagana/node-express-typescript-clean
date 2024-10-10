import Logger from "../../../utils/logger";
import { Sequelize } from '@sequelize/core';
import { SqliteDialect } from '@sequelize/sqlite3';

// export class Database {
//   sequelize: Sequelize;
//   constructor(private readonly DATABASE_URI: string) {
//     this.sequelize = new Sequelize(this.DATABASE_URI, {
//       dialectOptions: {
//         ssl: {
//           require: true,
//           rejectUnauthorized: false,
//         },
//       },
//     });
//   }

//   async authenticate() {
//     this.sequelize
//       ?.authenticate()
//       .then(() => {
//         Logger.info("Connected To The Database");
//       })
//       .catch((error) => Logger.error(error));
//   }

//   async close() {
//     if (this.sequelize) {
//       this.sequelize.close();
//     }
//   }
// }

export class Database {
  sequelize: Sequelize;
  constructor() {
    this.sequelize = new Sequelize({
        dialect: SqliteDialect,
        storage: 'sequelize.sqlite',
    });
  }

  async close() {
    if (this.sequelize) {
      this.sequelize.close();
    }
  }
}