import {GeneralIllustratedRichListItemModel, GeneralListItemModel, GeneralSectionModel} from './general.model';

export interface ForfaitsModel {
    readonly head: GeneralSectionModel;
    readonly plans: ForfaitsPlanModel[];
    readonly categories: ForfaitsCategoryModel[];
    readonly extras: ForfaitsExtrasModel;
}

export interface ForfaitsExtrasModel {
    readonly title: string;
    readonly items: GeneralIllustratedRichListItemModel[];
}

export interface ForfaitsPlanModel {
    readonly planId: number;
    readonly title: string;
    readonly payment: string;
}

export interface ForfaitsPriceModel {
    readonly planId: number;
    readonly amount: number;
}

export interface ForfaitsCategoryModel {
    readonly id: number;
    readonly title: string;
    readonly items: ForfaitModel[];
}

export interface ForfaitModel {
    readonly id: number;
    readonly title: number;
    readonly prices: ForfaitsPriceModel[];
    readonly items: GeneralListItemModel[];
    readonly action: string;
    readonly link: string;
}