import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat_match, chat_matchId } from './chat_match';
import type { match, matchId } from './match';
import type { message, messageId } from './message';

export interface chatAttributes {
  id_chat: number;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
}

export type chatPk = "id_chat";
export type chatId = chat[chatPk];
export type chatOptionalAttributes = "id_chat" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type chatCreationAttributes = Optional<chatAttributes, chatOptionalAttributes>;

export class chat extends Model<chatAttributes, chatCreationAttributes> implements chatAttributes {
  id_chat!: number;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;

  // chat hasMany chat_match via id_chat
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
  // chat belongsToMany match via id_chat and id_match
  id_match_matches!: match[];
  getId_match_matches!: Sequelize.BelongsToManyGetAssociationsMixin<match>;
  setId_match_matches!: Sequelize.BelongsToManySetAssociationsMixin<match, matchId>;
  addId_match_match!: Sequelize.BelongsToManyAddAssociationMixin<match, matchId>;
  addId_match_matches!: Sequelize.BelongsToManyAddAssociationsMixin<match, matchId>;
  createId_match_match!: Sequelize.BelongsToManyCreateAssociationMixin<match>;
  removeId_match_match!: Sequelize.BelongsToManyRemoveAssociationMixin<match, matchId>;
  removeId_match_matches!: Sequelize.BelongsToManyRemoveAssociationsMixin<match, matchId>;
  hasId_match_match!: Sequelize.BelongsToManyHasAssociationMixin<match, matchId>;
  hasId_match_matches!: Sequelize.BelongsToManyHasAssociationsMixin<match, matchId>;
  countId_match_matches!: Sequelize.BelongsToManyCountAssociationsMixin;
  // chat hasMany message via message_chat
  messages!: message[];
  getMessages!: Sequelize.HasManyGetAssociationsMixin<message>;
  setMessages!: Sequelize.HasManySetAssociationsMixin<message, messageId>;
  addMessage!: Sequelize.HasManyAddAssociationMixin<message, messageId>;
  addMessages!: Sequelize.HasManyAddAssociationsMixin<message, messageId>;
  createMessage!: Sequelize.HasManyCreateAssociationMixin<message>;
  removeMessage!: Sequelize.HasManyRemoveAssociationMixin<message, messageId>;
  removeMessages!: Sequelize.HasManyRemoveAssociationsMixin<message, messageId>;
  hasMessage!: Sequelize.HasManyHasAssociationMixin<message, messageId>;
  hasMessages!: Sequelize.HasManyHasAssociationsMixin<message, messageId>;
  countMessages!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof chat {
    return chat.init({
      id_chat: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      description: {
        type: DataTypes.STRING(45),
        allowNull: true
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
      tableName: 'chat',
      timestamps: false,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id_chat" },
          ]
        },
      ]
    });
  }
}
