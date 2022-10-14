import { legacy_createStore as createStore } from "redux";
import { tokensReducer } from "./tokens/tokensReducer";

export const store = createStore(tokensReducer)
