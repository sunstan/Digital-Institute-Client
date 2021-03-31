import TextareaAutosize from 'react-textarea-autosize';
import Success from '../../../components/Success';
import Button from '../../../components/Button';
import Error from '../../../components/Error';
import {useForm} from 'react-hook-form';
import {isEmpty} from 'lodash';
import {useState} from 'react';
import axios from 'axios';
import {environment} from '../../../core/environments/environment';
import Fade from '../../../components/Fade';
import Loader from '../../../components/Loader';

interface Data {
    readonly firstname: string;
    readonly lastname: string;
    readonly email: string;
    readonly phone: string;
    readonly message: string;
}

const Form = (): JSX.Element => {

    const {register, handleSubmit, formState, reset} = useForm({mode: 'onChange'});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const {isValid, errors} = formState;

    const onSubmit = (data: Data) => {
        setError(false);
        setIsSubmitting(true);
        axios
            .post(environment.host_api + '/contact-page/send', data)
            .then(({data}) => {
                setSuccess(data.success);
                setTimeout(() => setSuccess(false), 5000);
                reset();
            })
            .catch(() => setError(true))
            .finally(() => setIsSubmitting(false));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 md:w-8/12'>

            <Fade visible={success} className='md:col-span-2'><Success
                message="Votre message a bien été envoyé."/></Fade>

            <Fade visible={error} className='md:col-span-2'><Error
                message="Une erreur s'est produite pendant l'envoi de votre message. Merci de réessayer."/></Fade>

            <Fade visible={errors && !isEmpty(errors)} className='md:col-span-2'><Error
                message='Tous les champs sont requis'/></Fade>

            <input type='text' name='firstname' ref={register({required: true})}
                   className='w-full bg-white border border-gray-200 h-12 px-4 rounded' placeholder='Prénom'/>

            <input type='text' name='lastname' ref={register({required: true})}
                   className='w-full bg-white border border-gray-200 h-12 px-4 rounded' placeholder='Nom'/>

            <input type='text' name='email' ref={register({required: true})}
                   className='w-full bg-white border border-gray-200 h-12 px-4 rounded' placeholder='Adresse email'/>

            <input type='text' name='phone' ref={register({required: true})}
                   className='w-full bg-white border border-gray-200 h-12 px-4 rounded' placeholder='Téléphone'/>

            <TextareaAutosize name='message' ref={register({required: true})} minRows={5}
                              className='bg-white border border-gray-200 md:col-span-2 h-32 p-4 resize-none rounded'
                              placeholder='Message'/>

            <div className='md:col-span-2'>
                <Button disabled={isSubmitting || !isValid} className='w-full md:w-auto'>
                    {isSubmitting ? <Loader/> : 'Envoyer'}
                </Button>
            </div>

        </form>
    );
};

export default Form;
