import { useState } from 'react';
import {InputAdornment, IconButton, Input, InputLabel, FormControl} from '@material-ui/core';
import {Visibility, VisibilityOff} from '@material-ui/icons';

function InputSenha(props){ 
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    return(
        <FormControl>
            <InputLabel htmlFor={props.id}>{props.label}</InputLabel>
            <Input 
                id={props.id}
                type={senhaVisivel ? "text" : "password"}
                error={props.error}
                {... props.register()}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setSenhaVisivel(!senhaVisivel)}
                        >
                            {senhaVisivel ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                } 
                />
        </FormControl>
    )
};

export default InputSenha;