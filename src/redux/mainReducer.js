import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn25161522Reducer from '../features/SignIn25161522/redux/reducers'
import SignIn56161521Reducer from '../features/SignIn56161521/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn25161522: SignIn25161522Reducer,
SignIn56161521: SignIn56161521Reducer,

});