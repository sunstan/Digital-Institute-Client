import {ArticleModel} from '../../../core/models/articles.model';
import Image from '../../../components/Image';
import {Link} from 'react-router-dom';
import React from 'react';
import dayjs from 'dayjs';
import Badge from '../../../components/Badge';

interface Props {
    readonly article: ArticleModel;
}

const NewsCard = ({article}: Props): JSX.Element => {
    return (
        <Link to={`/actualites/${article.id}/${article.slug}`}
              className='bg-white shadow flex flex-col group rounded overflow-hidden hover:shadow-lg transition-shadow'>
            <div className='relative aspect-w-16 aspect-h-9 flex overflow-hidden'>
                <Image media={article.image} className='object-cover w-full h-full transform group-hover:scale-110 transition-transform'/>
            </div>
            <div className='flex-grow flex flex-col gap-4 justify-between p-6 lg:p-10'>
                <Badge children={dayjs(article.published_at).locale('fr').format('DD MMMM YYYY')}/>
                <h3 className='flex-grow'>{article.title}</h3>
                <div className='mt-10 font-medium text-gray-400 group-hover:text-blue-500 transition-colors'>Lire la suite</div>
            </div>
        </Link>
    );
};

export default NewsCard;