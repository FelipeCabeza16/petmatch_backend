import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { payment, paymentId } from './payment';

export interface payment_providerAttributes {
  id_payment_provider: number;
  payment_provider: string;
  description?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  is_active?: number;
}

export type payment_providerPk = "id_payment_provider";
export type payment_providerId = payment_provider[payment_providerPk];
export type payment_providerOptionalAttributes = "description" | "created_at" | "updated_at" | "deleted_at" | "is_active";
export type payment_providerCreationAttributes = Optional<payment_providerAttributes, payment_providerOptionalAttributes>;

export class payment_provider extends Model<payment_providerAttributes, payment_providerCreationAttributes> implements payment_providerAttributes {
  id_payment_provider!: number;
  payment_provider!: string;
  description?: string;
  created_at!: Date;
  updated_at!: Date;
  deleted_at?: Date;
  is_active?: number;

  // payment_provider hasMany payment via payment_provider_id_payment_provider
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

  static initModel(sequelize: Sequelize.Sequelize): typeof payment_provider {
    return payment_provider.init({
    id_payment_provider: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    payment_provider: {
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
    tableName: 'payment_provider',
    timestamps: false,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id_payment_provider" },
        ]
      },
      {
        name: "breed_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "payment_provider" },
        ]
      },
    ]
  });
  }
}
