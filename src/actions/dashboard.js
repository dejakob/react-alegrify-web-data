import ACTION_NAMES from '../config/action-names';

const {
    DASHBOARD_ADD_THOUGHT,
    DASHBOARD_ADD_REFLECTION,
    DASHBOARD_ANSWER_QUESTION
} = ACTION_NAMES;

/**
 * Add thought
 * @param {String} thought 
 * @param {String} thoughtMoodType 
 * @param {String} thoughtMoodScore 
 * @param {String} thoughtEvent 
 * @returns {Object}
 */
function addThought(thought, thoughtMoodType, thoughtMoodScore, thoughtEvent) {
    return {
        type: DASHBOARD_ADD_THOUGHT,
        thought,
        thoughtMoodType,
        thoughtMoodScore,
        thoughtEvent
    };
}

/**
 * Add reflection
 * @param {String} thoughtId 
 * @param {String} reflection 
 * @param {String} reflectionScore
 * @returns {Object} 
 */
function addReflection(thoughtId, reflection, reflectionScore) {
    return {
        type: DASHBOARD_ADD_REFLECTION,
        thoughtId,
        reflection,
        reflectionScore
    };
}

/**
 * Answer question
 * @param {String} questionId 
 * @param {String} answer
 * @returns {Object} 
 */
function answerQuestion(questionId, answer) {
    return {
        type: DASHBOARD_ANSWER_QUESTION,
        questionId,
        answer
    };
}

export {
    addThought,
    addReflection,
    answerQuestion
};
