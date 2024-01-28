import React from "react";

const Depoption = ({ dfun }) => {
  return (
    <div>
      <select id="cop" onChange={(ev) => dfun("dep", ev.target.value)}>
        <option value="">𝘿𝙚𝙥𝙖𝙧𝙩𝙢𝙚𝙣𝙩/𝘽𝙧𝙖𝙣𝙘𝙝</option>
        <option value="B.Tech.Artificial Intelligence and Data Science">
          B.Tech.Artificial Intelligence and Data Science{" "}
        </option>
        <option value="B.E.Biomedical Engineering">
          B.E.Biomedical Engineering{" "}
        </option>
        <option value="B.Tech.Biotechnology">B.Tech.Biotechnology</option>
        <option value="B.Tech.Chemical Engineering">
          B.Tech.Chemical Engineering
        </option>
        <option value="B.E. Civil Engineering">B.E. Civil Engineering</option>
        <option value="B.Tech Computer Science and Business System">
          B.Tech Computer Science and Business System
        </option>
        <option value="B.E. Computer and Communication Engineering">
          B.E. Computer and Communication Engineering
        </option>
        <option value="B.E. Computer Science and Engineering">
          B.E. Computer Science and Engineering
        </option>
        <option value="B.E. Electronics and Communication Engineering	">
          B.E. Electronics and Communication Engineering{" "}
        </option>
        <option value="B.E. Electrical and Electronics Engineering">
          B.E. Electrical and Electronics Engineering
        </option>
        <option value="B.Tech. Information Technology">
          B.Tech. Information Technology
        </option>
        <option value="B.E. Mechanical Engineering">
          B.E. Mechanical Engineering
        </option>
      </select>
    </div>
  );
};

export default Depoption;
