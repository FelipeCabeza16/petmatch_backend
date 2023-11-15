import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { subscription_configuration, subscription_configurationId } from './subscription_configuration';

export interface subscription_configuration_historyAttributes {
  id_subscription_configuration_history: number;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
  end_at?: Date;
  start_at?: Date;
  subscription_configuration_subscription_configuration_history: number;
}

export type subscription_configuration_historyPk = "id_subscription_configuration_history";
export type subscription_configuration_historyId = subscription_configuration_history[subscription_configuration_historyPk];
export type subscription_configuration_historyOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at" | "is_active" | "end_at" | "start_at";
export type subscription_configuration_historyCreationAttributes = Optional<subscription_configuration_historyAttributes, subscription_configuration_historyOptionalAttributes>;

export class subscription_configuration_history extends Model<subscription_configuration_historyAttributes, subscription_configuration_historyCreationAttributes> implements subscription_configuration_historyAttributes {
  id_subscription_configuration_history!: number;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;
  end_at?: Date;
  start_at?: Date;
  subscription_configuration_subscription_configuration_history!: number;

  // subscription_configuration_history belongsTo subscription_configuration via subscription_configuration_subscription_configuration_history
  subscription_configuration_subscription_configuration_history_subscription_configuration!: subscription_configuration;
  getSubscription_configuration_subscription_configuration_history_subscription_configuration!: Sequelize.BelongsToGetAssociationMixin<subscription_configuration>;
  setSubscription_configuration_subscription_configuration_history_subscription_configuration!: Sequelize.BelongsToSetAssociationMixin<subscription_configuration, subscription_configurationId>;
  createSubscription_configuration_subscription_configuration_history_subscription_configuration!: Sequelize.BelongsToCreateAssociationMixin<subscription_configuration>;

  static initModel(sequelize: Sequelize.Sequelize): typeof subscription_configuration_history {
    return subscription_configuration_history.init({
    id_subscription_configuration_history: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    end_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    start_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    subscription_configuration_subscription_configuration_history: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    tableName: 'subscription_configuration_history',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_subscription_configuration_history" },
        ]
      },
      {
        name: "fk_subscription_configuration_history_subscription_configur_idx",
        using: "BTREE",
        fields: [
          { name: "subscription_configuration_subscription_configuration_history" },
        ]
      },
    ]
  });
  }
}
