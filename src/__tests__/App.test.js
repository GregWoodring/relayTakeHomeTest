import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-native/extend-expect';
import App from '../App';
import store from '../store';
import {Provider} from 'react-redux';
import test_response from '../__mocks__/test_response.json';
import axios from 'axios';
import {addVoterArray} from '../reducers/votersReducer';

jest.mock('axios');

test('renders application', async () => {
  axios.get.mockImplementationOnce(() => {
    return new Promise((reject, resolve) => { 
      store.dispatch(addVoterArray(test_response.rows))
  })
  })
  render(
    <Provider store={store}>
      <App />
    </Provider>
    );
  await waitFor(axios.get);
  const topHeaderText = screen.getByText(/Top Segment of All Voters:/i);

  const dataTableRows = screen.getAllByTestId('data-row')
  expect(topHeaderText).toBeInTheDocument();
  expect(dataTableRows.length).toBe(67);
});

test('renders application', async () => {
  axios.get.mockImplementationOnce(() => {
    return new Promise((reject, resolve) => { 
      store.dispatch(addVoterArray(test_response.rows))
  })
  })
  render(
    <Provider store={store}>
      <App />
    </Provider>
    );
  await waitFor(axios.get);
  const selector = screen.getByTestId('selector');
  fireEvent.change(selector, {
    target: {value: 'unknown_sex'}
  })
  const dynamicHeader = screen.getByTestId('dynamic-header');
  expect(dynamicHeader.textContent).toBe('Percentage of All Voters that are unknown_sex - 280905 - 27.12% ')
});

