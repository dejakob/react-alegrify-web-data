import authEffects from './auth';
import corporateEffects from './corporate';
import dashboardEffects from './dashboard';
import navigationEffects from './navigation';

export default {
    ...authEffects,
    ...corporateEffects,
    ...dashboardEffects,
    ...navigationEffects
};
