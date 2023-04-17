import vCardsJS from "vcards-js";
import { QRCodeSVG } from "qrcode.react";
import { useState } from 'react';
import './App.css';
import { render } from "@testing-library/react";
import React from 'react';

export default function App() {
  var vCard = vCardsJS();
  const [values, setValues] = useState({
    firstName: '', lastName: '', organization: '', department: '', title: ''
  });

  const set = firstName => {
    return ({target: {value}}) => 
      setValues(oldValues => ({...oldValues, [firstName]: value}));
  };

  vCard.firstName = values.firstName;
  vCard.lastName = values.lastName;
  vCard.organization = values.organization + ';' + values.department;
  vCard.workEmail = "";

  vCard.cellPhone = "+";
  vCard.workPhone = "+";
  vCard.title = values.title;
  vCard.role = values.title;
  vCard.workUrl = "";

  vCard.workAddress.label = "";
  vCard.workAddress.street = "";
  vCard.workAddress.city = "";
  vCard.workAddress.postalCode = "";
  vCard.workAddress.countryRegion = "";

  const getNormalizeValue = (value) => {
    let normalizedValue = value;
    return normalizedValue;
  };

  const value = getNormalizeValue(vCard.getFormattedString());

  console.log(vCard.getFormattedString());
  console.log("value");
  console.log(value);

    return (
      <div className="App">
        <form>
          <div className = "vCardInfo">
            <div>
              <input type="text" id="firstName" value = {values.firstName} onChange={set('firstName')} />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div>
              <input type="text" id="lastName" value = {values.lastName} onChange={set('lastName')} />
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div>
              <input type="text" id="organization" value = {values.organization} onChange={set('organization')} />
              <label htmlFor="organization">Organization</label>
            </div>
            <div>
              <input type="text" id="department" value = {values.department} onChange={set('department')} />
              <label htmlFor="department">Department</label>
            </div>
            <div>
              <input type="text" id="title" value = {values.title} onChange={set('title')} />
              <label htmlFor="title">Title</label>
            </div>
  
          </div>
        </form>
        <QRCodeSVG
          // TODO 
          value={value}
          size={200} // min 150
          level="L"
          // renderAs="canvas"
          includeMargin={true}
          bgColor="#fff"
          fgColor="#000"
        />
      </div>
    );
}