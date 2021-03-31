import {GeneralSectionModel} from './general.model';
import {MediaModel} from './media.model';

export interface ArticlesModel {
    readonly head: GeneralSectionModel;
}

export interface ArticleModel {
    readonly id: number;
    readonly title: string;
    readonly slug: string;
    readonly summary: string;
    readonly image: MediaModel;
    readonly content: string;
    readonly published_at: Date;
}