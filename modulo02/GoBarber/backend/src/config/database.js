module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    // Criação de tabelas em underscore
    underscored: true,
    underscoredAll: true,
  },
};
