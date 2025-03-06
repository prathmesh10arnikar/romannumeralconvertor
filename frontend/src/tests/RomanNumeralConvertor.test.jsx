import { fireEvent, render, waitFor, screen } from '@testing-library/react';
import RomanNumeralConvertor from '../components/RomanNumeralConvertor';
import { describe } from 'vitest';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

fetchMock.enableMocks();

beforeEach(() => {
    fetchMock.resetMocks();
});

test('should render input, button and should not show the result initially', () => {
    render(<RomanNumeralConvertor />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", {name: /romannumeral/i})).toBeInTheDocument();
    expect(screen.queryByText(/roman numeral:/i)).not.toBeInTheDocument();
});

test('should convert number to roman numeral on button click', async () => {
    fetchMock.mockResponseOnce(JSON.stringify({input: "12", output: "XII"}));
  
    render(RomanNumeralConvertor);

    fireEvent.change(screen.getByRole("textbox"), {target: {value: "12"}});
    fireEvent.click(screen.getByRole("button", {name: /romannumeral/i}));

    await waitFor(() => expect(screen.getByText(/roman numeral: XII/i)).toBeInTheDocument());
});

test('should handle API errors', async () => {
    fetchMock.mockRejectOnce(new Error("API error"));

    render(RomanNumeralConvertor);

    fireEvent.change(screen.getByRole("textbox"), {target: {value: "12"}});
    fireEvent.click(screen.getByRole("button", {name: /romannumeral/i}));

    await waitFor(() => expect(screen.getByText(/error fetching data/i)).toBeInTheDocument());
});

test('should toggle to dark mode', () => {
   render(RomanNumeralConvertor);

   const darkModeToggle = screen.getByRole("switch");
   fireEvent.click(darkModeToggle);

   expect(document.body).toHaveClass("spectrum-dark");
});

test('should ensure accessibility compliance', () => {
   render(RomanNumeralConvertor);

   expect(screen.getByRole("textbox")).toHaveAccessibleName();
   expect(screen.getByRole("button", {name: /romannumeral/i})).toHaveAccessibleName();
});




