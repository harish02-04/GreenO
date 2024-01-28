import React from 'react';
import BarChart from './Barchart';
import Ctable from './Ctable';
const Stats = () => {
    const data = [65, 59, 80, 81, 56, 55, 40,45,67];
  const labels = ['CSE', 'IT', 'Mech', 'EIE', 'CSBS', 'AIDS', 'Civil','ECE','EEE'];

  return (
    <div>
        <div style={{ width: '60%', margin: 'auto',marginTop:40,backgroundColor:'',borderRadius:20}}>
    
        
        <BarChart   data={data} labels={labels}/>    
        </div>
        
    
        <h3 style={{fontFamily:'cursive',fontSize:30,padding:10,marginLeft:370,marginTop:0}}>Enrollment - Uploads</h3>
    <div style={{backgroundColor:'',width:1100,marginLeft:340,borderRadius:10}}>
        <Ctable /></div>
    
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Roboto, sans-serif',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0',
    padding:'0',
  },
  mainContainer: {
    marginBottom:'240px',
    background: '#444e80',
    color: '#abafc6',
    borderRadius: '10px',
    padding: '50px',
    width: '1000px',
    height: '350px',
  },
  yearStats: {
    whiteSpace: 'nowrap',
    maxHeight: '170px',
    overflow: 'hidden',
    overflowX: 'auto',
  },
  
  
  monthGroup: {
    cursor: 'pointer',
    maxWidth: '400px',
    height: '110px',
    margin: '10px',
    display: 'inline-block',
  },
  bar: {
    backgroundColor: '#abafc6',
    width: '40px',
    borderRadius: '5px',
    marginBottom: '10px',
    transition: 'background 0.3s ease-in-out',
  },
  month: {
    margin: '20px',
  },
  info: {
    marginTop: '15px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
  },
};

const months = [
  { name: 'CSE', height: '200%' },
  { name: 'IT', height: '150%' },
  { name: 'AIDS', height: '175%' },
  { name: 'EIE', height: '125%' },
  { name: 'CSBS', height: '200%' },
  { name: 'Civil', height: '150%' },
  { name: 'ECE', height: '175%' },
  { name: 'EEE', height: '125%' },
  { name: 'Mech', height: '150%' },
];

export default Stats;
