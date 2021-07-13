export {
	index,
  show,
  newTodo as new,
  create,
  deleteTodo as delete,
}
import * as devSkillDb from '../data/dev-skills-db.js'

function index(req, res) {
  devSkillDb.find({}, function(error, devSkills) {
    res.render('devSkills/index', {
      devSkills: devSkills,
      error: error,
      time: req.time
    })
  })
}

function newTodo(req, res) {
  res.render('devSkills/new')
}

function show(req, res) {
  devSkillDb.findById(req.params.id, function(error, todo) {
    res.render('devSkills/show', {
      todo: todo,
      error: error
    })
  })
}

function create(req, res) {
  console.log(req.body)
  devSkillDb.create(req.body, function(error, todo) {
		// Notice we are doing a redirect here!
    res.redirect('/devSkills')
  })
}

function deleteTodo(req, res) {
  devSkillDb.findByIdAndDelete(req.params.id, function(error, todo) {
    res.redirect('/devSkills')
  })
}