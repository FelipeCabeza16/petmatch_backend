import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { payer, payerId } from './payer';
import type { payment_provider, payment_providerId } from './payment_provider';

export interface paymentAttributes {
  id_payment: number;
  token: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
  from_date: Date;
  to_date: Date;
  payer_payment: number;
  amount: number;
  payment_provider_id_payment_provider: number;
}

export type paymentPk = "id_payment";
export type paymentId = payment[paymentPk];
export type paymentOptionalAttributes = "id_payment" | "description" | "created_at" | "updated_at" | "deleted_at" | "is_active" | "from_date";
export type paymentCreationAttributes = Optional<paymentAttributes, paymentOptionalAttributes>;

export class payment extends Model<paymentAttributes, paymentCreationAttributes> implements paymentAttributes {
  id_payment!: number;
  token!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;
  from_date!: Date;
  to_date!: Date;
  payer_payment!: number;
  amount!: number;
  payment_provider_id_payment_provider!: number;

  // payment belongsTo payer via payer_payment
  payer_payment_payer!: payer;
  getPayer_payment_payer!: Sequelize.BelongsToGetAssociationMixin<payer>;
  setPayer_payment_payer!: Sequelize.BelongsToSetAssociationMixin<payer, payerId>;
  createPayer_payment_payer!: Sequelize.BelongsToCreateAssociationMixin<payer>;
  // payment belongsTo payment_provider via payment_provider_id_payment_provider
  payment_provider_id_payment_provider_payment_provider!: payment_provider;
  getPayment_provider_id_payment_provider_payment_provider!: Sequelize.BelongsToGetAssociationMixin<payment_provider>;
  setPayment_provider_id_payment_provider_payment_provider!: Sequelize.BelongsToSetAssociationMixin<payment_provider, payment_providerId>;
  createPayment_provider_id_payment_provider_payment_provider!: Sequelize.BelongsToCreateAssociationMixin<payment_provider>;

  static initModel(sequelize: Sequelize.Sequelize): typeof payment {
    return payment.init({
    id_payment: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    token: {
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
    from_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    to_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    payer_payment: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'payer',
        key: 'id_payer'
      }
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    payment_provider_id_payment_provider: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'payment_provider',
        key: 'id_payment_provider'
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
  }, {
    sequelize,
    tableName: 'payment',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_payment" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "fk_payment_payer1_idx",
        using: "BTREE",
        fields: [
          { name: "payer_payment" },
        ]
      },
      {
        name: "fk_payment_payment_provider1_idx",
        using: "BTREE",
        fields: [
          { name: "payment_provider_id_payment_provider" },
        ]
      },
    ]
  });
  }
}
