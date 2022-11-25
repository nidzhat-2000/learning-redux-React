import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import siteReducer from './site';
import authReducer from './auth';

export default configureStore({
  reducer: {
    testName: counterReducer,
    site: siteReducer,
    auth: authReducer,
  },
});
