import {ConfigurationState} from '../../core/store/configuration/configuration.selectors';
import {environment} from '../../core/environments/environment';
import Container from '../../components/Container';
import ClickOut from '../../directives/ClickOut';
import {Link, NavLink} from 'react-router-dom';
import Button from '../../components/Button';
import {useSelector} from 'react-redux';
import React, {useState} from 'react';
import {ReactSVG} from 'react-svg';
import './style.scss';

const Header = (): JSX.Element => {

    const [navBar, setNavBar] = useState(false);
    const configurationState = useSelector(ConfigurationState);

    const toggleNavBar = () => setNavBar(state => !state);

    return (
        <div className='z-20 top-0 sticky bg-white shadow-sm'>

            <Container className='h-14 lg:h-20 flex items-center justify-between gap-10'>

                <Link to='/'>
                    <ReactSVG beforeInjection={(svg: SVGElement | {[p: string]: any}) => svg.classList.add('w-44')}
                              className='object-cover pt-1 w-full h-full fill-current text-blue-500'
                              src={environment.host_api + configurationState.logo?.url}/>
                </Link>

                <div className='hidden flex-grow lg:flex items-center justify-end gap-10'>

                    <NavLink to='/equipe' activeClassName='active' className='header-nav-item'>Equipe</NavLink>
                    <NavLink to='/expertises' activeClassName='active' className='header-nav-item'>Expertises</NavLink>
                    <NavLink to='/forfaits' activeClassName='active' className='header-nav-item'>Forfaits</NavLink>
                    <NavLink to='/formations' activeClassName='active' className='header-nav-item'>Formations</NavLink>
                    <NavLink to='/actualites' activeClassName='active' className='header-nav-item'>Actualités</NavLink>
                    <Button sm secondary link='/contact'>Contact</Button>

                </div>

                <div onClick={toggleNavBar}
                     className='block lg:hidden flex items-center justify-center h-10 text-gray-400 material-icons
                     cursor-pointer hover:text-blue-500 transition-colors'>
                    menu
                </div>

                {
                    navBar &&
                    <div
                        className='fixed lg:hidden top-0 left-0 z-40 w-full h-screen bg-gray-900 bg-opacity-80 flex justify-end'>

                        <ClickOut onClickOut={toggleNavBar}
                                  className='bg-white max-w-sm w-5/6 min-h-screen flex flex-col justify-between'>

                            <div className='h-16 px-6 flex items-center justify-end'>

                                <div onClick={toggleNavBar}
                                     className='block lg:hidden flex items-center justify-center h-10 text-gray-400 material-icons
                                     cursor-pointer hover:text-blue-500 transition-colors'>
                                    close
                                </div>
                            </div>

                            <div className='flex-grow flex flex-col justify-center'>

                                <NavLink
                                    exact
                                    to='/'
                                    onClick={toggleNavBar}
                                    activeClassName='active'
                                    className='header-navbar-item'>
                                    Accueil
                                </NavLink>

                                <NavLink
                                    exact
                                    to='/equipe'
                                    onClick={toggleNavBar}
                                    activeClassName='active'
                                    className='header-navbar-item'>
                                    Equipe
                                </NavLink>

                                <NavLink
                                    exact
                                    to='/expertises'
                                    onClick={toggleNavBar}
                                    activeClassName='active'
                                    className='header-navbar-item'>
                                    Expertises
                                </NavLink>

                                <NavLink
                                    exact
                                    to='/forfaits'
                                    onClick={toggleNavBar}
                                    activeClassName='active'
                                    className='header-navbar-item'>
                                    Forfaits
                                </NavLink>

                                <NavLink
                                    to='/formations'
                                    onClick={toggleNavBar}
                                    activeClassName='active'
                                    className='header-navbar-item'>
                                    Formations
                                </NavLink>

                                <NavLink
                                    to='/actualites'
                                    onClick={toggleNavBar}
                                    activeClassName='active'
                                    className='header-navbar-item'>
                                    Actualités
                                </NavLink>

                            </div>

                            <div className='p-6' onClick={toggleNavBar}>
                                <Button secondary className='w-full' link='/contact'>Contact</Button>
                            </div>

                            <div className='bg-orange-500 p-6 flex flex-col gap-4'>

                                {
                                    configurationState.phone &&
                                    <a href={'tel:' + configurationState.phone.replace(/\s/g, '')}
                                       className='flex items-center justify-center gap-2'>
                                        <div className='material-icons text-xl -ml-4 text-white'>phone</div>
                                        <div className='font-medium text-white'>{configurationState.phone}</div>
                                    </a>
                                }

                            </div>

                        </ClickOut>

                    </div>
                }

            </Container>
        </div>
    );
};

export default Header;