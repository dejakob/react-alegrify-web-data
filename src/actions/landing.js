import ACTION_NAMES from '../config/action-names';

const {
    LANDING_CHANGE_MOOD
} = ACTION_NAMES;

/**
 * Change mood on landing page
 * @param {Number} moodScore
 * @returns {Object}
 */
function changeMood(moodScore) {
    return {
        type: LANDING_CHANGE_MOOD,
        moodScore
    };
}

export {
    changeMood
};