import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { city, cityId } from './city';
import type { user, userId } from './user';

export interface addressAttributes {
  id_address: number;
  address: string;
  description?: string;
  neightborhood?: string;
  postal_code?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active: number;
  user_address: number;
  city_address: number;
}

export type addressPk = "id_address";
export type addressId = address[addressPk];
export type addressOptionalAttributes = "id_address" | "description" | "neightborhood" | "postal_code" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type addressCreationAttributes = Optional<addressAttributes, addressOptionalAttributes>;

export class address extends Model<addressAttributes, addressCreationAttributes> implements addressAttributes {
  id_address!: number;
  address!: string;
  description?: string;
  neightborhood?: string;
  postal_code?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active!: number;
  user_address!: number;
  city_address!: number;

  // address belongsTo city via city_address
  city_address_city!: city;
  getCity_address_city!: Sequelize.BelongsToGetAssociationMixin<city>;
  setCity_address_city!: Sequelize.BelongsToSetAssociationMixin<city, cityId>;
  createCity_address_city!: Sequelize.BelongsToCreateAssociationMixin<city>;
  // address belongsTo user via user_address
  user_address_user!: user;
  getUser_address_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser_address_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser_address_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof address {
    return address.init({
      id_address: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      address: {
        type: DataTypes.STRING(300),
        allowNull: false
      },
      description: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      neightborhood: {
        type: DataTypes.STRING(200),
        allowNull: true
      },
      postal_code: {
        type: DataTypes.STRING(20),
        allowNull: true
      },
      is_active: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1
      },
      user_address: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id_user'
        }
      },
      city_address: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'city',
          key: 'id_city'
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
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true
      },
    },


      {
        sequelize,
        tableName: 'address',
        timestamps: false,
        paranoid: true,
        indexes: [
          {
            name: "PRIMARY",
            unique: true,
            using: "BTREE",
            fields: [
              { name: "id_address" },
            ]
          },
          {
            name: "fk_address_owner1_idx",
            using: "BTREE",
            fields: [
              { name: "user_address" },
            ]
          },
          {
            name: "fk_address_city1_idx",
            using: "BTREE",
            fields: [
              { name: "city_address" },
            ]
          },
        ]
      });
  }
}
