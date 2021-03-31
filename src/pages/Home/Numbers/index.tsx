import {GeneralRichListItemModel} from '../../../core/models/general.model';
import Container from '../../../components/Container';
import Break from '../../../components/Break';
import React from 'react';

interface Props {
    readonly numbers: GeneralRichListItemModel[];
}

const Numbers = ({numbers}: Props): JSX.Element => {
    return (
        <div className='bg-gray-900 border-t border-white border-opacity-30'>
            <Break/>
            <Container className='grid grid-cols-2 gap-6 md:flex md:justify-around'>
                {
                    numbers.map((item: GeneralRichListItemModel, i: number) =>
                        <div key={i} className='flex flex-col items-center gap-2'>
                            <div className='text-3xl font-semibold text-white md:text-4xl lg:text-5xl'>{item.title}</div>
                            <div className='text-sm font-medium text-white text-center'>{item.content}</div>
                        </div>
                    )
                }
            </Container>
            <Break/>
        </div>
    );
};

export default Numbers;