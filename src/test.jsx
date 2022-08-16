import React, { useEffect, useState } from "react";

const test = () => {

    const [info, setInfo] = useState("Hola Mundo");
    const [showLoader, setShowLoader] = useState(false);
    const [games, setGames] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const cambiarValor = (e) => {
        setInfo(e.target.value)
        console.log(Liferay.auth)
    };

    const getData = async () => {
        setShowLoader(true);
        try {

            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '6c11314079msh55ef69e7aff5242p173d6djsn1817dfc9659c',
                    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
                }
            };
            
            await fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
                .then(response => response.json())
                .then(response => {
                    setGames(response);
                    setShowLoader(false);
                })
                .catch(err => console.error(err));

            

        } catch (error) {
            console.error(error);
        }
    };

  return (
    <>

        <input onChange={cambiarValor} />
        <p>El valor es: {info} </p>

        {showLoader ? 
        (
            <>
                <p className="text-center">Cargando...</p>
            </>
        ) : 
        (
           <>
            
            <h1 className="text-center mb-5">Juegos</h1>

            <div className="d-flex flex-wrap">
                
                {
                    
                    games.map((values, index) => (

                        <div key={index} className="col-4 d-flex flex-wrap">
                            <img className="w-100" src={values.thumbnail} />
                            <p className="w-100 text-center">{values.title}</p>
                        </div>
             
                    ))
                }

            </div>

           </>
          
        )}
        
    </>
  )
}

export default test;