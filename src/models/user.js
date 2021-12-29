const {DataTypes, Model} = require('sequelize')


class user extends Model {
    static init(sequelize){
        super.init({

            name: DataTypes.STRING,
            email: DataTypes.STRING,
            createdAt: DataTypes.DATE,
            updatedAt: DataTypes.DATE
        },{
            sequelize
        })
    }
} 

module.exports = user