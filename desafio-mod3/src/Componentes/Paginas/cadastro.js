import React from 'react';
import {Card, TextField, Typography, Button} from '@material-ui/core';
import './styles.css';
import useStyles from './style';
import InputSenha from '../InputSenha';
import {useForm} from 'react-hook-form';

function Cadastro(){
    const classes = useStyles();
    const { handleSubmit, register, formState: {errors}, setError } = useForm();

    function cadastrar(data){
        if(data.senha !== data.senharepetida){
            setError('senha', {type: 'validate'}, {shouldFocus: true});
            setError('senharepetida', {type: 'validate'}, {shouldFocus: true});
            return;
        }
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
                <Typography variant="h6" component="p">Já possui cadastro? ACESSE</Typography>
            </Card>
        </form>
    )
};

export default Cadastro;