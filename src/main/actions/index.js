/**
 * Created by krzysztofkicinger on 30/08/2017.
 */
import { INDEX_ACTION } from './types';

export const initializeMessage = () => ({
    type: INDEX_ACTION,
    payload: 'Index Action payload'
});