import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { subscription_config, subscription_configId } from './subscription_config';
import type { subscription_configuration, subscription_configurationId } from './subscription_configuration';
import type { subscription_feature, subscription_featureId } from './subscription_feature';
import type { user, userId } from './user';

export interface subscriptionAttributes {
  id_subscription: number;
  subscription: string;
  description?: string;
  amount?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
  subscription_configuration_id_subscription_configuration?: number;
}

export type subscriptionPk = "id_subscription";
export type subscriptionId = subscription[subscriptionPk];
export type subscriptionOptionalAttributes = "description" | "amount" | "created_at" | "updated_at" | "deleted_at" | "is_active" | "subscription_configuration_id_subscription_configuration";
export type subscriptionCreationAttributes = Optional<subscriptionAttributes, subscriptionOptionalAttributes>;

export class subscription extends Model<subscriptionAttributes, subscriptionCreationAttributes> implements subscriptionAttributes {
  id_subscription!: number;
  subscription!: string;
  description?: string;
  amount?: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;
  subscription_configuration_id_subscription_configuration?: number;

  // subscription hasMany subscription_config via id_subscription
  subscription_configs!: subscription_config[];
  getSubscription_configs!: Sequelize.HasManyGetAssociationsMixin<subscription_config>;
  setSubscription_configs!: Sequelize.HasManySetAssociationsMixin<subscription_config, subscription_configId>;
  addSubscription_config!: Sequelize.HasManyAddAssociationMixin<subscription_config, subscription_configId>;
  addSubscription_configs!: Sequelize.HasManyAddAssociationsMixin<subscription_config, subscription_configId>;
  createSubscription_config!: Sequelize.HasManyCreateAssociationMixin<subscription_config>;
  removeSubscription_config!: Sequelize.HasManyRemoveAssociationMixin<subscription_config, subscription_configId>;
  removeSubscription_configs!: Sequelize.HasManyRemoveAssociationsMixin<subscription_config, subscription_configId>;
  hasSubscription_config!: Sequelize.HasManyHasAssociationMixin<subscription_config, subscription_configId>;
  hasSubscription_configs!: Sequelize.HasManyHasAssociationsMixin<subscription_config, subscription_configId>;
  countSubscription_configs!: Sequelize.HasManyCountAssociationsMixin;
  // subscription belongsToMany subscription_feature via id_subscription and id_config
  id_config_subscription_features!: subscription_feature[];
  getId_config_subscription_features!: Sequelize.BelongsToManyGetAssociationsMixin<subscription_feature>;
  setId_config_subscription_features!: Sequelize.BelongsToManySetAssociationsMixin<subscription_feature, subscription_featureId>;
  addId_config_subscription_feature!: Sequelize.BelongsToManyAddAssociationMixin<subscription_feature, subscription_featureId>;
  addId_config_subscription_features!: Sequelize.BelongsToManyAddAssociationsMixin<subscription_feature, subscription_featureId>;
  createId_config_subscription_feature!: Sequelize.BelongsToManyCreateAssociationMixin<subscription_feature>;
  removeId_config_subscription_feature!: Sequelize.BelongsToManyRemoveAssociationMixin<subscription_feature, subscription_featureId>;
  removeId_config_subscription_features!: Sequelize.BelongsToManyRemoveAssociationsMixin<subscription_feature, subscription_featureId>;
  hasId_config_subscription_feature!: Sequelize.BelongsToManyHasAssociationMixin<subscription_feature, subscription_featureId>;
  hasId_config_subscription_features!: Sequelize.BelongsToManyHasAssociationsMixin<subscription_feature, subscription_featureId>;
  countId_config_subscription_features!: Sequelize.BelongsToManyCountAssociationsMixin;
  // subscription hasMany user via subscription_user
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
  // subscription belongsTo subscription_configuration via subscription_configuration_id_subscription_configuration
  subscription_configuration_id_subscription_configuration_subscription_configuration!: subscription_configuration;
  getSubscription_configuration_id_subscription_configuration_subscription_configuration!: Sequelize.BelongsToGetAssociationMixin<subscription_configuration>;
  setSubscription_configuration_id_subscription_configuration_subscription_configuration!: Sequelize.BelongsToSetAssociationMixin<subscription_configuration, subscription_configurationId>;
  createSubscription_configuration_id_subscription_configuration_subscription_configuration!: Sequelize.BelongsToCreateAssociationMixin<subscription_configuration>;

  static initModel(sequelize: Sequelize.Sequelize): typeof subscription {
    return subscription.init({
    id_subscription: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subscription: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "subscription_UNIQUE"
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    subscription_configuration_id_subscription_configuration: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'subscription_configuration',
        key: 'id_subscription_configuration'
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
  }, {
    sequelize,
    tableName: 'subscription',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_subscription" },
        ]
      },
      {
        name: "subscription_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subscription" },
        ]
      },
      {
        name: "fk_subscription_subscription_configuration1_idx",
        using: "BTREE",
        fields: [
          { name: "subscription_configuration_id_subscription_configuration" },
        ]
      },
    ]
  });
  }
}
