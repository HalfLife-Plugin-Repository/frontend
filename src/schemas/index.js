import {schema} from 'normalizr';

export const userSchema = new schema.Entity('users');

export const pluginSchema = new schema.Entity('plugins', {
    author: userSchema,
    collaborators: [userSchema]
}, {
    idAttribute: 'slug'
});

export const pluginsSchema = new schema.Array(pluginSchema);