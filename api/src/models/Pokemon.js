const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
function* generateId (){
  let id = 41
  while(true){
    yield id
    id++
  }
}
const id = generateId()
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{type:DataTypes.INTEGER(),primaryKey: true, defaultValue:id.next().value},
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hp: {
      type: DataTypes.INTEGER,allowNull:false
    },
    attack: {type:DataTypes.INTEGER, allowNull:false},
    defense: {type:DataTypes.INTEGER,allowNull:false},
    speed: {type: DataTypes.INTEGER, allowNull:false},
    height: {type: DataTypes.INTEGER, allowNull:false},
    weight: {type: DataTypes.INTEGER,allowNull:false},
    SpecialAttack: {type: DataTypes.INTEGER,allowNull:false},
    SpecialDefense: {type: DataTypes.INTEGER, allowNull:false}
  },{
    initialAutoIncrement: 41,
    freezeTableName: true, 
    timestamps: false
  });
  sequelize.define('types',{
    type_id:{type: DataTypes.INTEGER,autoIncrement: true,primaryKey: true},
    name: {type: DataTypes.STRING, allowNull:false}
  },{freezeTableName:true,timestamps:false})
};
