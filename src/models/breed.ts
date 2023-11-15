import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { pet, petId } from './pet';
import type { pet_type, pet_typeId } from './pet_type';

export interface breedAttributes {
  id_breed: number;
  breed: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
  pet_type_breed: number;
}

export type breedPk = "id_breed";
export type breedId = breed[breedPk];
export type breedOptionalAttributes = "id_breed" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type breedCreationAttributes = Optional<breedAttributes, breedOptionalAttributes>;

export class breed extends Model<breedAttributes, breedCreationAttributes> implements breedAttributes {
  id_breed!: number;
  breed!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;
  pet_type_breed!: number;

  // breed hasMany pet via breed_pet
  pets!: pet[];
  getPets!: Sequelize.HasManyGetAssociationsMixin<pet>;
  setPets!: Sequelize.HasManySetAssociationsMixin<pet, petId>;
  addPet!: Sequelize.HasManyAddAssociationMixin<pet, petId>;
  addPets!: Sequelize.HasManyAddAssociationsMixin<pet, petId>;
  createPet!: Sequelize.HasManyCreateAssociationMixin<pet>;
  removePet!: Sequelize.HasManyRemoveAssociationMixin<pet, petId>;
  removePets!: Sequelize.HasManyRemoveAssociationsMixin<pet, petId>;
  hasPet!: Sequelize.HasManyHasAssociationMixin<pet, petId>;
  hasPets!: Sequelize.HasManyHasAssociationsMixin<pet, petId>;
  countPets!: Sequelize.HasManyCountAssociationsMixin;
  // breed belongsTo pet_type via pet_type_breed
  pet_type_breed_pet_type!: pet_type;
  getPet_type_breed_pet_type!: Sequelize.BelongsToGetAssociationMixin<pet_type>;
  setPet_type_breed_pet_type!: Sequelize.BelongsToSetAssociationMixin<pet_type, pet_typeId>;
  createPet_type_breed_pet_type!: Sequelize.BelongsToCreateAssociationMixin<pet_type>;

  static initModel(sequelize: Sequelize.Sequelize): typeof breed {
    return breed.init({
    id_breed: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    breed: {
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
    pet_type_breed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pet_type',
        key: 'id_pet_type'
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
    tableName: 'breed',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_breed" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "breed" },
        ]
      },
      {
        name: "fk_breed_pet_type1_idx",
        using: "BTREE",
        fields: [
          { name: "pet_type_breed" },
        ]
      },
    ]
  });
  }
}
