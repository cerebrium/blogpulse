const express = require('express');
const router = express.Router();
const db = require(`../models`);

router.get(`/`, function(req, res) {
    db.post.findAll().then(function(posts) {
        res.render('posts/index')
    });
});

router.get(`/:id`, function(req, res) {
    db.post.findByPk(parseInt(req.params.id))
    .then(function(posts) {
        posts.getAuthor()
        .then(function(comment) {
            posts.getComments()
            .then(function(author) {
                console.log(author)
                res.render(`posts/show`, {posts, comment, author})
            })
        })
    })
})

router.post(`/:id/comments`, function(req, res) {
    db.post.findByPk(parseInt(req.params.id))
        .then(function(post) {
            post.createComment(req.body)
                .then(function(comment) {
                    console.log(comment.dataValues)
                    res.redirect(`/posts/${req.params.id}`)
            })
        })
    })

router.get(`/new`, function(req, res) {
    res.render(`posts/new`);
});



module.exports = router;