import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { subscription, subscriptionId } from './subscription';
import type { subscription_config, subscription_configId } from './subscription_config';

export interface subscription_featureAttributes {
  id_subscription_feature: number;
  subscription_feature: string;
  description?: string;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
  created_at: Date;
}

export type subscription_featurePk = "id_subscription_feature";
export type subscription_featureId = subscription_feature[subscription_featurePk];
export type subscription_featureOptionalAttributes = "id_subscription_feature" | "description" | "updated_at" | "deleted_at" | "is_active" | "created_at";
export type subscription_featureCreationAttributes = Optional<subscription_featureAttributes, subscription_featureOptionalAttributes>;

export class subscription_feature extends Model<subscription_featureAttributes, subscription_featureCreationAttributes> implements subscription_featureAttributes {
  id_subscription_feature!: number;
  subscription_feature!: string;
  description?: string;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;
  created_at!: Date;

  // subscription_feature belongsToMany subscription via id_config and id_subscription
  id_subscription_subscriptions!: subscription[];
  getId_subscription_subscriptions!: Sequelize.BelongsToManyGetAssociationsMixin<subscription>;
  setId_subscription_subscriptions!: Sequelize.BelongsToManySetAssociationsMixin<subscription, subscriptionId>;
  addId_subscription_subscription!: Sequelize.BelongsToManyAddAssociationMixin<subscription, subscriptionId>;
  addId_subscription_subscriptions!: Sequelize.BelongsToManyAddAssociationsMixin<subscription, subscriptionId>;
  createId_subscription_subscription!: Sequelize.BelongsToManyCreateAssociationMixin<subscription>;
  removeId_subscription_subscription!: Sequelize.BelongsToManyRemoveAssociationMixin<subscription, subscriptionId>;
  removeId_subscription_subscriptions!: Sequelize.BelongsToManyRemoveAssociationsMixin<subscription, subscriptionId>;
  hasId_subscription_subscription!: Sequelize.BelongsToManyHasAssociationMixin<subscription, subscriptionId>;
  hasId_subscription_subscriptions!: Sequelize.BelongsToManyHasAssociationsMixin<subscription, subscriptionId>;
  countId_subscription_subscriptions!: Sequelize.BelongsToManyCountAssociationsMixin;
  // subscription_feature hasMany subscription_config via id_config
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

  static initModel(sequelize: Sequelize.Sequelize): typeof subscription_feature {
    return subscription_feature.init({
    id_subscription_feature: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    subscription_feature: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "feature_UNIQUE"
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
    tableName: 'subscription_feature',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_subscription_feature" },
        ]
      },
      {
        name: "feature_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "subscription_feature" },
        ]
      },
    ]
  });
  }
}
