const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

  // find all tags
  // be sure to include its associated Product data
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      { model: Product},
    ],
  })
    .then((tagData) => {
      res.status(200).json(tagData);
  })
    .catch((err) => {
      res.status(500).json(err);
    })
});

  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id, { 
    include: [ 
      {model: Product},
    ],
    })
      .then((tagData) => {
        if (!tagData) {
        res.status(404).json({message: 'Tag not found!'});
        return;
    }
    res.json(tagData);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
});

  // create a new tag
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tagData) => {
      res.json(tagData);
    })
    .catch((err) => {
      res.json(err);
    });
});

  // update a tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.update(
    {
      tag_name: req.body.tag_name
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

  // delete on tag by its `id` value
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deletedTag) => {
      res.json(deletedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
