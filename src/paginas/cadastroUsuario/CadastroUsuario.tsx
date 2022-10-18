import React, { useState, useEffect, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { cadastroUsuario } from "../../services/Service";
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import "./CadastroUsuario.css";
import { toast } from "react-toastify";
import { Usuario } from "../../model/User";

export function CadastroUsuario() {
  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  const [cadastro, setCadastro] = useState(false);

  const [user, setUser] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  const [userResult, setUserResult] = useState<Usuario>({
    id: 0,
    nome: "",
    usuario: "",
    senha: "",
    foto: "",
  });

  useEffect(() => {
    if (user.nome.length > 3 && user.usuario !== "" && user.senha.length >= 8) {
      setCadastro(true);
    } else {
      setCadastro(false);
    }
  }, [user]);

  useEffect(() => {
    if (userResult.id != 0) {
      navigate("/login");
    }
  }, [userResult]);

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }
  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (confirmarSenha == user.senha) {
      cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult);
      toast.success("Usuário cadastradp com sucesso!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } else {
      toast.error(
        "Dados inconsistentes. Favor verificar as informações de cadastro!",
        {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          theme: "colored",
          progress: undefined,
        }
      );
    }
  }
  return (
    <>
      <Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        className="login-cadastro"
      >
        <Box paddingX={10} className="box-cadastro">
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              <img
                src="https://i.imgur.com/RLltIpo.png"
                className="logo-size"
              ></img>
            </Typography>
            <Typography variant="h5" className="titulo-blog">
              Katanosaka Blog
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="textos2"
            >
              Cadastrar
            </Typography>
            <TextField
              value={user.nome}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="nome"
              label="Nome"
              variant="filled"
              name="nome"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="usuario"
              label="E-mail"
              variant="filled"
              name="usuario"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
              id="senha"
              label="Senha"
              variant="filled"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
            />
            <TextField
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="Digite novamente a senha"
              variant="filled"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
            />
            <Box marginTop={2} textAlign="center">
              <Button
                type="submit"
                variant="contained"
                className="button-color"
                disabled={!cadastro}
              >
                Cadastrar
              </Button>
            </Box>
          </form>

          <Box display="flex" justifyContent="center" marginTop={2}>
            <Box marginRight={1}>
              <Typography variant="subtitle1" gutterBottom align="center">
                Já possui uma conta?
              </Typography>
            </Box>
            <Link to="/login" className="text-decorator-none">
              <Typography gutterBottom align="center" className="textos-link">
                Voltar para o login
              </Typography>
            </Link>
          </Box>
        </Box>
      </Grid>

      {/* ----------------------------- */}
    </>
  );
}
