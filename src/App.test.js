import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('The page has a Characters button', () => {
  render(<App />);
  const charactersBtn = screen.getByRole('button', {name: 'Characters'});
  expect(charactersBtn).toBeInTheDocument();
});

test('The page has a Locations button', () => {
  render(<App />);
  const locationsBtn = screen.getByRole('button', {name: 'Locations'});
  expect(locationsBtn).toBeInTheDocument();
});

test('The page has a description', () => {
  render(<App />);
  const desc = screen.getByText(/Welcome to Rick and Morty's Universe!/i)
  expect(desc).toBeInTheDocument();
});

//* ^------------------PAGE LOADED---------------------//

test('More information shows up from the character, when we click on a character in the list', async () => {
  render(<App />);

  const charactersBtn = screen.getByRole('button', {name: 'Characters'})
  userEvent.click(charactersBtn)
  const charListItem = await screen.findByText(/Morty Smith/i)

  userEvent.click(charListItem)
  const charInfo = await screen.findByText(/Gender/i)

  expect(charInfo).toBeInTheDocument();
});

// * ^------------------Char info-----------------------//

test('More infomration shows up from the location, when we click on a location in the list', async () => {
  render(<App />);

  const locationsBtn = screen.getByRole('button', {name: 'Locations'});

  userEvent.click(locationsBtn)
  const locListItem = await screen.findByText(/Citadel of Ricks/i)

  userEvent.click(locListItem)
  const locInfo = await screen.findByText(/Type/i)

  expect(locInfo).toBeInTheDocument();
});

// * ^------------------Location Info------------------//

// coverage
// npm test -- --env=jsdom --coverage