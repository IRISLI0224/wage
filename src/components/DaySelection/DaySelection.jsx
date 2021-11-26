import React from 'react';
import styled from 'styled-components';
import SingleDay from './SingleDay';

const Container = styled.div`
   width: 300px;
   padding-left: 20px;
   float: left;
   padding-right: 20px;
`;

const Td = styled.div`
   width: 100px;
`;

const TdFrom = styled.td`
  width:150px;
`;

const TdTo = styled.td`
  width:150px;
`;

const DaySelection = () => (
<Container>
   <table>
       <tbody>
           <tr>
             <Td />
             <TdFrom >From</TdFrom>
             <TdTo>To</TdTo>
           </tr>
       </tbody>
   </table>
   <SingleDay date="Monday"></SingleDay>
   <SingleDay date="Tuesday"></SingleDay>
   <SingleDay date="Wednesday"></SingleDay>
   <SingleDay date="Thursday"></SingleDay>
   <SingleDay date="Friday"></SingleDay>
   <SingleDay date="Saturday"></SingleDay>
   <SingleDay date="Sunday"></SingleDay>
</Container>
);

export default DaySelection;