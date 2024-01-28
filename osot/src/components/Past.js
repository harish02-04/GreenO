import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';

const Past = ({meth}) => {
    const [imgdet,setimg]=useState();
    const [emp,setemp]=useState(true);
    const [pro,setpro]=useState(0);
    const updet = async (studentMail)=>{
      try {
        const response = await fetch(`http://localhost:5000/getUploadDetails`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ mail: localStorage.getItem("mail") }),
        });
    
        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("location",data.location);
          localStorage.setItem("Uploads",data.noofuploads);
        } else {
  
          console.error('Failed to fetch student details');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
    const fetchImageDetails = async () => {
        try {
          const response = await fetch('http://localhost:5000/getImage', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ registerNum: localStorage.getItem('registerNum') }),
          });
      
          if (response.ok) {
            const data = await response.json();
            // Set the image details in your component state or handle as needed
            setimg(data);
            setemp(data.length===0);
          } else {
            console.error('Failed to fetch image details');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
      useEffect(()=>{
       fetchImageDetails();
       updet();
       var p=(100/8)*Number(localStorage.getItem("Uploads"));
       console.log(p);
       setpro(p);
      },[])
      console.log(imgdet);
   


      const loadAnimation = keyframes`
      0% { width: 0; }
      100% { width: ${pro}%; }
    `;
    
    const StyledProgressContainer = styled.div`
      background: black;
      justify-content: flex-start;
      border-radius: 100px;
      align-items: center;
      position: relative;
      padding: 0 5px;
      display: flex;
      
      height: 40px;
      width: 800px;
    `;
    
    const StyledProgressValue = styled.div`
      animation: ${loadAnimation} 3s normal forwards;
      box-shadow: 0 10px 40px -10px #fff;
      border-radius: 100px;
      background: #60DE38;
      height: 30px;
      width: 0;
    
      overflow: hidden;
      transition: width 0.3s ease-in-out;
      &:hover {
        width: 100%;
        cursor: pointer;
    
        &:before {
          content: attr(data-tooltip);
          position: absolute;
          top: 50%;
          left: 50%;
          font-weight:bold;
          transform: translate(-50%, -50%);
          padding: 5px;
          background:;
          color: white;
          border-radius: 5px;
          white-space: nowrap;
          visibility: visible;
          opacity: 1;
          z-index: 2;
        }
      }
    `;
  return (
    <div class="imgpast">
    <div style={{ marginTop: '20px' }}>
      
 
      {pro!=0 && <div style={{ width: 1400 ,backgroundColor:'#ACE640',padding:30,borderRadius:30,marginLeft:30}}>
          <h2 style={{fontFamily:'cursive',fontSize:30,marginLeft:25}}>My Progress</h2><br/>
          <p style={{fontFamily:'cursive',marginTop:0,fontWeight:'bolder'}}>Track your progress with the interactive bar below, providing a visual representation of your journey towards completion.</p>
          <br/>
          <StyledProgressContainer>
      <StyledProgressValue data-tooltip={`${localStorage.getItem("Uploads")} out of 8 uploads`} />
    </StyledProgressContainer>
    
</div>}<br/>
      <div style={{ width: 1400 ,backgroundColor:'#ACE640',padding:10,borderRadius:30,marginLeft:30}}>     
      <h2 style={{fontFamily:'cursive',fontSize:32,marginLeft:40}}>Snapshots</h2><br/><br/>
       <div className="image-container" >
        {pro==0 &&<div style={{display: 'flex'}}><div>       <figure style={{borderRadius:10} } className={`wave sender`}
            >
              <img style={{borderRadius:10}} src={"https://www.ugaoo.com/cdn/shop/articles/shutterstock_417312760.jpg?v=1661869375"} />
              <figcaption style={{backgroundColor:'#81FF62',marginTop:0}}>
              <h3 style={{fontFamily:'cursive',fontSize:35}}>Plant Now !</h3>
              </figcaption>
            
            </figure>
            
            </div>
            <div>
              <p style={{ marginLeft: 30, flex: 1, maxWidth: 500, boxSizing: 'border-box', wordWrap: 'break-word', whiteSpace: 'pre-wrap',textAlign:'justify' }}>Let's work together to create a greener and more sustainable world. Join us in the journey towards a healthier planet by planting your tree today!</p>
              <br/><br/>
              <center><button onClick={()=>meth("Uimg")} style={{borderRadius:10,padding:10,fontSize:20,border:5,backgroundColor:'#AF5DF3',transition: 'background-color 0.3s'}}
        onMouseOver={(e) => e.target.style.backgroundColor = '#AF5DF3'} 
        onMouseOut={(e) => e.target.style.backgroundColor = '#AF5DF3'}
    ><i class="uil uil-upload"/> 𝒖𝒑𝒍𝒐𝒂𝒅</button></center>
            </div>
            </div> 
            }
        {imgdet &&
          
          imgdet.map((img, index) => (
            <div>       <figure style={{borderRadius:10}}
              key={index}
              className={`wave ${index % 2 === 0 ? 'sender' : 'receiver'}`}
            >
              <img style={{borderRadius:10}} src={img.url} alt={`Image ${index + 1}`} />
              <figcaption style={{backgroundColor:'#81FF62',marginTop:0}}>
              <h3 style={{fontFamily:'cursive'}}>SpiceName: <b style={{color:'black'}}>{img.species}</b></h3>
                <h3 style={{fontFamily:'cursive'}}>Semester: <b style={{color:'black'}}>{img.sem}</b></h3>
                <p style={{fontFamily:'cursive',fontSize:20}}><i style={{color:'black'}} class="uil uil-map-marker-alt"/>{"RMK Engineering College"}</p>
              </figcaption>
              
            </figure>
            
            </div>
     
            
          ))}
      </div></div>

    </div>
    </div>
  )
}
export default Past;
