import errorsReducer from "./errors_reducer";
import entitiesReducer from './entities_reducer';
import sessionReducer from "./session_reducer";
import uiReducer from "./ui_reducer";
import searchedUsersReducer from "./searched_users_reducer";
import feedReducer from "./feed_reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    ui: uiReducer,
    searched: searchedUsersReducer,
    feed: feedReducer,
});

export default rootReducer;

