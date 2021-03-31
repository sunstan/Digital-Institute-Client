import {ExpertiseModel} from '../../../core/models/expertises.model';
import {environment} from '../../../core/environments/environment';
import List from '../../../components/List';
import {ReactSVG} from 'react-svg';

interface Props {
    readonly expertise: ExpertiseModel;
}

const Card = ({expertise}: Props): JSX.Element => {
    return (
        <div className='flex flex-col justify-between
            border-t-2 border-orange-500 bg-white shadow p-6 lg:p-10 group rounded'>
            <ReactSVG className='h-16 fill-current text-orange-500' src={environment.host_api + expertise.icon.url}/>
            <h4 className='mt-10'>{expertise.title}</h4>
            <p className='mt-2 mb-6'>{expertise.content}</p>
            <List items={expertise.items} className='flex-grow'/>
        </div>
    );
};

export default Card;