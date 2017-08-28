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
    response
        .status(error.status || 500)
        .json({
            error: error.message
        });
});

export default router;