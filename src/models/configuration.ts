import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface configurationAttributes {
  id_configuration: number;
  currency: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
}

export type configurationPk = "id_configuration";
export type configurationId = configuration[configurationPk];
export type configurationOptionalAttributes = "id_configuration" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type configurationCreationAttributes = Optional<configurationAttributes, configurationOptionalAttributes>;

export class configuration extends Model<configurationAttributes, configurationCreationAttributes> implements configurationAttributes {
  id_configuration!: number;
  currency!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof configuration {
    return configuration.init({
    id_configuration: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    currency: {
      type: DataTypes.STRING(100),
      allowNull: false,
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
    tableName: 'configuration',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_configuration" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "currency" },
        ]
      },
    ]
  });
  }
}
