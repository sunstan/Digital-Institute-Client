import {environment} from '../../core/environments/environment';
import Placeholder from '../../assets/images/placeholder.png';
import {MediaModel} from '../../core/models/media.model';
import {useEffect, useState} from 'react';
import {isEmpty} from 'lodash';

type ImageSize =
    'original' |
    'large' |
    'medium' |
    'small' |
    'thumbnail';

interface Props {
    readonly alt?: string;
    readonly size?: ImageSize;
    readonly media: MediaModel;
    readonly className?: string;
}

const Image = ({media, size = 'medium', alt, className}: Props): JSX.Element => {

    const [status, setStatus] = useState<number>();

    console.log(media);

    const url = media.formats && isEmpty(media.formats) && (media.formats as any)[size]
        ? environment.host_api + (media.formats as any)[size].url
        : environment.host_api + media.url;

    useEffect(() => {
        fetch(url, {method: 'HEAD'})
            .then(({status}: any) => setStatus(status))
            .catch(() => setStatus(400));
    }, [url]);

    return <img alt={alt} className={className} src={status && status === 200 ? url : Placeholder}/>;
};

export default Image;