import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { device, deviceId } from './device';
import type { device_has_device_permission, device_has_device_permissionId } from './device_has_device_permission';

export interface device_permissionAttributes {
  id_device_permission: number;
  device_permission: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
}

export type device_permissionPk = "id_device_permission";
export type device_permissionId = device_permission[device_permissionPk];
export type device_permissionOptionalAttributes = "id_device_permission" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type device_permissionCreationAttributes = Optional<device_permissionAttributes, device_permissionOptionalAttributes>;

export class device_permission extends Model<device_permissionAttributes, device_permissionCreationAttributes> implements device_permissionAttributes {
  id_device_permission!: number;
  device_permission!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;

  // device_permission belongsToMany device via device_permission_id_device_permission and device_id_device
  device_id_device_devices!: device[];
  getDevice_id_device_devices!: Sequelize.BelongsToManyGetAssociationsMixin<device>;
  setDevice_id_device_devices!: Sequelize.BelongsToManySetAssociationsMixin<device, deviceId>;
  addDevice_id_device_device!: Sequelize.BelongsToManyAddAssociationMixin<device, deviceId>;
  addDevice_id_device_devices!: Sequelize.BelongsToManyAddAssociationsMixin<device, deviceId>;
  createDevice_id_device_device!: Sequelize.BelongsToManyCreateAssociationMixin<device>;
  removeDevice_id_device_device!: Sequelize.BelongsToManyRemoveAssociationMixin<device, deviceId>;
  removeDevice_id_device_devices!: Sequelize.BelongsToManyRemoveAssociationsMixin<device, deviceId>;
  hasDevice_id_device_device!: Sequelize.BelongsToManyHasAssociationMixin<device, deviceId>;
  hasDevice_id_device_devices!: Sequelize.BelongsToManyHasAssociationsMixin<device, deviceId>;
  countDevice_id_device_devices!: Sequelize.BelongsToManyCountAssociationsMixin;
  // device_permission hasMany device_has_device_permission via device_permission_id_device_permission
  device_has_device_permissions!: device_has_device_permission[];
  getDevice_has_device_permissions!: Sequelize.HasManyGetAssociationsMixin<device_has_device_permission>;
  setDevice_has_device_permissions!: Sequelize.HasManySetAssociationsMixin<device_has_device_permission, device_has_device_permissionId>;
  addDevice_has_device_permission!: Sequelize.HasManyAddAssociationMixin<device_has_device_permission, device_has_device_permissionId>;
  addDevice_has_device_permissions!: Sequelize.HasManyAddAssociationsMixin<device_has_device_permission, device_has_device_permissionId>;
  createDevice_has_device_permission!: Sequelize.HasManyCreateAssociationMixin<device_has_device_permission>;
  removeDevice_has_device_permission!: Sequelize.HasManyRemoveAssociationMixin<device_has_device_permission, device_has_device_permissionId>;
  removeDevice_has_device_permissions!: Sequelize.HasManyRemoveAssociationsMixin<device_has_device_permission, device_has_device_permissionId>;
  hasDevice_has_device_permission!: Sequelize.HasManyHasAssociationMixin<device_has_device_permission, device_has_device_permissionId>;
  hasDevice_has_device_permissions!: Sequelize.HasManyHasAssociationsMixin<device_has_device_permission, device_has_device_permissionId>;
  countDevice_has_device_permissions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof device_permission {
    return device_permission.init({
    id_device_permission: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    device_permission: {
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
  }, {
    sequelize,
    tableName: 'device_permission',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_device_permission" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "device_permission" },
        ]
      },
    ]
  });
  }
}
