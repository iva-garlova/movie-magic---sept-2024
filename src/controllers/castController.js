import  { Router } from "express";
import castServise from "../services/castServise.js";



const router = Router();

router.get('/create', (req, res) => {
    res.render('cast/create');

});

router.post('/create', async (req, res) => {
    const cast = req.body;

    await castServise.create(cast)

    res.redirect('/')
})

export default router
