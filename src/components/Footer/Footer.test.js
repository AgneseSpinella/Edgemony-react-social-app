import { render, screen } from '@testing-library/react';
import Footer from './index.jsx';

test('renders and checks the <Footer/> component', () => {
  render(<Footer />);
  const msg = screen.getByText("Copyright Edgemony 2022");
  expect(msg).toBeInTheDocument();
});

