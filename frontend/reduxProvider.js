import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const store = configureStore({
  reducer: {}, // Add your reducers here
});

export function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}