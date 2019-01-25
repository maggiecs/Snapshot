import errorsReducer from "./errors_reducer";
import entitiesReducer from './entities_reducer';
import sessionReducer from "./session_reducer";
import searchedUsersReducer from './searched_users_reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer,
    errors: errorsReducer,
    searched: searchedUsersReducer,
});

export default rootReducer;

