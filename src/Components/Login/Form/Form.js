import React from 'react';
import styled from 'styled-components';

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  
    height: 60%;
    width: 80%;
    justify-self: center;
    align-self: center;
    border-radius: 15px;
    background: #eeeeee;
    box-shadow: -20px -20px 60px #cacaca, 20px 20px 60px #ffffff;

    &>* {
        width: 70%;
        height: 2em;
        margin: 1em 0;
    }
`;