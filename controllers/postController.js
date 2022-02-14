const { Post } = require('../models');

module.exports = {
    getAllPosts: async (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const userPostsData = await Post.findAll({
                where: {
                    userId: req.session.user.id,
                }
            })
            res.render('Posts', {
                userPosts: userPostsData.map(userPost => userPost.get({ plain: true })),
                user: req.session.user,
            });
        } catch (e) {
            res.json(e);
        }
    },
    createPost: async (req, res) => {
        const { task } = req.body;
        try {
            const newPost = await Post.create({
                task,
                userId: req.session.user.id,
            });
            res.json({ newPost });
        } catch (e) {
            res.json(e);
        }
    },
};