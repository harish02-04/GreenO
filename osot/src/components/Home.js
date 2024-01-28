
import React from 'react';
import IHome from '../Images/home.jpg';
import styled from 'styled-components';


const Container = styled.div`
  padding: 30px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row; /* Default: row flex layout */
  align-items: center; /* Center elements vertically */
  background-color: #ACE640;
  padding: 10px;
  border-radius: 30px;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    flex-direction: column; /* Switch to column flex layout on smaller screens */
  }
`;

const Image = styled.img`
  border-radius: 20px;
  width: 100%;
  max-width: 400px;
  height: auto; /* Maintain aspect ratio */
`;

const TextContainer = styled.div`
  margin-left: 30px;
  box-sizing: border-box;
  word-wrap: break-word;
  white-space: pre-wrap;
  text-align: justify;
  font-family: cursive;
`;

const Title = styled.h1`
font-family: cursive;

color: black;
font-size: 1.5em;
font-weight:bold;
 
`;

const Description = styled.pre`
  box-sizing: border-box;
  word-wrap: break-word;
  white-space: pre-wrap;
  padding-top:3px;
  text-align: justify;
  font-size: 1.1em;
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


const Home = () => {
  return (
    <Container>
      <FlexContainer>
        <Image src={IHome} alt="" />
        <TextContainer>
          <Title>About Us</Title>
          <Description>
          A sustainable environmental initiative that promotes afforestation by encouraging students to plant and nurture a tree during their academic journey. The project aims to instill a sense of environmental responsibility among students, fostering a connection between education and ecological conservation. By linking each student with the growth of a tree, the initiative contributes to carbon sequestration biodiversity, and overall environmental well-being. It serves as a practical and tangible way for educational institutions to engage their students in fostering a greener and healthier planet. "One Student One Tree" embodies the idea that small individual actions collectively create a significant positive impact on the environment.
          </Description>
        </TextContainer>
      </FlexContainer>

      <br />

      <InfoContainer>
        <InfoTitle>How to use this app?</InfoTitle>
        <InfoText>
          <ul>
            <li><Icon className="uil uil-arrow-circle-right" /> Begin by signing up or logging into the app using your college credentials.</li>
            
            <li><Icon className="uil uil-arrow-circle-right" /> Allow the app to access your location for ensuring the accuracy and legitimacy.</li>
            <li><Icon className="uil uil-arrow-circle-right" /> Upload images of trees you've planted during each semester.</li>
            <li><Icon className="uil uil-arrow-circle-right" /> Any suspicious or unauthorized activities will be reported to the college for verification.</li>
            <li><Icon className="uil uil-arrow-circle-right" /> Explore a dedicated section to view a comprehensive record of your tree planting activities.</li>
            <li><Icon className="uil uil-arrow-circle-right" /> When done, always log out securely to protect your account. This ensures the privacy and security of your data.</li>
          </ul>
        </InfoText>

      </InfoContainer>
    </Container>
  );
};

export default Home;
