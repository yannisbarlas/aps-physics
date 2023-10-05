const path = require('path');

module.exports = {
  pubsweet: {
    components: [path.resolve(__dirname, './components/ping.js')],
  },
  'pubsweet-server': {
    host: 'localhost',
    port: 3000,
    secret: 'NOT_A_SECRET',
    db: {
      user: 'postgres',
      host: 'localhost',
      database: 'test',
      password: 'postgres',
      port: 5432,
    },
  },
  teams: {
    global: {},
    nonGlobal: {},
  },
  authsome: {
    mode: path.resolve(__dirname, './authsome.js'),
  },
  // dbManager: {
  //   username: 'admin',
  //   password: 'password',
  //   email: 'admin@example.com',
  //   admin: true,
  //   clobber: true,
  // },
};
