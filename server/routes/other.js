module.exports = (app) => {
    app.get("/", (req, res) => {
      const info = { api_version: '1.0.0' };
    //   if (nconf.get("BREATHER_ENV") !== "production") {
    //     Object.assign(info, {
    //       branch: nconf.get("GIT:branch"),
    //       commit: nconf.get("GIT:commit"),
    //     });
    //   }
      res.json(info);
    });
}