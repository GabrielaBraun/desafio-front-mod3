import React from 'react';
import {Card} from '@material-ui/core';
import './styles.css';
import useStyles from './style';

function Login(){
    const classes = useStyles();
    return(
        <div className="container">
            <Card className={classes.card}>
                <h1>Login</h1>
            </Card>
        </div>
    )
};

export default Login;