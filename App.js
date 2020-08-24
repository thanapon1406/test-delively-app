import React, { useState } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';

import authReducer from './store/reducers/auth';
import AppNavigator from './navigation/AppNavigator';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const fetchFonts = () => {
  return Font.loadAsync({
    "kanit-light": require("./assets/fonts/THKanit/Kanit-Light.ttf"),
    "kanit-regular": require("./assets/fonts/THKanit/Kanit-Regular.ttf"),
    "kanit-semibold": require("./assets/fonts/THKanit/Kanit-SemiBold.ttf"),
    "kanit-bold": require("./assets/fonts/THKanit/Kanit-Bold.ttf"),
    "sarabun-regular": require("./assets/fonts/THSarabunNew/Sarabun-Regular.ttf"),
    "sarabun-bold": require("./assets/fonts/THSarabunNew/Sarabun-Bold.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}