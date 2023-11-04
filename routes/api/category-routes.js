const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

  // find all categories
router.get('/', (req, res) => {
  Category.findAll().then((categoryData) => {
    res.status(200).json(categoryData);
  })
    .catch((err) => {
      res.status(500).json(err);
  });
});

  // find one category by its `id` value
  // be sure to include its associated Products
router.get('/:id', (req, res) => {
  Category.findByPk(req.params.id, {include: Product}).then((categoryData) => {
    if (!categoryData) {
      res.status(404).json({message: 'Category not found!'});
      return;
    }
    res.json(categoryData);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

    // create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

    // update a category by its `id` value
router.put('/:id', (req, res) => {
  Category.update(
    {
      category_name: req.body.category_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => res.json(err));
});

    // delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedCategory) => {
      res.json(deletedCategory);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
