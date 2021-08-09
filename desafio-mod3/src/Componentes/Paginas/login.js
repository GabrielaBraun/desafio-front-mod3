import React from 'react';
import {Button, Card, TextField, Typography} from '@material-ui/core';
import './styles.css';
import useStyles from './style';
import InputSenha from '../InputSenha';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function Login(){
    const classes = useStyles();
    const history = useHistory();
    const { handleSubmit, register, formState: {errors} } = useForm();

    async function logar(data){

        const resposta = await fetch('http://localhost:3000/login', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });

        if(resposta.ok){
            return history.push('/produtos');
        }

        console.log("Erro");
    };

    return(
        <div className="container" onSubmit={handleSubmit(logar)}>
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
                <Typography variant="h6" component="p">Primeira vez aqui? <a href="/cadastro"> CRIE UMA CONTA</a></Typography>
            </Card>
        </div>
    )
};

export default Login;