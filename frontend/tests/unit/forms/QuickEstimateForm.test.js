import '@testing-library/jest-dom';
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import QuickEstimate from "../../../src/components/molecules/forms/QuickEstimateForm";

describe("QuickEstimate", () => {
  afterEach(cleanup);

  it("Should render all input fields", () => {
    render(<QuickEstimate />);

    const dobInput = screen.getByTestId("dob-input");
    const zipCodeInput = screen.getByTestId("zip-code-input");
    const vehicleYearInput = screen.getByTestId("vehicle-year-input");
    const vehicleTypeSelect = screen.getByTestId("vehicle-type-select");

    expect(dobInput).toBeInTheDocument();
    expect(zipCodeInput).toBeInTheDocument();
    expect(vehicleYearInput).toBeInTheDocument();
    expect(vehicleTypeSelect).toBeInTheDocument();
  });
});