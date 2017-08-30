/**
 * Created by krzysztofkicinger on 30/08/2017.
 */
import { INDEX_ACTION } from './types';

export const initializeMessage = () =>
    dispatch =>
        setTimeout(() => dispatch({
            type: INDEX_ACTION,
            payload: 'New Index Action payload'
        }), 1000);
;