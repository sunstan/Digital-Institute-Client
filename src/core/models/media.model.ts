export interface MediaModel {
    readonly id: number;
    readonly name: string;
    readonly alternativeText: string;
    readonly caption: string;
    readonly width: number;
    readonly height: number;
    readonly url?: string;
    readonly formats: {
        readonly thumbnail: mediaFormat;
        readonly large: mediaFormat;
        readonly medium: mediaFormat;
        readonly small: mediaFormat;
    };
    readonly hash: string;
    readonly ext: string;
    readonly mime: string;
    readonly size: string;
    readonly provider: string;
    readonly created_at: Date;
    readonly updated_at: Date;
}

interface mediaFormat {
    readonly name: string;
    readonly hash: string;
    readonly ext: string;
    readonly mime: string,
    readonly width: number;
    readonly height: number;
    readonly size: number;
    readonly path: string;
    readonly url: string;
}