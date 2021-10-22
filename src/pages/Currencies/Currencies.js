import axios from "axios";
import React from "react";
import { useState } from "react";


const Currencies = () => {

  const [valores,setValores] = useState("")
  const [cambiadorEstado, setCambiadorEstado] = useState ('')
  const llamadaApi = async (moneda) => {

    try {
      const response = await axios.get(
        `https://api.nomics.com/v1/currencies/ticker?ids=${moneda}&key=8fe9c5d148a1ce1866da9fc2b79933390ab02ba1`
      );
      console.log(response.data);
      setValores (response.id)
      llamadaDolar()
    } catch (error) {
      alert(error);
    }
  };

  const llamadaDolar = async () => {

    try {
      const response = await axios.get(
        // `https://dolarblue.herokuapp.com/api/dolar-blue?key=943f30310f51c578d85fbf41ec9d0511`,[Headers] ACA NOS QUEDAMOS!
      );
      console.log(response.data);
    } catch (error) {
      alert(error);
    }
  };



const handleChangeValor = (e) => {
    console.log(e.target.value)
    llamadaApi(e.target.value)
}

  return (
    <div>
      <h1>Elegí la Crypto-Moneda a cotizar</h1>
      <select onChange= {handleChangeValor}>
        <option value= 'BTC'>BTC</option>
        <option value= 'ETH'>ETH</option>
        <option value= 'SLP'>SLP</option>
        <option value= 'SHIB'>SHIB</option>
      </select>
    </div>
  );
};

export default Currencies;
