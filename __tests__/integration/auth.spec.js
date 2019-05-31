import * as authActions from '../../src/actions/auth';
import store from '../../src/services/store';

jest.mock('../../src/services/api-fetch', () => ({
    async postAnonymous(url, params) {
        if (['/api/auth/login', '/api/auth/register'].indexOf(url) > -1) {
            if (params.userName === 'user1') {
                return { token: 'TOKEN' };
            }
    
            throw {
                validationErrors: { user_name: 'INVALID' }
            };
        }
    }
}));

describe('Auth integration', () => {
    beforeEach(() => {
        store.dispatch(
            authActions.logout()
        );
    });
    
    describe('login', () => {
        it('should set busy', () => {
            store.dispatch(
                authActions.login('user1', 'password')
            );
            expect(store.getState().auth.busy).toBe(true);
        });

        it('should get a token', async () => {
            store.dispatch(
                authActions.login('user1', 'password')
            );
            await new Promise(resolve => setTimeout(resolve, 40));
            expect(store.getState().auth.token).toBe('TOKEN');
            expect(store.getState().auth.busy).toBe(false);
        });

        it('should not have a token, when registering non-existing user', async () => {
            store.dispatch(
                authActions.login('user2', 'password')
            );
            await new Promise(resolve => setTimeout(resolve, 40));
            expect(store.getState().auth.token).toBe(null);
            expect(store.getState().auth.validationErrors.user_name).toBe('INVALID');
        });
    });

    describe('signup', () => {
        it('should set busy', () => {
            store.dispatch(
                authActions.signup('user3', 'user3@alegrify.com', 'djzjzefzejfkejhrf', true)
            );
            expect(store.getState().auth.busy).toBe(true);
        });

        it('should get a token', async () => {
            store.dispatch(
                authActions.signup('user1', 'user1@alegrify.com', 'djzjzefzejfkejhrf', true)
            );
            await new Promise(resolve => setTimeout(resolve, 40));
            expect(store.getState().auth.token).toBe('TOKEN');
            expect(store.getState().auth.busy).toBe(false);
        });

        it('should not have a token, when registering non-existing user', async () => {
            store.dispatch(
                authActions.signup('user3', 'user3@alegrify.com', 'djzjzefzejfkejhrf', true)
            );
            await new Promise(resolve => setTimeout(resolve, 40));
            expect(store.getState().auth.token).toBe(null);
            expect(store.getState().auth.validationErrors.user_name).toBe('INVALID');
        });
    });
});