import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Expertises from './pages/Expertises';
import Formations from './pages/Formations';
import Formation from './pages/Formation';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Forfaits from './pages/Forfaits';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Contact from './pages/Contact';
import Top from './containers/Top';
import Home from './pages/Home';
import Team from './pages/Team';
import 'dayjs/locale/fr';
import NotFound from './pages/NotFound';

function App() {
    return (
        <BrowserRouter>
            <Top/>
            <Header/>
            <div className='flex-grow flex flex-col'>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/equipe' component={Team}/>
                    <Route exact path='/expertises' component={Expertises}/>
                    <Route exact path='/forfaits' component={Forfaits}/>
                    <Route exact path='/formations/:id/:slug' component={Formation}/>
                    <Route exact path='/formations' component={Formations}/>
                    <Route exact path='/actualites/:id/:slug' component={Article}/>
                    <Route exact path='/actualites' component={Articles}/>
                    <Route exact path='/contact' component={Contact}/>
                    <Route exact path='/erreur-404' component={NotFound}/>
                    <Redirect from={'*'} to={'/erreur-404'}/>
                </Switch>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
