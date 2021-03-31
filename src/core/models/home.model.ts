import {GeneralRichListItemModel, GeneralSectionModel} from './general.model';
import {MediaModel} from './media.model';

export interface HomeModel {
    readonly banner: HomeBannerModel;
    readonly sections: GeneralSectionModel[];
    readonly testimonials: HomeTestimonialsModel;
    readonly numbers: GeneralRichListItemModel[];
}

export interface HomeBannerModel {
    readonly title: string;
    readonly content: string;
    readonly action: string;
    readonly link: string;
}

export interface HomeTestimonialsModel {
    readonly title: string;
    readonly image: MediaModel;
    readonly items: HomeTestimonialsItemModel[];
}

export interface HomeTestimonialsItemModel {
    readonly id: number;
    readonly content: string;
    readonly name: string;
    readonly company: string;
}