import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
`;

const StyledH2 = styled.h2`
  font-size: 26px;
  margin: 20px 0;
  text-align: center;

  small {
    font-size: 0.5em;
  }
`;

const StyledResponsiveTable = styled.ul`
  li {
    border-radius: 3px;
    padding: 25px 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  }

  .table-header {
    font-weight:bold;
    background-color: #ACE640;
    font-size: 14px;
    font-family:cursive;
    text-transform: uppercase;
    letter-spacing: 0;
  }

  .table-row {
    font-weight:bold;
    background-color: #F5F7F4;
    box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  }

  .col-1 {
    flex-basis: 15%;
  }

  .col-2 {
    font-family:cursive;
    flex-basis: 55%;
  }
  .col-5{
    font-family:cursive;
    flex-basis: 25%;
  }

  .col-3 {
    font-family:cursive;
    flex-basis: 25%;
  }

  .col-4 {
    font-family:cursive;
    flex-basis: 25%;
  }

  @media all and (max-width: 767px) {
    .table-header {
      display: none;
    }

    .table-row {
    }

    li {
      display: block;
    }

    .col {
      flex-basis: 100%;
    }

    .col {
      display: flex;
      padding: 10px 0;

      &:before {
        color: #6C7A89;
        padding-right: 10px;
        content: attr(data-label);
        flex-basis: 50%;
        text-align: right;
      }
    }
  }
`;

const Ctable = () => {
  return (
    <StyledContainer>
      <StyledResponsiveTable>
        <li className="table-header">
          <div className="col col-1">Dep Id</div>
          <div className="col col-2">Department</div>
          <div className="col col-3">Uploaded</div>
          <div className="col col-4">Enrolled</div>
        
          <div className="col col-5">Status</div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label="Job Id" >
            IT
          </div>
          <div className="col col-2" data-label="Customer Name">
            Information Technology
          </div>
          <div className="col col-3" data-label="Amount">
          <b>530</b>
          </div>
          <div className="col col-4" data-label="Payment Status">
             700          
          </div>
          <div className="col col-3" data-label="Amount">
          <button style={{backgroundColor:'lightgreen',padding:10,borderRadius:20,fontSize:15}}>Active</button>
          </div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            CSE
          </div>
          <div className="col col-2" data-label="Customer Name">
            Computer Science and Engineering
          </div>
          <div className="col col-3" data-label="Amount">
          <b>350</b>
          </div>
          <div className="col col-4" data-label="Payment Status">
            730
          </div>
          <div className="col col-3" data-label="Amount">
          <button style={{backgroundColor:'lightgreen',padding:10,borderRadius:20,fontSize:15}}>Active</button>
          </div>
        </li>        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            ECE
          </div>
          <div className="col col-2" data-label="Customer Name">
            Electrical and Communication Engineering
          </div>
          <div className="col col-3" data-label="Amount">
          <b>450</b>
          </div>
          <div className="col col-4" data-label="Payment Status">
            670
          </div>
          <div className="col col-3" data-label="Amount">
          <button style={{backgroundColor:'lightgreen',padding:10,borderRadius:20,fontSize:15}}>Active</button>
          </div>
        </li>        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            EEE
          </div>
          <div className="col col-2" data-label="Customer Name">
            Electrical and Electronic Engineering
          </div>
          <div className="col col-3" data-label="Amount">
          <b>433</b>
          </div>
          <div className="col col-4" data-label="Payment Status">
            500
          </div>
          <div className="col col-3" data-label="Amount">
          <button style={{backgroundColor:'lightgreen',padding:10,borderRadius:20,fontSize:15}}>Active</button>
          </div>
        </li>        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            EIE
          </div>
          <div className="col col-2" data-label="Customer Name">
            Electrical and Instrumentation Engineering
          </div>
          <div className="col col-3" data-label="Amount">
          <b>350</b>
          </div>
          <div className="col col-4" data-label="Payment Status">
            700
          </div>
          <div className="col col-3" data-label="Amount">
          <button style={{backgroundColor:'lightgreen',padding:10,borderRadius:20,fontSize:15}}>Active</button>
          </div>
        </li>        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            CE
          </div>
          <div className="col col-2" data-label="Customer Name">
            Civil Enginnering
          </div>
          <div className="col col-3" data-label="Amount">
          <b>350</b>
          </div>
          <div className="col col-4" data-label="Payment Status">
            456
          </div>
          <div className="col col-3" data-label="Amount">
          <button style={{backgroundColor:'lightgreen',padding:10,borderRadius:20,fontSize:15}}>Active</button>
          </div>
        </li>        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            ME
          </div>
          <div className="col col-2" data-label="Customer Name">
            Mechanical Engineering
          </div>
          <div className="col col-3" data-label="Amount">
          <b>300</b>
          </div>
          <div className="col col-4" data-label="Payment Status">
            600
          </div>
          <div className="col col-3" data-label="Amount">
          <button style={{backgroundColor:'lightgreen',padding:10,borderRadius:20,fontSize:15}}>Active</button>
          </div>
        </li>        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            AIDS
          </div>
          <div className="col col-2" data-label="Customer Name">
            Artificial Intelligence and Machine Learning
          </div>
          <div className="col col-3" data-label="Amount">
          <b>650</b>
          </div>
          <div className="col col-4" data-label="Payment Status">
            700
          </div>
          <div className="col col-3" data-label="Amount">
          <button style={{backgroundColor:'lightgreen',padding:10,borderRadius:20,fontSize:15}}>Active</button>
          </div>
        </li>        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            CSD
          </div>
          <div className="col col-2" data-label="Customer Name">
            Computer Science and Design
          </div>
          <div className="col col-3" data-label="Amount">
            <b>350</b>
          </div>
          <div className="col col-4" data-label="Payment Status">
            500
          </div>
          <div className="col col-3" data-label="Amount">
          <button style={{backgroundColor:'#FC9898',padding:10,borderRadius:20,fontSize:15}}>Inactive</button>
          </div>
        </li>
        <li className="table-row">
          <div className="col col-1" data-label="Job Id">
            CSBS
          </div>
          <div className="col col-2" data-label="Customer Name">
            Computer Science and Business System
          </div>
          <div className="col col-3" data-label="Amount">
            <b>350</b>
          </div>
          <div className="col col-4" data-label="Payment Status">
            500
          </div>
          <div className="col col-3" data-label="Amount">
          <button style={{backgroundColor:'lightgreen',padding:10,borderRadius:20,fontSize:15}}>Active</button>
          </div>
        </li>
        
      </StyledResponsiveTable>
    </StyledContainer>
  );
};

export default Ctable;
