import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class LinkHeader extends Component {
    render(props) {
        return (
           <li className = "nav-item">
               <Link to = {this.props.url} className = "nav-link">{this.props.nome}</Link>
           </li>
        )
    }
}

export default LinkHeader