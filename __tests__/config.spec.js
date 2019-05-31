import ACTION_NAMES from '../src/config/action-names'; 
import QUESTIONS from '../src/config/questions.json';

beforeAll(() => {
    window.localStorage.setItem('app_state', JSON.stringify({ __localStorageTest: true }));
    Object.defineProperty(global.window, 'server_app_state', { value: { __configTest: true } });
});

describe('ACTION_NAMES', () => {
    Object
        .keys(ACTION_NAMES)
        .forEach(actionName => {
            it(`${actionName} constant should have value ${actionName}`, () => {
                expect(ACTION_NAMES[actionName]).toBe(actionName);
            });
        });
});

describe('APP_DATA', () => {
    it('should use constants from app_state localStorage', () => {
        const APP_DATA = require('../src/config/app-data').default;
        expect(APP_DATA.__localStorageTest).toBe(true);
    });

    it('should use constants from window.server_app_state', () => {
        const APP_DATA = require('../src/config/app-data').default;
        expect(APP_DATA.__configTest).toBe(true);
    });
});

describe('QUESTIONS', () => {
    it('each question should have id and answers', () => {
        QUESTIONS
            .every(question => {
                const hasId = typeof question.id === 'string' && question.id.length > 0;
                const isIdUnique = QUESTIONS.filter(q => q.id === question.id).length === 1;
                const hasAnswers = Array.isArray(question.answers);

                return (
                    hasId && isIdUnique && hasAnswers
                );
            })
    });

    it('all answers should have unique id', () => {
        let answers = [];

        QUESTIONS.forEach(question => answers = [ ...answers, ...question.answers ]);

        expect(
            answers.every(answer =>
                answers.filter(a => a.id === answer.id).length === 1
            )
        ).toBe(true);
    });
});