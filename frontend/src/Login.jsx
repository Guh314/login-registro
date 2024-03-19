import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

import { createRandomUser } from './generateUsers';

export default function Login(props) {
    const [form, setForm] = useState({
        email: '',
        senha: ''
    });

    const navigation = useNavigate();

    const useLogarUsuario = async (event) => {
        const get5users = async () => {
            try {
                const res = await axios.get("http://localhost:8080/get5users");
                return res;
            } catch (error) {
                console.log(error);
            }
        };

        const get5common_names = async() => {
            try {
                const res = await axios.get("http://localhost:8080/get5common_names");
                return res;
            } catch (error) {
                console.log(error);
            }
        }

        const get5largestPasswords = async() => {
            try {
                const res = await axios.get("http://localhost:8080/get5passwords");
                return res;
            } catch (error) {
                console.log(error);
            }
        }

        function setUsuarioSubmit(res) {
            const db_extra_info = [get5users(), get5common_names(), get5largestPasswords()];
            props.setdb_home_info(db_extra_info);
            props.setUsuario(res.data[0]);
            navigation('/homeUser');
        }

        event.preventDefault();

        try {
            const model = {
                email: form.email,
                senha: form.senha
            };

            const url = "http://localhost:8080/auth";

            const res = await axios.post(url, model);

            res.data[0] ? setUsuarioSubmit(res) : console.log(false);

        } catch (error) {
            if(error.code === 'ECONNABORTED') {
                console.log('Time out');
            } else {
                console.log('Error: ', error);
            }
        }
    }
    
    return (
        <Container maxWidth="xs" sx={{height: 1000}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper square={false} elevation={8} sx={{borderRadius: 5, marginTop: 20, width: 500, height: 600}}>
                    <Typography variant="h3" sx={{ textAlign: "center", marginTop: 10}}>
                        Login
                    </Typography>
                    <Box sx={{marginLeft: 3, marginRight: 3}}>
                        <TextField 
                            margin="normal" 
                            fullWidth id="email" 
                            label="Entre seu Email" 
                            sx={{marginTop: 8, textAlign: "center", color: "#ffffff"}}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    email: e.target.value
                                })
                            }}
                        />
                        <TextField
                            margin="normal" 
                            fullWidth 
                            password
                            id="senha" 
                            label="Entre sua Senha" 
                            sx={{textAlign: "center"}}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    senha: e.target.value
                                })
                            }}
                        />
                        <FormControlLabel 
                            control={<Checkbox color='primary' />}
                            label = "Continuar Logado"
                        />
                        <Stack>
                            <Link to='/homeUser' onClick={useLogarUsuario} style={{width: 400, marginLeft: 180, marginTop: 20, marginBottom: 20}}>
                                <Button variant="contained" size="large">
                                    <Typography component="paragraph">Login</Typography>
                                </Button>
                            </Link>
                        </Stack>
                        <Link to='/signup' style={{marginLeft: 2}}>
                            <Typography variant="paragraph">
                                Usuario novo? Clicke aqui para realizar seu cadastro.
                            </Typography>
                        </Link>
                    </Box>
                </Paper>
            </Box>
        </Container>
    );
}
        {/*<div className='d-flex justify-content-center align-items-center bg-light vh-100'>
            <div className='bg-dark p-3 rounded w-25'>
                <form name="Login-form" onSubmit={logarUsuario}>
                    <div className='mb-3 text-light'>
                        <p className='text-center'><strong>LOGIN</strong></p>
                        <label htmlFor='email'>Email</label>
                        <input type='email' 
                               placeholder='Insira seu email'
                               className='form-control rounded-0' 
                               onChange={e => {
                                 setForm({
                                   ...form,
                                   email: e.target.value
                                 })
                               }}
                        />
                    </div>

                    <div className='mb-3 text-light'>
                        <label htmlFor='password'>Senha</label>
                        <input type='password' 
                               placeholder='Insira sua senha'
                               className='form-control rounded-0' 
                               onChange={e => {
                                 setForm({
                                   ...form,
                                   senha: e.target.value
                                 })
                               }}
                        />
                    </div>
                    <Link to='/homeUser' className='btn btn-default w-100 bg-danger text-light rounded-0 text-decoration-none' onClick={logarUsuario}>
                        Entre aqui
                    </Link>

                    <p></p>

                    <Link to='/signup' className='btn btn-default w-100 bg-transparent text-light border-0'>
                        Ainda não tem uma conta? Crie aqui
                    </Link>
                </form>
            </div>
        </div>*/}
