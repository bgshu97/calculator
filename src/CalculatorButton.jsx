import React, { Component } from 'react';

export const CalculatorButton = ({buttonEvent, value}) => (<button onClick={buttonEvent}>{value}</button>);
export default CalculatorButton;