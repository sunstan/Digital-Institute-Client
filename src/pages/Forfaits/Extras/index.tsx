import {GeneralIllustratedRichListItemModel} from '../../../core/models/general.model';
import {ForfaitsExtrasModel} from '../../../core/models/forfaits.model';
import {environment} from '../../../core/environments/environment';
import Container from '../../../components/Container';
import Break from '../../../components/Break';
import {ReactSVG} from 'react-svg';

interface Props {
    readonly extras: ForfaitsExtrasModel;
}

const Extras = ({extras}: Props): JSX.Element => {
    return (
        <div className='flex flex-col justify-center lg:min-h-screen-2/3 border-gray-200 border-t'>
            <Break/>
            <Container>
                <h2 className='text-center'>{extras.title}</h2>
                <Break/>
                <div className='grid gap-6 md:gap-16 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        extras?.items?.length > 0 &&
                        extras.items.map((item: GeneralIllustratedRichListItemModel) =>
                            <div key={item.id} className='flex flex-col items-center gap-2'>
                                <ReactSVG className='h-16 fill-current text-orange-500'
                                          src={environment.host_api + item.icon.url}/>
                                <h4 className='text-center mt-6'>{item.title}</h4>
                                <p className='text-center '>{item.content}</p>
                            </div>
                        )
                    }
                </div>
            </Container>
            <Break/>
        </div>
    );
};

export default Extras;