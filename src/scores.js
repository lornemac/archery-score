import React, { Component } from 'react';

class ScoreList extends Component{

  constructor(props, context){
      super(props, context);
      this.createScores = this.createScores.bind(this);

  }

  delete(key){
    this.props.delete(key);
  }

  createScores(score){
    var scorecolour = "score"+score.score;
    return <div className={`col scoretext ${scorecolour}`}  key={score.key}>{score.score}</div>

  }





    render(){

        var allScores = this.props.allscores;
        var lastThree = allScores.slice(0,3);
        var scoreList = lastThree.map(this.createScores)




        return(

<div className="headerArea">
            <div className="endnumber">End: {this.props.end}</div>
            <div className="row">{scoreList}</div>
</div>

        );


    }


};

export default ScoreList;
