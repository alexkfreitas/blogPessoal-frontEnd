import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import {Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { purple } from '@mui/material/colors';
import './Footer.css'

// const roxin = purple[600];

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom className='textos'>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/alexkfreitas" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/in/alex-katanosaka-freitas-237123199/" target="_blank">
                                <LinkedInIcon className='redes'/>
                            </a>
                            <a href="https://www.instagram.com/alexkatanosaka/" target="_blank">
                                <InstagramIcon className='redes'/>
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2022 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://brasil.generation.org">
                                <Typography variant="subtitle2" gutterBottom className='textos' align="center">Alex Katanosaka Freitas</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;