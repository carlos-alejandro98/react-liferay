import React from 'react';

const Plataforma = (props) => {

  const cambiarPlataforma = (e) => {
    const plataforma = e.target.value;

    props.texto(plataforma);

    const endpointPlatform = 'https://free-to-play-games-database.p.rapidapi.com/api/games?platform=' + plataforma;

    const endpointGames = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

    props.loader(true);
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6c11314079msh55ef69e7aff5242p173d6djsn1817dfc9659c',
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };

    fetch(plataforma != "" ? endpointPlatform : endpointGames, options)
      .then(response => response.json())
      .then(response => {
        props.games(response);
        props.loader(false);
      })
      .catch(err => console.error(err));

  }

  return (

    <div>
      <select onChange={cambiarPlataforma}>
        <option value="">Todos</option>
        <option value="pc">PC</option>
        <option value="browser">Navegador web</option>
      </select>
    </div>

  )
}

export default Plataforma;