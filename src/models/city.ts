import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { address, addressId } from './address';
import type { department, departmentId } from './department';

export interface cityAttributes {
  id_city: number;
  city: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
  department_city: number;
}

export type cityPk = "id_city";
export type cityId = city[cityPk];
export type cityOptionalAttributes = "id_city" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type cityCreationAttributes = Optional<cityAttributes, cityOptionalAttributes>;

export class city extends Model<cityAttributes, cityCreationAttributes> implements cityAttributes {
  id_city!: number;
  city!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;
  department_city!: number;

  // city hasMany address via city_address
  addresses!: address[];
  getAddresses!: Sequelize.HasManyGetAssociationsMixin<address>;
  setAddresses!: Sequelize.HasManySetAssociationsMixin<address, addressId>;
  addAddress!: Sequelize.HasManyAddAssociationMixin<address, addressId>;
  addAddresses!: Sequelize.HasManyAddAssociationsMixin<address, addressId>;
  createAddress!: Sequelize.HasManyCreateAssociationMixin<address>;
  removeAddress!: Sequelize.HasManyRemoveAssociationMixin<address, addressId>;
  removeAddresses!: Sequelize.HasManyRemoveAssociationsMixin<address, addressId>;
  hasAddress!: Sequelize.HasManyHasAssociationMixin<address, addressId>;
  hasAddresses!: Sequelize.HasManyHasAssociationsMixin<address, addressId>;
  countAddresses!: Sequelize.HasManyCountAssociationsMixin;
  // city belongsTo department via department_city
  department_city_department!: department;
  getDepartment_city_department!: Sequelize.BelongsToGetAssociationMixin<department>;
  setDepartment_city_department!: Sequelize.BelongsToSetAssociationMixin<department, departmentId>;
  createDepartment_city_department!: Sequelize.BelongsToCreateAssociationMixin<department>;

  static initModel(sequelize: Sequelize.Sequelize): typeof city {
    return city.init({
    id_city: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    city: {
      type: DataTypes.STRING(300),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    department_city: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'department',
        key: 'id_department'
      }
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
  }, {
    sequelize,
    tableName: 'city',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_city" },
        ]
      },
      {
        name: "fk_city_department1_idx",
        using: "BTREE",
        fields: [
          { name: "department_city" },
        ]
      },
    ]
  });
  }
}
