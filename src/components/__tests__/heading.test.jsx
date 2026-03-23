import React from "react";
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Heading from "../_deprecated/heading.jsx";

describe('Heading', () => {
  it('renders a heading in the document', () => {
    render(<Heading/>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
  test("displays the correct title", () => {
  const { getByTestId } = render(<Heading />)
  expect(getByTestId("hero-title")).toHaveTextContent("Gatsby is awesome!")
  })
});