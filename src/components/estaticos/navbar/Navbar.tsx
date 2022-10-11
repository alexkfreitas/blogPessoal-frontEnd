import React from 'react';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import './Navbar.css'


function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout(){
        setToken('');
        alert("Usuário deslogado!")
        navigate('/login')
    }

    return (
        <>
            <AppBar position="fixed" className='navbar-color'>
                <Toolbar variant="dense" className="">
                    <Grid alignItems="center" item xs={6}>
                        <Box>
                            <Typography variant="h5" className="titulo-blog">
                            Katanosaka Blog
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid className='itens-navbar' item xs={6}>
                        <Box display="flex">
                            <Link to="/home" className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className='itens-font'>
                                        home
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to ="/posts" className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className='itens-font'>
                                        postagens
                                    </Typography>
                                </Box>
                            </Link>
                            <Link to ="/temas" className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className='itens-font'>
                                        temas
                                    </Typography>
                                </Box>
                            </Link>
                                <Link to="/formularioTema" className='text-decorator-none'>
                                <Box mx={1} className='cursor'>
                                    <Typography variant="h6" color="inherit" className='itens-font'>
                                        cadastrar tema
                                    </Typography>
                                </Box>
                            </Link>
                                <Box mx={1} className='cursor' onClick={goLogout}>
                                <span className="material-symbols-outlined">logout</span>
                                {/* <Typography variant="h6" color="inherit" className='material-symbols-outlined'>
                                    logout
                                </Typography> */}
                                </Box>
                        
                            
                        </Box>
                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;