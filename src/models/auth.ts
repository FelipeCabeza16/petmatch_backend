import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface authAttributes {
  id_auth: number;
  token: string;
  token_user: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
}

export type authPk = "id_auth";
export type authId = auth[authPk];
export type authOptionalAttributes = "id_auth" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type authCreationAttributes = Optional<authAttributes, authOptionalAttributes>;

export class auth extends Model<authAttributes, authCreationAttributes> implements authAttributes {
  id_auth!: number;
  token!: string;
  token_user!: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;

  // auth belongsTo user via token_user
  token_user_user!: user;
  getToken_user_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setToken_user_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createToken_user_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof auth {
    return auth.init({
      id_auth: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      token: {
        type: DataTypes.STRING(800),
        allowNull: false
      },
      token_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id_user'
        }
      },
      is_active: {
        type: DataTypes.TINYINT,
        allowNull: false,
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
      tableName: 'auth',
      timestamps: false,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id_auth" },
          ]
        },
        {
          name: "fk_auth_owner1_idx",
          using: "BTREE",
          fields: [
            { name: "token_user" },
          ]
        },
      ]
    });
  }
}
