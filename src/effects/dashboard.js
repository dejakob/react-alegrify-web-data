import ACTION_NAMES from '../config/action-names';
import ApiFetch from '../services/api-fetch';

const {
    DASHBOARD_ADD_THOUGHT,
    DASHBOARD_ADD_REFLECTION,
    DASHBOARD_ANSWER_QUESTION,
} = ACTION_NAMES;

/**
 * Add thought
 * @param {Object} action 
 * @returns {Object}
 */
async function addThought(action) {
    const {
        thoughtMoodType,
        thoughtMoodScore,
        thoughtEvent
    } = action;
    const { moodId } = await ApiFetch.post('/api/mood', {
        my_mood: thoughtMoodScore,
        my_mood_type: thoughtMoodType,
        thouhgt_thought: action.thought,
        thought_event: thoughtEvent
    });
    const thought = {
        _id: moodId,
        moodType: thoughtMoodType,
        moodScore: thoughtMoodScore,
        thought: action.thought,
        event: action.thoughtEvent
    };

    return { thought };
}

/**
 * Add reflection to thought
 * @param {Object} action 
 * @returns {Object}
 */
async function addReflection(action) {
    const {
        thoughtId,
        reflectionScore
    } = action;
    const { moodReflectionId } = await ApiFetch.post('/api/mood/reflect', {
        mood_id: thoughtId,
        reflection: action.reflection,
        reliability: reflectionScore
    });
    const reflection = {
        _id: moodReflectionId,
        thoughtId,
        reflection,
        score: reflectionScore
    };

    return { reflection };
}

/**
 * Answer question
 * @param {Object} action 
 * @returns {Object}
 */
async function answerQuestion(action, dispatch) {
    const {
        questionId
    } = action;
    const { answerId } = await ApiFetch.post('/api/answer', {
        question_id: questionId,
        answer: action.answer
    });
    const answer = {
        _id: answerId,
        questionId,
        answer: action.answer
    };

    return { answer };
}

export default {
    [DASHBOARD_ADD_THOUGHT]: addThought,
    [DASHBOARD_ADD_REFLECTION]: addReflection,
    [DASHBOARD_ANSWER_QUESTION]: answerQuestion
};
