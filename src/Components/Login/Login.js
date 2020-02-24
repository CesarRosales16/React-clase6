import React from 'react';
import {Form} from './Form/Form'; 
import {Button} from '../Buttons/Buttons';

export const Login = props => {
    return(
        <Form onSubmit={props.submitHandler}>
            <input
                id="username"
                onChange={(event)=> {props.setUser(event.target.value)}}
                value={props.username}
                placeholder="Username"
            />
            <input
                id="password"
                onChange={(event)=> {props.setPassword(event.target.value)}}
                value={props.password}
                placeholder="Password"
            />
            <Button type="submit">
                Logg in
            </Button>
        </Form>
    );
}