// store.js
import { createStore } from "redux";
import reducer from "./authReducer";

// Crear el store
const store = createStore(reducer);

export default store;
