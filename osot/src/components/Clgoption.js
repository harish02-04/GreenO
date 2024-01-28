import React from "react";

const Clgoption = ({ cfun }) => {
  return (
    <div>
      <select id="cop" onChange={(ev) => cfun("cname", ev.target.value)}>
        <option value="">𝘾𝙤𝙡𝙡𝙚𝙜𝙚𝙉𝙖𝙢𝙚</option>
        <option value="R.M.K. Engineering College">
          R.M.K. Engineering College
        </option>
        <option value="Indian Institute of Technology Madras">
          Indian Institute of Technology Madras
        </option>
        <option value="National Institute of Technology,Tiruchirappalli">
          National Institute of Technology,Tiruchirappalli
        </option>
        <option value="Vellore Institute of Technology">
          Vellore Institute of Technology
        </option>
        <option value="Anna University">Anna University</option>
        <option value="Amrita Vishwa Vidyapeetham">
          Amrita Vishwa Vidyapeetham
        </option>
        <option value="S.R.M. Institute of Science and Technology">
          S.R.M. Institute of Science and Technology
        </option>
        <option value="Sri Sivasubramaniya Nadar College of Engineering">
          Sri Sivasubramaniya Nadar College of Engineering
        </option>
        <option value="Sathyabama Institute of Science and Technology">
          Sathyabama Institute of Science and Technology
        </option>
        <option value="PSG College of Technology">
          PSG College of Technology
        </option>
        <option value="Sri Krishna College of Engineering and Technology">
          Sri Krishna College of Engineering and Technology
        </option>
        <option value="Thiagarajar College of Engineering">
          Thiagarajar College of Engineering
        </option>
        <option value="Rajalakshmi Engineering College">
          Rajalakshmi Engineering College
        </option>
        <option value="Coimbatore Institute of Technology">
          Coimbatore Institute of Technology
        </option>
        <option value="Kumaraguru College of Technology">
          Kumaraguru College of Technology
        </option>
        <option value=" Kongu Engineering College">
          Kongu Engineering College
        </option>
        <option value="NIT Trichy">NIT Trichy</option>
        <option value=" Sri Sairam Engineering College">
          Sri Sairam Engineering College
        </option>
        <option value="Government College of Technology">
          Government College of Technology
        </option>
        <option value=" National Engineering College">
          National Engineering College
        </option>
        <option value=" Sona College of Technology">
          {" "}
          Sona College of Technology
        </option>
        <option value=" Chennai Institute of Technology">
          {" "}
          Chennai Institute of Technology
        </option>
        <option value=" Easwari Engineering College">
          Easwari Engineering College
        </option>
        <option value="Indian Institute of Information Technology, Kancheepuram">
          Indian Institute of Information Technology, Kancheepuram
        </option>
        <option value="Kalasalingam Academy of Research and Education">
          Kalasalingam Academy of Research and Education
        </option>
        <option value="R.M.D. ENGINEERING COLLEGE">
          R.M.D. ENGINEERING COLLEGE
        </option>
        <option value="THANTHAI PERIYAR GOVT INSTITUTE OF TECHNOLOGY">
          THANTHAI PERIYAR GOVT INSTITUTE OF TECHNOLOGY
        </option>
        <option value="PANIMALAR INSTITUTE OF TECHNOLOGY">
          PANIMALAR INSTITUTE OF TECHNOLOGY
        </option>
        <option value="R.M.K. COLLEGE OF ENGINEERING AND TECHNOLOGY">
          R.M.K. COLLEGE OF ENGINEERING AND TECHNOLOGY
        </option>
        <option value="VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY">
          VELAMMAL COLLEGE OF ENGINEERING AND TECHNOLOGY
        </option>
        <option value="UNIVERSITY COLLEGE OF ENGINEERING, NAGERCOIL">
          UNIVERSITY COLLEGE OF ENGINEERING, NAGERCOIL
        </option>
        <option value="SARANATHAN COLLEGE OF ENGINEERING">
          SARANATHAN COLLEGE OF ENGINEERING
        </option>
        <option value="SRI VENKATESWARA COLLEGE OF ENGINEERING">
          SRI VENKATESWARA COLLEGE OF ENGINEERING
        </option>
      </select>
    </div>
  );
};

export default Clgoption;
