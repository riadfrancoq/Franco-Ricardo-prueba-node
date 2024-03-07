import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class productos_stocks extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    cantidad: {
      type: DataTypes.DECIMAL(8,3),
      allowNull: false
    },
    id_tienda: {
      type: DataTypes.SMALLINT.UNSIGNED,
      allowNull: true,
      references: {
        model: 'tiendas',
        key: 'id'
      }
    },
    id_producto: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    fecha_ingreso: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'productos_stocks',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_producto",
        using: "BTREE",
        fields: [
          { name: "id_producto" },
        ]
      },
      {
        name: "id_tienda",
        using: "BTREE",
        fields: [
          { name: "id_tienda" },
        ]
      },
    ]
  });
  }
}
