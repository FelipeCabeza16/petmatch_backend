import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { document, documentId } from './document';

export interface document_typeAttributes {
  id_document_type: number;
  document_type: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
  abbreviate: string;
}

export type document_typePk = "id_document_type";
export type document_typeId = document_type[document_typePk];
export type document_typeOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type document_typeCreationAttributes = Optional<document_typeAttributes, document_typeOptionalAttributes>;

export class document_type extends Model<document_typeAttributes, document_typeCreationAttributes> implements document_typeAttributes {
  id_document_type!: number;
  document_type!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;
  abbreviate!: string;

  // document_type hasMany document via document_type_document
  documents!: document[];
  getDocuments!: Sequelize.HasManyGetAssociationsMixin<document>;
  setDocuments!: Sequelize.HasManySetAssociationsMixin<document, documentId>;
  addDocument!: Sequelize.HasManyAddAssociationMixin<document, documentId>;
  addDocuments!: Sequelize.HasManyAddAssociationsMixin<document, documentId>;
  createDocument!: Sequelize.HasManyCreateAssociationMixin<document>;
  removeDocument!: Sequelize.HasManyRemoveAssociationMixin<document, documentId>;
  removeDocuments!: Sequelize.HasManyRemoveAssociationsMixin<document, documentId>;
  hasDocument!: Sequelize.HasManyHasAssociationMixin<document, documentId>;
  hasDocuments!: Sequelize.HasManyHasAssociationsMixin<document, documentId>;
  countDocuments!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof document_type {
    return document_type.init({
      id_document_type: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      document_type: {
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
      abbreviate: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: "abbreviate_UNIQUE"
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
      tableName: 'document_type',
      timestamps: false,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id_document_type" },
          ]
        },
        {
          name: "breed_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "document_type" },
          ]
        },
        {
          name: "abbreviate_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "abbreviate" },
          ]
        },
      ]
    });
  }
}
