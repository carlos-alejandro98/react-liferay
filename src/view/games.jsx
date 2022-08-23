import React, { useEffect, useState } from "react";

const test = (props) => {

    const { endpoint } = props;

    const [showLoader, setShowLoader] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setShowLoader(true);
        try {
            await fetch("https://run.mocky.io/v3/2e3dd2f2-f20a-4aa0-adb7-954101b1b7e0")
                .then(response => response.json())
                .then(result => {
                    setData(result.productos);
                    setShowLoader(false);
                })
                .catch(error => console.log('error', error));

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>

            <div className="d-flex justify-content-between col-12 align-items-center my-5">
                <h1 className="d-flex">Productos</h1>
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
                                
                                data.map((values, index) => (
                                    <div key={index} className="col-4 d-flex flex-wrap text-center box-data">
                                        <img src={values.imagen} alt={values.producto} className="mb-5"/>
                                        <h1 className="w-100">{values.producto}</h1>
                                        <p className="w-100 ">{values.descripcion}</p>
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