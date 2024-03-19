import { Link } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Container from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

export default function Home(props) {
    return (
        <Container  maxWidth="xs" sx={{height: 1000}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Paper elevation={8} sx={{borderRadius: 5, marginTop: 20, width: 500, height: 600}}>
                    <Typography variant="h3" sx={{ textAlign: "center", marginTop: 20}}>
                        Bem vindo ao site
                    </Typography>
                    <Grid container spacing={2} sx={{marginTop: 10}}>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={5}>
                            <Link to='/login'>
                                <Button variant="contained" size="large">
                                    <Typography component="paragraph">Login</Typography>
                               </Button>
                            </Link>
                        </Grid>
                        <Grid item xs={4}>
                            <Link to='/signup'>
                                <Button variant="contained" size="large">
                                    <Typography component="paragraph">Signup</Typography>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Paper>
            </Box>
        </Container>
    );
}

        {/*<div className='d-flex justify-content-center align-items-center bg-light vh-100'>
            <div className='bg-dark p-3 rounded w-25'>
                <div className='mb-3 text-light text-center'>
                    <p><strong>Bem vindo ao site</strong></p>
                    <Link to='/login' className='btn btn-default w-100 bg-danger text-light rounded-0 text-decoration-none'>Login</Link>
                </div>
            </div>
        </div>*/}
