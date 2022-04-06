const sequelize = require('./db'),
      DataTypes = require('sequelize');

const User = sequelize.define('user' , {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING }
}
)

const Rating = sequelize.define('rating' , {
    points: { type: DataTypes.INTEGER }
}
)

User.hasOne(Rating);
Rating.belongsTo(User);

module.exports = {
    User, Rating
}