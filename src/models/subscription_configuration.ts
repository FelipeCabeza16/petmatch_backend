import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { subscription, subscriptionId } from './subscription';
import type { subscription_configuration_history, subscription_configuration_historyId } from './subscription_configuration_history';

export interface subscription_configurationAttributes {
  id_subscription_configuration: number;
  discount_percentaje_monthly: number;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
  monthly_susbcription?: number;
  yearly_subscription?: number;
  discount_percentaje_yearly?: number;
}

export type subscription_configurationPk = "id_subscription_configuration";
export type subscription_configurationId = subscription_configuration[subscription_configurationPk];
export type subscription_configurationOptionalAttributes = "discount_percentaje_monthly" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active" | "monthly_susbcription" | "yearly_subscription" | "discount_percentaje_yearly";
export type subscription_configurationCreationAttributes = Optional<subscription_configurationAttributes, subscription_configurationOptionalAttributes>;

export class subscription_configuration extends Model<subscription_configurationAttributes, subscription_configurationCreationAttributes> implements subscription_configurationAttributes {
  id_subscription_configuration!: number;
  discount_percentaje_monthly!: number;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;
  monthly_susbcription?: number;
  yearly_subscription?: number;
  discount_percentaje_yearly?: number;

  // subscription_configuration hasMany subscription via subscription_configuration_id_subscription_configuration
  subscriptions!: subscription[];
  getSubscriptions!: Sequelize.HasManyGetAssociationsMixin<subscription>;
  setSubscriptions!: Sequelize.HasManySetAssociationsMixin<subscription, subscriptionId>;
  addSubscription!: Sequelize.HasManyAddAssociationMixin<subscription, subscriptionId>;
  addSubscriptions!: Sequelize.HasManyAddAssociationsMixin<subscription, subscriptionId>;
  createSubscription!: Sequelize.HasManyCreateAssociationMixin<subscription>;
  removeSubscription!: Sequelize.HasManyRemoveAssociationMixin<subscription, subscriptionId>;
  removeSubscriptions!: Sequelize.HasManyRemoveAssociationsMixin<subscription, subscriptionId>;
  hasSubscription!: Sequelize.HasManyHasAssociationMixin<subscription, subscriptionId>;
  hasSubscriptions!: Sequelize.HasManyHasAssociationsMixin<subscription, subscriptionId>;
  countSubscriptions!: Sequelize.HasManyCountAssociationsMixin;
  // subscription_configuration hasMany subscription_configuration_history via subscription_configuration_subscription_configuration_history
  subscription_configuration_histories!: subscription_configuration_history[];
  getSubscription_configuration_histories!: Sequelize.HasManyGetAssociationsMixin<subscription_configuration_history>;
  setSubscription_configuration_histories!: Sequelize.HasManySetAssociationsMixin<subscription_configuration_history, subscription_configuration_historyId>;
  addSubscription_configuration_history!: Sequelize.HasManyAddAssociationMixin<subscription_configuration_history, subscription_configuration_historyId>;
  addSubscription_configuration_histories!: Sequelize.HasManyAddAssociationsMixin<subscription_configuration_history, subscription_configuration_historyId>;
  createSubscription_configuration_history!: Sequelize.HasManyCreateAssociationMixin<subscription_configuration_history>;
  removeSubscription_configuration_history!: Sequelize.HasManyRemoveAssociationMixin<subscription_configuration_history, subscription_configuration_historyId>;
  removeSubscription_configuration_histories!: Sequelize.HasManyRemoveAssociationsMixin<subscription_configuration_history, subscription_configuration_historyId>;
  hasSubscription_configuration_history!: Sequelize.HasManyHasAssociationMixin<subscription_configuration_history, subscription_configuration_historyId>;
  hasSubscription_configuration_histories!: Sequelize.HasManyHasAssociationsMixin<subscription_configuration_history, subscription_configuration_historyId>;
  countSubscription_configuration_histories!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof subscription_configuration {
    return subscription_configuration.init({
    id_subscription_configuration: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    discount_percentaje_monthly: {
      type: DataTypes.DOUBLE,
      allowNull: false,
      defaultValue: 0,
      unique: "breed_UNIQUE"
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
    monthly_susbcription: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    yearly_subscription: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    discount_percentaje_yearly: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: 0.1
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
    tableName: 'subscription_configuration',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_subscription_configuration" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "discount_percentaje_monthly" },
        ]
      },
    ]
  });
  }
}
