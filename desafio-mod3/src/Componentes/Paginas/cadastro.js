import React from 'react';
import {Card, TextField, Typography, Button} from '@material-ui/core';
import './styles.css';
import useStyles from './style';

function Cadastro(){
    const classes = useStyles();

    return(
        <div className="container">
            <Card className={classes.card}>
                <Typography variant="h4" component="h2">Cadastro</Typography>
                <div className={classes.columns}>
                    <TextField label="Seu Nome" />
                    <TextField label="Nome da loja" />
                    <TextField label="E-mail" />
                    <TextField label="Senha" />
                    <TextField label="Repita a senha" />
                </div>
                <Button className={classes.button} variant="contained" color="primary">Criar conta</Button>
                <Typography variant="p" component="p">Já possui cadastro? ACESSE</Typography>
            </Card>
        </div>
    )
};

export default Cadastro;