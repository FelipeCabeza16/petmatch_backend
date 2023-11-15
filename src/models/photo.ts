import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { pet, petId } from './pet';
import type { user, userId } from './user';

export interface photoAttributes {
  id_photo: number;
  url: string;
  user_photo?: number;
  pet_photo?: number;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  is_active?: number;
}

export type photoPk = "id_photo";
export type photoId = photo[photoPk];
export type photoOptionalAttributes = "id_photo" | "user_photo" | "pet_photo" | "description" | "created_at" | "updated_at" | "is_active";
export type photoCreationAttributes = Optional<photoAttributes, photoOptionalAttributes>;

export class photo extends Model<photoAttributes, photoCreationAttributes> implements photoAttributes {
  id_photo!: number;
  url!: string;
  user_photo?: number;
  pet_photo?: number;
  description?: string;
  created_at?: Date;
  updated_at?: Date;
  is_active?: number;

  // photo belongsTo pet via pet_photo
  pet_photo_pet!: pet;
  getPet_photo_pet!: Sequelize.BelongsToGetAssociationMixin<pet>;
  setPet_photo_pet!: Sequelize.BelongsToSetAssociationMixin<pet, petId>;
  createPet_photo_pet!: Sequelize.BelongsToCreateAssociationMixin<pet>;
  // photo belongsTo user via user_photo
  user_photo_user!: user;
  getUser_photo_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser_photo_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser_photo_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof photo {
    return photo.init({
    id_photo: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    url: {
      type: DataTypes.STRING(800),
      allowNull: false
    },
    user_photo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'user',
        key: 'id_user'
      }
    },
    pet_photo: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'pet',
        key: 'id_pet'
      }
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
    tableName: 'photo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_photo" },
        ]
      },
      {
        name: "fk_photo_owner1_idx",
        using: "BTREE",
        fields: [
          { name: "user_photo" },
        ]
      },
      {
        name: "fk_photo_pet1_idx",
        using: "BTREE",
        fields: [
          { name: "pet_photo" },
        ]
      },
    ]
  });
  }
}
