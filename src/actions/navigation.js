import ACTION_NAMES from '../config/action-names';

const {
    NAVIGATE
} = ACTION_NAMES;

/**
 * Navigate
 * @param {String} path
 * @returns {Object}
 */
function navigate(path) {
    return {
        type: NAVIGATE,
        path
    };
}

export {
    navigate
};