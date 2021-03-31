import {GeneralSectionModel} from '../../core/models/general.model';
import Container from '../../components/Container';
import Image from '../../components/Image';
import Badge from '../../components/Badge';
import Break from '../../components/Break';

interface Props {
    readonly section: GeneralSectionModel;
}

const Section = ({section}: Props): JSX.Element => {
    return (
        <div className='bg-white w-full z-10 relative flex flex-col justify-center lg:min-h-screen-2/3'>

            <Container className={'relative z-10 flex flex-col justify-center'}>
                <div className={'lg:max-w-lg xl:max-w-2xl flex flex-col items-start justify-center gap-4 '
                + (section.reverse ? 'self-end' : 'self-start')}>
                    <Break/>
                    <Badge children={section.badge} className='mb-4'/>
                    <h2 children={section.title}/>
                    <p children={section.content}/>
                    <Break/>
                </div>
            </Container>

            <div className={'top-0 flex w-full h-64 md:h-96 lg:absolute lg:h-full lg:w-2/5 z-0 '
            + (section.reverse ? 'left-0' : 'right-0')}>
                <svg className={'hidden z-10 lg:block absolute inset-y-0 h-full w-48 text-white transform '
                + (section.reverse ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2')}
                     fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <polygon points="50,0 100,0 50,100 0,100"/>
                </svg>
                <Image media={section.image} className='lg:absolute object-cover w-full h-full'/>
            </div>

        </div>
    );
};

export default Section;