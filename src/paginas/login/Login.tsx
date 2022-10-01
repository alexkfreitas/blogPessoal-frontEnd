import { Grid, TextField, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';

function Login() {
  return (
    <>
        <Grid container direction="row">
            <Grid item xs={6}>
                <Box>
                    <form action="">
                        <Typography variant='h2'>Entrar</Typography>

                        <TextField id="outlined-basic" label="Usuario" variant="outlined" fullWidth margin='normal'/>
                        <TextField id="outlined-basic" label="Senha" variant="outlined" fullWidth margin='normal'/>

                        <Link to='/home'>
                            <Button type='submit' variant='contained' color='primary'>Entrar</Button>
                        </Link>
                    </form>
                </Box>

            </Grid>

        </Grid>
    
    </>
  )
}

export default Login