import {SET_USERNAME, SET_TOKEN } from './actionTypes';

export const setToken = (token) => ({
    type: 'SET_TOKEN',
    payload: token
});
  
export const setUsername = (username) => ({
    type: 'SET_USERNAME',
    payload: username
});