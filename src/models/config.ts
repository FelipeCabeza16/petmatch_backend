import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface configAttributes {
  id_config: number;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
  unlimited_likes?: number;
  unlimited_filters?: number;
  unlimited_reach?: number;
}

export type configPk = "id_config";
export type configId = config[configPk];
export type configOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at" | "is_active" | "unlimited_likes" | "unlimited_filters" | "unlimited_reach";
export type configCreationAttributes = Optional<configAttributes, configOptionalAttributes>;

export class config extends Model<configAttributes, configCreationAttributes> implements configAttributes {
  id_config!: number;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;
  unlimited_likes?: number;
  unlimited_filters?: number;
  unlimited_reach?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof config {
    return config.init({
      id_config: {
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
      unlimited_likes: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0
      },
      unlimited_filters: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0
      },
      unlimited_reach: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0
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
      tableName: 'config',
      timestamps: false,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id_config" },
          ]
        },
      ]
    });
  }
}
