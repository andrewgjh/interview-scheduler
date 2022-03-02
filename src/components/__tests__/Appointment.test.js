import React from "react";

import { render } from "@testing-library/react";
import Appointment from '../Appointment/index';

describe("testing the appointment component", () => {
  it("the appoint renders without crashing", () => {
    render(<Appointment />);
  });
 
});
