import React, {Component} from 'react'

import OlaMundo from './Components/Basico/OlaMundo'
import Propriedades from './Components/Basico/Propriedades'
import Card from './Components/Layout/Card'
import './App.css'
import Aninhados from './Components/Basico/Familia'
import FamiliaClone from './Components/Basico/Clone/FamiliaClone'
import FamiliaMembroClone from './Components/Basico/Clone/MembroFamiliaClone'
import Estado from './Components/Basico/State/Estado'
import IndiretaPai from './Components/Basico/Indireto/IndiretaPai'

class App extends Component{
    render() {
        return(
            <div className = "App">

                <h1>Exemplos React</h1>
                
                <div className = "Cards">

                    <Card titulo = "Olá Mundo!" color = "#226ce0"> 
                        <OlaMundo/> 
                    </Card>

                    <Card titulo = "Título do Card" color = "#91cb3e">
                        <Propriedades
                            nome = "Homer Jay"
                            sobrenome = "Simpsons"
                            idade = {38}
                        />
                    </Card>

                    <Card titulo = "Componentes Aninhados (Comuniação Direta)" color = "#d1495b">
                        <Aninhados sobrenome = "Simpson"/>
                    </Card>
                    
                    <Card titulo = "Componente aninhados (Component CloneElement)" color = "#82212e">
                        <FamiliaClone sobrenome = "Simpson">
                            <FamiliaMembroClone nome = "Homer Jay"/>
                            <FamiliaMembroClone nome = "Marjorie"/>
                            <FamiliaMembroClone nome = "Bartholomew Jojo" />
                            <FamiliaMembroClone nome = "Lisa Marie"/>
                            <FamiliaMembroClone nome = "Margareth"/>
                        </FamiliaClone>
                    </Card>

                    <Card titulo = "Estado" color = "#ffb400">
                        <Estado />
                    </Card>

                    <Card titulo = "Comunicação Indireta" color = "#f7673b">
                        <IndiretaPai />
                    </Card>

                </div>
            </div>
        )
    }
}

export default App;