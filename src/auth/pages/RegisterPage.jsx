import { AuthLayout } from "../layout/AuthLayout";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { useState } from "react";


const formData = {
    email: '',
    password: '',
    displayName: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'The email is not valid.'],
    password: [(value) => value.length >= 6, 'The password must have at least 6 charcters.'],
    displayName: [(value) => value.length >= 1, 'The name is required.'],
}

export const RegisterPage = () => {

    const [formSubmited, setFormSubmited] = useState(false);
    
    const { 
        formState, 
        displayName, 
        email, 
        password, 
        onInputChange,

        isFormValid,
        displayNameValid,
        emailValid,
        passwordValid,
    } = useForm( formData, formValidations );

    console.log(displayNameValid);

    const onSubmit = (event) =>{

        event.preventDefault();

        setFormSubmited(true);
        console.log(formState);

        if(!isFormValid) return;

    }

    return (
            <AuthLayout title="Create account">
                <h1>FormValid { isFormValid ? 'Valid' : 'Incorrecto' }</h1>
                <form onSubmit={ onSubmit }>
                    <Grid container>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Name"
                                type="text"
                                placeholder="Name"
                                fullWidth
                                name="displayName"
                                value= { displayName }
                                onChange={ onInputChange }
                                error={ !!displayNameValid && formSubmited }
                                helperText={ displayNameValid } 
                            />
                        </Grid>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="E-mail"
                                type="email"
                                placeholder="email@email.com"
                                fullWidth
                                name="email"
                                value= { email }
                                onChange={ onInputChange }
                                error={ !!emailValid && formSubmited }
                                helperText={ emailValid } 
                            />
                        </Grid>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Password"
                                type="password"
                                placeholder="Password"
                                fullWidth
                                name="password"
                                value= { password }
                                onChange={ onInputChange }
                                error={ !!passwordValid && formSubmited }
                                helperText={ passwordValid } 
                            />
                        </Grid>
                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button type="submit" variant="contained" fullWidth>Create account</Button>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button variant="contained" fullWidth>
                                    <Google />
                                    <Typography sx={{ ml: 1 }}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                            <Grid container direction="row" justifyContent="end">
                                <Typography sx={{ mr: 1 }}>Do you already have an account?</Typography>
                                <Link component={ RouterLink } color='inherit' to="/auth/login">
                                    Login
                                </Link>
                            </Grid>
                    </Grid>
                </form>
            </AuthLayout>
    );
    
}
