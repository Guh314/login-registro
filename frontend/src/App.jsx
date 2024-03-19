import React from 'react';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import HomeUser from './HomeUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function App() {
    const [logado, setLogado] = useState(true);
    const [usuario, setUsuario] = useState({
        id: '',
        nome: '',
        email: '',
        senha: '',
        cpf: '',
        numero: ''
    });

    const [db_home_info, setdb_home_info] = useState();

    return (
        <BrowserRouter>
            <Routes >
                <Route path='/' element={<Home />}></Route>
                <Route path='/login' 
                        element={<Login 
                            usuario={usuario} 
                            setUsuario={setUsuario}
                            logado={logado} 
                            setLogado={setLogado}
                            setdb_home_info={setdb_home_info}
                        />}
                ></Route>
                <Route path='/signup'
                    element={<Signup
                            usuario={usuario} 
                            setUsuario={setUsuario}
                            logado={logado} 
                            setLogado={setLogado}
                            setdb_home_info={setdb_home_info}
                        />}
                ></Route>
                <Route path='/homeUser' 
                        element={<HomeUser
                            usuario={usuario} 
                            setUsuario={setUsuario}
                            logado={logado} 
                            setLogado={setLogado}
                            db_home_info={db_home_info}
                        />}
                ></Route>
            </Routes>
        </BrowserRouter>
    )
}
