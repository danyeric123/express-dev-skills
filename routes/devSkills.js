import { Router } from 'express'
const router = Router()
import * as devSkillsCtrl from '../controllers/devSkills.js'

/* GET users listing. */


router.get('/', devSkillsCtrl.index);
router.get('/new', devSkillsCtrl.new);
router.get('/:id', devSkillsCtrl.show);
router.post('/', devSkillsCtrl.create)
router.delete('/:id', devSkillsCtrl.delete);

export {
  router
}