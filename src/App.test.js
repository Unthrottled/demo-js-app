import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', function () {

  test('renders learn react link', () => {
    const {getByText} = render(<App/>);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('really long wait time', ()=> {
    return new Promise(res => setTimeout(res, 10000));
  });
});