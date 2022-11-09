import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducer/index';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

<<<<<<< HEAD
export default store;
=======
export default store;
>>>>>>> dcd72fbcf601645629d88f94216ce01b70843838
