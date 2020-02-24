import React from 'react';
import styled from 'styled-components';

export const Button = styled.button`
    height: 4em;
    border-radius: 1px;
    background: #eeeeee;
    box-shadow: 20px 20px 60px #cacaca, -20px -20px 60px #ffffff;
    transition: ease all 0.3s;
    &:hover {
        box-shadow: 20px 20px 60px #cacaca, -20px -20px 60px #ffffff;
    }
    &:focus {
        outline: none;
    }
`;