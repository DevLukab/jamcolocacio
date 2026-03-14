'use strict';

/**
 * kitchen-style router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::kitchen-style.kitchen-style');
