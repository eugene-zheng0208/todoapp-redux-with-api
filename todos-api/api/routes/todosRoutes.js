import express from 'express';
import Todo from '../models/todosModel';

const router = express.Router();

router.get('/', (req, res) => {
  Todo.find({}).then(todo => {
    res.status(200).json(todo);
  })
})

router.post('/', (req, res) => {
  const newTodo = new Todo(req.body);
  newTodo
    .save()
    .then(todo => {
      res.status(200).json(todo)
    })
    .catch(err => { res.status(400).json({errors: err.errors}) })
})

router.get('/:id', (req, res) => {
  Todo.findOne({_id: req.params.id}) //findById(req.params.id)
    .then(todo => {
      res.status(200).json(todo);
    })
    .catch(err => { res.status(400).json({errors: err.errors}) })
})

router.patch('/:id', (req, res) => {
  Todo.update({_id: req.params.id}, req.body)
    .then(todo => {
      if(!todo) { return res.status(400).end() }
      res.status(200).json(todo);
    })
    .catch(err => next(err));
})

router.delete('/:id', (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
    .exec()
    .then(todo => {
      if(!todo) { return res.status(404).end() }
      return res.status(204).send("Todo was deleted");
    })
    .catch(err => next(err));
})



export default router;
