import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat, chatId } from './chat';
import type { chat_match, chat_matchId } from './chat_match';
import type { pet, petId } from './pet';

export interface matchAttributes {
  id_match: number;
  like_male: number;
  like_female: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
}

export type matchPk = "id_match";
export type matchId = match[matchPk];
export type matchOptionalAttributes = "id_match" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type matchCreationAttributes = Optional<matchAttributes, matchOptionalAttributes>;

export class match extends Model<matchAttributes, matchCreationAttributes> implements matchAttributes {
  id_match!: number;
  like_male!: number;
  like_female!: number;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;

  // match belongsToMany chat via id_match and id_chat
  id_chat_chats!: chat[];
  getId_chat_chats!: Sequelize.BelongsToManyGetAssociationsMixin<chat>;
  setId_chat_chats!: Sequelize.BelongsToManySetAssociationsMixin<chat, chatId>;
  addId_chat_chat!: Sequelize.BelongsToManyAddAssociationMixin<chat, chatId>;
  addId_chat_chats!: Sequelize.BelongsToManyAddAssociationsMixin<chat, chatId>;
  createId_chat_chat!: Sequelize.BelongsToManyCreateAssociationMixin<chat>;
  removeId_chat_chat!: Sequelize.BelongsToManyRemoveAssociationMixin<chat, chatId>;
  removeId_chat_chats!: Sequelize.BelongsToManyRemoveAssociationsMixin<chat, chatId>;
  hasId_chat_chat!: Sequelize.BelongsToManyHasAssociationMixin<chat, chatId>;
  hasId_chat_chats!: Sequelize.BelongsToManyHasAssociationsMixin<chat, chatId>;
  countId_chat_chats!: Sequelize.BelongsToManyCountAssociationsMixin;
  // match hasMany chat_match via id_match
  chat_matches!: chat_match[];
  getChat_matches!: Sequelize.HasManyGetAssociationsMixin<chat_match>;
  setChat_matches!: Sequelize.HasManySetAssociationsMixin<chat_match, chat_matchId>;
  addChat_match!: Sequelize.HasManyAddAssociationMixin<chat_match, chat_matchId>;
  addChat_matches!: Sequelize.HasManyAddAssociationsMixin<chat_match, chat_matchId>;
  createChat_match!: Sequelize.HasManyCreateAssociationMixin<chat_match>;
  removeChat_match!: Sequelize.HasManyRemoveAssociationMixin<chat_match, chat_matchId>;
  removeChat_matches!: Sequelize.HasManyRemoveAssociationsMixin<chat_match, chat_matchId>;
  hasChat_match!: Sequelize.HasManyHasAssociationMixin<chat_match, chat_matchId>;
  hasChat_matches!: Sequelize.HasManyHasAssociationsMixin<chat_match, chat_matchId>;
  countChat_matches!: Sequelize.HasManyCountAssociationsMixin;
  // match belongsTo pet via like_male
  like_male_pet!: pet;
  getLike_male_pet!: Sequelize.BelongsToGetAssociationMixin<pet>;
  setLike_male_pet!: Sequelize.BelongsToSetAssociationMixin<pet, petId>;
  createLike_male_pet!: Sequelize.BelongsToCreateAssociationMixin<pet>;
  // match belongsTo pet via like_female
  like_female_pet!: pet;
  getLike_female_pet!: Sequelize.BelongsToGetAssociationMixin<pet>;
  setLike_female_pet!: Sequelize.BelongsToSetAssociationMixin<pet, petId>;
  createLike_female_pet!: Sequelize.BelongsToCreateAssociationMixin<pet>;

  static initModel(sequelize: Sequelize.Sequelize): typeof match {
    return match.init({
    id_match: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    like_male: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'pet',
        key: 'id_pet'
      }
    },
    like_female: {
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
deleted_at: {
      type: DataTypes.DATE,
allowNull: true
    },
  }, {
    sequelize,
    tableName: 'match',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_match" },
        ]
      },
      {
        name: "fk_pet_has_pet_pet2_idx",
        using: "BTREE",
        fields: [
          { name: "like_female" },
        ]
      },
      {
        name: "fk_pet_has_pet_pet1_idx",
        using: "BTREE",
        fields: [
          { name: "like_male" },
        ]
      },
    ]
  });
  }
}
