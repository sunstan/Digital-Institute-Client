import {GeneralListItemModel, GeneralSectionModel} from './general.model';
import {MediaModel} from './media.model';

export interface ExpertisesModel {
    readonly head: GeneralSectionModel;
    readonly items: ExpertiseModel[]
}

export interface ExpertiseModel {
    readonly id: number;
    readonly title: string;
    readonly content: string;
    readonly icon: MediaModel;
    readonly items: GeneralListItemModel[];
}