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
}