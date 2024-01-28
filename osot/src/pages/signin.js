import React, { useState, useEffect } from "react";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Clgoption from "../components/Clgoption";
import Depoption from "../components/Depoption";
import { toast } from "react-toastify";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  localStorage.setItem("auth",0);
  useEffect(() => {
    var option = document.getElementById("opt");
    var clg = document.getElementById("clg");
    var stu = document.getElementById("stu");
    var l = document.getElementById("log");
    var s1 = document.getElementById("s1");
    var m = document.getElementById("m");
    var clog = document.getElementById("clog");
    var cop = document.getElementById("cop");
    var sp = document.getElementById("sp");
    clg.style.display = "none";
    stu.style.display = "none";
    l.addEventListener("click", (ev) => {
      clg.style.display = "none";
      stu.style.display = "none";
      option.style.display = "block";
      m.style.height = "570px";
      s1.style.fontSize = "15px";
    });
    s1.addEventListener("click", (ev) => {
      clg.style.display = "none";
      option.style.display = "block";
      m.style.height = "500px";
      s1.style.fontSize = "30px";
    });

    clog.addEventListener("click", (ev) => {
      option.style.display = "none";
      stu.style.display = "none";
      clg.style.display = "block";
      cop.style.width = "320px";
      m.style.height = "700px";
    });
    sp.addEventListener("click", (ev) => {
      option.style.display = "none";
      clg.style.display = "none";
      stu.style.display = "block";
      cop.style.width = "470px";
      m.style.height = "850px";
    });
  }, []);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [lemail, setlemail] = useState("");
  const [lpass, setlpass] = useState("");

  const [cemail, setcemail] = useState("");
  const [semail, setsemail] = useState("");
  const [utype, setutype] = useState("");
  const [clg, setclg] = useState({
    fname:"",
    cem: "",
    cname: "",
    pname: "",
    poc: "",
    mno: "",
  });
  const [stu, setstu] = useState({
    sem: "",
    sname: "",
    mno: "",
    cname: "",
    reg: "",
    dep: "",
    semno: "",
    yog: "",
    ano: "",
    state:"",
    dis:"",
    noofuploads:0,
    location:"",
  });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [cpass, setcpass] = useState("");
  const [spass, setspass] = useState("");
  const [type,settype]=useState("");

  const change_clg = (att, val) => {
    const p = { ...clg };
    p.cem = cemail;
    if(att==="fname"){
      p.fname=val;
    }
    else if (att === "cname") {
      p.cname = val;
    } else if (att === "pname") {
      p.pname = val;
    } else if (att === "mno") {
      p.mno = val;
    } else if (att === "poc") {
      p.poc = val;
    } else if (att === "uid") {
      p.uid = val;
    }
    setclg(p);
  };

  const change_stu = (att, val) => {
    const k = { ...stu };
    k.sem = semail;
    if (att === "sname") {
      k.sname = val;
    } else if (att === "cname") {
      k.cname = val;
    } else if (att === "mno") {
      k.mno = val;
    } else if (att === "reg") {
      k.reg = val;
    } else if (att === "dep") {
      k.dep = val;
    } else if (att === "semno") {
      k.semno = val;
    } else if (att === "yog") {
      k.yog = val;
    } else if (att === "ano") {
      k.ano = val;
    }
    else if (att === "state") {
        k.state = val;
      }
      else if (att === "dis") {
        k.dis = val;
      }
    setstu(k);
  };
  const AddCollege = async () => {

    try {
      const response = await fetch('http://localhost:5000/addCollege', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clg),
      });

      if (response.ok) {
        console.log('College added successfully');
        // Reset the form or perform any other action upon successful submission
      } else {
        console.error('Failed to add college');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };


  const AddStudent = async () => {

    try {
      const response = await fetch('http://localhost:5000/addStudent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(stu),
      });

      if (response.ok) {
        console.log('Student added successfully');
        // Reset the form or perform any other action upon successful submission
      } else {
        console.error('Failed to add student');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const fetchSName = async (studentMail) => {
    try {
      const response = await fetch(`http://localhost:5000/getStudentDetails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: studentMail }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("mail", data.mail);
        localStorage.setItem("sname", data.sname);
        localStorage.setItem("registerNum", data.registerNum);
      } else {
        console.error('Failed to fetch student details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const fetchCName = async (CMail) => {
    try {
      const response = await fetch(`http://localhost:5000/getCollegeDetails`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mail: CMail }),
      });
  
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("mail", data.mail);
        localStorage.setItem("cname", data.clgname);
        localStorage.setItem("fname", data.fname);
      } else {
        console.error('Failed to fetch College details');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };





















  const handlestudent = (ev) => {
    ev.preventDefault();
    createUserWithEmailAndPassword(auth, semail, spass)
      .then((userCredential) => {
        AddStudent();
        toast.success("Account created", {
          position: toast.POSITION.TOP_CENTER,
        });
        toast.info("Login again!!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          // Email is already in use, handle this error
          toast.warning("Account is already in use", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          // Handle other authentication errors
          console.error("Error creating user:", err.message);
        }
      });
    document.getElementById("fs").reset();
  };

  const handlecollege = (ev) => {
    ev.preventDefault();
    createUserWithEmailAndPassword(auth, cemail, cpass)
      .then((userCredential) => {
        AddCollege();
        toast.success("Account created", {
          position: toast.POSITION.TOP_CENTER,
        });
        toast.info("Login again!!", {
          position: toast.POSITION.TOP_CENTER,
        });
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          // Email is already in use, handle this error
          toast.warning("Account is already in use", {
            position: toast.POSITION.TOP_CENTER,
          });
        } else {
          // Handle other authentication errors
          console.error("Error creating user:", err.code);
        }
      });
    document.getElementById("fc").reset();
  };

  const handlelogin = (ev) => {
    ev.preventDefault();
    signInWithEmailAndPassword(auth, lemail, lpass)
      .then((userCredential) => {
        if (type === "Student") {
          fetchSName(lemail);
          localStorage.setItem("auth", 1);

          // Display the success toast
          toast.success("Login Successful!", {
            position: toast.POSITION.TOP_CENTER,
          });

          // Redirect to "/shome" after 3 seconds
          setTimeout(() => {
            navigate("/shome");
          }, 2000);
        }
        if (type === "College") {
          fetchCName(lemail);
          localStorage.setItem("auth", 1);

          // Display the success toast
          toast.success("Login Successful!", {
            position: toast.POSITION.TOP_CENTER,
          });

          // Redirect to "/shome" after 3 seconds
          setTimeout(() => {
            navigate("/chome");
          }, 2000);
        }
      })
      .catch((err) => {
        toast.warning("Invalid user details!", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log(err);
      });
    document.getElementById("fs").reset();
  };
  console.log(type);
  return (
    <div class="landing">
      <ToastContainer></ToastContainer>
      <center>
        <h1 class="tit">🍃𝑮𝒓𝒆𝒆𝒏𝑶🍃</h1>
      
      <div class="main" id="m">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div id="opt">
          <label for="chk" id="s1" aria-hidden="true">
            𝑺𝒊𝒈𝒏𝑼𝒑
          </label>
          <button class="opt" id="clog">
            𝑪𝒐𝒍𝒍𝒆𝒈𝒆 / 𝑨𝒅𝒎𝒊𝒏
          </button>
          <button class="opt" id="sp">
            𝑺𝒕𝒖𝒅𝒆𝒏𝒕
          </button>
        </div>

        <div id="clg">
          <form onSubmit={handlecollege} id="fc">
            <label for="chk" id="s1" aria-hidden="true">
              𝑪𝒐𝒍𝒍𝒆𝒈𝒆
            </label>
            <input
              type="text"
              name="txt"
              onChange={(ev) => change_clg("fname", ev.target.value)}
              placeholder="𝙁𝙖𝙘𝙪𝙡𝙩𝙮 𝙉𝙖𝙢𝙚"
              required=""
            />
            <input
              type="text"
              name="txt"
              value={cemail}
              onChange={(ev) => setcemail(ev.target.value)}
              placeholder="𝙀𝙢𝙖𝙞𝙡"
              required=""
            />
            <input
              type="text"
              name="txt"
              value={cpass}
              onChange={(ev) => setcpass(ev.target.value)}
              placeholder="𝙋𝙖𝙨𝙨𝙬𝙤𝙧𝙙"
              required=""
            />
            <Clgoption cfun={change_clg}></Clgoption>
            <input
              type="text"
              name="txt"
              placeholder="𝙋𝙧𝙞𝙣𝙘𝙞𝙥𝙖𝙡 𝙉𝙖𝙢𝙚"
              onChange={(ev) => change_clg("pname", ev.target.value)}
              required=""
            />
            <input
              type="text"
              name="txt"
              placeholder="𝙈𝙤𝙗𝙞𝙡𝙚 𝙉𝙪𝙢𝙗𝙚𝙧"
              onChange={(ev) => change_clg("mno", ev.target.value)}
              required=""
            />
            <input
              type="text"
              name="txt"
              placeholder="𝙋𝙊𝘾 𝙉𝙪𝙢𝙗𝙚𝙧"
              onChange={(ev) => change_clg("poc", ev.target.value)}
              required=""
            />
            <button id="but" type="submit">
              Sign up
            </button>
          </form>
        </div>

        <div id="stu">
          <form onSubmit={handlestudent} id="fs">
            <label for="chk" id="s1" aria-hidden="true">
              𝑺𝒕𝒖𝒅𝒆𝒏𝒕
            </label>
            <div id="stu3">
              {" "}
              <input
                type="text"
                name="txt"
                placeholder="𝙉𝙖𝙢𝙚"
                required=""
                onChange={(ev) => change_stu("sname", ev.target.value)}
              />
              <input
                type="text"
                name="txt"
                value={semail}
                onChange={(ev) => setsemail(ev.target.value)}
                placeholder="𝙀𝙢𝙖𝙞𝙡"
                required=""
              />
            </div>

            <div id="stu1">
              {" "}
              <input
                type="text"
                name="txt"
                value={spass}
                onChange={(ev) => setspass(ev.target.value)}
                placeholder="𝙋𝙖𝙨𝙨𝙬𝙤𝙧𝙙"
                required=""
              />
              <input
                type="text"
                name="txt"
                onChange={(ev) => change_stu("mno", ev.target.value)}
                placeholder="𝙈𝙤𝙗𝙞𝙡𝙚 𝙉𝙪𝙢𝙗𝙚𝙧"
                required=""
              />
            </div>
            <div id="stu3">
              <select id="sop" onChange={(ev) => change_stu("state", ev.target.value)}>
                <option>𝙎𝙩𝙖𝙩𝙚</option>
                <option value="TamilNadu">Tamilnadu</option>
                <option value="Kerala">Kerala</option>
              </select>
              <select id="sop" onChange={(ev) => change_stu("dis", ev.target.value)}>
                <option>𝘿𝙞𝙨𝙩𝙧𝙞𝙘𝙩</option>
                <option value="Chennai">Chennai</option>
                <option value="Palakad">Palakad</option>
              </select>
            </div>
            <Clgoption cfun={change_stu}></Clgoption>
            <Depoption dfun={change_stu}></Depoption>
            <div id="stu2">
              <input
                type="text"
                name="txt"
                placeholder="𝘾𝙤𝙡𝙡𝙚𝙜𝙚 𝙍𝙚𝙜𝙞𝙨𝙩𝙚𝙧 𝙉𝙪𝙢𝙗𝙚𝙧"
                onChange={(ev) => change_stu("reg", ev.target.value)}
                required=""
              />{" "}
              <input
                type="text"
                name="txt"
                placeholder="𝙎𝙚𝙢𝙚𝙨𝙩𝙚𝙧"
                onChange={(ev) => change_stu("semno", ev.target.value)}
                required=""
              />
            </div>
            <div id="stu4">
              {" "}
              <input
                type="text"
                name="txt"
                placeholder="𝙔𝙚𝙖𝙧𝙊𝙛𝙂𝙧𝙖𝙙𝙪𝙖𝙩𝙞𝙤𝙣"
                onChange={(ev) => change_stu("yog", ev.target.value)}
                required=""
              />
              <input
                type="text"
                name="txt"
                onChange={(ev) => change_stu("ano", ev.target.value)}
                placeholder="𝘼𝙖𝙙𝙝𝙖𝙧 𝙉𝙪𝙢𝙗𝙚𝙧"
                required=""
              />
            </div>

            <button id="but" type="submit">
              Sign up
            </button>
          </form>
        </div>

        <div class="login">
          <form onSubmit={handlelogin}>
            <label for="chk" id="log" aria-hidden="true">
              𝑳𝒐𝒈𝒊𝒏
            </label>
            <input
              type="email"
              name="email"
              value={lemail}
              onChange={(ev) => setlemail(ev.target.value)}
              placeholder="𝙀𝙢𝙖𝙞𝙡"
              required=""
            />
            <input
              type="password"
              name="pswd"
              value={lpass}
              onChange={(ev) => setlpass(ev.target.value)}
              placeholder="𝙋𝙖𝙨𝙨𝙬𝙤𝙧𝙙"
              required=""
            />
            <center>
              <div class="wrapper">
                <input
                  type="radio"
                  name="select"
                  id="option-1"
                  value="Student"
                  onChange={(ev) => {
                    setutype(ev.target.value);
                  }}
                />
                <input
                  type="radio"
                  name="select"
                  id="option-2"
                  value="College"
                  onChange={(ev) => {
                    setutype(ev.target.value);
                  }}
                />
                <label for="option-1" class="option option-1" onClick={()=>settype("Student")}>
                  <div class="dot"></div>
                  <span>𝙎𝙩𝙪𝙙𝙚𝙣𝙩</span>
                </label>
                <label for="option-2" class="option option-2" onClick={()=>settype("College")}>
                  <div class="dot"></div>
                  <span>𝘾𝙤𝙡𝙡𝙚𝙜𝙚</span>
                </label>
              </div>
            </center>

            <button id="but" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
      </center>
    </div>
  );
};

export default Signin;
