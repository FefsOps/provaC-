//App.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('Componente App', () => {
  it('deve renderizar o link "learn react"', () => {
    render(<App />);
    const elementoLink = screen.getByText(/learn react/i);
    expect(elementoLink).toBeInTheDocument();
  });
});
