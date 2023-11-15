import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { chat, chatId } from './chat';
import type { user, userId } from './user';

export interface messageAttributes {
  id_message: number;
  sender_user: number;
  message_chat: number;
  message: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
}

export type messagePk = "id_message";
export type messageId = message[messagePk];
export type messageOptionalAttributes = "id_message" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type messageCreationAttributes = Optional<messageAttributes, messageOptionalAttributes>;

export class message extends Model<messageAttributes, messageCreationAttributes> implements messageAttributes {
  id_message!: number;
  sender_user!: number;
  message_chat!: number;
  message!: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;

  // message belongsTo chat via message_chat
  message_chat_chat!: chat;
  getMessage_chat_chat!: Sequelize.BelongsToGetAssociationMixin<chat>;
  setMessage_chat_chat!: Sequelize.BelongsToSetAssociationMixin<chat, chatId>;
  createMessage_chat_chat!: Sequelize.BelongsToCreateAssociationMixin<chat>;
  // message belongsTo user via sender_user
  sender_user_user!: user;
  getSender_user_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setSender_user_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createSender_user_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof message {
    return message.init({
      id_message: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      sender_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id_user'
        }
      },
      message_chat: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'chat',
          key: 'id_chat'
        }
      },
      message: {
        type: DataTypes.STRING(800),
        allowNull: false
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
      tableName: 'message',
      timestamps: false,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id_message" },
          ]
        },
        {
          name: "fk_owner_has_chat_chat1_idx",
          using: "BTREE",
          fields: [
            { name: "message_chat" },
          ]
        },
        {
          name: "fk_owner_has_chat_owner1_idx",
          using: "BTREE",
          fields: [
            { name: "sender_user" },
          ]
        },
      ]
    });
  }
}
