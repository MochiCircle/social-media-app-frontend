import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';

test('renders learn react link', () => {

  
  const store = ({
    id: 0,
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
    picUrl: "",
    status: "",
    bio: "",
    interests: "",
    posts: null,
    likedPosts: null,
    verified: false
  })

  render(<Provider store={store} ><App/></Provider>);
  const linkElement = screen.getByText("LOGIN");
  expect(linkElement).toBeInTheDocument();
});
