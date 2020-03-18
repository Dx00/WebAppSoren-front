import React, { Component } from 'react'
//import Filter from '/home/recode/Soren/plataforma-soren/src/images/Filter.png'
import Filter from '../images/Filter.png'


class Filtro extends Component {
    render() {
        return (
            <section className="container pt-3 pb-3">
                <ul className="nav d-flex align-items-end flex-column">
                    <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle text-body font-weight-bold" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src={Filter} style={{ width: "35px" }} />Filtrar</a>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a class="dropdown-item" href="#">Cafés</a>
                            <a class="dropdown-item" href="#">Restaurantes</a>
                            <a class="dropdown-item" href="#">Lanchonetes</a>
                            <a class="dropdown-item" href="#">Bares</a>
                            <a class="dropdown-item" href="#">Baladas</a>
                        </div>
                    </li>
                </ul>



            </section>
        )
    }
}

export default Filtro