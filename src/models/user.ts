import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { address, addressId } from './address';
import type { auth, authId } from './auth';
import type { document, documentId } from './document';
import type { log, logId } from './log';
import type { message, messageId } from './message';
import type { pet, petId } from './pet';
import type { photo, photoId } from './photo';
import type { role, roleId } from './role';
import type { social_account, social_accountId } from './social_account';
import type { social_account_provider, social_account_providerId } from './social_account_provider';
import type { subscription, subscriptionId } from './subscription';

export interface userAttributes {
  id_user: number;
  name: string;
  last_name?: string;
  phone?: string;
  password: string;
  email?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  birthdate?: string;
  is_active?: number;
  role_user: number;
  subscription_user: number;
  document_user: number;
}

export type userPk = "id_user";
export type userId = user[userPk];
export type userOptionalAttributes = "id_user" | "last_name" | "phone" | "email" | "created_at" | "updated_at" | "deleted_at" | "birthdate" | "is_active";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id_user!: number;
  name!: string;
  last_name?: string;
  phone?: string;
  password!: string;
  email?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  birthdate?: string;
  is_active?: number;
  role_user!: number;
  subscription_user!: number;
  document_user!: number;

  // user belongsTo document via document_user
  document_user_document!: document;
  getDocument_user_document!: Sequelize.BelongsToGetAssociationMixin<document>;
  setDocument_user_document!: Sequelize.BelongsToSetAssociationMixin<document, documentId>;
  createDocument_user_document!: Sequelize.BelongsToCreateAssociationMixin<document>;
  // user belongsTo role via role_user
  role_user_role!: role;
  getRole_user_role!: Sequelize.BelongsToGetAssociationMixin<role>;
  setRole_user_role!: Sequelize.BelongsToSetAssociationMixin<role, roleId>;
  createRole_user_role!: Sequelize.BelongsToCreateAssociationMixin<role>;
  // user belongsTo subscription via subscription_user
  subscription_user_subscription!: subscription;
  getSubscription_user_subscription!: Sequelize.BelongsToGetAssociationMixin<subscription>;
  setSubscription_user_subscription!: Sequelize.BelongsToSetAssociationMixin<subscription, subscriptionId>;
  createSubscription_user_subscription!: Sequelize.BelongsToCreateAssociationMixin<subscription>;
  // user hasMany address via user_address
  addresses!: address[];
  getAddresses!: Sequelize.HasManyGetAssociationsMixin<address>;
  setAddresses!: Sequelize.HasManySetAssociationsMixin<address, addressId>;
  addAddress!: Sequelize.HasManyAddAssociationMixin<address, addressId>;
  addAddresses!: Sequelize.HasManyAddAssociationsMixin<address, addressId>;
  createAddress!: Sequelize.HasManyCreateAssociationMixin<address>;
  removeAddress!: Sequelize.HasManyRemoveAssociationMixin<address, addressId>;
  removeAddresses!: Sequelize.HasManyRemoveAssociationsMixin<address, addressId>;
  hasAddress!: Sequelize.HasManyHasAssociationMixin<address, addressId>;
  hasAddresses!: Sequelize.HasManyHasAssociationsMixin<address, addressId>;
  countAddresses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany auth via token_user
  auths!: auth[];
  getAuths!: Sequelize.HasManyGetAssociationsMixin<auth>;
  setAuths!: Sequelize.HasManySetAssociationsMixin<auth, authId>;
  addAuth!: Sequelize.HasManyAddAssociationMixin<auth, authId>;
  addAuths!: Sequelize.HasManyAddAssociationsMixin<auth, authId>;
  createAuth!: Sequelize.HasManyCreateAssociationMixin<auth>;
  removeAuth!: Sequelize.HasManyRemoveAssociationMixin<auth, authId>;
  removeAuths!: Sequelize.HasManyRemoveAssociationsMixin<auth, authId>;
  hasAuth!: Sequelize.HasManyHasAssociationMixin<auth, authId>;
  hasAuths!: Sequelize.HasManyHasAssociationsMixin<auth, authId>;
  countAuths!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany log via user_id_user
  logs!: log[];
  getLogs!: Sequelize.HasManyGetAssociationsMixin<log>;
  setLogs!: Sequelize.HasManySetAssociationsMixin<log, logId>;
  addLog!: Sequelize.HasManyAddAssociationMixin<log, logId>;
  addLogs!: Sequelize.HasManyAddAssociationsMixin<log, logId>;
  createLog!: Sequelize.HasManyCreateAssociationMixin<log>;
  removeLog!: Sequelize.HasManyRemoveAssociationMixin<log, logId>;
  removeLogs!: Sequelize.HasManyRemoveAssociationsMixin<log, logId>;
  hasLog!: Sequelize.HasManyHasAssociationMixin<log, logId>;
  hasLogs!: Sequelize.HasManyHasAssociationsMixin<log, logId>;
  countLogs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany message via sender_user
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
  // user hasMany pet via user_pet
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
  // user hasMany photo via user_photo
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
  // user hasMany social_account via id_user
  social_accounts!: social_account[];
  getSocial_accounts!: Sequelize.HasManyGetAssociationsMixin<social_account>;
  setSocial_accounts!: Sequelize.HasManySetAssociationsMixin<social_account, social_accountId>;
  addSocial_account!: Sequelize.HasManyAddAssociationMixin<social_account, social_accountId>;
  addSocial_accounts!: Sequelize.HasManyAddAssociationsMixin<social_account, social_accountId>;
  createSocial_account!: Sequelize.HasManyCreateAssociationMixin<social_account>;
  removeSocial_account!: Sequelize.HasManyRemoveAssociationMixin<social_account, social_accountId>;
  removeSocial_accounts!: Sequelize.HasManyRemoveAssociationsMixin<social_account, social_accountId>;
  hasSocial_account!: Sequelize.HasManyHasAssociationMixin<social_account, social_accountId>;
  hasSocial_accounts!: Sequelize.HasManyHasAssociationsMixin<social_account, social_accountId>;
  countSocial_accounts!: Sequelize.HasManyCountAssociationsMixin;
  // user belongsToMany social_account_provider via id_user and id_social_account
  id_social_account_social_account_providers!: social_account_provider[];
  getId_social_account_social_account_providers!: Sequelize.BelongsToManyGetAssociationsMixin<social_account_provider>;
  setId_social_account_social_account_providers!: Sequelize.BelongsToManySetAssociationsMixin<social_account_provider, social_account_providerId>;
  addId_social_account_social_account_provider!: Sequelize.BelongsToManyAddAssociationMixin<social_account_provider, social_account_providerId>;
  addId_social_account_social_account_providers!: Sequelize.BelongsToManyAddAssociationsMixin<social_account_provider, social_account_providerId>;
  createId_social_account_social_account_provider!: Sequelize.BelongsToManyCreateAssociationMixin<social_account_provider>;
  removeId_social_account_social_account_provider!: Sequelize.BelongsToManyRemoveAssociationMixin<social_account_provider, social_account_providerId>;
  removeId_social_account_social_account_providers!: Sequelize.BelongsToManyRemoveAssociationsMixin<social_account_provider, social_account_providerId>;
  hasId_social_account_social_account_provider!: Sequelize.BelongsToManyHasAssociationMixin<social_account_provider, social_account_providerId>;
  hasId_social_account_social_account_providers!: Sequelize.BelongsToManyHasAssociationsMixin<social_account_provider, social_account_providerId>;
  countId_social_account_social_account_providers!: Sequelize.BelongsToManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return user.init({
      id_user: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      last_name: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: "phone_UNIQUE"
      },
      password: {
        type: DataTypes.STRING(200),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(500),
        allowNull: true,
        unique: "email_UNIQUE"
      },
      birthdate: {
        type: DataTypes.DATEONLY,
        allowNull: true
      },
      is_active: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 1
      },
      role_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'role',
          key: 'id_role'
        }
      },
      subscription_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'subscription',
          key: 'id_subscription'
        }
      },
      document_user: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'document',
          key: 'id_document'
        }
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
      },      

    }, {
      sequelize,
      tableName: 'user',
      timestamps: false,
      paranoid: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id_user" },
          ]
        },
        {
          name: "phone_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "phone" },
          ]
        },
        {
          name: "email_UNIQUE",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "email" },
          ]
        },
        {
          name: "fk_owner_role1_idx",
          using: "BTREE",
          fields: [
            { name: "role_user" },
          ]
        },
        {
          name: "fk_owner_subscription1_idx",
          using: "BTREE",
          fields: [
            { name: "subscription_user" },
          ]
        },
        {
          name: "fk_user_document1_idx",
          using: "BTREE",
          fields: [
            { name: "document_user" },
          ]
        },
      ]
    });
  }
}
