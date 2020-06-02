const router = require('express').Router();

const { createArticle, getAllArticles, deleteArticle } = require('../controllers/articles');
const { articleСreationValid, articleDeleteValid } = require('../middlewares/validation');

router.get('/', getAllArticles);
router.post('/', articleСreationValid, createArticle);
router.delete('/:id', articleDeleteValid, deleteArticle);

module.exports = router;
