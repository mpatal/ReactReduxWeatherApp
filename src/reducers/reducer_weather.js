import { FETCH_WEATHER_ACTION_TYPE } from '../actions/index';

/*eslint-disable no-console*/
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER_ACTION_TYPE:
            //never manipulate state but create a new state
            return [action.payload.data, ...state];
    }
    return state;
}