import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { payment, paymentId } from './payment';

export interface payerAttributes {
  id_payer: number;
  names: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
  document?: string;
  address?: string;
}

export type payerPk = "id_payer";
export type payerId = payer[payerPk];
export type payerOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at" | "is_active" | "document" | "address";
export type payerCreationAttributes = Optional<payerAttributes, payerOptionalAttributes>;

export class payer extends Model<payerAttributes, payerCreationAttributes> implements payerAttributes {
  id_payer!: number;
  names!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;
  document?: string;
  address?: string;

  // payer hasMany payment via payer_payment
  payments!: payment[];
  getPayments!: Sequelize.HasManyGetAssociationsMixin<payment>;
  setPayments!: Sequelize.HasManySetAssociationsMixin<payment, paymentId>;
  addPayment!: Sequelize.HasManyAddAssociationMixin<payment, paymentId>;
  addPayments!: Sequelize.HasManyAddAssociationsMixin<payment, paymentId>;
  createPayment!: Sequelize.HasManyCreateAssociationMixin<payment>;
  removePayment!: Sequelize.HasManyRemoveAssociationMixin<payment, paymentId>;
  removePayments!: Sequelize.HasManyRemoveAssociationsMixin<payment, paymentId>;
  hasPayment!: Sequelize.HasManyHasAssociationMixin<payment, paymentId>;
  hasPayments!: Sequelize.HasManyHasAssociationsMixin<payment, paymentId>;
  countPayments!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof payer {
    return payer.init({
    id_payer: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    names: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "breed_UNIQUE"
    },
    description: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    is_active: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1
    },
    document: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(200),
      allowNull: true
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
    tableName: 'payer',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_payer" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "names" },
        ]
      },
    ]
  });
  }
}
