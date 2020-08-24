module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sub: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  user.associate = model => {
    user.hasMany(model.Location);
    user.belongsToMany(model.Beer, { through: 'UserBeers' });
  };
  return user;
};
