const ENV = {
  APP_NAME: process.env.APP_NAME,
  PORT: process.env.PORT,
  SQL_TYPE: (process.env.SQL_TYPE ?? "mysql") as "mysql",
  RDS_HOSTNAME: process.env.RDS_HOSTNAME,
  RDS_PORT: process.env.RDS_PORT,
  RDS_DB_NAME: process.env.RDS_DB_NAME,
  RDS_USERNAME: process.env.RDS_USERNAME,
  RDS_PASSWORD: process.env.RDS_PASSWORD
};

export const initializeEnvVariables = () => new Promise((resolve) => {
  ENV.APP_NAME = process.env.APP_NAME;
  ENV.PORT = process.env.PORT;
  ENV.SQL_TYPE = (process.env.SQL_TYPE ?? "mysql") as "mysql";
  ENV.RDS_HOSTNAME = process.env.RDS_HOSTNAME;
  ENV.RDS_PORT = process.env.RDS_PORT;
  ENV.RDS_DB_NAME = process.env.RDS_DB_NAME;
  ENV.RDS_USERNAME = process.env.RDS_USERNAME;
  ENV.RDS_PASSWORD = process.env.RDS_PASSWORD;

  resolve("done");
});


export default ENV;