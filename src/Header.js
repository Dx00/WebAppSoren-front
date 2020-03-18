import React, {Component} from 'react'
import Logo from './images/Soren.png';
import { Link } from 'react-router-dom'
import LinkHeader from '../src/components/LinkHeader'

class Header extends Component {
    render() {
        return (
        
        <header className = "header bd-navbar">
            <nav class="navbar navbar-expand-lg shadow-sm p-3 bg-white rounded navbar-light bg-white navbar-nav-scroll">
                <div className = 'container-fluid'>
                <div class="d-flex align-items-center"><a class="navbar-brand py-1"><img src={Logo} style={{ width: 200+"px"}}/></a>
            <form action="#" id="search" class="form-inline d-none d-sm-flex">
            </form>
            </div>
        <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right collapsed"><i class="fa fa-bars"></i>
        <span class="navbar-toggler-icon"></span>
        </button>

            <div id="navbarCollapse" class="navbar-collapse collapse">
                <ul class="navbar-nav ml-auto">
                        <LinkHeader url =  "/" nome = "PÁGINA INICIAL"></LinkHeader>
                        <LinkHeader url =  "/sobre" nome = "SOBRE"></LinkHeader>
                        <LinkHeader url =  "/entrar" nome = "ENTRAR"></LinkHeader>
                    
                        <li class="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block"><Link to="/locais" class="btn btn-primary">LOCAIS AMIGÁVEIS</Link></li>
                        
                </ul>
            </div>
            </div>
            </nav>

        </header>

        )
    }
}

export default Header