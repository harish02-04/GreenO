const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Harish@123',
  database: 'greeno',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

app.post('/addStudent', (req, res) => {
    const {
      sem,
      sname,
      mno,
      reg,
      semno,
      dep,
      cname,
      state,
      dis,
      yog,
      ano,
      noofuploads,
      location,
    } = req.body;
  
    const sql = `
      INSERT INTO rmkstudent 
      (mail, sname, mobile, registerNum, Sem, Department, clgname, state, district, yog, Adhaar, noofuploads, location)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
  
    const values = [
        sem,
        sname,
        mno,
        reg,
        semno,
        dep,
        cname,
        state,
        dis,
        yog,
        ano,
        noofuploads,
        location,
    ];
  
    db.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error adding student: ' + err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      res.status(200).send('Student added successfully');
    });
  });



  app.post('/addCollege', (req, res) => {
    const { cem, cname, pname, mno, poc,fname } = req.body;
  
    const sql = `
      INSERT INTO rmkclg (mail, clgname, pname, Mobile, pocNum,fname)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
  
    const values = [cem, cname, pname, mno, poc,fname];
  
    db.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error adding college: ' + err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      res.status(200).send('College added successfully');
    });
  });


  app.post('/addImage', (req, res) => {
    const { sname,registerNum,sem,url,species } = req.body;
  
    const sql = `
      INSERT INTO rmkimage (sname,registerNum,sem,url,species)
      VALUES (?, ?, ?, ?, ?)`;
  
    const values = [sname,registerNum,sem,url ,species];
  
    db.query(sql, values, (err, results) => {
      if (err) {
        console.error('Error adding Image: ' + err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      res.status(200).send('Image added successfully');
    });
  });

  app.post('/getImage', (req, res) => {
    const { registerNum } = req.body;
  
    const sql = 'SELECT sname,registerNum,sem,url,species FROM rmkimage WHERE registerNum = ?';
  
    db.query(sql, [registerNum], (err, results) => {
      if (err) {
        console.error('Error fetching image details: ' + err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      res.json(results);
    });
  });
  



  app.post('/getStudentDetails', (req, res) => {
    const { mail } = req.body;
  
    const sql = 'SELECT mail, registerNum, sname FROM rmkstudent WHERE mail = ?';
  
    db.query(sql, [mail], (err, results) => {
      if (err) {
        console.error('Error fetching student details: ' + err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      if (results.length > 0) {
        const { mail,registerNum, sname } = results[0];
        res.json({ mail,registerNum, sname });
      } else {
        res.status(404).send('Student not found');
      }
    });
  });




  app.post('/getCollegeDetails', (req, res) => {
    const { mail } = req.body;
  
    const sql = 'SELECT mail, clgname, fname FROM rmkclg WHERE mail = ?';
  
    db.query(sql, [mail], (err, results) => {
      if (err) {
        console.error('Error fetching student details: ' + err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      if (results.length > 0) {
        const { mail,clgname,fname } = results[0];
        res.json({ mail,clgname,fname });
      } else {
        res.status(404).send('College not found');
      }
    });
  });


  
  app.post('/getUploadDetails', (req, res) => {
    const { mail } = req.body;
  
    const sql = 'SELECT noofuploads, location FROM rmkstudent WHERE mail = ?';
  
    db.query(sql, [mail], (err, results) => {
      if (err) {
        console.error('Error fetching student details: ' + err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      if (results.length > 0) {
        const { noofuploads, location } = results[0];
        res.json({ noofuploads, location });
      } else {
        res.status(404).send('Student not found');
      }
    });
  });


  app.post('/updateLocation', (req, res) => {
    const { mail, newLocation } = req.body;
  
    const sql = 'UPDATE rmkstudent SET location = ? WHERE mail = ?';
  
    db.query(sql, [newLocation, mail], (err, results) => {
      if (err) {
        console.error('Error updating location: ' + err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      if (results.affectedRows > 0) {
        res.send('Location updated successfully');
      } else {
        res.status(404).send('Student not found or location not updated');
      }
    });
  });

  app.post('/updateUploads', (req, res) => {
    const { mail, noofuploads } = req.body;
  
    const sql = 'UPDATE rmkstudent SET noofuploads = ? WHERE mail = ?';
  
    db.query(sql, [noofuploads, mail], (err, results) => {
      if (err) {
        console.error('Error updating location: ' + err.stack);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      if (results.affectedRows > 0) {
        res.send('Location updated successfully');
      } else {
        res.status(404).send('Student not found or location not updated');
      }
    });
  });
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
