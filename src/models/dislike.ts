import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { pet, petId } from './pet';

export interface dislikeAttributes {
  id_dislike: number;
  from_pet: number;
  to_pet: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
}

export type dislikePk = "id_dislike";
export type dislikeId = dislike[dislikePk];
export type dislikeOptionalAttributes = "id_dislike" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type dislikeCreationAttributes = Optional<dislikeAttributes, dislikeOptionalAttributes>;

export class dislike extends Model<dislikeAttributes, dislikeCreationAttributes> implements dislikeAttributes {
  id_dislike!: number;
  from_pet!: number;
  to_pet!: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;

  // dislike belongsTo pet via from_pet
  from_pet_pet!: pet;
  getFrom_pet_pet!: Sequelize.BelongsToGetAssociationMixin<pet>;
  setFrom_pet_pet!: Sequelize.BelongsToSetAssociationMixin<pet, petId>;
  createFrom_pet_pet!: Sequelize.BelongsToCreateAssociationMixin<pet>;
  // dislike belongsTo pet via to_pet
  to_pet_pet!: pet;
  getTo_pet_pet!: Sequelize.BelongsToGetAssociationMixin<pet>;
  setTo_pet_pet!: Sequelize.BelongsToSetAssociationMixin<pet, petId>;
  createTo_pet_pet!: Sequelize.BelongsToCreateAssociationMixin<pet>;

  static initModel(sequelize: Sequelize.Sequelize): typeof dislike {
    return dislike.init({
    id_dislike: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    from_pet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pet',
        key: 'id_pet'
      }
    },
    to_pet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pet',
        key: 'id_pet'
      }
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
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
  }, 
  
  {
    sequelize,
    tableName: 'dislike',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_dislike" },
        ]
      },
      {
        name: "fk_pet_has_pet_pet4_idx",
        using: "BTREE",
        fields: [
          { name: "to_pet" },
        ]
      },
      {
        name: "fk_pet_has_pet_pet3_idx",
        using: "BTREE",
        fields: [
          { name: "from_pet" },
        ]
      },
    ]
  });
  }
}
