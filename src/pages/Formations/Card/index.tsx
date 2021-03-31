import {FormationModel} from '../../../core/models/formations.model';
import Image from '../../../components/Image';
import {Link} from 'react-router-dom';
import React from 'react';
import Badge from '../../../components/Badge';

interface Props {
    readonly formation: FormationModel;
}

const Card = ({formation}: Props): JSX.Element => {
    return (
        <Link to={`/formations/${formation.id}/${formation.slug}`} className='bg-white shadow flex flex-col group rounded overflow-hidden hover:shadow-lg transition-shadow'>
            <div className='relative aspect-w-16 aspect-h-9 flex overflow-hidden'>
                <Image media={formation.image} className='object-cover w-full h-full transform group-hover:scale-110 transition-transform'/>
            </div>
            <div className='flex-grow flex flex-col gap-4 justify-between p-6 lg:p-10'>
                <Badge children={formation.badge}/>
                <h3 children={formation.title}/>
                <p children={formation.summary} className='flex-grow'/>
                <div className='mt-10 font-medium text-gray-400 group-hover:text-blue-500 transition-colors' children='Découvrir'/>
            </div>
        </Link>
    );
};

export default Card;