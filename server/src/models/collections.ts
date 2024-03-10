const collectionModel = (sequelize: any, DataTypes: any) => {
    const collections = sequelize.define('collections', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    return collections;
};

export default collectionModel;
