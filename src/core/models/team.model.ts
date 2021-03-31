import {GeneralSectionModel} from './general.model';
import {MediaModel} from './media.model';

export interface TeamModel {
    readonly head: GeneralSectionModel;
    readonly persons: TeamPersonModel[];
}

export interface TeamPersonModel {
    readonly id: number;
    readonly name: string;
    readonly job: string;
    readonly content: string;
    readonly image: MediaModel;
}