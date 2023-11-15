import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { operation, operationId } from './operation';

export interface moduloAttributes {
  id_modulo: number;
  modulo: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
}

export type moduloPk = "id_modulo";
export type moduloId = modulo[moduloPk];
export type moduloOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type moduloCreationAttributes = Optional<moduloAttributes, moduloOptionalAttributes>;

export class modulo extends Model<moduloAttributes, moduloCreationAttributes> implements moduloAttributes {
  id_modulo!: number;
  modulo!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;

  // modulo hasMany operation via modulo_operation
  operations!: operation[];
  getOperations!: Sequelize.HasManyGetAssociationsMixin<operation>;
  setOperations!: Sequelize.HasManySetAssociationsMixin<operation, operationId>;
  addOperation!: Sequelize.HasManyAddAssociationMixin<operation, operationId>;
  addOperations!: Sequelize.HasManyAddAssociationsMixin<operation, operationId>;
  createOperation!: Sequelize.HasManyCreateAssociationMixin<operation>;
  removeOperation!: Sequelize.HasManyRemoveAssociationMixin<operation, operationId>;
  removeOperations!: Sequelize.HasManyRemoveAssociationsMixin<operation, operationId>;
  hasOperation!: Sequelize.HasManyHasAssociationMixin<operation, operationId>;
  hasOperations!: Sequelize.HasManyHasAssociationsMixin<operation, operationId>;
  countOperations!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof modulo {
    return modulo.init({
    id_modulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    modulo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "breed_UNIQUE"
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
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
    tableName: 'modulo',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_modulo" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "modulo" },
        ]
      },
    ]
  });
  }
}
