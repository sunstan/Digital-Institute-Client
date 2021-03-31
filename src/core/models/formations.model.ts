import {GeneralRichListItemModel, GeneralSectionModel} from './general.model';
import {MediaModel} from './media.model';

export interface FormationsModel {
    readonly head: GeneralSectionModel;
}

export interface FormationModel {
    readonly id: number;
    readonly slug: string;
    readonly title: string;
    readonly badge: string;
    readonly summary: string;
    readonly content: string;
    readonly image: MediaModel;
    readonly sidebar: FormationSidebarModel;
}

export interface FormationSidebarModel {
    readonly items: GeneralRichListItemModel[];
}