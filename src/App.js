import React from 'react'
import "./index.css"
import Body from './components/Body'
import { Provider } from 'react-redux'
import { store } from './utils/appStore'

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
}

export default App
