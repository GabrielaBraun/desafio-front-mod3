import React, { useState } from 'react';
import {Button, Card, TextField, Typography, Backdrop, CircularProgress, Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import './styles.css';
import useStyles from './style';
import InputSenha from '../InputSenha';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function Login(){
    const classes = useStyles();
    const history = useHistory();
    const { handleSubmit, register, formState: {errors} } = useForm();
    const [estaCarregando, setEstaCarregando] = useState(false);
    const [erro, setErro] = useState('');

    async function logar(data){

        setErro('');
        setEstaCarregando(true);

        const resposta = await fetch('http://localhost:3001/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });

        setEstaCarregando(false);

        if(resposta.ok){
            return history.push('/produtos');
        }

        const dados = await resposta.json();

        setErro(dados);
    };

    return(
        <form className="container" onSubmit={handleSubmit(logar)}>
            <Card className={classes.card}>
                <Typography variant="h4" component="h2">Login</Typography>
                    <div className={classes.columns}>
                        <TextField 
                            label="E-mail"
                            error={!!errors.email} 
                            {...register('email', {required: true})}
                        />
                        <InputSenha 
                            label="Senha" 
                            id="senha" 
                            error={!!errors.senha}
                            register={() => register('senha', {required: true})}
                        />   
                    </div>
                <Button type="submit" className={classes.button} variant="contained" color="primary">Entrar</Button>
                <Backdrop className={classes.backdrop} open={estaCarregando} >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Snackbar open={!!erro} autoHideDuration={6000}>
                    <Alert severity="error">
                        {erro}
                    </Alert>
                </Snackbar>
                <Typography variant="h6" component="p">Primeira vez aqui? <a href="/cadastro"> CRIE UMA CONTA</a></Typography>
            </Card>
        </form>
    )
};

export default Login;