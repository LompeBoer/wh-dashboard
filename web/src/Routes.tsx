
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Main from './components/Main'
import Liquidations from './components/Liquidations'

function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/dashboard' component={Dashboard} />
            <Route exact path='/liquidations' component={Liquidations} />
        </Switch>
    );
}

export default Routes;