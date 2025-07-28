'use strict';

/**
 * peque router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::peque.peque');
