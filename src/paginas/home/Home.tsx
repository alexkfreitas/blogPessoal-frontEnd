import React from 'react'
import './Home.css';

function Home(){

    let nome: string = 'Alex'
    return(
        <>
        <h1 className="titulo">{nome}</h1>
        <hr />
        <span>Bloco 3 - React</span>
        <img src="https://i.imgur.com/H88yIo2.png" alt="Equipe" className='img'/>
        </>
    )
}

export default Home