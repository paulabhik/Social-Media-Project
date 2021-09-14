const express = require ('express')
const app = express()
const models = require('./db/models')
const db = models.db

const {usersRoute} = require('./routes/users')
const {postsRoute} = require('./routes/posts')

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/users', usersRoute)
app.use('/api/posts', postsRoute)
app.use('/', express.static(__dirname + '/public'))

db.sync({force: false})
.then(() => {
    app.listen(8383, () => console.log('http://localhost:8383'))
})
.catch((error) => {
    console.error(new Error('Could not start database'))
    console.error(err)
})