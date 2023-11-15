import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { breed, breedId } from './breed';
import type { dislike, dislikeId } from './dislike';
import type { feature, featureId } from './feature';
import type { like, likeId } from './like';
import type { match, matchId } from './match';
import type { pet_feature, pet_featureId } from './pet_feature';
import type { photo, photoId } from './photo';
import type { session, sessionId } from './session';
import type { user, userId } from './user';

export interface petAttributes {
  id_pet: number;
  user_pet: number;
  name: string;
  gender: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
  breed_pet: number;
}

export type petPk = "id_pet";
export type petId = pet[petPk];
export type petOptionalAttributes = "id_pet" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type petCreationAttributes = Optional<petAttributes, petOptionalAttributes>;

export class pet extends Model<petAttributes, petCreationAttributes> implements petAttributes {
  id_pet!: number;
  user_pet!: number;
  name!: string;
  gender!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;
  breed_pet!: number;

  // pet belongsTo breed via breed_pet
  breed_pet_breed!: breed;
  getBreed_pet_breed!: Sequelize.BelongsToGetAssociationMixin<breed>;
  setBreed_pet_breed!: Sequelize.BelongsToSetAssociationMixin<breed, breedId>;
  createBreed_pet_breed!: Sequelize.BelongsToCreateAssociationMixin<breed>;
  // pet hasMany dislike via from_pet
  dislikes!: dislike[];
  getDislikes!: Sequelize.HasManyGetAssociationsMixin<dislike>;
  setDislikes!: Sequelize.HasManySetAssociationsMixin<dislike, dislikeId>;
  addDislike!: Sequelize.HasManyAddAssociationMixin<dislike, dislikeId>;
  addDislikes!: Sequelize.HasManyAddAssociationsMixin<dislike, dislikeId>;
  createDislike!: Sequelize.HasManyCreateAssociationMixin<dislike>;
  removeDislike!: Sequelize.HasManyRemoveAssociationMixin<dislike, dislikeId>;
  removeDislikes!: Sequelize.HasManyRemoveAssociationsMixin<dislike, dislikeId>;
  hasDislike!: Sequelize.HasManyHasAssociationMixin<dislike, dislikeId>;
  hasDislikes!: Sequelize.HasManyHasAssociationsMixin<dislike, dislikeId>;
  countDislikes!: Sequelize.HasManyCountAssociationsMixin;
  // pet hasMany dislike via to_pet
  to_pet_dislikes!: dislike[];
  getTo_pet_dislikes!: Sequelize.HasManyGetAssociationsMixin<dislike>;
  setTo_pet_dislikes!: Sequelize.HasManySetAssociationsMixin<dislike, dislikeId>;
  addTo_pet_dislike!: Sequelize.HasManyAddAssociationMixin<dislike, dislikeId>;
  addTo_pet_dislikes!: Sequelize.HasManyAddAssociationsMixin<dislike, dislikeId>;
  createTo_pet_dislike!: Sequelize.HasManyCreateAssociationMixin<dislike>;
  removeTo_pet_dislike!: Sequelize.HasManyRemoveAssociationMixin<dislike, dislikeId>;
  removeTo_pet_dislikes!: Sequelize.HasManyRemoveAssociationsMixin<dislike, dislikeId>;
  hasTo_pet_dislike!: Sequelize.HasManyHasAssociationMixin<dislike, dislikeId>;
  hasTo_pet_dislikes!: Sequelize.HasManyHasAssociationsMixin<dislike, dislikeId>;
  countTo_pet_dislikes!: Sequelize.HasManyCountAssociationsMixin;
  // pet belongsToMany feature via id_pet and id_feature
  id_feature_features!: feature[];
  getId_feature_features!: Sequelize.BelongsToManyGetAssociationsMixin<feature>;
  setId_feature_features!: Sequelize.BelongsToManySetAssociationsMixin<feature, featureId>;
  addId_feature_feature!: Sequelize.BelongsToManyAddAssociationMixin<feature, featureId>;
  addId_feature_features!: Sequelize.BelongsToManyAddAssociationsMixin<feature, featureId>;
  createId_feature_feature!: Sequelize.BelongsToManyCreateAssociationMixin<feature>;
  removeId_feature_feature!: Sequelize.BelongsToManyRemoveAssociationMixin<feature, featureId>;
  removeId_feature_features!: Sequelize.BelongsToManyRemoveAssociationsMixin<feature, featureId>;
  hasId_feature_feature!: Sequelize.BelongsToManyHasAssociationMixin<feature, featureId>;
  hasId_feature_features!: Sequelize.BelongsToManyHasAssociationsMixin<feature, featureId>;
  countId_feature_features!: Sequelize.BelongsToManyCountAssociationsMixin;
  // pet hasMany like via from_pet
  likes!: like[];
  getLikes!: Sequelize.HasManyGetAssociationsMixin<like>;
  setLikes!: Sequelize.HasManySetAssociationsMixin<like, likeId>;
  addLike!: Sequelize.HasManyAddAssociationMixin<like, likeId>;
  addLikes!: Sequelize.HasManyAddAssociationsMixin<like, likeId>;
  createLike!: Sequelize.HasManyCreateAssociationMixin<like>;
  removeLike!: Sequelize.HasManyRemoveAssociationMixin<like, likeId>;
  removeLikes!: Sequelize.HasManyRemoveAssociationsMixin<like, likeId>;
  hasLike!: Sequelize.HasManyHasAssociationMixin<like, likeId>;
  hasLikes!: Sequelize.HasManyHasAssociationsMixin<like, likeId>;
  countLikes!: Sequelize.HasManyCountAssociationsMixin;
  // pet hasMany like via to_pet
  to_pet_likes!: like[];
  getTo_pet_likes!: Sequelize.HasManyGetAssociationsMixin<like>;
  setTo_pet_likes!: Sequelize.HasManySetAssociationsMixin<like, likeId>;
  addTo_pet_like!: Sequelize.HasManyAddAssociationMixin<like, likeId>;
  addTo_pet_likes!: Sequelize.HasManyAddAssociationsMixin<like, likeId>;
  createTo_pet_like!: Sequelize.HasManyCreateAssociationMixin<like>;
  removeTo_pet_like!: Sequelize.HasManyRemoveAssociationMixin<like, likeId>;
  removeTo_pet_likes!: Sequelize.HasManyRemoveAssociationsMixin<like, likeId>;
  hasTo_pet_like!: Sequelize.HasManyHasAssociationMixin<like, likeId>;
  hasTo_pet_likes!: Sequelize.HasManyHasAssociationsMixin<like, likeId>;
  countTo_pet_likes!: Sequelize.HasManyCountAssociationsMixin;
  // pet hasMany match via like_male
  matches!: match[];
  getMatches!: Sequelize.HasManyGetAssociationsMixin<match>;
  setMatches!: Sequelize.HasManySetAssociationsMixin<match, matchId>;
  addMatch!: Sequelize.HasManyAddAssociationMixin<match, matchId>;
  addMatches!: Sequelize.HasManyAddAssociationsMixin<match, matchId>;
  createMatch!: Sequelize.HasManyCreateAssociationMixin<match>;
  removeMatch!: Sequelize.HasManyRemoveAssociationMixin<match, matchId>;
  removeMatches!: Sequelize.HasManyRemoveAssociationsMixin<match, matchId>;
  hasMatch!: Sequelize.HasManyHasAssociationMixin<match, matchId>;
  hasMatches!: Sequelize.HasManyHasAssociationsMixin<match, matchId>;
  countMatches!: Sequelize.HasManyCountAssociationsMixin;
  // pet hasMany match via like_female
  like_female_matches!: match[];
  getLike_female_matches!: Sequelize.HasManyGetAssociationsMixin<match>;
  setLike_female_matches!: Sequelize.HasManySetAssociationsMixin<match, matchId>;
  addLike_female_match!: Sequelize.HasManyAddAssociationMixin<match, matchId>;
  addLike_female_matches!: Sequelize.HasManyAddAssociationsMixin<match, matchId>;
  createLike_female_match!: Sequelize.HasManyCreateAssociationMixin<match>;
  removeLike_female_match!: Sequelize.HasManyRemoveAssociationMixin<match, matchId>;
  removeLike_female_matches!: Sequelize.HasManyRemoveAssociationsMixin<match, matchId>;
  hasLike_female_match!: Sequelize.HasManyHasAssociationMixin<match, matchId>;
  hasLike_female_matches!: Sequelize.HasManyHasAssociationsMixin<match, matchId>;
  countLike_female_matches!: Sequelize.HasManyCountAssociationsMixin;
  // pet hasMany pet_feature via id_pet
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
  // pet hasMany photo via pet_photo
  photos!: photo[];
  getPhotos!: Sequelize.HasManyGetAssociationsMixin<photo>;
  setPhotos!: Sequelize.HasManySetAssociationsMixin<photo, photoId>;
  addPhoto!: Sequelize.HasManyAddAssociationMixin<photo, photoId>;
  addPhotos!: Sequelize.HasManyAddAssociationsMixin<photo, photoId>;
  createPhoto!: Sequelize.HasManyCreateAssociationMixin<photo>;
  removePhoto!: Sequelize.HasManyRemoveAssociationMixin<photo, photoId>;
  removePhotos!: Sequelize.HasManyRemoveAssociationsMixin<photo, photoId>;
  hasPhoto!: Sequelize.HasManyHasAssociationMixin<photo, photoId>;
  hasPhotos!: Sequelize.HasManyHasAssociationsMixin<photo, photoId>;
  countPhotos!: Sequelize.HasManyCountAssociationsMixin;
  // pet hasMany session via pet_session
  sessions!: session[];
  getSessions!: Sequelize.HasManyGetAssociationsMixin<session>;
  setSessions!: Sequelize.HasManySetAssociationsMixin<session, sessionId>;
  addSession!: Sequelize.HasManyAddAssociationMixin<session, sessionId>;
  addSessions!: Sequelize.HasManyAddAssociationsMixin<session, sessionId>;
  createSession!: Sequelize.HasManyCreateAssociationMixin<session>;
  removeSession!: Sequelize.HasManyRemoveAssociationMixin<session, sessionId>;
  removeSessions!: Sequelize.HasManyRemoveAssociationsMixin<session, sessionId>;
  hasSession!: Sequelize.HasManyHasAssociationMixin<session, sessionId>;
  hasSessions!: Sequelize.HasManyHasAssociationsMixin<session, sessionId>;
  countSessions!: Sequelize.HasManyCountAssociationsMixin;
  // pet belongsTo user via user_pet
  user_pet_user!: user;
  getUser_pet_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser_pet_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser_pet_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof pet {
    return pet.init({
    id_pet: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_pet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user',
        key: 'id_user'
      }
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(1),
      allowNull: false
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1
    },
    breed_pet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'breed',
        key: 'id_breed'
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
    tableName: 'pet',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_pet" },
        ]
      },
      {
        name: "fk_pet_owner_idx",
        using: "BTREE",
        fields: [
          { name: "user_pet" },
        ]
      },
      {
        name: "fk_pet_breed1_idx",
        using: "BTREE",
        fields: [
          { name: "breed_pet" },
        ]
      },
    ]
  });
  }
}
