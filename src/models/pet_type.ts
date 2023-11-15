import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { breed, breedId } from './breed';

export interface pet_typeAttributes {
  id_pet_type: number;
  pet_type: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
}

export type pet_typePk = "id_pet_type";
export type pet_typeId = pet_type[pet_typePk];
export type pet_typeOptionalAttributes = "id_pet_type" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type pet_typeCreationAttributes = Optional<pet_typeAttributes, pet_typeOptionalAttributes>;

export class pet_type extends Model<pet_typeAttributes, pet_typeCreationAttributes> implements pet_typeAttributes {
  id_pet_type!: number;
  pet_type!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;

  // pet_type hasMany breed via pet_type_breed
  breeds!: breed[];
  getBreeds!: Sequelize.HasManyGetAssociationsMixin<breed>;
  setBreeds!: Sequelize.HasManySetAssociationsMixin<breed, breedId>;
  addBreed!: Sequelize.HasManyAddAssociationMixin<breed, breedId>;
  addBreeds!: Sequelize.HasManyAddAssociationsMixin<breed, breedId>;
  createBreed!: Sequelize.HasManyCreateAssociationMixin<breed>;
  removeBreed!: Sequelize.HasManyRemoveAssociationMixin<breed, breedId>;
  removeBreeds!: Sequelize.HasManyRemoveAssociationsMixin<breed, breedId>;
  hasBreed!: Sequelize.HasManyHasAssociationMixin<breed, breedId>;
  hasBreeds!: Sequelize.HasManyHasAssociationsMixin<breed, breedId>;
  countBreeds!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof pet_type {
    return pet_type.init({
    id_pet_type: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pet_type: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "breed_UNIQUE"
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
    tableName: 'pet_type',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pet_type" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pet_type" },
        ]
      },
    ]
  });
  }
}
