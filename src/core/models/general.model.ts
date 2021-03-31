import {MediaModel} from './media.model';

export interface GeneralListItemModel {
    readonly id: number;
    readonly title: string;
}

export interface GeneralRichListItemModel {
    readonly id: number;
    readonly title: string;
    readonly content: string;
}

export interface GeneralIllustratedRichListItemModel {
    readonly id: number;
    readonly icon: MediaModel;
    readonly title: string;
    readonly content: string;
}

export interface GeneralSectionModel {
    readonly id: number;
    readonly reverse: boolean;
    readonly title: string;
    readonly badge: string;
    readonly content: string;
    readonly image: MediaModel;
}