import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import configureStore from "redux-mock-store";
import { Provider } from 'react-redux';

test("", () => {

  const fakeStore = configureStore([]);
  const store = fakeStore({
    loginState: {
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
    }
  }
    )

  render(<Provider store={store} ><App/></Provider>);
  const linkElement = screen.getByText("LOGIN");
  expect(linkElement).toBeInTheDocument();
});
