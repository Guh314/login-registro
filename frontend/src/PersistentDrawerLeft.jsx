import * as React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { faker } from '@faker-js/faker';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { DataGrid } from '@mui/x-data-grid';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
	({ theme, open }) => ({
		flexGrow: 1,
		bgcolor: '#ffffff',
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create('margin', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	}),
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end',
}));

const MainPage = (props) => {
    const info = () => {
        //let curr = props.db_home_info[0];
        //curr.then((data) => {
        //    console.log(data.data)
        //});
        console.log(props.db_nomes.data);
    }

    const [usuario, setUsuario] = useState(props.usuario);

    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'nome', headerName: 'Nome', width: 250 },
      { field: 'email', headerName: 'Email', width: 300 },
      { field: 'senha', headerName: 'Senha', width: 200 },
      { field: 'cpf', headerName: 'CPF', width: 200 },
      { field: 'numero', headerName: 'Contato', width: 278 },
    ];

    const rows = props.db.data;

    const Data = () => {
        return (
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 5},
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
            />
        )
    };

    const rows2 = props.db_nomes.data;

    const NomeData = () => {
        const nome_columns = [
            { field: 'id', headerName: 'ID', width: 100 },
            { field: 'nome', headerName: 'Nome', width: 150 },
            { field: "COUNT(nome)", headerName: 'count_nome', width:100},
            { field: 'email', headerName: 'Email', width: 200 },
            { field: 'numero', headerName: 'Contato', width: 278 },
        ];
        return (
            <DataGrid
                rows={rows2}
                columns={nome_columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 5},
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                sx={{marginTop: 1}}
            />
        )
    };

    const rows3 = props.db_senhas.data;
    const SenhaData = () => {
        const senha_columns = [
            { field: 'id', headerName: 'ID', width: 100 },
            { field: 'nome', headerName: 'Nome', width: 150 },
            { field: 'email', headerName: 'Email', width: 200 },
            { field: "senha", headerName: 'senha', width:100},
            { field: "character_length(senha)", headerName: 'tamanho(senha)', width:100},
        ];
        return (
            <DataGrid
                rows={rows3}
                columns={senha_columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 5},
                    },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                sx={{marginTop: 1}}
            />
        )
    };
    return (
		<Main>
            <Box sx={{flexGrow: 1, marginLeft: 27, marginTop: 6}}>
                <Paper elevation={8} sx={{borderRadius: 5}}>
                <Typography variant="h3" sx={{textAlign: 'center'}}>Ultimos usuários cadastrados</Typography>
                {rows === undefined ? <Typography paragraph>Loading</Typography> : <Data />}
                </Paper>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <Paper elevation={8} sx={{borderRadius: 5, marginTop: 2, textAlign: 'center'}}>
                            <Typography variant="h4">Nomes mais frequentes</Typography>
                            {rows === undefined ? <Typography paragraph>Loading</Typography> : <NomeData />}
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper elevation={8} sx={{borderRadius: 5, marginTop: 2, textAlign: 'center'}}>
                            <Typography variant="h4">Senhas mais longas</Typography>
                            {rows === undefined ? <Typography paragraph>Loading</Typography> : <SenhaData />}
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
	    </Main>
    );
}

const EditarPage = (props) => {

    const [usuarioEdit, setusuarioEdit] = useState(props.usuario);
    const usuarioOriginal = props.usuario;


    const editarUsuario = async () => {
        const model = {
            id: usuarioOriginal.id,
            nome: usuarioEdit.nome,
            email: usuarioEdit.email,
            senha: usuarioEdit.senha,
            cpf: usuarioEdit.cpf,
            numero: usuarioEdit.numero
        }

        const url = "http://localhost:8080/update";

        const res = await axios.post(url, model);

        console.log(res);
    };

    return (
        <Main>
            <DrawerHeader />
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft: 80
                    }}
                >
                    <Paper square={false} elevation={8} sx={{borderRadius: 5, marginTop: 5, width: 500, height: 700}}>
                        <Typography variant="h3" sx={{ textAlign: "center", marginTop: 10}}>
                            Editar Usuário
                        </Typography>
                        <Box sx={{marginLeft: 3, marginRight: 3}}>
                            <TextField 
                                margin="normal" 
                                fullWidth id="nome" 
                                label={"Nome"}
                                defaultValue={usuarioEdit.nome !== "" ? usuarioEdit.nome : "Escolha um nome"}
                                sx={{marginTop: 5, textAlign: "center"}}
                                onChange={e => {
                                    setusuarioEdit({
                                        ...usuarioEdit,
                                        nome: e.target.value
                                    })
                                }}
                            />
                            <TextField 
                                margin="normal" 
                                fullWidth id="email" 
                                label={"Email"}
                                defaultValue={usuarioEdit.email !== "" ? usuarioEdit.email : "Escolha um email"}
                                sx={{textAlign: "center"}}
                                onChange={e => {
                                    setusuarioEdit({
                                        ...usuarioEdit,
                                        email: e.target.value
                                    })
                                }}
                            />
                            <TextField
                                margin="normal" 
                                fullWidth 
                                password
                                id="senha" 
                                label={"Senha"}
                                defaultValue={usuarioEdit.senha !== "" ? usuarioEdit.senha : "Escolha uma senha"}
                                sx={{textAlign: "center"}}
                                onChange={e => {
                                    setusuarioEdit({
                                        ...usuarioEdit,
                                        senha: e.target.value
                                    })
                                }}
                            />
                            <TextField 
                                margin="normal" 
                                fullWidth id="cpf" 
                                label={"CPF"}
                                defaultValue={usuarioEdit.cpf !== "" ? usuarioEdit.cpf : "Escolha um nome"}
                                sx={{textAlign: "center"}}
                                onChange={e => {
                                    setusuarioEdit({
                                        ...usuarioEdit,
                                        cpf: e.target.value
                                    })
                                }}
                            />
                            <TextField 
                                margin="normal" 
                                fullWidth id="numero" 
                                label={"Numero"}
                                defaultValue={usuarioEdit.numero !== "" ? usuarioEdit.numero : "Escolha um nome"}
                                sx={{textAlign: "center"}}
                                onChange={e => {
                                    setusuarioEdit({
                                        ...usuarioEdit,
                                        numero: e.target.value
                                    })
                                }}
                            />
                            <Stack>
                                <Link to='/login' onClick={editarUsuario} style={{width: 400, marginLeft: 120, marginTop: 50, marginBottom: 20}}>
                                    <Button variant="contained" size="large">
                                        <Typography component="paragraph">Editar Usuário</Typography>
                                    </Button>
                                </Link>
                            </Stack>
                        </Box>
                    </Paper>
                </Box>
        </Main>
    )
}

const VisualizarPage = (props) => {
    const [usuario, setUsuario] = useState(props.usuario);

    const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
      { field: 'nome', headerName: 'Nome', width: 250 },
      { field: 'email', headerName: 'Email', width: 300 },
      { field: 'senha', headerName: 'Senha', width: 200 },
      { field: 'cpf', headerName: 'CPF', width: 200 },
      { field: 'numero', headerName: 'Contato', width: 278 },
    ];

    const rows = props.db.data;

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

    const Data = () => {
        return (
            <DataGrid
                rows={props.db.data}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 12},
                    },
                }}
                pageSizeOptions={[12, 50, 100]}
                checkboxSelection
                sx={{marginTop: 5}}
            />
        )
    }

    return (
        <Main>
            <DrawerHeader />
            <Box sx={{flexGrow: 1}}>
                <Paper elevation={8} sx={{borderRadius: 5, marginLeft: 27}}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="h3">Lista de Usuarios</Typography>
                    </Grid>
                </Grid>
                {rows === undefined ? <Typography variant="paragraph">Loading</Typography> : <Data />}
                <Button onClick={createUsers}>Popular a DB</Button>
                </Paper>
            </Box>
        </Main>
    )
}

export default function PersistentDrawerLeft(props) {
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

    const navigation = useNavigate();

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const logOut = () => {
		props.setLogado(!props.logado);
		props.setUsuario({});
        navigation("/login");
	};

	const dashInfo = ["Home", "Visualizar"];

	const printDashIconsPage = () => {
		console.log(dashInfo);
	}
	
	const [currPage, setCurrPage] = useState('Home');

    const [db, setDB] = useState({});
    const [db_nomes, setdb_nomes] = useState({});
    const [db_senhas, setdb_senhas] = useState({});

    const changeStuff = async (pageTarget) => {
        setCurrPage(pageTarget);
        if (pageTarget === "Visualizar" || pageTarget === "Home") {
            try {
                let url = "http://localhost:8080/all";
                let res = await axios.get(url);
                setDB(res);
            } catch (err) {
                console.log(err);
            }
            try {
                let url = "http://localhost:8080/get5common_names";
                let res = await axios.get(url);
                setdb_nomes(res);
            } catch (err) {
                console.log(err);
            }
            try {
                let url = "http://localhost:8080/get5passwords";
                let res = await axios.get(url);
                setdb_senhas(res);
            } catch (err) {
                console.log(err);
            }
        }
    }

	return (
		<Box sx={{display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Bem vindo: {props.usuario.nome}
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</DrawerHeader>
				<Divider />
                <List>
                    {dashInfo.map((text) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton onClick={() => changeStuff(text)}>
                                <ListItemIcon>
                                    {text === "Home" ? <HomeIcon />
                                        : text === "Visualizar" ? <ViewHeadlineIcon />
                                        : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
				<Divider />
				<List>
                    <ListItemButton onClick={() => setCurrPage("Editar")}>
						<ListItemIcon>
							<SettingsIcon />					 
						</ListItemIcon>
                        <ListItemText primary={"Configurar"} />
					</ListItemButton>
					<ListItemButton onClick={logOut}>
						<ListItemIcon>
							<LogoutIcon />					 
						</ListItemIcon>
                        <ListItemText primary={"Log Out"} />
					</ListItemButton>
				</List>
			</Drawer>
            <Box>
                {currPage === "Home" ? <MainPage db={db} db_nomes={db_nomes} db_senhas={db_senhas} open={open}/> 
                    : currPage === "Visualizar" ? <VisualizarPage db={db}/>
                    : currPage === "Editar" ? <EditarPage usuario={props.usuario} setUsuario={props.setUsuario} />
                    : <p>Something here</p>}
            </Box>
		</Box>
	);
}
        //<Link to="/login"><Button onClick={logOut}>Log Out</Button></Link>
