import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { social_account, social_accountId } from './social_account';
import type { user, userId } from './user';

export interface social_account_providerAttributes {
  id_social_account_provider: number;
  social_account_provider: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
}

export type social_account_providerPk = "id_social_account_provider";
export type social_account_providerId = social_account_provider[social_account_providerPk];
export type social_account_providerOptionalAttributes = "social_account_provider" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type social_account_providerCreationAttributes = Optional<social_account_providerAttributes, social_account_providerOptionalAttributes>;

export class social_account_provider extends Model<social_account_providerAttributes, social_account_providerCreationAttributes> implements social_account_providerAttributes {
  id_social_account_provider!: number;
  social_account_provider!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;

  // social_account_provider hasMany social_account via id_social_account
  social_accounts!: social_account[];
  getSocial_accounts!: Sequelize.HasManyGetAssociationsMixin<social_account>;
  setSocial_accounts!: Sequelize.HasManySetAssociationsMixin<social_account, social_accountId>;
  addSocial_account!: Sequelize.HasManyAddAssociationMixin<social_account, social_accountId>;
  addSocial_accounts!: Sequelize.HasManyAddAssociationsMixin<social_account, social_accountId>;
  createSocial_account!: Sequelize.HasManyCreateAssociationMixin<social_account>;
  removeSocial_account!: Sequelize.HasManyRemoveAssociationMixin<social_account, social_accountId>;
  removeSocial_accounts!: Sequelize.HasManyRemoveAssociationsMixin<social_account, social_accountId>;
  hasSocial_account!: Sequelize.HasManyHasAssociationMixin<social_account, social_accountId>;
  hasSocial_accounts!: Sequelize.HasManyHasAssociationsMixin<social_account, social_accountId>;
  countSocial_accounts!: Sequelize.HasManyCountAssociationsMixin;
  // social_account_provider belongsToMany user via id_social_account and id_user
  id_user_users!: user[];
  getId_user_users!: Sequelize.BelongsToManyGetAssociationsMixin<user>;
  setId_user_users!: Sequelize.BelongsToManySetAssociationsMixin<user, userId>;
  addId_user_user!: Sequelize.BelongsToManyAddAssociationMixin<user, userId>;
  addId_user_users!: Sequelize.BelongsToManyAddAssociationsMixin<user, userId>;
  createId_user_user!: Sequelize.BelongsToManyCreateAssociationMixin<user>;
  removeId_user_user!: Sequelize.BelongsToManyRemoveAssociationMixin<user, userId>;
  removeId_user_users!: Sequelize.BelongsToManyRemoveAssociationsMixin<user, userId>;
  hasId_user_user!: Sequelize.BelongsToManyHasAssociationMixin<user, userId>;
  hasId_user_users!: Sequelize.BelongsToManyHasAssociationsMixin<user, userId>;
  countId_user_users!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof social_account_provider {
    return social_account_provider.init({
    id_social_account_provider: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    social_account_provider: {
      type: DataTypes.STRING(400),
      allowNull: false,
      defaultValue: "GOOGLE",
      unique: "uid_UNIQUE"
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
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
    tableName: 'social_account_provider',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_social_account_provider" },
        ]
      },
      {
        name: "uid_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "social_account_provider" },
        ]
      },
    ]
  });
  }
}
