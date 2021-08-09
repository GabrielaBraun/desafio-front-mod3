import React, { useState } from 'react';
import {Card, TextField, Typography, Button, Backdrop, CircularProgress, Snackbar} from '@material-ui/core';
import {Alert} from '@material-ui/lab';
import './styles.css';
import useStyles from './style';
import InputSenha from '../InputSenha';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

function Cadastro(){
    const classes = useStyles();
    const history = useHistory();
    const { handleSubmit, register, formState: {errors}, setError } = useForm();
    const [estaCarregando, setEstaCarregando] = useState(false);
    const [erro, setErro] = useState('');

    async function cadastrar(data){
        if(data.senha !== data.senharepetida){
            setError('senha', {type: 'validate'}, {shouldFocus: true});
            setError('senharepetida', {type: 'validate'}, {shouldFocus: true});
            return;
        }

        setErro('')
        setEstaCarregando(true);

        const resposta = await fetch('http://localhost:3000/cadastro', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json'
            }
        });

        setEstaCarregando(false);

        if(resposta.ok){
            return history.push('/');
        }

        const dados = await resposta.json();

        setErro(dados);
    };

    return(
        <form className="container" onSubmit={handleSubmit(cadastrar)}>
            <Card className={classes.card}>
                <Typography variant="h4" component="h2">Cadastro</Typography>
                    <div className={classes.columns}>
                        <TextField 
                            label="Seu Nome" 
                            error={!!errors.nome}
                            {...register('nome', {required: true})}
                        />
                        <TextField 
                            label="Nome da loja" 
                            error={!!errors.nome_loja}
                            {...register('nome_loja', {required: true})}
                        />
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
                        <InputSenha 
                            label="Repita a senha" 
                            id="senharepetida" 
                            error={!!errors.senharepetida}
                            register={() => register('senharepetida', {required: true})}
                        />           
                    </div>
                <Button type="submit" className={classes.button} variant="contained" color="primary">Criar conta</Button>
                <Backdrop className={classes.backdrop} open={estaCarregando} >
                    <CircularProgress color="inherit" />
                </Backdrop>
                <Snackbar open={!!erro} autoHideDuration={6000}>
                    <Alert severity="error">
                        {erro}
                    </Alert>
                </Snackbar>
                <Typography variant="h6" component="p">Já possui cadastro? <a href="/">ACESSE</a></Typography>
            </Card>
        </form>
    )
};

export default Cadastro;