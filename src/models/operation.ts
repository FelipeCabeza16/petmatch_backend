import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { modulo, moduloId } from './modulo';
import type { permission, permissionId } from './permission';
import type { role, roleId } from './role';

export interface operationAttributes {
  id_operation: string;
  role_operation: number;
  modulo_operation: number;
  permission_operation: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: string;
}

export type operationPk = "id_operation";
export type operationId = operation[operationPk];
export type operationOptionalAttributes = "created_at" | "updated_at" | "deleted_at" | "is_active";
export type operationCreationAttributes = Optional<operationAttributes, operationOptionalAttributes>;

export class operation extends Model<operationAttributes, operationCreationAttributes> implements operationAttributes {
  id_operation!: string;
  role_operation!: number;
  modulo_operation!: number;
  permission_operation!: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: string;

  // operation belongsTo modulo via modulo_operation
  modulo_operation_modulo!: modulo;
  getModulo_operation_modulo!: Sequelize.BelongsToGetAssociationMixin<modulo>;
  setModulo_operation_modulo!: Sequelize.BelongsToSetAssociationMixin<modulo, moduloId>;
  createModulo_operation_modulo!: Sequelize.BelongsToCreateAssociationMixin<modulo>;
  // operation belongsTo permission via permission_operation
  permission_operation_permission!: permission;
  getPermission_operation_permission!: Sequelize.BelongsToGetAssociationMixin<permission>;
  setPermission_operation_permission!: Sequelize.BelongsToSetAssociationMixin<permission, permissionId>;
  createPermission_operation_permission!: Sequelize.BelongsToCreateAssociationMixin<permission>;
  // operation belongsTo role via role_operation
  role_operation_role!: role;
  getRole_operation_role!: Sequelize.BelongsToGetAssociationMixin<role>;
  setRole_operation_role!: Sequelize.BelongsToSetAssociationMixin<role, roleId>;
  createRole_operation_role!: Sequelize.BelongsToCreateAssociationMixin<role>;

  static initModel(sequelize: Sequelize.Sequelize): typeof operation {
    return operation.init({
    id_operation: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    role_operation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'role',
        key: 'id_role'
      }
    },
    modulo_operation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'modulo',
        key: 'id_modulo'
      }
    },
    permission_operation: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'permission',
        key: 'id_permission'
      }
    },
    is_active: {
      type: DataTypes.STRING(45),
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
  }, {
    sequelize,
    tableName: 'operation',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_operation" },
        ]
      },
      {
        name: "fk_role_has_modulo_modulo1_idx",
        using: "BTREE",
        fields: [
          { name: "modulo_operation" },
        ]
      },
      {
        name: "fk_role_has_modulo_role1_idx",
        using: "BTREE",
        fields: [
          { name: "role_operation" },
        ]
      },
      {
        name: "fk_operation_permission1_idx",
        using: "BTREE",
        fields: [
          { name: "permission_operation" },
        ]
      },
    ]
  });
  }
}
