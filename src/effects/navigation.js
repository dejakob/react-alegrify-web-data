import ACTION_NAMES from '../config/action-names';
import ApiFetch from '../services/api-fetch';

const {
    NAVIGATE
} = ACTION_NAMES;

/**
 * Navigate
 * @param {Object} action 
 * @returns {Object}
 */
async function navigate(action) {
    const { path } = action;
    const { state } = await ApiFetch.get(`/api/state${path}`);

    if (
        typeof window !== 'undefined' &&
        typeof window.scrollTo === 'function'
    ) {
        window.scrollTo(0, 0);
    }

    return { state };
}

export default {
    [NAVIGATE]: navigate
};
