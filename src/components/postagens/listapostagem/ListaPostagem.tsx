import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { busca } from '../../../services/Service'
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/system';
import './ListaPostagem.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { Postagem } from '../../../model/Postagem';

export function ListaPostagem() {
  let navigate = useNavigate();

  const [posts, setPosts] = useState<Postagem[]>([]);

  const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
  );

  const userId = useSelector<TokenState, TokenState['id']>((state) => state.id);

  useEffect(() => {
    if (token === "") {
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
      navigate("/login")

    }
  }, [token])

  async function getPost() {
    console.log('Token:'+token);
    
    await busca("/postagens", setPosts, {
      headers: {
        Authorization: token
      },
    });
  }

  useEffect(() => {

    getPost()
    
  }, [posts.length])

  return (
    <>
      {
        posts.map(post => (
          <Box m={2} className="margin-box">
            <Card variant="outlined" className="card-fundo">
              <CardContent>
                <Typography variant="h5" component="h2">
                  {post.titulo}
                </Typography>
                <Typography variant="body2" component="p">
                  {post.texto}
                </Typography>
                <Typography variant="body2" component="p">
                  <b>Tema:</b> {post.tema?.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  <b>Autor da postagem:</b> {post.usuario?.nome} ({post.usuario?.usuario})
                </Typography>
              </CardContent>
              <CardActions>

            

                <Box display="flex" justifyContent="center" mb={1.5}>

                  <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                    <Box mx={1}>
                      <Button variant="contained" size='small' className='color-black' >
                        atualizar
                      </Button>
                    </Box>
                  </Link>
                  <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
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
  )
}
