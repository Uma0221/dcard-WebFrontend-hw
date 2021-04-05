import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { StateContext, DispatchContext } from '../Context/index';
import { initialAppState, appReducer } from '../Reducer/reducer';

import scenicScreen from '../Screens/scenicScreen';
import cityScenicScreen from '../Screens/cityScenicScreen';

function Routes() {
  const [state, dispatch] = useReducer(appReducer, initialAppState);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        <Router>
          <Switch>
              <Route exact path="/scenicSpot" component={scenicScreen}/>
              <Route exact path="/scenicSpot/:city" component={cityScenicScreen}/>
          </Switch>
        </Router>
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
}

export default Routes;
