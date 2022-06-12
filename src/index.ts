import express from 'express'
import diariesRouter from './routes/diaries'
const app = express()

app.use(express.json())

const PORT = 5000

app.get('/', (_req, res) => {
  console.log('someone is requesting')
  res.send('Hi there!')
})

app.use('/api/diaries', diariesRouter)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})