export {
	index,
  show,
  newDevSkill as new,
  create,
  deleteDevSkill as delete,
}
import * as devSkillDb from '../data/dev-skills-db.js'

function index(req, res) {
  devSkillDb.find({}, function(error, devSkills) {
    res.render('devSkills/index', {
      devSkills: devSkills,
      error: error,
      date: req.date
    })
  })
}

function newDevSkill(req, res) {
  res.render('devSkills/new')
}

function show(req, res) {
  devSkillDb.findById(req.params.id, function(error, devSkill) {
    res.render('devSkills/show', {
      devSkill: devSkill,
      error: error
    })
  })
}

function create(req, res) {
  console.log(req.body)
  devSkillDb.create(req.body, function(error, devSkill) {
		// Notice we are doing a redirect here!
    res.redirect('/devSkills')
  })
}

function deleteDevSkill(req, res) {
  devSkillDb.findByIdAndDelete(req.params.id, function(error, devSkill) {
    res.redirect('/devSkills')
  })
}