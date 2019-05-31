"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _actionNames = _interopRequireDefault(require("../config/action-names"));

var _apiFetch = _interopRequireDefault(require("../services/api-fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  DASHBOARD_ADD_THOUGHT,
  DASHBOARD_ADD_REFLECTION,
  DASHBOARD_ANSWER_QUESTION
} = _actionNames.default;
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
  const {
    moodId
  } = await _apiFetch.default.post('/api/mood', {
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
  return {
    thought
  };
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
  const {
    moodReflectionId
  } = await _apiFetch.default.post('/api/mood/reflect', {
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
  return {
    reflection
  };
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
  const {
    answerId
  } = await _apiFetch.default.post('/api/answer', {
    question_id: questionId,
    answer: action.answer
  });
  const answer = {
    _id: answerId,
    questionId,
    answer: action.answer
  };
  return {
    answer
  };
}

var _default = {
  [DASHBOARD_ADD_THOUGHT]: addThought,
  [DASHBOARD_ADD_REFLECTION]: addReflection,
  [DASHBOARD_ANSWER_QUESTION]: answerQuestion
};
exports.default = _default;