import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const BarChart = ({ data, labels }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    // Destroy existing chart before creating a new one
    const existingChart = Chart.getChart(ctx);
    if (existingChart) {
      existingChart.destroy();
    }

    const newChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Students Enrolled',
            data: data,
            color: 'white',
            fontFamily:'cursive',
            backgroundColor: '#1BBD1B',
            borderColor: 'transparent',
            borderWidth: 1,
            barPercentage: 0.7, // Adjust the bar width here (0.7 means 70% of the available width)
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: 'category',
            position: 'bottom',
            ticks: {
                color:  'black', // Set label color
                fontFamily: 'cursive',
                fontWeight:'bold',
              },
          },

          y: {
            beginAtZero: true,
            ticks: {
                color:  'black', // Set label color
                fontFamily: 'cursive',
                fontWeight:'bold',
              },
          },
        },
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false, // Hide the legend
            },
        }
    }
    });

    return () => {
      // Cleanup: destroy the chart when the component unmounts
      newChart.destroy();
    };
  }, [data, labels]);

  return <div>
    <h3 style={{fontFamily:'cursive',fontSize:30,marginLeft:40}}>My College - Analysis</h3><div style={{backgroundColor:'#ACE640',height:400,padding:20,borderRadius:10,fontFamily:'cursive'}}><canvas ref={chartRef} /></div>
    <br/>
    <h3 style={{fontFamily:'cursive',fontSize:30,marginLeft:40}}>Departments Standings</h3>
    <div style={{width:800,backgroundColor:'#f2f3f5',height:500,padding:20,borderRadius:10,fontFamily:'cursive'}}>   
    
<pre style={{fontFamily:'cursive',marginLeft:10,fontSize:25,marginTop:0,color:'white',backgroundColor:'#ACE640',borderRadius:10,color:'black',padding:10,width:700}}><b style={{fontSize:50}}>🥇</b>Information Technology           <CircularProgressbar
  value={55}
  text={`${55}%`}
  styles={{
    root: { width: '100px', backgroundColor: '#848883' ,borderRadius:'50%'},
    path: { stroke: '#1BBD1B' },
    text: { fontSize: '28px', fill: 'black',fontFamily:'cursive' }
  }}
/></pre>
<pre style={{fontFamily:'cursive',marginLeft:10,fontSize:25,marginTop:0,color:'white',backgroundColor:'#ACE640',borderRadius:10,color:'black',padding:10,width:600}}><b style={{fontSize:50}}>🥈</b>Computer Science       <CircularProgressbar
  value={35}
  text={`${35}%`}
  styles={{
    root: { width: '100px', backgroundColor: '#848883' ,borderRadius:'50%'},
    path: { stroke: '#1BBD1B' },
    text: { fontSize: '28px', fill: 'black',fontFamily:'cursive' }
  }}
/></pre>
<pre style={{fontFamily:'cursive',marginLeft:10,fontSize:25,marginTop:0,color:'white',backgroundColor:'#ACE640',borderRadius:10,color:'black',padding:10,width:400}}><b style={{fontSize:50}}>🥉</b>Electrical - ECE     <CircularProgressbar
  value={20}
  text={`${20}%`}
  styles={{
    root: { width: '100px', backgroundColor: '#848883' ,borderRadius:'50%'},
    path: { stroke: '#1BBD1B' },
    text: { fontSize: '28px', fill: 'black',fontFamily:'cursive' }
  }}
/></pre>
</div>
 
    
    </div>
};

export default BarChart;
