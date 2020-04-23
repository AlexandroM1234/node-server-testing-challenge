module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/people.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  // db connection for testing
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./data/people.db3",
    },
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
