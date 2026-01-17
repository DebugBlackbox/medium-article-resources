import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('User route is working!');
});

router.get('/all', (req, res) => {
    global.db.select('*').from('users').then(users => {
        res.json(users);
    });
});

export default router;