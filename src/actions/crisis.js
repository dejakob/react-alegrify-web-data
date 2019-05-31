import ACTION_NAMES from '../config/action-names';

const {
    CRISIS_CHANGE_COUNTRY
} = ACTION_NAMES;

/**
 * Change country for crisis resources
 * @param {String} country 
 * @returns {Object}
 */
function changeCountry(country) {
    return {
        type: CRISIS_CHANGE_COUNTRY,
        country
    };
}

export {
    changeCountry
};