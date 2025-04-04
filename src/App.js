import React, {useState} from 'react';
import './App.css';
import ReactInputMask from 'react-input-mask';

function App() {

  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [valorIMC, setValorIMC] = useState("");
  const [categoriaIMC, setCategoriaIMC] = useState("sua categoria será exibida aqui")

  function tratarMudancaPeso(evt) {
    setPeso(evt.target.value)
  }

  function calcularIMC() {
    if (altura > 0) {
      const alturaEmMetros = parseFloat(altura.replace(",", "."));
      const imc = peso / (alturaEmMetros * alturaEmMetros);
      setValorIMC(imc.toFixed(2)); 
    if (imc < 18.5) {
      setCategoriaIMC("Seu IMC indica baixo peso.");
    } else if (imc >= 18.5 && imc < 24.9) {
      setCategoriaIMC("Seu IMC indica peso normal.");
    } else if (imc >= 25 && imc < 29.9) {
      setCategoriaIMC("Seu IMC indica sobrepeso.");
    } else {
      setCategoriaIMC("Seu IMC indica obesidade.");
    }

    } else {
      alert("Por favor, insira valores válidos para altura e peso!");
    }
  }
  

  return (
    <div>
      <h1> Calculadora IMC</h1>
        <form> 
          <label htmlFor='peso'>Peso:</label><br/>
          <input type= 'number' name='peso' id='peso' 
          onChange={tratarMudancaPeso}
          value={peso}/>
          <br/>
          <br/>
          <label htmlFor='altura'>Altura:</label><br/>
          <input type= 'number' name='altura' id='altura'
          onChange={ e =>setAltura(e.target.value)}
          value={altura}/>
          <br/>
          <br/>
          <input type='button' value='Calcular IMC' onClick={calcularIMC} />
          <br/>
          <br/>

          <b>Seu IMC:</b> {valorIMC !== null && `${valorIMC} (${categoriaIMC})`}          
        </form>

    </div>
  );
}

export default App;
