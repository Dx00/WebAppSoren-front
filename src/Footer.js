import React, {Component} from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className="container-fluid bg-light" style={{fontFamily:"Spartan"}}>
                <div className="border-top text-center py-3">
                   <p className="p-0 m-0 font-weight-bolder"> © Copyright 2020 - All Rights Reserved </p>
                </div>
            </footer>
        )
    }
}

export default Footer