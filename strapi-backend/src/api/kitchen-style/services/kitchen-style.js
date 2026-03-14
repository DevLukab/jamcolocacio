'use strict';

/**
 * kitchen-style service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kitchen-style.kitchen-style');
