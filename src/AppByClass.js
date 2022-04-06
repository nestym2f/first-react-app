import Componente from "./Components/Componente";
import ComponenteByClass from "./Components/ComponenteByClass";

import './App.css'
import React, { Component } from "react";

export class NavBarByClass extends Component {
  render(){
    return <div className= "App">
        <ComponenteByClass />
    </div>
  }
}