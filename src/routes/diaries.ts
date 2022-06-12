import express from 'express'
import * as diaryServices from '../services/diaryServices'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getEntiresWithoutComments())
})

router.post('/', (_req, res) => {
  res.send('Sending all entry diaries!')
})

export default router
