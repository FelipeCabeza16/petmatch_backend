import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { operation, operationId } from './operation';
import type { user, userId } from './user';

export interface roleAttributes {
  id_role: number;
  role: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
  description?: string;
}

export type rolePk = "id_role";
export type roleId = role[rolePk];
export type roleOptionalAttributes = "created_at" | "updated_at" | "deleted_at" | "is_active" | "description";
export type roleCreationAttributes = Optional<roleAttributes, roleOptionalAttributes>;

export class role extends Model<roleAttributes, roleCreationAttributes> implements roleAttributes {
  id_role!: number;
  role!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;
  description?: string;

  // role hasMany operation via role_operation
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
  // role hasMany user via role_user
  users!: user[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<user>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<user, userId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<user, userId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<user, userId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<user>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<user, userId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<user, userId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<user, userId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<user, userId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof role {
    return role.init({
    id_role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role: {
      type: DataTypes.STRING(800),
      allowNull: false
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    description: {
      type: DataTypes.STRING(500),
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
    tableName: 'role',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_role" },
        ]
      },
    ]
  });
  }
}
