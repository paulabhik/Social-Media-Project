const { Router } = require('express')
const route = Router()
const {createNewPost, findAllPosts} = require('../../controllers/posts')

route.get('/', async (req, res) => {
    const posts = await findAllPosts()
    res.status(200).send(posts)
})

route.post('/', async (req, res) => {
    const { userId, title, body } = req.body
    console.log(userId, title, body)
    if ((!userId) || (!title) || (!body)) {
        return res.status(400).send({
            error: 'Need userid, title and body to create post'
        })
    }
  
    const post = await createNewPost(userId, title, body)
    res.status(201).send(post)
})
  

module.exports = {
    postsRoute: route
}