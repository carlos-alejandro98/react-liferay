import React, { useEffect, useState } from "react";
import Plataforma from '../components/plataforma';

const test = (props) => {

    const { endpoint } = props;

    const [showLoader, setShowLoader] = useState(false);
    const [games, setGames] = useState([]);
    const [texto, setTexto] = useState("");

    useEffect(() => {
        getData();
    }, []);

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
            
            await fetch(endpoint, options)
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

        <div className="d-flex justify-content-between col-12 align-items-center my-5">
            <h1 className="d-flex">Juegos { texto != "" ? <p className="ml-2"> de {texto} </p> : "" }</h1>
            
            <div>
                <label>Plataforma</label>
                <Plataforma 
                    games={setGames} 
                    loader={setShowLoader} 
                    texto={setTexto}
                />
            </div>
        </div>

        {showLoader ? 
        (
            <>
                <p className="text-center">Cargando...</p>
            </>
        ) : 
        (
           <>

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