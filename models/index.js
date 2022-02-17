// test
const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
    foreignKey: 'userid',
    onDelete: 'CASCADE',
});
Post.belongsTo(User, {
    foreignKey: 'userid',
});

module.exports = {
    Post,
    User,
<<<<<<< HEAD
}














=======
}
>>>>>>> 4e578e7ca837052924b128c280b11133b11f893a
