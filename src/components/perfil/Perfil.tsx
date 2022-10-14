import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Usuario from "../../model/User";
import { buscaId } from "../../services/Service";
import { TokenState } from "../../store/tokens/tokensReducer";
import React from 'react'
import { Container, Grid, Typography } from "@material-ui/core";

import './Perfil.css'
import { Avatar } from "@mui/material";

function Perfil() {

const token = useSelector<TokenState, TokenState['tokens']>(
    (state) => state.tokens
)

const userId = useSelector<TokenState, TokenState['id']>(
    (state) => state.id
)

const [usuario, setUsuario] = useState<Usuario>({
    id: +userId,
    nome: '',
    usuario: '',
    foto: '',
    senha: '',
})

async function getUserById(id: number){
    await buscaId(`/usuarios/${id}`, setUsuario, {
        headers: {Authorization: token}
    })
}

useEffect(()=>{
    getUserById(+userId)
},[])

return (
    <>
      <Container>
        <Grid className='perfilContainer'>
          <Grid xs={3} alignItems="center" justifyContent="center">
            <Avatar
              src={usuario.foto}
              alt="Alex"
              className="fPerfil"
            />
            <Typography variant="h5" align="center">
              {usuario.nome}
            </Typography>
          </Grid>
          <Grid xs={9} justifyContent="center">
            <Typography variant="h4" align="center">
              Postagens de {usuario.nome}
            </Typography>
            Você tem um total de {usuario.postagem?.length} postagens feita
            <div className="postUser">
            {usuario.postagem?.map((post) => (
              <div className="postPerfil">
                <h3>{post.titulo}</h3>
                <p>{post.texto}</p>
                <strong>{post.tema?.descricao}</strong>
              </div>
            ))}
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );

}
export default Perfil