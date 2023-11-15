import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { subscription, subscriptionId } from './subscription';
import type { subscription_feature, subscription_featureId } from './subscription_feature';

export interface subscription_configAttributes {
  id_subscription: number;
  id_config: number;
}

export type subscription_configPk = "id_subscription" | "id_config";
export type subscription_configId = subscription_config[subscription_configPk];
export type subscription_configCreationAttributes = subscription_configAttributes;

export class subscription_config extends Model<subscription_configAttributes, subscription_configCreationAttributes> implements subscription_configAttributes {
  id_subscription!: number;
  id_config!: number;

  // subscription_config belongsTo subscription via id_subscription
  id_subscription_subscription!: subscription;
  getId_subscription_subscription!: Sequelize.BelongsToGetAssociationMixin<subscription>;
  setId_subscription_subscription!: Sequelize.BelongsToSetAssociationMixin<subscription, subscriptionId>;
  createId_subscription_subscription!: Sequelize.BelongsToCreateAssociationMixin<subscription>;
  // subscription_config belongsTo subscription_feature via id_config
  id_config_subscription_feature!: subscription_feature;
  getId_config_subscription_feature!: Sequelize.BelongsToGetAssociationMixin<subscription_feature>;
  setId_config_subscription_feature!: Sequelize.BelongsToSetAssociationMixin<subscription_feature, subscription_featureId>;
  createId_config_subscription_feature!: Sequelize.BelongsToCreateAssociationMixin<subscription_feature>;

  static initModel(sequelize: Sequelize.Sequelize): typeof subscription_config {
    return subscription_config.init({
    id_subscription: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'subscription',
        key: 'id_subscription'
      }
    },
    id_config: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'subscription_feature',
        key: 'id_subscription_feature'
      }
    }
  }, {
    sequelize,
    tableName: 'subscription_config',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_subscription" },
          { name: "id_config" },
        ]
      },
      {
        name: "fk_subscription_has_config_config1_idx",
        using: "BTREE",
        fields: [
          { name: "id_config" },
        ]
      },
      {
        name: "fk_subscription_has_config_subscription1_idx",
        using: "BTREE",
        fields: [
          { name: "id_subscription" },
        ]
      },
    ]
  });
  }
}
