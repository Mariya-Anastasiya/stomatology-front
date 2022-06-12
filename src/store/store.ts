import {combineReducers, legacy_createStore as createStore} from "redux";
import calculator from "@/store/reducers/calculator";
import note from "@/store/reducers/note";
import counter from "@/store/reducers/count";

const store = createStore(combineReducers({calculator: calculator, noteStore: note, counter: counter}));

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
