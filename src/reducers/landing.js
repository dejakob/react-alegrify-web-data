import ACTION_NAMES from '../config/action-names';

const {
    LANDING_CHANGE_MOOD
} = ACTION_NAMES;

const INITIAL_STATE = {
    moodScore: null
};

/**
 * Landing reducer
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action 
 * @returns {Object}
 */
function landingReducer(state = INITIAL_STATE, action) {
    const { type } = action;

    switch (type) {
        case LANDING_CHANGE_MOOD:
            return {
                ...state,
                moodScore: action.moodScore
            };
    }

    return state;
}

export default landingReducer;
