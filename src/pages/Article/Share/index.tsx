import {environment} from '../../../core/environments/environment';
import {MediaModel} from '../../../core/models/media.model';
import * as rs from 'react-share';
import React from 'react';

interface Props {
    readonly url: string;
    readonly title: string;
    readonly summary: string;
    readonly image: MediaModel;
}

const Share = ({url, title, summary, image}: Props): JSX.Element =>

    <div className='flex justify-center gap-1 border-t-2 border-orange-500 bg-white shadow p-6 sm:gap-6 lg:p-10 group rounded'>

        <rs.FacebookShareButton url={url} quote={title}>
            <rs.FacebookIcon size={36} round/>
        </rs.FacebookShareButton>

        <rs.LinkedinShareButton url={url} title={title} summary={summary}>
            <rs.LinkedinIcon size={36} round/>
        </rs.LinkedinShareButton>

        <rs.PinterestShareButton url={url} media={environment.host_api + image.url} description={summary}>
            <rs.PinterestIcon size={36} round/>
        </rs.PinterestShareButton>

        <rs.TwitterShareButton url={url} title={title}>
            <rs.TwitterIcon size={36} round/>
        </rs.TwitterShareButton>

        <rs.WhatsappShareButton url={url} title={title}>
            <rs.WhatsappIcon size={36} round/>
        </rs.WhatsappShareButton>

    </div>

export default Share;