import { AuthLayout } from "../layout/AuthLayout";
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth";
import { Google } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";


export const LoginPage = () => {

    const dispatch = useDispatch();
    
    const { status, errorMessage } = useSelector(state => state.auth);

    const { email, password, onInputChange } = useForm({
        email: 'ignacio.moises.arteaga.pelcast@correo.com',
        password: 'pass123'
    });

    const isAuthenticating = useMemo(() => status === 'checking', [status]);

    const onSubmit = ( event ) => {
        event.preventDefault();
        dispatch(startLoginWithEmailPassword({ email, password }));
    }

    const onGoogleSignIn = () =>{
        dispatch(startGoogleSignIn());
    }

    return (

            <AuthLayout title="Login">
                <form 
                    onSubmit={ onSubmit } 
                    className="animate__animated animate__fadeIn animate__faster"
                >
                    <Grid container>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="E-mail"
                                type="email"
                                placeholder="email@email.com"
                                fullWidth
                                name="email"
                                value={ email }
                                onChange={ onInputChange }
                            />
                        </Grid>
                        <Grid item xs={ 12 } sx={{ mt: 2 }}>
                            <TextField
                                label="Password"
                                type="password"
                                placeholder="Password"
                                fullWidth
                                name="password"
                                value={ password }
                                onChange={ onInputChange }
                            />
                        </Grid>
                        <Grid 
                            container
                            display={ !!errorMessage ? '' : 'none' }
                            sx={{ mt:1}}
                        >
                            <Grid 
                                item 
                                xs={ 12 }
                                >
                                <Alert severity="error">{ errorMessage }</Alert>
                            </Grid>
                        </Grid>
                        <Grid container spacing={ 2 } sx={{ mb: 2, mt: 1 }}>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button 
                                    disabled= { isAuthenticating }
                                    type="submit" 
                                    variant="contained" 
                                    fullWidth>Login</Button>
                            </Grid>
                            <Grid item xs={ 12 } sm={ 6 }>
                                <Button 
                                    disabled= { isAuthenticating }
                                    variant="contained" 
                                    fullWidth 
                                    onClick={ onGoogleSignIn }>
                                    <Google />
                                    <Typography sx={{ ml: 1 }}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                            <Grid container direction="row" justifyContent="end">
                                <Link component={ RouterLink } color='inherit' to="/auth/register">
                                    Don't have an account?
                                </Link>
                            </Grid>
                    </Grid>
                </form>
            </AuthLayout>
    );
}
