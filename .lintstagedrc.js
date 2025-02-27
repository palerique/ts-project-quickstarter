export default {
  "*": "prettier --ignore-unknown --write",
  "**/*.{json,yml,html,cjs,mjs,js,ts,tsx}": ["eslint --fix --max-warnings=0 --no-warn-ignored"],
};
