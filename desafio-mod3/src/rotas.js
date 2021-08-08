import React from 'react';
import { 
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Cadastro from './Componentes/Paginas/cadastro';
import Login from './Componentes/Paginas/login';

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path="/cadastro" component={Cadastro} />
                <Route path="/" component={Login} />
            </Switch>
        </Router>
    );
};

export default Routes;