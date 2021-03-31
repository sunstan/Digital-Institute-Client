import {MediaModel} from './media.model';

export interface ConfigurationModel {
    readonly address: string;
    readonly phone: string;
    readonly legals: string;
    readonly logo: MediaModel;
    readonly socials: ConfigurationSocialsModel;
    readonly notFound: ConfigurationNotFoundModel;
}

interface ConfigurationSocialsModel {
    readonly facebook: string;
    readonly linkedin: string;
    readonly instagram: string;
    readonly youtube: string;
    readonly twitter: string;
}

interface ConfigurationNotFoundModel {
    readonly image: MediaModel;
    readonly title: string;
    readonly content: string;
    readonly action: string;
    readonly link: string;
}