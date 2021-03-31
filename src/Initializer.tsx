import {PATCH_CONFIG} from './core/store/configuration/configuration.actions';
import {environment} from './core/environments/environment';
import {useEffect, useState} from 'react';
import Loader from './components/Loader';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import Error from './components/Error';

const Initializer = ({children}: any): JSX.Element => {

    const dispatch = useDispatch();
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        axios
            .get(environment.host_api + '/configuration')
            .then(({data}) => dispatch({type: PATCH_CONFIG, payload: data}))
            .catch(() => setError(true))
            .finally(() => setReady(true));
    }, [dispatch]);

    if (error) return <div className='flex items-center justify-center h-screen'>
        <Error message='Une erreur est survenue.'/>
    </div>;

    if (!ready) return <div className='flex items-center justify-center h-screen'>
        <Loader/>
    </div>;

    return <div className='flex flex-col justify-between min-h-screen'>{ready && children}</div>;
};

export default Initializer;