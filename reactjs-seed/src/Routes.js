import React, { Suspense, lazy } from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

/* loader component for Suspense*/
import PageLoader from './components/Common/PageLoader';
import Base from './components/Layout/Base';
import BasePage from './components/Layout/BasePage';
// import BaseHorizontal from './components/Layout/BaseHorizontal';

/* Used to render a lazy component with react-router */
const waitFor = Tag => props => <Tag {...props}/>;

const SingleView = lazy(() => import('./components/SingleView/SingleView'));
import Indicadores from './components/SubMenu/SubMenu';
import { Login } from './components/Login';
import { Home as MobileHome } from './components/Mobile/Home';
import { Login as MobileLogin } from './components/Mobile/Login';
import { Inicio as MobileInicio } from './components/Mobile/Inicio';
import { EtiquetaScanner } from './components/Mobile/EtiquetaScanner';
// List of routes that uses the page layout
// listed here to Switch between layouts
// depending on the current pathname

// Teclas em Capslock nao sao aceitas!!!
const listofPages = [
    '/login',
    '/mobile/home',
    '/mobile/login',
    '/mobile/inicio',
    '/mobile/etiquetascanner'
];

const Routes = ({ location }) => {
    const currentKey = location.pathname.split('/')[1] || '/';
    const timeout = { enter: 500, exit: 500 };

    // Animations supported
    //      'rag-fadeIn'
    //      'rag-fadeInRight'
    //      'rag-fadeInLeft'

    const animationName = 'rag-fadeIn'

    // O path do Route precisa ser identico ao nome listado no listofPages!!!
    if(listofPages.indexOf(location.pathname) > -1) {
        return (
            <BasePage>
                <Suspense fallback={<PageLoader/>}>
                    <Switch location={location}>
                        <Route path="/login" component={waitFor(Login)}/>
                        <Route path="/mobile/home" component={waitFor(MobileHome)}/>
                        <Route path="/mobile/login" component={waitFor(MobileLogin)}/>
                        <Route path="/mobile/inicio" component={waitFor(MobileInicio)}/>
                        <Route path="/mobile/etiquetascanner" component={waitFor(EtiquetaScanner)}/>
                    </Switch>
                </Suspense>
            </BasePage>
        )
    }
    else {
        return (
            // Layout component wrapper
            // Use <BaseHorizontal> to change layout
            <Base>
              <TransitionGroup>
                <CSSTransition key={currentKey} timeout={timeout} classNames={animationName} exit={false}>
                    <div>
                        <Suspense fallback={<PageLoader/>}>
                            <Switch location={location}>
                                <Route path="/singleview" component={waitFor(SingleView)}/>
                                <Route path="/submenu" component={waitFor(Indicadores)}/>
                                {/* <Redirect to="/login"/> */}
                            </Switch>
                        </Suspense>
                    </div>
                </CSSTransition>
              </TransitionGroup>
            </Base>
        )
    }
}

export default withRouter(Routes);
