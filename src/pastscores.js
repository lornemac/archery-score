import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class PastScores extends Component{



    render(){

const columns = [{Header: 'End', accessor: 'end'},
                  {Header: 'Arrow 1', accessor:'score'},
                  {Header: 'Arrow 2', accessor:'score'},
                  {Header: 'Arrow 3', accessor:'score'}
];
console.log(this.props.allscores);

        return(

          <ReactTable data={this.props.allscores} columns={columns} />

        );


    }


};

export default PastScores;
