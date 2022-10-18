import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaTema.css';
import { Box } from '@mui/material';
import { busca } from '../../../services/Service';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { Tema } from '../../../model/Tema';
import { SyncLoader } from 'react-spinners';

export function ListaTema() {

  const [loading, setLoading] = useState(true);

    let navigate = useNavigate();
  const[temas, setTemas] = useState<Tema[]>([]);

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

  useEffect(() => {
    if(token === ''){
      toast.error('Você precisa estar logado para acessar essa página!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "colored",
        progress: undefined
    });
      navigate('/login')
    }
  },[token])

  async function getTemas(){
    await busca('/temas', setTemas, {
      headers: {
        'Authorization': token
      },
    })
    setLoading(false);
  }

  useEffect(() => {
    getTemas()
  },[temas.length])

  return (
    <>
    {
      loading ? <SyncLoader className="loading" color={'#36D7B7'} loading={loading}/>:

      temas.map(tema =>(
      <Box m={2} className='margin-temas'>
        <Card variant="outlined" className="card-fundo">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >

              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' className='color-black' >
                          atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                      <span className="material-symbols-outlined color-lixo">delete</span>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>
  );
}

