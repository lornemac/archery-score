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

    return <td key={score.key} className={scorecolour}>{score.score}</td>




  }


    render(){

        var allScores = this.props.allscores;
        var lastThree = allScores.slice(0,3);
        var scoreList = lastThree.map(this.createScores)




console.log(this.props);

        return(

            <tr>
              <td>{this.props.end}</td>
              {scoreList}
            </tr>

        );


    }


};

export default ScoreList;
