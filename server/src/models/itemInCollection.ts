export default (sequelize: any, DataTypes: any) => {
    const itemInCollection = sequelize.define('item-in-collection', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        collectionId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tags: {
            type: DataTypes.JSON,
            allowNull: false,
            defaultValue: [],
            get(this: { getDataValue: (key: string) => any }, key: string) {
                const tags = this.getDataValue(key);
                return tags ? JSON.parse(tags) : [];
            },
            set(
                this: { setDataValue: (key: string, value: any) => void },
                key: string,
                value: any,
            ) {
                this.setDataValue(key, JSON.stringify(value));
            },
        },
    });

    itemInCollection.associate = (models: any) => {
        itemInCollection.belongsTo(models.collection);
    };

    return itemInCollection;
};
