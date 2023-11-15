import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { pet, petId } from './pet';
import type { pet_feature, pet_featureId } from './pet_feature';

export interface featureAttributes {
  id_feature: number;
  feature: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
}

export type featurePk = "id_feature";
export type featureId = feature[featurePk];
export type featureOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type featureCreationAttributes = Optional<featureAttributes, featureOptionalAttributes>;

export class feature extends Model<featureAttributes, featureCreationAttributes> implements featureAttributes {
  id_feature!: number;
  feature!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;

  // feature belongsToMany pet via id_feature and id_pet
  id_pet_pets!: pet[];
  getId_pet_pets!: Sequelize.BelongsToManyGetAssociationsMixin<pet>;
  setId_pet_pets!: Sequelize.BelongsToManySetAssociationsMixin<pet, petId>;
  addId_pet_pet!: Sequelize.BelongsToManyAddAssociationMixin<pet, petId>;
  addId_pet_pets!: Sequelize.BelongsToManyAddAssociationsMixin<pet, petId>;
  createId_pet_pet!: Sequelize.BelongsToManyCreateAssociationMixin<pet>;
  removeId_pet_pet!: Sequelize.BelongsToManyRemoveAssociationMixin<pet, petId>;
  removeId_pet_pets!: Sequelize.BelongsToManyRemoveAssociationsMixin<pet, petId>;
  hasId_pet_pet!: Sequelize.BelongsToManyHasAssociationMixin<pet, petId>;
  hasId_pet_pets!: Sequelize.BelongsToManyHasAssociationsMixin<pet, petId>;
  countId_pet_pets!: Sequelize.BelongsToManyCountAssociationsMixin;
  // feature hasMany pet_feature via id_feature
  pet_features!: pet_feature[];
  getPet_features!: Sequelize.HasManyGetAssociationsMixin<pet_feature>;
  setPet_features!: Sequelize.HasManySetAssociationsMixin<pet_feature, pet_featureId>;
  addPet_feature!: Sequelize.HasManyAddAssociationMixin<pet_feature, pet_featureId>;
  addPet_features!: Sequelize.HasManyAddAssociationsMixin<pet_feature, pet_featureId>;
  createPet_feature!: Sequelize.HasManyCreateAssociationMixin<pet_feature>;
  removePet_feature!: Sequelize.HasManyRemoveAssociationMixin<pet_feature, pet_featureId>;
  removePet_features!: Sequelize.HasManyRemoveAssociationsMixin<pet_feature, pet_featureId>;
  hasPet_feature!: Sequelize.HasManyHasAssociationMixin<pet_feature, pet_featureId>;
  hasPet_features!: Sequelize.HasManyHasAssociationsMixin<pet_feature, pet_featureId>;
  countPet_features!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof feature {
    return feature.init({
      id_feature: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      feature: {
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
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },


      {
        sequelize,
        tableName: 'feature',
        timestamps: false,
        paranoid: true,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "id_feature" },
            ]
          },
          {
            name: "breed_UNIQUE",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "feature" },
            ]
          },
        ]
      });
  }
}
