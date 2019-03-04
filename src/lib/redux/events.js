import { List } from 'immutable';
import uuid from 'node-uuid';
import { combineReducers } from 'redux';
import { getEvents as makeGetEventsRequest } from 'lib/util/api';

// Action Types
const ADD_EVENT = 'ADD_EVENT';
const REMOVE_EVENT = 'REMOVE_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';
const REQUEST_EVENTS = 'REQUEST_EVENTS';
const RECEIVE_EVENTS = 'RECEIVE_EVENTS';


// Action Creators
export const addEvent = (params) => {
  return { type: ADD_EVENT, payload: { params } }
};

export const removeEvent = (idx) => {
  return { type: REMOVE_EVENT, payload: { idx } }
};

export const updateEvent = (idx, params) => {
  return { type: UPDATE_EVENT, payload: { idx, params } }
};

export const fetchEvents = () => (dispatch) => {
  console.log('fetchEvents')
  dispatch(requestEvents());

  return makeGetEventsRequest()
    .then(res => res.json())
    .then((data) => dispatch(receiveEvents(data)))
};

export const requestEvents = () => {
  return { type: REQUEST_EVENTS }
};

export const receiveEvents = (response) => {
  return { type: RECEIVE_EVENTS, payload: response }
};


// Reducers
const data = (state = null, { type, payload }) => {
  switch (type) {
    case ADD_EVENT:
      return state.push({ _id: uuid.v1(), ...payload.params });

    case REMOVE_EVENT:
      return state.remove(payload.idx);

    case UPDATE_EVENT:
      return state.update(payload.idx, val => ({ ...val, ...payload.params }));

    case RECEIVE_EVENTS:
      return List(payload.events);

    default:
      return state;
  }
};

const isLoading = (state = false, { type, payload }) => {
  switch (type) {
    case REQUEST_EVENTS:
      return true;

    case RECEIVE_EVENTS:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  data,
  isLoading
})

// Selectors
export const getEvents = (state) => state.events.data;
export const getEventsLoading = (state) => state.events.isLoading;
