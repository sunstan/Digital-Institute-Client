import ConfigurationReducer from './configuration/configuration.reducer';
import {combineReducers, AnyAction} from 'redux';
import {StoreModel} from './store.model';

export const RESET_STORE = 'RESET_STORE';

const reducers = combineReducers({
    configuration: ConfigurationReducer,
});

export const storeReducer = (state: StoreModel, action: AnyAction) => {
    if (action.type === RESET_STORE) {
        state = undefined;
    }

    return reducers(state, action);
};
