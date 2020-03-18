import React, {Component} from 'react'

import Login from '../components/Form/Login'
import Register from '../components/Form/Register'

class Intro extends Component {
    render() {
        return (
            <section className="container">
                    <div className="row">
                        <div className="col-sm">
                        <Login/>
                        </div>
                        <div className="col-sm">
                        <Register/>
                        </div>
                    </div>

            </section>
        )
    }
}

export default Intro