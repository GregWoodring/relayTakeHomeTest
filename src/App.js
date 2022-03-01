
import React, {useEffect} from 'react';
import './App.scss';
import axios from 'axios'
import { connect } from 'react-redux';
import { addVoterArray } from './reducers/votersReducer';
import Header from './components/Header/Header';
import DataTable from './components/DataTable/DataTable';

function App(props) {
  useEffect(() => {
    axios.get('https://phl.carto.com/api/v2/sql?q=SELECT+*+FROM+qualified_voter_listing_2018_primary_by_ward&filename=qualified_voter_listing_2018_primary_by_ward&format=json&skipfields=cartodb_id')
        .then(({data}) => {
            //fetching data asynchronously to not halt page load
            //this could be improved further using redux-promise-middleware 
            //to display loading animations while awaiting the promise
            props.addVoterArray(data.rows); 
            
        }).catch(err => console.error(err));

}, [])
  return (
    <div className="App">
      <Header />
      <DataTable />
    </div>
  );
}

export default connect(()=>{return  {}}, {addVoterArray})(App);
