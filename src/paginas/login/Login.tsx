import { Grid, TextField, Typography } from "@material-ui/core";
import { Box } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import "./Login.css";
import UsuarioLogin from "../../model/UserLogin";
import { login } from "../../services/Service";
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {

    let navigate = useNavigate()
    const dispatch = useDispatch()
    // const [token, setToken] = useLocalStorage('token')
    const [token, setToken] = useState('')
    const[userLogin, setUserLogin] = useState<UsuarioLogin>({
        id:0,
        nome: '',
        usuario: '',
        senha: '',
        foto: '',
        token: ''
    });

    function updateModel(event: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [event.target.name]: event.target.value
        })
        
    }

    async function conectar(event:ChangeEvent<HTMLFormElement>){
        event.preventDefault();

        console.log(userLogin);
        
        try{
          await login(`/usuarios/logar`,userLogin, setToken)

          toast.success('Usuário logado com sucesso!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined
        });

        }catch(error){
          toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
            progress: undefined
        });
        }

        
    }

    useEffect(() => {
        if(token!==''){
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])
    
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid xs={6} alignItems="center" >
          <Box paddingX={20}>
            <form onSubmit={conectar}>
            <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'><img src='https://i.imgur.com/RLltIpo.png' className='logo-size'></img></Typography>
                        
              <Typography variant="h3" gutterBottom color ='textPrimary' component='h3' align="center" className="textos1">Login</Typography>

              <TextField
                onChange={(event:ChangeEvent<HTMLInputElement>)=>updateModel(event)}
                value={userLogin.usuario}
                id="usuario"
                name="usuario"
                label="Usuário"
                variant="filled"
                fullWidth
                margin="normal"
              />
              <TextField
                onChange={(event:ChangeEvent<HTMLInputElement>)=>updateModel(event)}
                value={userLogin.senha}
                id="senha"
                type="password"
                name="senha"
                label="Senha"
                variant="filled"
                fullWidth
                margin="normal"
              />
            <Box marginTop={2} textAlign='center'>
                    <Button type="submit" variant="contained" className='button-color'>
                        Entrar
                    </Button>
            </Box>
                
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
                <Box marginRight={1}>
                    <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                </Box>
                    <Link to='/cadastrousuario' className="text-decorator-none">
                      <Typography  gutterBottom align='center' className='textos-link'>Cadastre-se</Typography>
                    </Link>
            </Box>
          </Box>
        </Grid>
        <Grid xs={6} className='imagem'>

        </Grid>
      </Grid>
    </>
  );
}

export default Login;
