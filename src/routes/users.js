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

router.put('/add', (req, res) => {
    const { username, email } = req.body;
    global.db('users').insert({ username, email, password_hash: 'dummy_hash' }).then(() => {
        res.status(201).send('User added successfully');
    }).catch(err => {
        res.status(500).send('Error adding user');
    });
});

export default router;