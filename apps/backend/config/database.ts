export default ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL', ''),
        host: env('PGHOST', 'localhost'),
        port: env.int('PGPORT', 5432),
        database: env('PGDATABASE', 'postgres'),
        user: env('PGUSER', 'postgres'),
        password: env('PGPASSWORD', 'password'),
        ssl: env.bool(true),
      },
      pool: { min: 0, max: 10 },
      acquireConnectionTimeout: 60000,
    },
  };
};
