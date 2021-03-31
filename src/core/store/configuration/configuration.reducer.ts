import {ConfigurationModel} from '../../models/configuration.model';
import {configurationDefault} from './configuration.default';
import {PATCH_CONFIG} from './configuration.actions';
import {AnyAction} from 'redux';

const ConfigurationReducer = (state: ConfigurationModel = configurationDefault, action: AnyAction) => {
    switch (action.type) {
        case PATCH_CONFIG: {
            return {...state, ...action.payload};
        }
        default:
            return state;
    }
};

export default ConfigurationReducer;
