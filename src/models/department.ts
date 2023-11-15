import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { city, cityId } from './city';
import type { country, countryId } from './country';

export interface departmentAttributes {
  id_department: number;
  department: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
  country_department: number;
}

export type departmentPk = "id_department" | "country_department";
export type departmentId = department[departmentPk];
export type departmentOptionalAttributes = "id_department" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type departmentCreationAttributes = Optional<departmentAttributes, departmentOptionalAttributes>;

export class department extends Model<departmentAttributes, departmentCreationAttributes> implements departmentAttributes {
  id_department!: number;
  department!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;
  country_department!: number;

  // department belongsTo country via country_department
  country_department_country!: country;
  getCountry_department_country!: Sequelize.BelongsToGetAssociationMixin<country>;
  setCountry_department_country!: Sequelize.BelongsToSetAssociationMixin<country, countryId>;
  createCountry_department_country!: Sequelize.BelongsToCreateAssociationMixin<country>;
  // department hasMany city via department_city
  cities!: city[];
  getCities!: Sequelize.HasManyGetAssociationsMixin<city>;
  setCities!: Sequelize.HasManySetAssociationsMixin<city, cityId>;
  addCity!: Sequelize.HasManyAddAssociationMixin<city, cityId>;
  addCities!: Sequelize.HasManyAddAssociationsMixin<city, cityId>;
  createCity!: Sequelize.HasManyCreateAssociationMixin<city>;
  removeCity!: Sequelize.HasManyRemoveAssociationMixin<city, cityId>;
  removeCities!: Sequelize.HasManyRemoveAssociationsMixin<city, cityId>;
  hasCity!: Sequelize.HasManyHasAssociationMixin<city, cityId>;
  hasCities!: Sequelize.HasManyHasAssociationsMixin<city, cityId>;
  countCities!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof department {
    return department.init({
    id_department: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    department: {
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
    country_department: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'country',
        key: 'id_country'
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
    tableName: 'department',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_department" },
          { name: "country_department" },
        ]
      },
      {
        name: "fk_department_country1_idx",
        using: "BTREE",
        fields: [
          { name: "country_department" },
        ]
      },
    ]
  });
  }
}
