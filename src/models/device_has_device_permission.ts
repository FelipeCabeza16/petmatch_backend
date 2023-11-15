import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { device, deviceId } from './device';
import type { device_permission, device_permissionId } from './device_permission';

export interface device_has_device_permissionAttributes {
  device_id_device: number;
  device_permission_id_device_permission: number;
  conceded?: number;
}

export type device_has_device_permissionPk = "device_id_device" | "device_permission_id_device_permission";
export type device_has_device_permissionId = device_has_device_permission[device_has_device_permissionPk];
export type device_has_device_permissionOptionalAttributes = "conceded";
export type device_has_device_permissionCreationAttributes = Optional<device_has_device_permissionAttributes, device_has_device_permissionOptionalAttributes>;

export class device_has_device_permission extends Model<device_has_device_permissionAttributes, device_has_device_permissionCreationAttributes> implements device_has_device_permissionAttributes {
  device_id_device!: number;
  device_permission_id_device_permission!: number;
  conceded?: number;

  // device_has_device_permission belongsTo device via device_id_device
  device_id_device_device!: device;
  getDevice_id_device_device!: Sequelize.BelongsToGetAssociationMixin<device>;
  setDevice_id_device_device!: Sequelize.BelongsToSetAssociationMixin<device, deviceId>;
  createDevice_id_device_device!: Sequelize.BelongsToCreateAssociationMixin<device>;
  // device_has_device_permission belongsTo device_permission via device_permission_id_device_permission
  device_permission_id_device_permission_device_permission!: device_permission;
  getDevice_permission_id_device_permission_device_permission!: Sequelize.BelongsToGetAssociationMixin<device_permission>;
  setDevice_permission_id_device_permission_device_permission!: Sequelize.BelongsToSetAssociationMixin<device_permission, device_permissionId>;
  createDevice_permission_id_device_permission_device_permission!: Sequelize.BelongsToCreateAssociationMixin<device_permission>;

  static initModel(sequelize: Sequelize.Sequelize): typeof device_has_device_permission {
    return device_has_device_permission.init({
    device_id_device: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'device',
        key: 'id_device'
      }
    },
    device_permission_id_device_permission: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'device_permission',
        key: 'id_device_permission'
      }
    },
    conceded: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'device_has_device_permission',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "device_id_device" },
          { name: "device_permission_id_device_permission" },
        ]
      },
      {
        name: "fk_device_has_device_permission_device_permission1_idx",
        using: "BTREE",
        fields: [
          { name: "device_permission_id_device_permission" },
        ]
      },
      {
        name: "fk_device_has_device_permission_device1_idx",
        using: "BTREE",
        fields: [
          { name: "device_id_device" },
        ]
      },
    ]
  });
  }
}
