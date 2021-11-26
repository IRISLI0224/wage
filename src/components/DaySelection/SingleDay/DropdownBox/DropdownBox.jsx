import React from 'react';
import styled from 'styled-components';


const Select = styled.select.attrs({
})`
  height: 30px;
  padding: 5px;
  width: 80px;
  margin-left:20px;
`;




const DropdownBox = ({onChange,name,value}) => (

  <Select onChange={onChange} name={name} >
      <option value="0"></option>
      <option value="9">9:00</option>
      <option value="10">10:00</option>
      <option value="11">11:00</option>
      <option value="12">12:00</option>
      <option value="13">13:00</option>
      <option value="14">14:00</option>
      <option value="15">15:00</option>
      <option value="16">16:00</option>
      <option value="17">17:00</option>
  </Select>
);

export default DropdownBox;