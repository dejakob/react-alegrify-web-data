import ACTION_NAMES from '../config/action-names';
import APP_DATA from '../config/app-data';

const {
    CORPORATE_ADD_ADMIN,
    CORPORATE_ADD_ADMIN_SUCCESS,
    CORPORATE_ADD_ADMIN_FAILED,

    CORPORATE_ADD_EMPLOYEE,
    CORPORATE_ADD_EMPLOYEE_SUCCESS,
    CORPORATE_ADD_EMPLOYEE_FAILED,

    CORPORATE_REMOVE_ADMIN,
    CORPORATE_REMOVE_ADMIN_SUCCESS,
    CORPORATE_REMOVE_ADMIN_FAILED,

    CORPORATE_REMOVE_EMPLOYEE,
    CORPORATE_REMOVE_EMPLOYEE_SUCCESS,
    CORPORATE_REMOVE_EMPLOYEE_FAILED,

    CORPORATE_REMOVE_PENDING_ADMIN,
    CORPORATE_REMOVE_PENDING_ADMIN_SUCCESS,
    CORPORATE_REMOVE_PENDING_ADMIN_FAILED,

    CORPORATE_REMOVE_PENDING_EMPLOYEE,
    CORPORATE_REMOVE_PENDING_EMPLOYEE_SUCCESS,
    CORPORATE_REMOVE_PENDING_EMPLOYEE_FAILED,

    CORPORATE_ADD_EVENT,
    CORPORATE_ADD_EVENT_SUCCESS,
    CORPORATE_ADD_EVENT_FAILED
} = ACTION_NAMES;

const INITIAL_STATE = {
    name: APP_DATA.name || '',
    events: APP_DATA.events || [],
    admins: APP_DATA.admins || [],
    employees: APP_DATA.employees || [],
    moods: APP_DATA.corporateMoods || [],
    busy: false
};

/**
 * Corporate reducer
 * @param {Object} [state=INITIAL_STATE]
 * @param {Object} action 
 * @returns {Object}
 */
function corporateReducer(state = INITIAL_STATE, action) {
    const { type } = action;

    switch (type) {
        case CORPORATE_ADD_ADMIN:
            return {
                ...state,
                busy: true
            };
        case CORPORATE_ADD_ADMIN_SUCCESS:
            return {
                ...state,
                busy: false,
                admins: [ action.admin, ...state.admins ]
            };
        case CORPORATE_ADD_ADMIN_FAILED:
            return {
                ...state,
                busy: false
            };

        case CORPORATE_ADD_EMPLOYEE:
            return {
                ...state,
                busy: true
            };
        case CORPORATE_ADD_EMPLOYEE_SUCCESS:
            return {
                ...state,
                busy: false,
                employees: [ action.employee, ...state.employees ]
            };
        case CORPORATE_ADD_EMPLOYEE_FAILED:
            return {
                ...state,
                busy: false
            };

        case CORPORATE_REMOVE_ADMIN:
            return {
                ...state,
                busy: false
            };
        case CORPORATE_REMOVE_ADMIN_SUCCESS:
            return {
                ...state,
                busy: false,
                admins: state.admins.filter(admin => admin._id !== action.adminId)
            };
        case CORPORATE_REMOVE_ADMIN_FAILED:
            return {
                ...state,
                busy: false
            };

        case CORPORATE_REMOVE_EMPLOYEE:
            return {
                ...state,
                busy: true
            };
        case CORPORATE_REMOVE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                busy: false,
                employees: state.employees.filter(employee => employee._id !== action.employeeId)
            };
        case CORPORATE_REMOVE_EMPLOYEE_FAILED:
            return {
                ...state,
                busy: false
            };
        
        case CORPORATE_REMOVE_PENDING_ADMIN:
            return {
                ...state,
                busy: true
            };
        case CORPORATE_REMOVE_PENDING_ADMIN_SUCCESS:
            return {
                ...state,
                busy: false,
                admins: state.admins.filter(admin => admin._id !== action.pendingAdminId)
            };
        case CORPORATE_REMOVE_PENDING_ADMIN_FAILED:
            return {
                ...state,
                busy: false
            };
        
        case CORPORATE_REMOVE_PENDING_EMPLOYEE:
            return {
                ...state,
                busy: true
            };
        case CORPORATE_REMOVE_PENDING_EMPLOYEE_SUCCESS:
            return {
                ...state,
                busy: false,
                employees: state.employees.filter(employee => employee._id !== employee.pendingAdminId)
            };
        case CORPORATE_REMOVE_PENDING_EMPLOYEE_FAILED:
            return {
                ...state,
                busy: false
            };

        case CORPORATE_ADD_EVENT:
            return {
                ...state,
                busy: true
            };
        case CORPORATE_ADD_EVENT_SUCCESS:
            return {
                ...state,
                busy: false,
                events: [ action.event, ...state.events ]
            };
        case CORPORATE_ADD_EVENT_FAILED:
            return {
                ...state,
                busy: false
            };
    }

    return state;
}

export default corporateReducer;
