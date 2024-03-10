export default (sequelize: any, DataTypes: any) => {
    const users = sequelize.define('users', {
        name: {
            type: DataTypes.STRING,
        },
        surname: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isBlocked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        code: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    });

    users.associate = (models: any) => {
        users.hasMany(models.collections, {
            foreignKey: 'userId',
            sourceKey: 'id',
            onDelete: 'cascade',
        });
    };

    return users;
};