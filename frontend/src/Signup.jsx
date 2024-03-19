import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { faker } from '@faker-js/faker';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

export default function Signup(props) {
    const [form, setForm] = useState({
        nome: '',
        email: '',
        senha: '',
        cpf: '',
        numero: ''
    });

    const cadastrarUsuario = async () => {
        try {
            const res = await axios.post("http://localhost:8080/", {
                nome: form.nome,
                email: form.email,
                senha: form.senha,
                cpf: form.cpf,
                numero: form.numero
            });

            const newUser = {
                nome: res.data[0],
                email: res.data[1],
                senha: res.data[2],
                cpf: res.data[3],
                numero: res.data[4]
            };

            props.setUsuario(newUser);

        } catch (error) {
            console.log("Erro: ", error);
        }
    };

    function createRandomUser() {
        return {
            nome: faker.person.firstName(),
            email: faker.internet.email(),
            senha: faker.internet.password(),
            cpf: faker.string.numeric(11),
            numero: faker.phone.number()
        };
    }

    const createUsers = async () => {
        for (let i=0; i<1000; i++) {
            let newUser = createRandomUser();
            const res = await axios.post("http://localhost:8080/", newUser);
            console.log(newUser);
        }

    }

    return (
        <Container  maxWidth="xs" sx={{height: 1000}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper square={false} elevation={8} sx={{borderRadius: 5, marginTop: 10, width: 500, height: 700}}>
                    <Typography variant="h3" sx={{ textAlign: "center", marginTop: 10}}>
                        Cadastro
                    </Typography>
                    <Box sx={{marginLeft: 3, marginRight: 3}}>
                        <TextField 
                            margin="normal" 
                            fullWidth id="nome" 
                            label="Entre seu Nome" 
                            sx={{marginTop: 2, textAlign: "center"}}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    nome: e.target.value
                                })
                            }}
                        />
                        <TextField 
                            margin="normal" 
                            fullWidth id="email" 
                            label="Entre seu Email" 
                            sx={{textAlign: "center"}}
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
                        <TextField
                            margin="normal" 
                            fullWidth 
                            password
                            id="cpf" 
                            label="Entre seu CPF" 
                            sx={{textAlign: "center"}}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    cpf: e.target.value
                                })
                            }}
                        />
                        <TextField
                            margin="normal" 
                            fullWidth 
                            password
                            id="numero" 
                            label="Entre seu numero" 
                            sx={{textAlign: "center"}}
                            onChange={e => {
                                setForm({
                                    ...form,
                                    numero: e.target.value
                                })
                            }}
                        />
                        <Stack>
                            <Link to='/homeUser' onClick={cadastrarUsuario} style={{width: 400, marginLeft: 160, marginTop: 50, marginBottom: 20}}>
                                <Button variant="contained" size="large">
                                    <Typography component="paragraph">Cadastro</Typography>
                                </Button>
                            </Link>
                        </Stack>
                        <Grid container>
                            <Grid item>
                                <Link to='/login' style={{width: 400, marginLeft: 40}}>
                                    <Typography variant="paragraph">
                                        Já é usuario? Clicke aqui e realize seu Login.
                                    </Typography>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper>
            </Box>
        </Container>
    )
}
        {/*<div className='d-flex justify-content-center align-items-center bg-light vh-100'>
            <div className='bg-dark p-3 rounded w-25'>
                <form>
                    <div className='mb-3 text-light'>
                        <p className='text-center'><strong>REGISTRAR</strong></p>
                        <label htmlFor='password'>Nome</label>
                        <input type='text' 
                               placeholder='Insira seu Nome'
                               className='form-control rounded-0' 
                               onChange={e => {
                                 setForm({
                                   ...form,
                                   nome: e.target.value
                                 })
                               }}
                        />
                    </div>

                    <div className='mb-3 text-light'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' 
                               placeholder='Insira seu Email'
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
                               placeholder='Insira sua Senha'
                               className='form-control rounded-0' 
                               onChange={e => {
                                 setForm({
                                   ...form,
                                   senha: e.target.value
                                 })
                               }}
                        />
                    </div>

                    <p></p>

                    <Link 
                        to='/homeUser' 
                        className='btn btn-default w-100 bg-danger text-light rounded-0 text-decoration-none'
                        onClick={cadastrarUsuario}
                    >
                        Criar uma conta
                    </Link>

                    <p></p>

                    <Link to='/' className='btn btn-default w-100 bg-transparent text-light border-0'>
                        Já tem uma conta? Entre aqui
                    </Link>
                </form>
            </div>
Caso não haja banco de dados usar esse botão.<Button onClick={createUsers}>Create Users</Button>
        </div>*/}
