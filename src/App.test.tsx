import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import App from './App';

vi.mock('./components/Background/Background', () => ({
  default: () => null,
}));

test('navigation links point to the portfolio sections', () => {
  render(<App />);

  for (const section of ['home', 'about', 'experience', 'projects', 'contact']) {
    expect(screen.getByRole('link', { name: new RegExp(`^\\./${section}$`, 'i') })).toHaveAttribute(
      'href',
      `#${section}`,
    );
    expect(document.getElementById(section)).toBeInTheDocument();
  }
});
