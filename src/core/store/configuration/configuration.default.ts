import {ConfigurationModel} from '../../models/configuration.model';

export const configurationDefault: ConfigurationModel = {
    logo: null,
    phone: null,
    address: null,
    legals: null,
    socials: {
        facebook: null,
        linkedin: null,
        instagram: null,
        youtube: null,
        twitter: null,
    },
    notFound: {
        image: null,
        title: null,
        content: null,
        action: null,
        link: null,
    },
};
