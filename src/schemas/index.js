import {schema} from 'normalizr';

const user = new schema.Entity('users');

export const plugin = new schema.Entity({
    author: user,
    collaborators: [user]
});