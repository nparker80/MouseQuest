const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
    foreignKey: 'username',
    onDelete: 'CASCADE',
});
Post.belongsTo(User, {
    foreignKey: 'username',
});

module.exports = {
    Post,
    User,
}
