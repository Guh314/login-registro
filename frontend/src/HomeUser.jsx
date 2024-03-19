import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';

import { useNavigate } from 'react-router-dom';

import { useEffect } from 'react';

import PersistentDrawerLeft from './PersistentDrawerLeft';

export default function HomeUser(props) {
    const navigation = useNavigate();

    //const fixIt = () => {
    //    let curr = props.db_home_info[0];
    //    curr.then((data) => {
    //        console.log(data.data)});
    //}

    const CallDrawer = () => {
        useEffect(() => {
            if (props.usuario.id == "") {
                return navigation("/login");
            }
        });

        return (
            <PersistentDrawerLeft 
                usuario={props.usuario}
                setUsuario={props.setUsuario}
                setLogado={props.setLogado}
                db_home_info={props.db_home_info}
            />
        )
    };

    return (
        <Container maxWidth="xs" sx={{bgcolor: '#ffffff', height: 1000}}>
            {props.usuario.id == "" ? navigation("/login") : props.setLogado(true)}
            <CallDrawer />
        </Container>
    );
}
