import React, { SyntheticEvent } from 'react';
import axios from 'axios';

// USELESS ATM

export const getCurrentUserInfo = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fScore = event.currentTarget["scoreSelector"].value;
    const fComment = event.currentTarget["judgeComment"].value;
    const fEmail = event.currentTarget["emailForm"].value;

    console.log("you should see dis bruh");

    axios.put("http://localhost:3004/users", {
      id: null,
      likes: 0,
      comment: fComment,
      week: fScore,
      userEmail: fEmail,
    });
  };