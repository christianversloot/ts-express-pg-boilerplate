module.exports = {
  apps: [
      {
        env: {
          PORT: 80,
          POSTGRES_URL: "postgres://username@host:port/database-name?ssl=false",
        },
        name: "api",
        script: "./transpiled-app/backend.js",
        watch: true,
      },
  ],
};
