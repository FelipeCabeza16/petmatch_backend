import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { http_method, http_methodId } from './http_method';
import type { modulo, moduloId } from './modulo';
import type { user, userId } from './user';

export interface logAttributes {
  id_log: number;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  is_active?: number;
  user_id_user: number;
  http_method_id_http_method: number;
  modulo_id_modulo: number;
  ip_address?: string;
  device?: string;
}

export type logPk = "id_log";
export type logId = log[logPk];
export type logOptionalAttributes = "id_log" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active" | "ip_address" | "device";
export type logCreationAttributes = Optional<logAttributes, logOptionalAttributes>;

export class log extends Model<logAttributes, logCreationAttributes> implements logAttributes {
  id_log!: number;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  is_active?: number;
  user_id_user!: number;
  http_method_id_http_method!: number;
  modulo_id_modulo!: number;
  ip_address?: string;
  device?: string;

  // log belongsTo http_method via http_method_id_http_method
  http_method_id_http_method_http_method!: http_method;
  getHttp_method_id_http_method_http_method!: Sequelize.BelongsToGetAssociationMixin<http_method>;
  setHttp_method_id_http_method_http_method!: Sequelize.BelongsToSetAssociationMixin<http_method, http_methodId>;
  createHttp_method_id_http_method_http_method!: Sequelize.BelongsToCreateAssociationMixin<http_method>;
  // log belongsTo modulo via modulo_id_modulo
  modulo_id_modulo_modulo!: modulo;
  getModulo_id_modulo_modulo!: Sequelize.BelongsToGetAssociationMixin<modulo>;
  setModulo_id_modulo_modulo!: Sequelize.BelongsToSetAssociationMixin<modulo, moduloId>;
  createModulo_id_modulo_modulo!: Sequelize.BelongsToCreateAssociationMixin<modulo>;
  // log belongsTo user via user_id_user
  user_id_user_user!: user;
  getUser_id_user_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser_id_user_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser_id_user_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof log {
    return log.init({
    id_log: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    user_id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id_user'
      }
    },
    http_method_id_http_method: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'http_method',
        key: 'id_http_method'
      }
    },
    modulo_id_modulo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'modulo',
        key: 'id_modulo'
      }
    },
    ip_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    device: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'log',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_log" },
        ]
      },
      {
        name: "fk_log_user1_idx",
        using: "BTREE",
        fields: [
          { name: "user_id_user" },
        ]
      },
      {
        name: "fk_log_http_method1_idx",
        using: "BTREE",
        fields: [
          { name: "http_method_id_http_method" },
        ]
      },
      {
        name: "fk_log_modulo1_idx",
        using: "BTREE",
        fields: [
          { name: "modulo_id_modulo" },
        ]
      },
    ]
  });
  }
}
