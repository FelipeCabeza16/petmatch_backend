import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { device, deviceId } from './device';
import type { pet, petId } from './pet';

export interface sessionAttributes {
  id_session: number;
  latitude?: string;
  longitude?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
  pet_session: number;
  last_connection?: Date;
  device_session: number;
}

export type sessionPk = "id_session";
export type sessionId = session[sessionPk];
export type sessionOptionalAttributes = "id_session" | "latitude" | "longitude" | "created_at" | "updated_at" | "deleted_at" | "is_active" | "last_connection";
export type sessionCreationAttributes = Optional<sessionAttributes, sessionOptionalAttributes>;

export class session extends Model<sessionAttributes, sessionCreationAttributes> implements sessionAttributes {
  id_session!: number;
  latitude?: string;
  longitude?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;
  pet_session!: number;
  last_connection?: Date;
  device_session!: number;

  // session belongsTo device via device_session
  device_session_device!: device;
  getDevice_session_device!: Sequelize.BelongsToGetAssociationMixin<device>;
  setDevice_session_device!: Sequelize.BelongsToSetAssociationMixin<device, deviceId>;
  createDevice_session_device!: Sequelize.BelongsToCreateAssociationMixin<device>;
  // session belongsTo pet via pet_session
  pet_session_pet!: pet;
  getPet_session_pet!: Sequelize.BelongsToGetAssociationMixin<pet>;
  setPet_session_pet!: Sequelize.BelongsToSetAssociationMixin<pet, petId>;
  createPet_session_pet!: Sequelize.BelongsToCreateAssociationMixin<pet>;

  static initModel(sequelize: Sequelize.Sequelize): typeof session {
    return session.init({
      id_session: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      latitude: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      longitude: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      is_active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
      },
      pet_session: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'pet',
          key: 'id_pet'
        }
      },
      last_connection: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
      },
      device_session: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'device',
          key: 'id_device'
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
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
    }, {
      sequelize,
      tableName: 'session',
      timestamps: false,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id_session" },
          ]
        },
        {
          name: "fk_session_pet1_idx",
          using: "BTREE",
          fields: [
            { name: "pet_session" },
          ]
        },
        {
          name: "fk_session_device1_idx",
          using: "BTREE",
          fields: [
            { name: "device_session" },
          ]
        },
      ]
    });
  }
}
