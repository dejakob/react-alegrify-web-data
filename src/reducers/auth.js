import ACTION_NAMES from '../config/action-names';
import APP_DATA from '../config/app-data';

const {
    AUTH_LOGIN,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILED,

    AUTH_SIGNUP,
    AUTH_SIGNUP_SUCCESS,
    AUTH_SIGNUP_FAILED,

    AUTH_LOGOUT,
    AUTH_LOGOUT_SUCCESS,
    AUTH_LOGOUT_FAILED,

    AUTH_ACCEPT_CONNECTION,
    AUTH_ACCEPT_CONNECTION_SUCCESS,
    AUTH_ACCEPT_CONNECTION_FAILED,

    AUTH_REJECT_CONNECTION,
    AUTH_REJECT_CONNECTION_SUCCESS,
    AUTH_REJECT_CONNECTION_FAILED,

    AUTH_REMOVE_CONNECTION,
    AUTH_REMOVE_CONNECTION_SUCCESS,
    AUTH_REMOVE_CONNECTION_FAILED,

    AUTH_CHANGE_PROFILE,
    AUTH_CHANGE_PROFILE_SUCCESS,
    AUTH_CHANGE_PROFILE_FAILED,

    AUTH_CHANGE_PROFILE_DETAIL,
    AUTH_CHANGE_PROFILE_DETAIL_SUCCESS,
    AUTH_CHANGE_PROFILE_DETAIL_FAILED,

    NAVIGATE_SUCCESS
} = ACTION_NAMES;

const INITIAL_STATE = {
    token: APP_DATA.token || null,
    user: APP_DATA.user || null,
    validationErrors: null,
    busy: false
};

/**
 * Auth reducer
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action
 * @returns {Object}
 */
function authReducer(state = INITIAL_STATE, action) {
    const { type } = action;

    switch (type) {
        case AUTH_LOGIN:
            return {
                ...state,
                busy: true,
                validationErrors: null
            };
        case AUTH_LOGIN_SUCCESS:
            return {
                ...state,
                token: action.token,
                busy: false
            };
        case AUTH_LOGIN_FAILED:
            return {
                ...state,
                busy: false,
                validationErrors: action.errorData && action.errorData.validationErrors
            };

        case AUTH_SIGNUP:
            return {
                ...state,
                busy: true,
                validationErrors: null
            };
        case AUTH_SIGNUP_SUCCESS:
            return {
                ...state,
                token: action.token,
                busy: false
            };
        case AUTH_SIGNUP_FAILED:
            return {
                ...state,
                busy: false,
                validationErrors: action.errorData && action.errorData.validationErrors
            };

        case AUTH_ACCEPT_CONNECTION:
            return {
                ...state,
                busy: true
            };
        case AUTH_ACCEPT_CONNECTION_SUCCESS:
            return {
                ...state,
                busy: false,
                user: {
                    ...state.user,
                    consults: [
                        action.consult,
                        ...(state.user.consults || [])
                    ]
                },
                connectionProposals: (state.connectionProposals || []).filter(connection =>
                    connection._id !== action.connectionId
                )
            };
        case AUTH_ACCEPT_CONNECTION_FAILED:
            return {
                ...state,
                busy: false
            };

        case AUTH_REJECT_CONNECTION:
            return {
                ...state,
                busy: true
            };
        case AUTH_REJECT_CONNECTION_SUCCESS:
            return {
                ...state,
                busy: false,
                connectionProposals: (state.connectionProposals || []).filter(connection =>
                    connection._id !== action.connectionId
                )
            };
        case AUTH_REJECT_CONNECTION_FAILED:
            return {
                ...state,
                busy: false
            };

        case AUTH_REMOVE_CONNECTION:
            return {
                ...state,
                busy: true
            };
        case AUTH_REMOVE_CONNECTION_SUCCESS:
            return {
                ...state,
                busy: false,
                user: {
                    ...state.user,
                    consults: (state.user.consults || []).filter(consult =>
                        consult._id !== action.consultId    
                    )
                }
            };
        case AUTH_REMOVE_CONNECTION_FAILED:
            return {
                ...state,
                busy: false
            };

        case AUTH_LOGOUT:
            return {
                ...state,
                busy: true
            };
        case AUTH_LOGOUT_SUCCESS:
            return {
                ...state,
                busy: true,
                token: null
            };
        case AUTH_LOGOUT_FAILED:
            return {
                ...state,
                busy: false
            };

        case AUTH_CHANGE_PROFILE:
            return {
                ...state,
                busy: true
            };
        case AUTH_CHANGE_PROFILE_SUCCESS:
            return {
                ...state,
                busy: false,
                user: {
                    ...state.user,
                    firstName: action.firstName,
                    lastName: action.lastName,
                    email: action.email,
                }
            };
        case AUTH_CHANGE_PROFILE_FAILED:
            return {
                ...state,
                busy: false
            };

        case AUTH_CHANGE_PROFILE_DETAIL:
            return {
                ...state,
                busy: true
            };
        case AUTH_CHANGE_PROFILE_DETAIL_SUCCESS:
            return {
                ...state,
                busy: false,
                user: {
                    [action.detail]: action.value
                }
            };
        case AUTH_CHANGE_PROFILE_DETAIL_FAILED:
            return {
                ...state,
                busy: true
            };

        case NAVIGATE_SUCCESS:
            if (action.state && action.state.user) {
                return {
                    ...state,
                    user: action.state.user
                };
            }

            return state;
    }

    return state;
}

export default authReducer;
