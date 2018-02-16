import React, { Component } from 'react';
import ScoreList from './scores';
import PastScores from './pastscores';


class CurrentEnd extends Component{

constructor(props, context){
super(props, context);

this.state={
  scores: [],
  arrowcounter: 0,
  endnumber: 1
};

this.addCurrentScore = this.addCurrentScore.bind(this);

}

addCurrentScore(event){

var currentScores = this.state.scores;
const re = /^[0-9\b]+$/;

if (this._inputElement.value !== "" || re.test(this._inputElement.value)){
currentScores.unshift({
        score: this._inputElement.value,
        key: Date.now(),
        end: this.state.endnumber
      });
      this.setState({
            scores: currentScores
      });
      this.setState({
        arrowcounter: this.state.arrowcounter+1
      })
      this._inputElement.value="";
}

if (this.state.arrowcounter > 1){
this.setState({endnumber: this.state.endnumber+1});
this.setState({arrowcounter: 0})
}
console.log(currentScores);

event.preventDefault();
};




  render (){
      return(
<div className="container">
  <div className="todoListMain">
    <div className="header">
<form onSubmit={this.addCurrentScore}>
  <input type="number" ref={(a) => this._inputElement = a} placeholder="enter score"></input>
  <button type="submit">add</button>
</form>
</div>
<table className="table table-bordered"><tbody><tr><th>End</th><th>Arrow 1</th><th>Arrow 2</th><th>Arrow 3</th></tr><ScoreList allscores={this.state.scores} end={this.state.endnumber} /></tbody></table>
<PastScores allscores={this.state.scores} />
</div>
</div>

            );
          }
}

export default CurrentEnd;
