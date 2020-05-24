import ReactDOM from 'react-dom'
import React from 'react'
//import PrimeiroComponente from './componentes/PrimeiroComponente'
//import A, {CompB as B} from './componentes/DoisComponentes'
//import Multielementos from './componentes/Multielementos';
//import FamiliaSilva from './componentes/FamiliaSilva'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

  const elemento = document.getElementById("root")
 

ReactDOM.render(
    <div>

    <Familia sobrenome={"Pereirazez"} numero={123} >
      <Membro nome="Andre"   /> 
       <Membro nome="Mariana" />
    </Familia>

{/* 
    <Familia>
<Membro nome="Bia" sobrenome="Arrucda" />
<Membro nome="Mariana" sobrenome="Arrucda" />
    </Familia> */}



      {/* <FamiliaSilva></FamiliaSilva> */}
    {/*<Multielementos/> */}
  {/* 
     <A valor="Olá! eu sou A!"/>
     <B valor="B na área!"></B>  */}
    {/* <PrimeiroComponente valor="Bom dia!" aBcD={2**8 } /> */}
    </div>,elemento)



//ReactDOM.render(<h1>Olá ! React</h1>,elemento)

// ReactDOM.render(
// <ul>
// <li>1) Danielle</li>
// <li>2) Michel Mendoza</li>
// <li>3) Nuno e Helmut 2 223</li>
// </ul>, elemento)

