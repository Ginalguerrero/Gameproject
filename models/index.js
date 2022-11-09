const User = require('./User');
const GameData = require('./GameData');
const Comment = require('./Comment');
const ScreenShots = require('./ScreenShots');

User.hasMany(Comment, {
    foreignKey: 'user_id',
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

GameData.hasMany(ScreenShots, {
    foreignKey: 'game_id',
});

ScreenShots.belongsTo(GameData, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

GameData.hasMany(Comment, {
    foreignKey: 'game_id',
});

Comment.belongsTo(GameData, {
    foreignKey: 'game_id',
    onDelete: 'CASCADE'
});

module.exports = { User, Comment, GameData, ScreenShots };