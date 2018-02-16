import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import _ from 'lodash';

class PastScores extends Component{



    render(){

const columns =  [{Header: 'End', accessor: 'end'},
                  {Header: 'Arrow 1', accessor:'score'},
                  {Header: 'Arrow 2', accessor:'score'},
                  {Header: 'Arrow 3', accessor:'score'}];


var endGroups = _.groupBy(this.props.allscores, 'end');

var finalGroups = Object.keys(endGroups).map(function (key){return endGroups[key]; });

console.log("endgrouping: ",finalGroups);

        return(

          <ReactTable data={finalGroups} columns={columns} />

        );


    }


};

export default PastScores;
