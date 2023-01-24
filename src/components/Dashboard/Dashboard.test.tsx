import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dashboard } from './Dashboard';

test('should render dashboard component', () => {
    render(<Dashboard />);
    const linkElement = screen.getByText(/Data dashboard/i);
    expect(linkElement).toBeInTheDocument();
});
