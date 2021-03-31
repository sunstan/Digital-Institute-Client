import {ConfigurationModel} from '../../models/configuration.model';

export const PATCH_CONFIG = 'PATCH_CONFIG';

export const patchConfig = (payload: ConfigurationModel) => ({
    type: PATCH_CONFIG,
    payload,
});
