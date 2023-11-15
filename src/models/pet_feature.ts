import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { feature, featureId } from './feature';
import type { pet, petId } from './pet';

export interface pet_featureAttributes {
  id_pet: number;
  id_feature: number;
}

export type pet_featurePk = "id_pet" | "id_feature";
export type pet_featureId = pet_feature[pet_featurePk];
export type pet_featureCreationAttributes = pet_featureAttributes;

export class pet_feature extends Model<pet_featureAttributes, pet_featureCreationAttributes> implements pet_featureAttributes {
  id_pet!: number;
  id_feature!: number;

  // pet_feature belongsTo feature via id_feature
  id_feature_feature!: feature;
  getId_feature_feature!: Sequelize.BelongsToGetAssociationMixin<feature>;
  setId_feature_feature!: Sequelize.BelongsToSetAssociationMixin<feature, featureId>;
  createId_feature_feature!: Sequelize.BelongsToCreateAssociationMixin<feature>;
  // pet_feature belongsTo pet via id_pet
  id_pet_pet!: pet;
  getId_pet_pet!: Sequelize.BelongsToGetAssociationMixin<pet>;
  setId_pet_pet!: Sequelize.BelongsToSetAssociationMixin<pet, petId>;
  createId_pet_pet!: Sequelize.BelongsToCreateAssociationMixin<pet>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pet_feature {
    return pet_feature.init({
    id_pet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pet',
        key: 'id_pet'
      }
    },
    id_feature: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'feature',
        key: 'id_feature'
      }
    }
  }, {
    sequelize,
    tableName: 'pet_feature',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pet" },
          { name: "id_feature" },
        ]
      },
      {
        name: "fk_pet_has_feature_feature1_idx",
        using: "BTREE",
        fields: [
          { name: "id_feature" },
        ]
      },
      {
        name: "fk_pet_has_feature_pet1_idx",
        using: "BTREE",
        fields: [
          { name: "id_pet" },
        ]
      },
    ]
  });
  }
}
