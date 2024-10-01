import { Router } from 'express';
import movieService from '../services/movieService.js';

const router = Router();

router.get('/create', (req, res) => {
    res.render('movies/create')
});

router.post('/create', async (req, res) => {
    const movieData = req.body;

    await movieService.create(movieData);
    
    res.redirect('/');
});

router.get('/search', async (req, res) => {
    const filter = req.querry;
    const movies = await movieService.getAll(filter);
    
res.render('home', {isSearch: true, movies: toArray(movies), filter})
});



router.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieService.getOne(movieId).lean();

 movie.ratingView = getratingViewData(movie.rating)

    res.render('movies/details', { movie })
})

function getratingViewData(rating){

    if(!Number.isInteger(rating)){
        return 'n\\a';
    }
    return '&#x2605'.repeat(rating)
}

export default router;
