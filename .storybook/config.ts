if (process.env.NODE_ENV === "test") {
  require("./config-test");
} else {
  require("./config-dev");
}
