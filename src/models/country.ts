import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { department, departmentId } from './department';

export interface countryAttributes {
  id_country: number;
  iso?: string;
  country: string;
  iso3?: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
  num_code?: string;
  phone_code?: string;
}

export type countryPk = "id_country";
export type countryId = country[countryPk];
export type countryOptionalAttributes = "id_country" | "iso" | "iso3" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active" | "num_code" | "phone_code";
export type countryCreationAttributes = Optional<countryAttributes, countryOptionalAttributes>;

export class country extends Model<countryAttributes, countryCreationAttributes> implements countryAttributes {
  id_country!: number;
  iso?: string;
  country!: string;
  iso3?: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;
  num_code?: string;
  phone_code?: string;

  // country hasMany department via country_department
  departments!: department[];
  getDepartments!: Sequelize.HasManyGetAssociationsMixin<department>;
  setDepartments!: Sequelize.HasManySetAssociationsMixin<department, departmentId>;
  addDepartment!: Sequelize.HasManyAddAssociationMixin<department, departmentId>;
  addDepartments!: Sequelize.HasManyAddAssociationsMixin<department, departmentId>;
  createDepartment!: Sequelize.HasManyCreateAssociationMixin<department>;
  removeDepartment!: Sequelize.HasManyRemoveAssociationMixin<department, departmentId>;
  removeDepartments!: Sequelize.HasManyRemoveAssociationsMixin<department, departmentId>;
  hasDepartment!: Sequelize.HasManyHasAssociationMixin<department, departmentId>;
  hasDepartments!: Sequelize.HasManyHasAssociationsMixin<department, departmentId>;
  countDepartments!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof country {
    return country.init({
      id_country: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      iso: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      country: {
        type: DataTypes.STRING(300),
        allowNull: false
      },
      iso3: {
        type: DataTypes.STRING(4),
        allowNull: true,
        unique: "iso3_UNIQUE"
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
      num_code: {
        type: DataTypes.STRING(10),
        allowNull: true
      },
      phone_code: {
        type: DataTypes.STRING(10),
        allowNull: true
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
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
    }, {
      sequelize,
      tableName: 'country',
      timestamps: false,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id_country" },
          ]
        },
        {
          name: "iso3_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "iso3" },
          ]
        },
      ]
    });
  }
}
