import './App.css';
import React from 'react';
import styled from 'styled-components';
import DropdownBox from './components/DaySelection/SingleDay/DropdownBox'

const Container = styled.div`
  max-width: 100%;
  width: 950px;
  padding: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background: #fff;
  text-align: left;
  vertical-align: top;
  font-size: 15px;
  line-height: 30px;
`;

const Mid = styled.div`
  margin-top:20px;
  display: inline-block;
  display:flex;
  margin-bottom:20px;
`;

const LeftPanel = styled.div`

`;

const RightPanel = styled.div`
  width:285px;
`;

const Top = styled.div`
  margin-bottom:10px;
  font-weight: bold;
`;

const Bottom = styled.div`
  margin-top:20px;
`;


const OrderListingTitle = styled.div`
  font-size: 20px;
  display: inline-block;
  padding-bottom: 10px;
`;


const GreyLine1Px = styled.div`
   height: 1px;
   background-color: #e4e4e4;
   padding: 0px;
`;

const Width50PxTextStrong = styled.div`
   width: 50px;
   font-weight: bold;
   float: left;
`;


const TimeSelection = styled.div`
  width: 300px;
  padding-left: 20px;
  float: left;
  padding-right: 20px;
`;

const CalendarSelection = styled.td.attrs({
})`
  border: 1px;
  border-color: #C0C0C0;
  border-style: solid;
  height: 41px;
  padding: 0px;
  border-collapse: collapse;
  width: 50%;
`;

const CancelButton = styled.button.attrs({
})`
  height: 40px;
  background-color: white;
  text-align: center;
  padding-left: 30px;
  border: none;
  padding-right: 30px;
  vertical-align: middle;
  display: inline-block;
  color:  #F15927;
  float: right;
  &:hover {
    background-color: #F15927;
    cursor: pointer;
    color:white;
  }
`;

const SaveButton = styled.button.attrs({
})`
  height: 40px;
  background-color: #F15927;
  text-align: center;
  border: 1px #F15927 solid;
  border-radius: 3px;
  padding-left: 30px;
  padding-right: 30px;
  vertical-align: middle;
  display: inline-block;
  color: white;
  float: right;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: #F15927;
  }
`;


const CalculateTable = styled.table.attrs({
})`
    padding: 0px;
    border-collapse: collapse;
    width: 100%;
    border: 0px;
    height:200px;
`;

const CalculateLeft = styled.td.attrs({
})`
    padding: 10px 0px 10px 0px;
    width:250px;
    border-bottom: 1px #e4e4e4 solid;
`;

const CalculateLeftBold = styled.td.attrs({
})`
    padding: 10px 0px 10px 0px;
    width:250px;
    border-bottom: 1px #e4e4e4 solid; 
    font-weight:bold;

`;

const CalculateRight = styled.td.attrs({
})`
    padding: 10px 0px 10px 0px;
    float: right;
`;


const CalculateTax = styled.td.attrs({
})`

    width:100px;
    heigh: 10px;
    border: 1px silver solid;
    display:flex;
    margin-top:8px;
`;

const TaxInput = styled.input.attrs({
})`
  height: 20px;
  padding: 5px;
  width: 20px;
  height:15px;
  type:text;
  border:none;
  float:right;
  text-align: right;
`;

const LeftTd = styled.td.attrs({
})`
    width:150px;
   
`;


const CalculateTr = styled.tr.attrs({
})`
    height:50px;
    border-bottom: 1px #e4e4e4 solid;
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

const DayTr = styled.tr`
  margin-top:10px;
  margin-left:10px;
`;



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      MondayFrom:0,
      MondayTo:0,
      TuesdayFrom:0,
      TuesdayTo:0,
      WednesdayFrom:0,
      WednesdayTo:0,
      ThursdayFrom:0,
      ThursdayTo:0,
      FridayFrom:0,
      FridayTo:0,
      SaturdayFrom:0,
      SaturdayTo:0,
      SundayFrom:0,
      SundayTo:0,
      weekdayHours :0,
      weekendHours :0,
      tax :0,
      total :0,
  }
  this.handleDataChange = this.handleDataChange.bind(this);
  this.calculate = this.calculate.bind(this);
}


hourCount=(End, Begin,date)=>{
   let answer=End-Begin;
   if ((answer<0)||((End===0)&&(Begin!==0))||((Begin===0)&&(End!==0))){
     alert("Invalid Time selection on " +date +"! Please fix it.")
     return(0);
   }else{
     return(answer)
   }
}

calculate=()=>{
  let {tax,weekdayHours,weekendHours,MondayFrom,MondayTo,
  TuesdayFrom,TuesdayTo,WednesdayFrom,WednesdayTo,ThursdayFrom,ThursdayTo,
  FridayFrom,FridayTo,SaturdayFrom,SaturdayTo,SundayFrom,SundayTo}=this.state;
  
  let workMon= this.hourCount(MondayTo,MondayFrom,"Monday");
  let workTue =this.hourCount(TuesdayTo,TuesdayFrom,"Tuesday");
  let workWes =this.hourCount(WednesdayTo,WednesdayFrom,"Wednesday");
  let workThu =this.hourCount(ThursdayTo,ThursdayFrom,"Thursday");
  let workFri =this.hourCount(FridayTo,FridayFrom,"Friday");
  weekdayHours= workMon+ workTue +workWes +workThu + workFri;
 
  let workSa =this.hourCount(SaturdayTo,SaturdayFrom,"Saturday");
  let workSun =this.hourCount(SundayTo,SundayFrom,"Sunday");
  weekendHours= workSa+ workSun ;


  this.setState({
    weekdayHours:weekdayHours,
    weekendHours:weekendHours,
    total:weekdayHours * 35 + weekendHours*50 -tax
  })
}

handleDataChange(event) {
  const { name, value } = event.target;
  this.setState({
    [name]: value,
  });
}


  render(){
    const { weekdayHours,weekendHours,total } = this.state;
  return (
    <>
    <Container>
    <Top>
      <OrderListingTitle>Add roster</OrderListingTitle>
      <GreyLine1Px/>
    </Top>
    <Mid>
      <LeftPanel>
      <Width50PxTextStrong>6</Width50PxTextStrong>
      <table>
        <tbody>
          <tr>
            <LeftTd>
              Start date
            </LeftTd>
            <LeftTd>
              End date
            </LeftTd>
          </tr>
          <tr>
            <LeftTd>
              <CalendarSelection>&nbsp;&nbsp;23-Aug-2019</CalendarSelection>
            </LeftTd>
            <LeftTd>
              <CalendarSelection>&nbsp;&nbsp;17-Aug-2020</CalendarSelection>
            </LeftTd>
          </tr>
        </tbody>
      </table>
      </LeftPanel>
      <TimeSelection>
        <table>
         <tbody>
           <tr>
             <Td />
             <TdFrom >From</TdFrom>
             <TdTo>To</TdTo>
          </tr>
         </tbody>
        </table>
        <table>
          <tbody>
            <DayTr>
            <div>Monday</div>
            <TdFrom>
              <DropdownBox name="MondayFrom" onChange={this.handleDataChange}></DropdownBox>
            </TdFrom>
            <TdTo>
              <DropdownBox name="MondayTo" onChange={this.handleDataChange}></DropdownBox>
            </TdTo>
            </DayTr>

            <DayTr>
            <div>Tuesday</div>
            <TdFrom>
              <DropdownBox name="TuesdayFrom" onChange={this.handleDataChange}></DropdownBox>
            </TdFrom>
            <TdTo>
              <DropdownBox name="TuesdayTo" onChange={this.handleDataChange}></DropdownBox>
            </TdTo>
            </DayTr>

            <DayTr>
            <div>Wednesday</div>
            <TdFrom>
              <DropdownBox name="WednesdayFrom" onChange={this.handleDataChange}></DropdownBox>
            </TdFrom>
            <TdTo>
              <DropdownBox name="WednesdayTo" onChange={this.handleDataChange}></DropdownBox>
            </TdTo>
            </DayTr>

            <DayTr>
            <div>Thursday</div>
            <TdFrom>
              <DropdownBox name="ThursdayFrom" onChange={this.handleDataChange}></DropdownBox>
            </TdFrom>
            <TdTo>
              <DropdownBox name="ThursdayTo" onChange={this.handleDataChange}></DropdownBox>
            </TdTo>
            </DayTr>

            <DayTr>
            <div>Friday</div>
            <TdFrom>
              <DropdownBox name="FridayFrom" onChange={this.handleDataChange}></DropdownBox>
            </TdFrom>
            <TdTo>
              <DropdownBox name="FridayTo" onChange={this.handleDataChange}></DropdownBox>
            </TdTo>
            </DayTr>

            <DayTr>
            <div>Saturday</div>
            <TdFrom>
              <DropdownBox name="SaturdayFrom" onChange={this.handleDataChange}></DropdownBox>
            </TdFrom>
            <TdTo>
              <DropdownBox name="SaturdayTo" onChange={this.handleDataChange}></DropdownBox>
            </TdTo>
            </DayTr>

            <DayTr>
            <div>Sunday</div>
            <TdFrom>
              <DropdownBox name="SundayFrom" onChange={this.handleDataChange}></DropdownBox>
            </TdFrom>
            <TdTo>
              <DropdownBox name="SundayTo" onChange={this.handleDataChange}></DropdownBox>
            </TdTo>
            </DayTr>
          </tbody>
        </table>
      </TimeSelection>
      <RightPanel>
        <CalculateTable>
          <CalculateTr>
            <CalculateLeft>$35 * {weekdayHours} hours</CalculateLeft>
            <CalculateRight>$ {35*weekdayHours}</CalculateRight>
          </CalculateTr>
          <CalculateTr>
            <CalculateLeft>$50 * {weekendHours} hours (weekend)</CalculateLeft>
            <CalculateRight>$ {50*weekendHours}</CalculateRight>
          </CalculateTr>
          <CalculateTr>
            <CalculateLeft>Tax withholding</CalculateLeft>
            <CalculateTax>
              <div>$</div>
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-</div>
              <TaxInput 
                name="tax" 
                onChange={this.handleDataChange}
              />
            </CalculateTax>
          </CalculateTr>
          <CalculateTr>
            <CalculateLeftBold >Total</CalculateLeftBold>
            <CalculateRight>$ {total}</CalculateRight>
          </CalculateTr>
        </CalculateTable>
        <div>No payment is required now.</div>
      </RightPanel>
    </Mid>
    <GreyLine1Px/>
    <Bottom>
      
      <SaveButton onClick={this.calculate} >Calculate</SaveButton>
      <CancelButton>Cancel</CancelButton>
    </Bottom>
    </Container>
    </>
  );
}

}
export default App;
