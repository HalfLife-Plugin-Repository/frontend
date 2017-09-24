/**
 * @file Api Constants
 */

const NODE_ENV = process.env.NODE_ENV;

export const API_URL = (NODE_ENV === 'production') ?
    ('http://production-url.com') : ((NODE_ENV === 'staging') ? 'http://staging-url.com' : 'http://localhost:8001');