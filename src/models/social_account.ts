import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { social_account_provider, social_account_providerId } from './social_account_provider';
import type { user, userId } from './user';

export interface social_accountAttributes {
  id_social_account: number;
  id_user: number;
  uid: string;
}

export type social_accountPk = "id_social_account" | "id_user";
export type social_accountId = social_account[social_accountPk];
export type social_accountOptionalAttributes = "id_social_account";
export type social_accountCreationAttributes = Optional<social_accountAttributes, social_accountOptionalAttributes>;

export class social_account extends Model<social_accountAttributes, social_accountCreationAttributes> implements social_accountAttributes {
  id_social_account!: number;
  id_user!: number;
  uid!: string;

  // social_account belongsTo social_account_provider via id_social_account
  id_social_account_social_account_provider!: social_account_provider;
  getId_social_account_social_account_provider!: Sequelize.BelongsToGetAssociationMixin<social_account_provider>;
  setId_social_account_social_account_provider!: Sequelize.BelongsToSetAssociationMixin<social_account_provider, social_account_providerId>;
  createId_social_account_social_account_provider!: Sequelize.BelongsToCreateAssociationMixin<social_account_provider>;
  // social_account belongsTo user via id_user
  id_user_user!: user;
  getId_user_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setId_user_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createId_user_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof social_account {
    return social_account.init({
    id_social_account: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'social_account_provider',
        key: 'id_social_account_provider'
      }
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id_user'
      }
    },
    uid: {
      type: DataTypes.STRING(200),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'social_account',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_social_account" },
          { name: "id_user" },
        ]
      },
      {
        name: "fk_social_account_provider_has_owner_owner1_idx",
        using: "BTREE",
        fields: [
          { name: "id_user" },
        ]
      },
      {
        name: "fk_social_account_provider_has_owner_social_account_provide_idx",
        using: "BTREE",
        fields: [
          { name: "id_social_account" },
        ]
      },
    ]
  });
  }
}
