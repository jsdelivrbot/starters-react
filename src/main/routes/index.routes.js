/**
 * Created by krzysztofkicinger on 28/08/2017.
 */
import { Router } from 'express';

const router = Router();

router.get('/', (request, response) => {
    response.send('Index response');
});


export default router;
