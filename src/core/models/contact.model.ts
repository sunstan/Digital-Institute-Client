import {MediaModel} from './media.model';

export interface ContactModel {
    readonly lat: number;
    readonly lng: number;
    readonly gray: boolean;
    readonly icon: MediaModel;
    readonly title: string;
    readonly name: string;
    readonly phone: string;
    readonly address: string;
    readonly zipCode: string;
    readonly city: string;
    readonly email: string;
}