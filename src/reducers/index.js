import authReducer from './auth';
import corporateReducer from './corporate';
import crisisReducer from './crisis';
import dashboardReducer from './dashboard';
import landingReducer from './landing';
import navigationReducer from './navigation';

/**
 * App reducer
 * @param {Object} [state={}]
 * @param {Object} action
 * @returns {Object}
 */
function mainReducer(state = {}, action) {
    return {
        auth: authReducer(state.auth, action),
        dashboard: dashboardReducer(state.dashboard, action),
        corporate: corporateReducer(state.corporate, action),
        crisis: crisisReducer(state.crisis, action),
        landing: landingReducer(state.landing, action),
        navigation: navigationReducer(state.navigation, action)
    };
}

export default mainReducer;
