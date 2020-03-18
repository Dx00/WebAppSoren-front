import React, {Component} from 'react'
import Logo from 'C:/Desenvolvimento/soren-bootstrap/src/images/soren.png'
import './styles/Header.css'
import { Link } from 'react-router-dom'
import LinkHeader from '../src/components/LinkHeader'

class HeaderUser extends Component {
    render() {
        return (
        
        <header>
            <nav class="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
                <div className = 'container-fluid'>
  <a class="navbar-brand" href="#"><img src = {Logo} className="logotipo"/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse collapse" id="navbarCollapse">
    <ul class="navbar-nav ml-auto">
            <LinkHeader url =  "/" nome = "PÁGINA INICIAL"></LinkHeader>
            <LinkHeader url =  "/sobre" nome = "SOBRE"></LinkHeader>
            <LinkHeader url =  "/login" nome = "PERFIL"></LinkHeader>
            <LinkHeader url =  "/cadastro" nome = "FAVORITOS"></LinkHeader>
            <li class="nav-item mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block"><Link to="/locais" class="btn btn-primary">LOCAIS AMIGÁVEIS</Link></li>
              
    </ul>
  </div>
  </div>
</nav>

        </header>

        )
    }
}

export default HeaderUser