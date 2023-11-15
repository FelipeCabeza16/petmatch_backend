import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { device_has_device_permission, device_has_device_permissionId } from './device_has_device_permission';
import type { device_permission, device_permissionId } from './device_permission';
import type { session, sessionId } from './session';

export interface deviceAttributes {
  id_device: number;
  device: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
  uid?: string;
}

export type devicePk = "id_device";
export type deviceId = device[devicePk];
export type deviceOptionalAttributes = "id_device" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active" | "uid";
export type deviceCreationAttributes = Optional<deviceAttributes, deviceOptionalAttributes>;

export class device extends Model<deviceAttributes, deviceCreationAttributes> implements deviceAttributes {
  id_device!: number;
  device!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;
  uid?: string;

  // device hasMany device_has_device_permission via device_id_device
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
  // device belongsToMany device_permission via device_id_device and device_permission_id_device_permission
  device_permission_id_device_permission_device_permissions!: device_permission[];
  getDevice_permission_id_device_permission_device_permissions!: Sequelize.BelongsToManyGetAssociationsMixin<device_permission>;
  setDevice_permission_id_device_permission_device_permissions!: Sequelize.BelongsToManySetAssociationsMixin<device_permission, device_permissionId>;
  addDevice_permission_id_device_permission_device_permission!: Sequelize.BelongsToManyAddAssociationMixin<device_permission, device_permissionId>;
  addDevice_permission_id_device_permission_device_permissions!: Sequelize.BelongsToManyAddAssociationsMixin<device_permission, device_permissionId>;
  createDevice_permission_id_device_permission_device_permission!: Sequelize.BelongsToManyCreateAssociationMixin<device_permission>;
  removeDevice_permission_id_device_permission_device_permission!: Sequelize.BelongsToManyRemoveAssociationMixin<device_permission, device_permissionId>;
  removeDevice_permission_id_device_permission_device_permissions!: Sequelize.BelongsToManyRemoveAssociationsMixin<device_permission, device_permissionId>;
  hasDevice_permission_id_device_permission_device_permission!: Sequelize.BelongsToManyHasAssociationMixin<device_permission, device_permissionId>;
  hasDevice_permission_id_device_permission_device_permissions!: Sequelize.BelongsToManyHasAssociationsMixin<device_permission, device_permissionId>;
  countDevice_permission_id_device_permission_device_permissions!: Sequelize.BelongsToManyCountAssociationsMixin;
  // device hasMany session via device_session
  sessions!: session[];
  getSessions!: Sequelize.HasManyGetAssociationsMixin<session>;
  setSessions!: Sequelize.HasManySetAssociationsMixin<session, sessionId>;
  addSession!: Sequelize.HasManyAddAssociationMixin<session, sessionId>;
  addSessions!: Sequelize.HasManyAddAssociationsMixin<session, sessionId>;
  createSession!: Sequelize.HasManyCreateAssociationMixin<session>;
  removeSession!: Sequelize.HasManyRemoveAssociationMixin<session, sessionId>;
  removeSessions!: Sequelize.HasManyRemoveAssociationsMixin<session, sessionId>;
  hasSession!: Sequelize.HasManyHasAssociationMixin<session, sessionId>;
  hasSessions!: Sequelize.HasManyHasAssociationsMixin<session, sessionId>;
  countSessions!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof device {
    return device.init({
    id_device: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    device: {
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
    uid: {
      type: DataTypes.STRING(100),
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
    tableName: 'device',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_device" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "device" },
        ]
      },
    ]
  });
  }
}
