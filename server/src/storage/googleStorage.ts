const { Storage } = require("@google-cloud/storage");

export const storage = new Storage({
  keyFilename: "./service-account.json",
});