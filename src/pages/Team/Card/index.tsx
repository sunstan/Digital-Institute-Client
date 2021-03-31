import {TeamPersonModel} from '../../../core/models/team.model';
import Image from '../../../components/Image';

interface Props {
    readonly person: TeamPersonModel;
}

const Card = ({person}: Props): JSX.Element => {
    return (
        <div className='relative bg-white shadow flex flex-col group rounded overflow-hidden group'>
            <div className='absolute aspect-w-1 aspect-h-1 w-full left-0 top-0 z-10 bg-blue-500 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity'>
                <div className='absolute w-full h-full flex items-center text-sm text-white leading-relaxed italic p-6 lg:p-10 md:text-base'>{person.content}</div>
            </div>
            <div className='relative flex aspect-w-1 aspect-h-1 overflow-hidden'>
                <Image media={person.image} className='object-cover w-full h-full transform group-hover:scale-110 transition-transform'/>
            </div>
            <div className='relative flex flex-col p-6 lg:p-10'>
                <h4 className='text-center'>{person.name}</h4>
                <div className='text-center text-sm text-gray-500 mt-1'>{person.job}</div>
            </div>
        </div>
    );
};

export default Card;