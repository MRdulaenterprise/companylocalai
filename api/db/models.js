const mongoose = require('mongoose');
const { createModels } = require('@company-local-ai/data-schemas');
const models = createModels(mongoose);

module.exports = { ...models };
