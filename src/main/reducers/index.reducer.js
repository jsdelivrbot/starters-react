/**
 * Created by krzysztofkicinger on 30/08/2017.
 */
import { INDEX_ACTION } from '../actions/types';

export default (state = '', action) => {
    switch(action.type) {
        case INDEX_ACTION:
            return {
                ...state,
                message: action.payload
            };
    }
    return state;
}