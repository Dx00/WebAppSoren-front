import React, { Component } from 'react';

class Team extends Component {
  render() {
    return (
      <div class="col-lg-4 col-sm-6 pb-5">
        <div class="team-card-style-1 mx-auto">
          <div class="team-card-inner">
            <div class="team-thumb"><img className="img-thumbnail w-75" src={this.props.foto} style={{border:"0", borderRadius:"0", backgroundColor:"transparent"}} alt="foto do desenvolvedor ou desenvolvedora" />
            </div>
            <div class="team-social-bar text-center"><a class="social-btn sb-style-4 sb-github mr-2" style={{color:"#fff", fontSize:"30px"}} href={this.props.github} target=" blank"><i class="fab fa-github-square"></i></a><a href={this.props.linkedin} target=" blank" style={{color:"#fff", fontSize:"30px"}} ><i class="fab fa-linkedin"></i></a></div>
          </div><span class="team-position">{this.props.funcao}</span>
          <h4 class="team-name">{this.props.nome}</h4>
        </div>
      </div>
    )
  }
}

export default Team;