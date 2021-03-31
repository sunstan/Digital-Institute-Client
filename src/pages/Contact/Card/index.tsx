import {environment} from '../../../core/environments/environment';
import {MediaModel} from '../../../core/models/media.model';
import {ReactSVG} from 'react-svg';

interface Props {
    readonly icon: MediaModel;
    readonly title: string;
    readonly name: string;
    readonly address: string;
    readonly zipCode: string;
    readonly city: string;
    readonly phone: string;
}

const Card = ({title, icon, name, address, zipCode, city, phone}: Props): JSX.Element => {
    return (
        <div className='flex flex-col justify-between border-t-2 border-orange-500 bg-white shadow p-6 lg:p-10 group rounded w-full md:max-w-xs'>
            <ReactSVG className='h-16 fill-current text-orange-500' src={environment.host_api + icon?.url}/>
            <h3 className='mt-10'>{title}</h3>
            <p className='flex-grow mt-4 mb-10'>
                {name}<br/>
                {address}<br/>
                {zipCode} {city}
            </p>
            <div className='text-orange-500 font-bold'>{phone}</div>
        </div>
    );
};

export default Card;