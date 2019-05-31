import actions from '../src/actions';

describe('actions', () => {
    describe('Each action should return an object', () => {
        const actionCollectionNames = Object.keys(actions);

        actionCollectionNames.forEach(collectionName => {
            const actionNames = Object.keys(actions[collectionName]);

            actionNames.forEach(actionName => {
                it(`Action creator ${collectionName}.${actionName} should return action object`, () => {
                    const action = actions[collectionName][actionName]();
                    expect(typeof action === 'object' && action !== null).toBe(true);
                    expect(typeof action.type === 'string' && action.type.length > 0).toBe(true);
                });
            });
        });
    });
});