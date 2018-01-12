import Express from 'express';

import {
    test,
    test2,
} from '../bll/test';

let router = Express();

router.get('/test',
    (req, res) => {
        return test()
            .then(data => {
                return res
                    .status(200)
                    .json(data)
            })
    })

router.get('/test2',
    (req, res) => {
        test2()
            .then(data => {
                return res
                    .status(200)
                    .json(data)
            })
    })

export default router
