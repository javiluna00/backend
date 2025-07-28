'use strict';

/**
 * peque service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::peque.peque');
