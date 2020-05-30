const articleModel = require('../models/article');
const { ForbiddenError, NotFoundError } = require('../status_errors');
const { ARTICLE_NOT_FOUND, NOT_AUTHOR } = require('../errors-const');

module.exports.createArticle = (req, res, next) => {
  const {
    keyword, title, text, date, source, link, image,
  } = req.body;
  const owner = req.user._id;// индетификатор пользовотеля

  articleModel.create({
    keyword, title, text, date, source, link, image, owner,
  })
    .then((article) => res.send({ data: article }))
    .catch(next);
};

module.exports.getAllArticles = (req, res, next) => {
  articleModel.find({})
    .populate('owner')
    .then((articles) => res.send({ data: articles }))
    .catch(next);
};


module.exports.deleteArticle = (req, res, next) => {
  articleModel.findById(req.params.id)
    .select('+owner')
    .then((article) => {
      if (article === null) {
        throw new NotFoundError(ARTICLE_NOT_FOUND);
      }
      if (!article.owner.equals(req.user._id)) {
        throw new ForbiddenError(NOT_AUTHOR);
      }
      return articleModel.remove(article)
        .then(() => res.status(200).send({ data: article }));
    })
    .catch(next);
};
