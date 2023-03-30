const express = require('express');
const asyncWrap = require('../utils/asyncWrap');
const userController = require('../users/controller');
const bottleController = require('../bottles/controller');
const answerController = require('../answers/controller');
const router = express.Router();

// router.get('/pushTest', asyncWrap(userController.pushTest));

// USER
router.post('/signup', asyncWrap(userController.signup));
router.get('/:id', asyncWrap(userController.getUser));
router.put('/:id', asyncWrap(userController.updateUser));

// BOTTLE
router.get('/:user_id/bottles', asyncWrap(bottleController.getBottles));

// ANSWER
router.get('/:user_id/answers/junior', asyncWrap(answerController.getAnswersForJuniorId));
router.get('/:user_id/answers', asyncWrap(answerController.getAnswers));

// router.get('/:id/study', idCompare, studyValid.getMyStudy, asyncWrap(studyController.getMyStudy));

// router.get('/:id/apply', idCompare, applyValid.applyListByUser, asyncWrap(applyController.applyListByUser));

// router.get('/:id/project', projectValid.getProjectList, asyncWrap(projectController.getProjectList));
// router.post('/:id/project', idCompare, projectValid.updateProject, asyncWrap(projectController.updateProject));

// router.get('/:id/alert', idCompare, alertValid.getAlert, asyncWrap(alertController.getAlert));
// router.get('/:id/alert/:alert_id', idCompare, alertValid.confirmAlert, asyncWrap(alertController.confirmAlert));

module.exports = router;