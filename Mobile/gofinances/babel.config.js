module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    puglins: ["inline-dotenv"],
  };
};
