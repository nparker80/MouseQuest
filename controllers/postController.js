const { Post } = require('../models');

module.exports = {
    getAllPosts: async (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/login');
        }
        try {
            const userPostsData = await Post.findAll();
            res.render('globalPostsPage', {
                userPosts: userPostsData.map(userPost => userPost.get({ plain: true })),
                user: req.session.user,
            });
        } catch (e) {
            res.json(e);
        }
    },
    getPostsByUsername: async (req, res) => {
        if (!req.session.loggedIn) {
            return res.redirect('/login');
        }
        const { username } = req.body;
        try {
            const userPostsData = await Post.findAll({
                where: { 
                    username
                }
            });
            res.render('Posts', {
                userPosts: userPostsData.map(userPost => userPost.get({ plain: true })),
                user: req.session.user,
            });
        } catch (e) {
            res.json(e);
        }
    },
    createPost: async (req, res) => {
        const { userid, helmet, armor, weapon, cape, about } = req.body;
        try {
            const newPost = await Post.create({
                userid,
                helmet,
                armor,
                weapon,
                cape,
                about,
            });
            res.json({ newPost });
        } catch (e) {
            res.json(e);
        }
    },
};