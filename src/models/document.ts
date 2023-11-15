import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { document_type, document_typeId } from './document_type';
import type { user, userId } from './user';

export interface documentAttributes {
  id_document: number;
  document: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
  document_type_document: number;
}

export type documentPk = "id_document";
export type documentId = document[documentPk];
export type documentOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type documentCreationAttributes = Optional<documentAttributes, documentOptionalAttributes>;

export class document extends Model<documentAttributes, documentCreationAttributes> implements documentAttributes {
  id_document!: number;
  document!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;
  document_type_document!: number;

  // document hasMany user via document_user
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
  // document belongsTo document_type via document_type_document
  document_type_document_document_type!: document_type;
  getDocument_type_document_document_type!: Sequelize.BelongsToGetAssociationMixin<document_type>;
  setDocument_type_document_document_type!: Sequelize.BelongsToSetAssociationMixin<document_type, document_typeId>;
  createDocument_type_document_document_type!: Sequelize.BelongsToCreateAssociationMixin<document_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof document {
    return document.init({
    id_document: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    document: {
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
    document_type_document: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'document_type',
        key: 'id_document_type'
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
deleted_at: {
      type: DataTypes.DATE,
allowNull: true
    },
  }, {
    sequelize,
    tableName: 'document',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_document" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "document" },
        ]
      },
      {
        name: "fk_document_document_type1_idx",
        using: "BTREE",
        fields: [
          { name: "document_type_document" },
        ]
      },
    ]
  });
  }
}
