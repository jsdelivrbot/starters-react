/**
 * Created by krzysztofkicinger on 28/08/2017.
 */
import { Router } from 'express';

const router = Router();

router.use(function(request, response, next) {
    const pageNotFoundError = new Error('Page Not Found');
    pageNotFoundError.status = 404;
    next(pageNotFoundError);
});


router.use(function(error, request, response, next) {
    response.status = error.response || 500;
    response.json({
        status,
        message: error.message
    });
});

export default router;