const User = require('./User');
const GameData = require('./GameData');
const Comment = require('./Comment');

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

GameData.hasMany(Comment, {
    foreignKey: 'game_id',
});

Comment.belongsTo(GameData, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

