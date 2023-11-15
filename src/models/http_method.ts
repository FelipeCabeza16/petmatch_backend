import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { log, logId } from './log';

export interface http_methodAttributes {
  id_http_method: number;
  http_method: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  is_active?: number;
}

export type http_methodPk = "id_http_method";
export type http_methodId = http_method[http_methodPk];
export type http_methodOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type http_methodCreationAttributes = Optional<http_methodAttributes, http_methodOptionalAttributes>;

export class http_method extends Model<http_methodAttributes, http_methodCreationAttributes> implements http_methodAttributes {
  id_http_method!: number;
  http_method!: string;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  is_active?: number;

  // http_method hasMany log via http_method_id_http_method
  logs!: log[];
  getLogs!: Sequelize.HasManyGetAssociationsMixin<log>;
  setLogs!: Sequelize.HasManySetAssociationsMixin<log, logId>;
  addLog!: Sequelize.HasManyAddAssociationMixin<log, logId>;
  addLogs!: Sequelize.HasManyAddAssociationsMixin<log, logId>;
  createLog!: Sequelize.HasManyCreateAssociationMixin<log>;
  removeLog!: Sequelize.HasManyRemoveAssociationMixin<log, logId>;
  removeLogs!: Sequelize.HasManyRemoveAssociationsMixin<log, logId>;
  hasLog!: Sequelize.HasManyHasAssociationMixin<log, logId>;
  hasLogs!: Sequelize.HasManyHasAssociationsMixin<log, logId>;
  countLogs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof http_method {
    return http_method.init({
    id_http_method: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    http_method: {
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
    }
  }, {
    sequelize,
    tableName: 'http_method',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_http_method" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "http_method" },
        ]
      },
    ]
  });
  }
}
