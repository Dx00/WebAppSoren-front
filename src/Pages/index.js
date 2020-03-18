import React, {Component} from 'react'
import Intro from "../contHome/Intro"
import Header from '../Header'
import Mid from '../contHome/Mid'

class Inicio extends Component {
    render() {
        return (
            <section>
                <Header/>
                <Intro/>
                <Mid/>
                

            </section>
        )
    }
}

export default Inicio