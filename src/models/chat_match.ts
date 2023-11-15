import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat, chatId } from './chat';
import type { match, matchId } from './match';

export interface chat_matchAttributes {
  id_chat: number;
  id_match: number;
}

export type chat_matchPk = "id_chat" | "id_match";
export type chat_matchId = chat_match[chat_matchPk];
export type chat_matchCreationAttributes = chat_matchAttributes;

export class chat_match extends Model<chat_matchAttributes, chat_matchCreationAttributes> implements chat_matchAttributes {
  id_chat!: number;
  id_match!: number;

  // chat_match belongsTo chat via id_chat
  id_chat_chat!: chat;
  getId_chat_chat!: Sequelize.BelongsToGetAssociationMixin<chat>;
  setId_chat_chat!: Sequelize.BelongsToSetAssociationMixin<chat, chatId>;
  createId_chat_chat!: Sequelize.BelongsToCreateAssociationMixin<chat>;
  // chat_match belongsTo match via id_match
  id_match_match!: match;
  getId_match_match!: Sequelize.BelongsToGetAssociationMixin<match>;
  setId_match_match!: Sequelize.BelongsToSetAssociationMixin<match, matchId>;
  createId_match_match!: Sequelize.BelongsToCreateAssociationMixin<match>;

  static initModel(sequelize: Sequelize.Sequelize): typeof chat_match {
    return chat_match.init({
    id_chat: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'chat',
        key: 'id_chat'
      }
    },
    id_match: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'match',
        key: 'id_match'
      }
    },
    
  }, {
    sequelize,
    tableName: 'chat_match',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_chat" },
          { name: "id_match" },
        ]
      },
      {
        name: "fk_chat_has_match_match1_idx",
        using: "BTREE",
        fields: [
          { name: "id_match" },
        ]
      },
      {
        name: "fk_chat_has_match_chat1_idx",
        using: "BTREE",
        fields: [
          { name: "id_chat" },
        ]
      },
    ]
  });
  }
}
