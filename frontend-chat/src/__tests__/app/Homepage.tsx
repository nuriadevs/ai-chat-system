import {render, screen} from '@testing-library/react';

import Home  from '@/app/page';

describe('Home Page', () => {
  it('renders home page', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', {name: /AI Assistant/i});
    expect(heading).toBeInTheDocument();
  });
});