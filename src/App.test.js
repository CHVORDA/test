import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import IndexPage from './component/IndexPage';
import GalleryPage from './component/GalleryPage';
import ContactPage from './component/ContactPage';

describe('App component', () => {
  test('renders the navbar and default content', () => {
    render(<App />);
    const homeButton = screen.getByText(/home/i);
    const galleryButton = screen.getByText(/gallery/i);
    const contactButton = screen.getByText(/contact/i);
    const indexPageContent = screen.getByTestId('index');
    
    expect(homeButton).toBeInTheDocument();
    expect(galleryButton).toBeInTheDocument();
    expect(contactButton).toBeInTheDocument();
    expect(indexPageContent).toBeInTheDocument();
  });

  test('changes content when navigating', () => {
    render(<App />);
    const galleryButton = screen.getByText(/gallery/i);
    const contactButton = screen.getByText(/contact/i);

    fireEvent.click(galleryButton);
    const galleryPageContent = screen.getByTestId('gallery');
    expect(galleryPageContent).toBeInTheDocument();

    fireEvent.click(contactButton);
    const contactPageContent = screen.getByTestId('contact');
    expect(contactPageContent).toBeInTheDocument();
  });
});

