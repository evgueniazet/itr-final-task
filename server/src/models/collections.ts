export default (sequelize: any, DataTypes: any) => {
    const collections = sequelize.define('collections', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        categoryId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_int1_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_int1_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_int2_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_int2_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_int3_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_int3_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_string1_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_string1_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_string2_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_string2_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_string3_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_string3_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_text1_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_text1_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_text2_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_text2_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_text3_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_text3_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_boolean1_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_boolean1_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_boolean2_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_boolean2_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_boolean3_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_boolean3_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_date1_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_date1_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_date2_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_date2_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        custom_date3_state: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        custom_date3_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    return collections;
};
