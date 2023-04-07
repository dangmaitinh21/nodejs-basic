const viewEngine = (app) => {
  app.use("view engine", "ejs");
  app.use("views", "./src/views");
};
