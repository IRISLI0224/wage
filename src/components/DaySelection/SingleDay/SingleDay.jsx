import React from 'react';
import styled from 'styled-components';
import DropdownBox from './DropdownBox';


const DayTitle =styled.div`
  padding: 0px;
  padding-bottom: 15px;
  display: table-cell;
  vertical-align: inherit;
`;

const DayTd = styled.td`
  margin-left:10px;
  width:80px;
  padding:5px;
`;

const DayTr = styled.tr`
 
  margin-left:10px;
`;

const TdFrom = styled.td`
  width:150px;
`;

const TdTo = styled.td`
  width:150px;
`;


const SingleDay = ({ date }) => {



  return (
   <DayTr>
     <DayTitle>{date}</DayTitle>


  </DayTr>
  );
};


export default SingleDay;