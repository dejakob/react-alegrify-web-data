import ACTION_NAMES from '../config/action-names';
import APP_DATA from '../config/app-data';

const {
    CRISIS_CHANGE_COUNTRY,
    CRISIS_CHANGE_COUNTRY_SUCCESS,
    CRISIS_CHANGE_COUNTRY_FAILED,

    NAVIGATE_SUCCESS
} = ACTION_NAMES;

const INITIAL_STATE = {
    crisisResources: APP_DATA.crisisResources || [],
    selectedCountry: APP_DATA.selectedCountry || 'be',
    busy: false
};

/**
 * Crisis reducer
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action 
 * @returns {Object}
 */
function crisisReducer(state = INITIAL_STATE, action) {
    const { type } = action;

    switch (type) {
        case CRISIS_CHANGE_COUNTRY:
            return {
                ...state,
                busy: true
            };
        case CRISIS_CHANGE_COUNTRY_SUCCESS:
            return {
                ...state,
                busy: false,
                country: action.country
            };
        case CRISIS_CHANGE_COUNTRY_FAILED:
            return {
                ...state,
                busy: falser
            };

        case NAVIGATE_SUCCESS:
            if (action.state && action.state.crisisResources) {
                return {
                    ...state,
                    crisisResources: action.state.crisisResources
                };
            }
    }

    return state;
}

export default crisisReducer;