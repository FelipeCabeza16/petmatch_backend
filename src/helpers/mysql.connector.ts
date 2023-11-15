const { Sequelize } = require('sequelize');


import * as dotenv from "dotenv";


dotenv.config({ });

const sequelize = new Sequelize(process.env['DATABASE_NAME'], process.env['DATABASE_USERNAME'], process.env['DATABASE_PASSWORD'], {
  host: process.env['DATABASE_URL'],
  dialect: 'mysql',
  timezone: '-05:00',
});

/**
 * generates pool connection to be used throughout the app
 */
export const init = async () => {
  try {
    await sequelize.authenticate();
    console.debug('MySql Connected');
  } catch (error) {
    console.error('[mysql.connector][init][Error]: ', error);
    throw new Error('failed to initialized pool');
  }
};

export default sequelize;
