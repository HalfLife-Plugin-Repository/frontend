import {schema} from 'normalizr';

export const userSchema = new schema.Entity('users');

export const versionSchema = new schema.Entity('versions');

export const pluginSchema = new schema.Entity('plugins', {
    author: userSchema,
    collaborators: [userSchema],
    versions: [versionSchema]
}, {
    idAttribute: 'slug'
});

export const pluginsSchema = new schema.Array(pluginSchema);