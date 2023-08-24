export default ({ env }) => {
  return {
    connection: {
      client: 'postgres',
      connection: {
        connectionString: env('DATABASE_URL', ''),
        ssl: env.bool(true),
      },
      pool: { min: 0, max: 10 },
      acquireConnectionTimeout: 60000,
    },
  };
};
