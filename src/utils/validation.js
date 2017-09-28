/**
 * Form Validation utils
 */

export const required = (val) => val.length;
export const isEmail = (val) => {
    const re = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    return re.test(val);
};
export const minLength = (min) => (val) => val.length >= min;
export const maxLength = (max) => (val) => val.length <= max;