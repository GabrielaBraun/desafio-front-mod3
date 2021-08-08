import React from 'react';
import {Card, TextField, Typography, Button, InputAdornment, IconButton, Input, InputLabel, FormControl} from '@material-ui/core';
import {VisibilityOff} from '@material-ui/icons';
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
                    <FormControl>
                        <InputLabel htmlFor="senha">Senha</InputLabel>
                        <Input 
                            id="senha"
                            type="password"
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                >
                                    <VisibilityOff />
                                    </IconButton>
                                </InputAdornment>
                            } 
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="senharepetida">Repita a Senha</InputLabel>
                        <Input 
                            id="senharepetida"
                            type="password"
                            endAdornment={
                                <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                >
                                    <VisibilityOff />
                                    </IconButton>
                                </InputAdornment>
                            } 
                        />
                    </FormControl>
                </div>
                <Button className={classes.button} variant="contained" color="primary">Criar conta</Button>
                <Typography variant="p" component="p">Já possui cadastro? ACESSE</Typography>
            </Card>
        </div>
    )
};

export default Cadastro;