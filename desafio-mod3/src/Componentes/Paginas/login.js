import React from 'react';
import {Button, Card, TextField, Typography} from '@material-ui/core';
import './styles.css';
import useStyles from './style';
import InputSenha from '../InputSenha';

function Login(){
    const classes = useStyles();
    return(
        <div className="container">
            <Card className={classes.card}>
                <Typography variant="h4" component="h2">Login</Typography>
                    <div className={classes.columns}>
                        <TextField label="E-mail" />
                        <InputSenha label="Senha" id="senha" />           
                    </div>
                <Button className={classes.button} variant="contained" color="primary">Entrar</Button>
                <Typography variant="p" component="p">Primeira vez aqui? CRIE UMA CONTA</Typography>
            </Card>
        </div>
    )
};

export default Login;