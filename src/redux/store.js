import { applyMiddleware, legacy_createStore as createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { persistStore } from "redux-persist";

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
export { store, persistor };
