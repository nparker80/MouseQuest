const Post = require('./Post');
const User = require('./User');

User.hasMany(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});
Post.belongsTo(User, {
    foreignKey: 'userId',
});

module.exports = {
    Post,
    User,
}
