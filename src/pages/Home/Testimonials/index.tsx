import {HomeTestimonialsModel} from '../../../core/models/home.model';
import Container from '../../../components/Container';
import Button from '../../../components/Button';
import Image from '../../../components/Image';
import React, {useState} from 'react';

interface Props {
    readonly testimonials: HomeTestimonialsModel;
}

const Testimonials = ({testimonials}: Props): JSX.Element => {

    const [testimonial, setTestimonial] = useState(0);
    const incrementTestimonial = () => setTestimonial(t => t >= testimonials.items.length - 1 ? 0 : t + 1);
    const decrementTestimonial = () => setTestimonial(t => t <= 0 ? testimonials.items.length - 1 : t - 1);

    return (
        <div className='bg-gray-900 h-120 flex items-center justify-center overflow-hidden'>

            <Image media={testimonials.image} className='fixed inset-0 z-0 object-cover w-full h-full opacity-20'/>

            <Container className='z-10 flex items-center justify-center gap-10 flex-col lg:flex-row'>

                <div className='flex-grow max-w-3xl'>
                    <div className='text-center text-white text-sm leading-relaxed italic md:text-lg lg:text-xl'>{testimonials.items[testimonial].content}</div>
                    <div className='text-center text-white text-sm leading-relaxed mt-10'>{testimonials.items[testimonial].name}</div>
                    <div className='text-center text-white text-sm leading-relaxed'>{testimonials.items[testimonial].company}</div>
                </div>

                <Container className='w-auto flex justify-between gap-2 lg:absolute lg:w-full'>
                    <Button sm white secondary onClick={decrementTestimonial}>
                        <span className='material-icons mt-1'>west</span>
                    </Button>
                    <Button sm white secondary onClick={incrementTestimonial}>
                        <span className='material-icons mt-1'>east</span>
                    </Button>
                </Container>

            </Container>

        </div>
    );
};

export default Testimonials;