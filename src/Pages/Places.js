import React, {Component} from 'react'
import Header from '../Header'
import Intro from '../contPlaces/Intro'
import Bloco from '../components/CardLocais/Bloco'


class Locais extends Component {
    render() {
        return (
            <section>
                <Header/>
                <Intro/>
                <Bloco/>

            </section>
        )
    }
}

export default Locais