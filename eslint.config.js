import fs from "fs";
import globals from "globals";
import pluginJs from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import eslintConfigPrettier from "eslint-config-prettier";

const globalAutoImport = JSON.parse(
  fs.readFileSync("./auto-import.json", "utf-8"),
);

export default [
  { files: ["**/*.{js,mjs,cjs,vue}"] },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, ...globalAutoImport },
    },
  },
  pluginJs.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  eslintConfigPrettier,
];
