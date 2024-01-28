import React, { useState ,useRef,useEffect} from 'react';
import { storage } from '../Firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { toast } from "react-toastify";
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  width: 80vw;  /* Adjust the width based on your design */
  height: ${(props) => (props.modHeight ? '95vh' : '70vh')};  /* Adjust the height based on your design */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    left:60%;
    width: 80vw;  /* Adjust the width for smaller screens */
    height: ${(props) => (props.modHeight ? '90vh' : '70vh')};  /* Adjust the height for smaller screens */
  }

  /* ... (other styles) */
`;

const CloseButton = styled.button`
  font-size: 30px;
  width: 30px;
  border: 0;
  background-color: white;
  cursor: pointer;
`;

const PopupTitle = styled.h3`
  color: black;
  font-size: 30px;
  margin-top: 20px;
`;

const InputLabel = styled.label`
  font-size: 20px;
  padding-right:3px;
`;

const TextInput = styled.input`
  font-family: cursive;
  padding: 5px;
  border-radius: 6px;
  margin-bottom: 20px;
`;

const LocationButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: 0;
  background-color: #76ff82;
  margin-bottom: 20px;
  cursor: pointer;
`;

const LocationText = styled.p`
  font-family: cursive;
  font-size: 20px;
  color: red;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadImageButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: 0;
  background-color: #76ff82;
  margin-bottom: 20px;
  cursor: pointer;
`;

const UploadedImageText = styled.p`
  font-family: cursive;
  font-size: 20px;
  color: red;
`;

const UploadedImageContainer = styled.div`
  margin-top: 20px;
`;

const VerifyButton = styled.button`
  padding: 5px;
  border-radius: 10px;
  width: 150px;
  font-size: 20px;
  border: 0;
  background-color: #af5df3;
  cursor: pointer;
`;

const Popup = ({ handleClose, handleImageChange, fileInputRef, handleVerify, image, location, setspecies, vloc }) => (
  <PopupContainer modHeight={image===null?false:true}>
    <CloseButton onClick={handleClose}><i className="uil uil-times-circle"></i></CloseButton>
    <br /><br />
    <PopupTitle>𝑺𝒏𝒂𝒑 𝒕𝒉𝒆 𝒑𝒍𝒂𝒏𝒕!</PopupTitle>
    <br /><br />
    <InputLabel>𝑺𝒑𝒆𝒄𝒊𝒆𝒔 𝑵𝒂𝒎𝒆</InputLabel>
    <TextInput type="text"  onChange={(ev) => setspecies(ev.target.value)} />
    <br />
    <LocationButton onClick={vloc}><i className="uil uil-location-point"></i> 𝑨𝒄𝒄𝒆𝒔𝒔 𝑳𝒐𝒄𝒂𝒕𝒊𝒐𝒏</LocationButton>
    <LocationText><i className="uil uil-map-marker-alt" />{location}</LocationText>
    <FileInput type="file" accept="image/*" onChange={handleImageChange} ref={fileInputRef} />
    <br /><br />
    <UploadImageButton onClick={() => fileInputRef.current.click()}><i className="uil uil-camera"></i> 𝑼𝒑𝒍𝒐𝒂𝒅 𝑰𝒎𝒂𝒈𝒆</UploadImageButton>
    {image === null && <UploadedImageText><i className="uil uil-image-alt-slash" style={{ color: 'red' }}></i> Not uploaded</UploadedImageText>}
    {image && (
      <UploadedImageContainer>
        <h3><i style={{ color: 'green' }} className="uil uil-check-circle" />𝒖𝒑𝒍𝒐𝒂𝒅𝒆𝒅</h3>
        <img src={image} alt="Uploaded Preview" style={{ width: '300px', height: '200px', borderRadius: '20px' }} />
      </UploadedImageContainer>
    )}
    
    <br />
    <center><VerifyButton onClick={handleVerify}>𝑽𝒆𝒓𝒊𝒇𝒚</VerifyButton></center>
  </PopupContainer>
);
const Container = styled.div`
  padding: 30px;
`;
const InfoContainer = styled.div`
  width: 100%;
  background-color: #ACE640;
  padding: 30px;
  border-radius: 30px;
`;

const InfoTitle = styled.h1`
  font-family: cursive;
  color: black;
  font-size: 1.5em;
  margin-left: 30px;
`;

const InfoText = styled.div`
  padding: 20px;
  font-size: 1em;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
    align-items: center;
    padding:5px;
    font-size: 1.2em;
  }

  @media screen and (max-width: 600px) {
    font-size: 0.8em; /* Adjust font size for smaller screens */
    padding: 10px; /* Adjust padding for smaller screens */

    li {
      font-size: 1em; /* Adjust font size for list items on smaller screens */
    }
  }
`;

const Icon = styled.i`
  color: green;
  font-size: 1.5em;
  margin-right: 10px;

  @media screen and (max-width: 600px) {
    font-size: 1.2em; /* Adjust icon size for smaller screens */
    margin-right: 0; /* Remove right margin on smaller screens */
    margin-bottom: 5px; /* Add bottom margin for spacing in the column layout */
  }
`;
const Imgup = () => {
  useEffect(()=>{
    toast.success("Read the guidelines properly", {
      position: toast.POSITION.TOP_CENTER,
    });
  },[])
  const [ploc,setploc]=useState("");
  const [pup,setpup]=useState(0);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [location,setlocation]=useState("No location updated");
  const [spec,setspecies]=useState("");
    const [image, setImage] = useState(null);
    const [selectedimg,setselectedimg]=useState(null);
    const fileInputRef = useRef(null);
  const updet = async (studentMail)=>{
    try {
      const response = await fetch(`http://localhost:5000/getUploadDetails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: studentMail }),
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


  const UpdateLocation = async (email,loc) => {
    try {
      const response = await fetch('http://localhost:5000/updateLocation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: email, newLocation:loc }),
      });

      if (response.ok) {
        console.log('Location updated successfully');
      } else if (response.status === 404) {
        console.log('Student not found or location not updated');
      } else {
        console.error('Failed to update location');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const UpdateUploads = async (email,ups) => {
    try {
      const response = await fetch('http://localhost:5000/updateUploads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: email, noofuploads:ups }),
      });

      if (response.ok) {
        console.log(' updated successfully');
      } else if (response.status === 404) {
        console.log('Student not found');
      } else {
        console.error('Failed to update');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const AddImage = async (durl,ups) => {

    try {
      const response = await fetch('http://localhost:5000/addImage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({sname:localStorage.getItem("sname"),registerNum:localStorage.getItem("registerNum"),sem:ups,url:durl,species:spec}),
      });

      if (response.ok) {
        console.log('Image added successfully');
        // Reset the form or perform any other action upon successful submission
      } else {
        console.error('Failed to add Image');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };










  const handleImageChange = (event) => {
    const selectedImage = event.target.files[0];
    setselectedimg(selectedImage);
    if (selectedImage) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(selectedImage);
    } else {
      setImage(null);
    }
  };
  const Verifylocation =()=>{
    if(ploc===""){
       UpdateLocation(localStorage.getItem("mail"),location);
       return "True";
    }
    else if(ploc===location){
      return "True";
    }
    return "False";
  }
  const handleVerify = async (event) => {
    event.preventDefault();
    updet(localStorage.getItem("mail"));
    const lflg=Verifylocation();
    if(lflg==="True"){    const selectedImage = selectedimg;
    if (selectedImage) {
      updet(localStorage.getItem("mail"))
  .then(() => {
    console.log("updet method completed"+pup);

    const imageRef = ref(storage, `images/rmk/${localStorage.getItem("registerNum")}/${Number(localStorage.getItem("Uploads"))+1}/${selectedImage.name}`);
    uploadBytes(imageRef, selectedImage).then((snapshot) => {
      // Get the download URL
      getDownloadURL(snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          AddImage(downloadURL,Number(localStorage.getItem("Uploads"))+1);
      }).catch((error) => {
          // Handle errors while getting the download URL
          console.error("Error getting download URL:", error);
      });
  }).catch((error) => {
      // Handle errors while uploading the image
      console.error("Error uploading image:", error);
  });
  })
  .then(() => {
    console.log("Image uploaded successfully");

    UpdateUploads(localStorage.getItem("mail"), Number(localStorage.getItem("Uploads"))+1);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
  handleButtonClick();
  toast.success("Uploaded Successfully", {
    position: toast.POSITION.TOP_CENTER,
  });

    } else {
      setImage(null);
    }}
    else{
      console.log("Location Invalid");
    }

  };
  

    const handleButtonClick = () => {
      setPopupOpen(!isPopupOpen);
      setImage(null);
      setlocation("No location updated");
    };
  const vloc=()=>{
    setlocation("RMK Engineering College");
  }
  console.log(ploc);
  console.log(pup);
  return (
  <Container>
  <InfoContainer>
  
    <InfoTitle>Guidelines</InfoTitle>
    <InfoText>
      <ul>
        <li><Icon className="uil uil-check-circle" /> Understand that you have been given a sapling as part of a special project.</li>
        <li><Icon className="uil uil-check-circle" />The goal is to nurture and track the growth of your sapling over time.</li>
        <li><Icon className="uil uil-check-circle" />Ensure your sapling is adequately watered. Learn about the specific water needs of the tree species.</li>
        <li><Icon className="uil uil-check-circle" />Place the sapling in an area where it receives appropriate sunlight.</li>
        <li><Icon className="uil uil-check-circle" />Take measures to protect your sapling from extreme weather conditions.</li>
        <li><Icon className="uil uil-check-circle" />Upload a picture of your sapling every three months. This helps track its growth over time.</li>
        <li><Icon className="uil uil-check-circle" />Capture clear images of the entire sapling including the leaves, stem.</li>
        <li><Icon className="uil uil-check-circle" />Allow the app to access your location when uploading pictures.</li>
        <li><Icon className="uil uil-check-circle" />Ensure your location is accurate. If there are any issues, contact support.</li>
        <br/>
        <center><button onClick={handleButtonClick} style={{borderRadius:10,padding:10,fontSize:20,border:5,backgroundColor:'#AF5DF3',transition: 'background-color 0.3s'}}
        onMouseOver={(e) => e.target.style.backgroundColor = '#AF5DF3'} 
        onMouseOut={(e) => e.target.style.backgroundColor = '#AF5DF3'}
    ><i class="uil uil-upload"/> 𝒖𝒑𝒍𝒐𝒂𝒅</button></center>
      </ul>
    </InfoText>

  </InfoContainer>





    {isPopupOpen && (
         <Popup
            handleClose={handleButtonClick}
            handleImageChange={handleImageChange}
            fileInputRef={fileInputRef}
            handleVerify={handleVerify}
            image={image}
            location={location}
            setspecies={setspecies}
            vloc={vloc}
          />
        )}

    </Container> 
  );
};

export default Imgup;
