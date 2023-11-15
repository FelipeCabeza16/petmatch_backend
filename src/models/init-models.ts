import type { Sequelize } from "sequelize";
import { address as _address } from "./address";
import type { addressAttributes, addressCreationAttributes } from "./address";
import { auth as _auth } from "./auth";
import type { authAttributes, authCreationAttributes } from "./auth";
import { breed as _breed } from "./breed";
import type { breedAttributes, breedCreationAttributes } from "./breed";
import { chat as _chat } from "./chat";
import type { chatAttributes, chatCreationAttributes } from "./chat";
import { chat_match as _chat_match } from "./chat_match";
import type { chat_matchAttributes, chat_matchCreationAttributes } from "./chat_match";
import { city as _city } from "./city";
import type { cityAttributes, cityCreationAttributes } from "./city";
import { config as _config } from "./config";
import type { configAttributes, configCreationAttributes } from "./config";
import { configuration as _configuration } from "./configuration";
import type { configurationAttributes, configurationCreationAttributes } from "./configuration";
import { country as _country } from "./country";
import type { countryAttributes, countryCreationAttributes } from "./country";
import { department as _department } from "./department";
import type { departmentAttributes, departmentCreationAttributes } from "./department";
import { device as _device } from "./device";
import type { deviceAttributes, deviceCreationAttributes } from "./device";
import { device_has_device_permission as _device_has_device_permission } from "./device_has_device_permission";
import type { device_has_device_permissionAttributes, device_has_device_permissionCreationAttributes } from "./device_has_device_permission";
import { device_permission as _device_permission } from "./device_permission";
import type { device_permissionAttributes, device_permissionCreationAttributes } from "./device_permission";
import { dislike as _dislike } from "./dislike";
import type { dislikeAttributes, dislikeCreationAttributes } from "./dislike";
import { document as _document } from "./document";
import type { documentAttributes, documentCreationAttributes } from "./document";
import { document_type as _document_type } from "./document_type";
import type { document_typeAttributes, document_typeCreationAttributes } from "./document_type";
import { feature as _feature } from "./feature";
import type { featureAttributes, featureCreationAttributes } from "./feature";
import { http_method as _http_method } from "./http_method";
import type { http_methodAttributes, http_methodCreationAttributes } from "./http_method";
import { like as _like } from "./like";
import type { likeAttributes, likeCreationAttributes } from "./like";
import { log as _log } from "./log";
import type { logAttributes, logCreationAttributes } from "./log";
import { match as _match } from "./match";
import type { matchAttributes, matchCreationAttributes } from "./match";
import { message as _message } from "./message";
import type { messageAttributes, messageCreationAttributes } from "./message";
import { modulo as _modulo } from "./modulo";
import type { moduloAttributes, moduloCreationAttributes } from "./modulo";
import { operation as _operation } from "./operation";
import type { operationAttributes, operationCreationAttributes } from "./operation";
import { payer as _payer } from "./payer";
import type { payerAttributes, payerCreationAttributes } from "./payer";
import { payment as _payment } from "./payment";
import type { paymentAttributes, paymentCreationAttributes } from "./payment";
import { payment_provider as _payment_provider } from "./payment_provider";
import type { payment_providerAttributes, payment_providerCreationAttributes } from "./payment_provider";
import { permission as _permission } from "./permission";
import type { permissionAttributes, permissionCreationAttributes } from "./permission";
import { pet as _pet } from "./pet";
import type { petAttributes, petCreationAttributes } from "./pet";
import { pet_feature as _pet_feature } from "./pet_feature";
import type { pet_featureAttributes, pet_featureCreationAttributes } from "./pet_feature";
import { pet_type as _pet_type } from "./pet_type";
import type { pet_typeAttributes, pet_typeCreationAttributes } from "./pet_type";
import { photo as _photo } from "./photo";
import type { photoAttributes, photoCreationAttributes } from "./photo";
import { role as _role } from "./role";
import type { roleAttributes, roleCreationAttributes } from "./role";
import { session as _session } from "./session";
import type { sessionAttributes, sessionCreationAttributes } from "./session";
import { social_account as _social_account } from "./social_account";
import type { social_accountAttributes, social_accountCreationAttributes } from "./social_account";
import { social_account_provider as _social_account_provider } from "./social_account_provider";
import type { social_account_providerAttributes, social_account_providerCreationAttributes } from "./social_account_provider";
import { subscription as _subscription } from "./subscription";
import type { subscriptionAttributes, subscriptionCreationAttributes } from "./subscription";
import { subscription_config as _subscription_config } from "./subscription_config";
import type { subscription_configAttributes, subscription_configCreationAttributes } from "./subscription_config";
import { subscription_configuration as _subscription_configuration } from "./subscription_configuration";
import type { subscription_configurationAttributes, subscription_configurationCreationAttributes } from "./subscription_configuration";
import { subscription_configuration_history as _subscription_configuration_history } from "./subscription_configuration_history";
import type { subscription_configuration_historyAttributes, subscription_configuration_historyCreationAttributes } from "./subscription_configuration_history";
import { subscription_feature as _subscription_feature } from "./subscription_feature";
import type { subscription_featureAttributes, subscription_featureCreationAttributes } from "./subscription_feature";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";

export {
  _address as address,
  _auth as auth,
  _breed as breed,
  _chat as chat,
  _chat_match as chat_match,
  _city as city,
  _config as config,
  _configuration as configuration,
  _country as country,
  _department as department,
  _device as device,
  _device_has_device_permission as device_has_device_permission,
  _device_permission as device_permission,
  _dislike as dislike,
  _document as document,
  _document_type as document_type,
  _feature as feature,
  _http_method as http_method,
  _like as like,
  _log as log,
  _match as match,
  _message as message,
  _modulo as modulo,
  _operation as operation,
  _payer as payer,
  _payment as payment,
  _payment_provider as payment_provider,
  _permission as permission,
  _pet as pet,
  _pet_feature as pet_feature,
  _pet_type as pet_type,
  _photo as photo,
  _role as role,
  _session as session,
  _social_account as social_account,
  _social_account_provider as social_account_provider,
  _subscription as subscription,
  _subscription_config as subscription_config,
  _subscription_configuration as subscription_configuration,
  _subscription_configuration_history as subscription_configuration_history,
  _subscription_feature as subscription_feature,
  _user as user,
};

export type {
  addressAttributes,
  addressCreationAttributes,
  authAttributes,
  authCreationAttributes,
  breedAttributes,
  breedCreationAttributes,
  chatAttributes,
  chatCreationAttributes,
  chat_matchAttributes,
  chat_matchCreationAttributes,
  cityAttributes,
  cityCreationAttributes,
  configAttributes,
  configCreationAttributes,
  configurationAttributes,
  configurationCreationAttributes,
  countryAttributes,
  countryCreationAttributes,
  departmentAttributes,
  departmentCreationAttributes,
  deviceAttributes,
  deviceCreationAttributes,
  device_has_device_permissionAttributes,
  device_has_device_permissionCreationAttributes,
  device_permissionAttributes,
  device_permissionCreationAttributes,
  dislikeAttributes,
  dislikeCreationAttributes,
  documentAttributes,
  documentCreationAttributes,
  document_typeAttributes,
  document_typeCreationAttributes,
  featureAttributes,
  featureCreationAttributes,
  http_methodAttributes,
  http_methodCreationAttributes,
  likeAttributes,
  likeCreationAttributes,
  logAttributes,
  logCreationAttributes,
  matchAttributes,
  matchCreationAttributes,
  messageAttributes,
  messageCreationAttributes,
  moduloAttributes,
  moduloCreationAttributes,
  operationAttributes,
  operationCreationAttributes,
  payerAttributes,
  payerCreationAttributes,
  paymentAttributes,
  paymentCreationAttributes,
  payment_providerAttributes,
  payment_providerCreationAttributes,
  permissionAttributes,
  permissionCreationAttributes,
  petAttributes,
  petCreationAttributes,
  pet_featureAttributes,
  pet_featureCreationAttributes,
  pet_typeAttributes,
  pet_typeCreationAttributes,
  photoAttributes,
  photoCreationAttributes,
  roleAttributes,
  roleCreationAttributes,
  sessionAttributes,
  sessionCreationAttributes,
  social_accountAttributes,
  social_accountCreationAttributes,
  social_account_providerAttributes,
  social_account_providerCreationAttributes,
  subscriptionAttributes,
  subscriptionCreationAttributes,
  subscription_configAttributes,
  subscription_configCreationAttributes,
  subscription_configurationAttributes,
  subscription_configurationCreationAttributes,
  subscription_configuration_historyAttributes,
  subscription_configuration_historyCreationAttributes,
  subscription_featureAttributes,
  subscription_featureCreationAttributes,
  userAttributes,
  userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const address = _address.initModel(sequelize);
  const auth = _auth.initModel(sequelize);
  const breed = _breed.initModel(sequelize);
  const chat = _chat.initModel(sequelize);
  const chat_match = _chat_match.initModel(sequelize);
  const city = _city.initModel(sequelize);
  const config = _config.initModel(sequelize);
  const configuration = _configuration.initModel(sequelize);
  const country = _country.initModel(sequelize);
  const department = _department.initModel(sequelize);
  const device = _device.initModel(sequelize);
  const device_has_device_permission = _device_has_device_permission.initModel(sequelize);
  const device_permission = _device_permission.initModel(sequelize);
  const dislike = _dislike.initModel(sequelize);
  const document = _document.initModel(sequelize);
  const document_type = _document_type.initModel(sequelize);
  const feature = _feature.initModel(sequelize);
  const http_method = _http_method.initModel(sequelize);
  const like = _like.initModel(sequelize);
  const log = _log.initModel(sequelize);
  const match = _match.initModel(sequelize);
  const message = _message.initModel(sequelize);
  const modulo = _modulo.initModel(sequelize);
  const operation = _operation.initModel(sequelize);
  const payer = _payer.initModel(sequelize);
  const payment = _payment.initModel(sequelize);
  const payment_provider = _payment_provider.initModel(sequelize);
  const permission = _permission.initModel(sequelize);
  const pet = _pet.initModel(sequelize);
  const pet_feature = _pet_feature.initModel(sequelize);
  const pet_type = _pet_type.initModel(sequelize);
  const photo = _photo.initModel(sequelize);
  const role = _role.initModel(sequelize);
  const session = _session.initModel(sequelize);
  const social_account = _social_account.initModel(sequelize);
  const social_account_provider = _social_account_provider.initModel(sequelize);
  const subscription = _subscription.initModel(sequelize);
  const subscription_config = _subscription_config.initModel(sequelize);
  const subscription_configuration = _subscription_configuration.initModel(sequelize);
  const subscription_configuration_history = _subscription_configuration_history.initModel(sequelize);
  const subscription_feature = _subscription_feature.initModel(sequelize);
  const user = _user.initModel(sequelize);

  chat.belongsToMany(match, { as: 'id_match_matches', through: chat_match, foreignKey: "id_chat", otherKey: "id_match" });
  device.belongsToMany(device_permission, { as: 'device_permission_id_device_permission_device_permissions', through: device_has_device_permission, foreignKey: "device_id_device", otherKey: "device_permission_id_device_permission" });
  device_permission.belongsToMany(device, { as: 'device_id_device_devices', through: device_has_device_permission, foreignKey: "device_permission_id_device_permission", otherKey: "device_id_device" });
  feature.belongsToMany(pet, { as: 'id_pet_pets', through: pet_feature, foreignKey: "id_feature", otherKey: "id_pet" });
  match.belongsToMany(chat, { as: 'id_chat_chats', through: chat_match, foreignKey: "id_match", otherKey: "id_chat" });
  pet.belongsToMany(feature, { as: 'id_feature_features', through: pet_feature, foreignKey: "id_pet", otherKey: "id_feature" });
  social_account_provider.belongsToMany(user, { as: 'id_user_users', through: social_account, foreignKey: "id_social_account", otherKey: "id_user" });
  subscription.belongsToMany(subscription_feature, { as: 'id_config_subscription_features', through: subscription_config, foreignKey: "id_subscription", otherKey: "id_config" });
  subscription_feature.belongsToMany(subscription, { as: 'id_subscription_subscriptions', through: subscription_config, foreignKey: "id_config", otherKey: "id_subscription" });
  user.belongsToMany(social_account_provider, { as: 'id_social_account_social_account_providers', through: social_account, foreignKey: "id_user", otherKey: "id_social_account" });
  pet.belongsTo(breed, { as: "breed_pet_breed", foreignKey: "breed_pet"});
  breed.hasMany(pet, { as: "pets", foreignKey: "breed_pet"});
  chat_match.belongsTo(chat, { as: "id_chat_chat", foreignKey: "id_chat"});
  chat.hasMany(chat_match, { as: "chat_matches", foreignKey: "id_chat"});
  message.belongsTo(chat, { as: "message_chat_chat", foreignKey: "message_chat"});
  chat.hasMany(message, { as: "messages", foreignKey: "message_chat"});
  address.belongsTo(city, { as: "city_address_city", foreignKey: "city_address"});
  city.hasMany(address, { as: "addresses", foreignKey: "city_address"});
  department.belongsTo(country, { as: "country_department_country", foreignKey: "country_department"});
  country.hasMany(department, { as: "departments", foreignKey: "country_department"});
  city.belongsTo(department, { as: "department_city_department", foreignKey: "department_city"});
  department.hasMany(city, { as: "cities", foreignKey: "department_city"});
  device_has_device_permission.belongsTo(device, { as: "device_id_device_device", foreignKey: "device_id_device"});
  device.hasMany(device_has_device_permission, { as: "device_has_device_permissions", foreignKey: "device_id_device"});
  session.belongsTo(device, { as: "device_session_device", foreignKey: "device_session"});
  device.hasMany(session, { as: "sessions", foreignKey: "device_session"});
  device_has_device_permission.belongsTo(device_permission, { as: "device_permission_id_device_permission_device_permission", foreignKey: "device_permission_id_device_permission"});
  device_permission.hasMany(device_has_device_permission, { as: "device_has_device_permissions", foreignKey: "device_permission_id_device_permission"});
  user.belongsTo(document, { as: "document_user_document", foreignKey: "document_user"});
  document.hasMany(user, { as: "users", foreignKey: "document_user"});
  document.belongsTo(document_type, { as: "document_type_document_document_type", foreignKey: "document_type_document"});
  document_type.hasMany(document, { as: "documents", foreignKey: "document_type_document"});
  pet_feature.belongsTo(feature, { as: "id_feature_feature", foreignKey: "id_feature"});
  feature.hasMany(pet_feature, { as: "pet_features", foreignKey: "id_feature"});
  log.belongsTo(http_method, { as: "http_method_id_http_method_http_method", foreignKey: "http_method_id_http_method"});
  http_method.hasMany(log, { as: "logs", foreignKey: "http_method_id_http_method"});
  chat_match.belongsTo(match, { as: "id_match_match", foreignKey: "id_match"});
  match.hasMany(chat_match, { as: "chat_matches", foreignKey: "id_match"});
  log.belongsTo(modulo, { as: "modulo_id_modulo_modulo", foreignKey: "modulo_id_modulo"});
  modulo.hasMany(log, { as: "logs", foreignKey: "modulo_id_modulo"});
  operation.belongsTo(modulo, { as: "modulo_operation_modulo", foreignKey: "modulo_operation"});
  modulo.hasMany(operation, { as: "operations", foreignKey: "modulo_operation"});
  payment.belongsTo(payer, { as: "payer_payment_payer", foreignKey: "payer_payment"});
  payer.hasMany(payment, { as: "payments", foreignKey: "payer_payment"});
  payment.belongsTo(payment_provider, { as: "payment_provider_id_payment_provider_payment_provider", foreignKey: "payment_provider_id_payment_provider"});
  payment_provider.hasMany(payment, { as: "payments", foreignKey: "payment_provider_id_payment_provider"});
  operation.belongsTo(permission, { as: "permission_operation_permission", foreignKey: "permission_operation"});
  permission.hasMany(operation, { as: "operations", foreignKey: "permission_operation"});
  dislike.belongsTo(pet, { as: "from_pet_pet", foreignKey: "from_pet"});
  pet.hasMany(dislike, { as: "dislikes", foreignKey: "from_pet"});
  dislike.belongsTo(pet, { as: "to_pet_pet", foreignKey: "to_pet"});
  pet.hasMany(dislike, { as: "to_pet_dislikes", foreignKey: "to_pet"});
  like.belongsTo(pet, { as: "from_pet_pet", foreignKey: "from_pet"});
  pet.hasMany(like, { as: "likes", foreignKey: "from_pet"});
  like.belongsTo(pet, { as: "to_pet_pet", foreignKey: "to_pet"});
  pet.hasMany(like, { as: "to_pet_likes", foreignKey: "to_pet"});
  match.belongsTo(pet, { as: "like_male_pet", foreignKey: "like_male"});
  pet.hasMany(match, { as: "matches", foreignKey: "like_male"});
  match.belongsTo(pet, { as: "like_female_pet", foreignKey: "like_female"});
  pet.hasMany(match, { as: "like_female_matches", foreignKey: "like_female"});
  pet_feature.belongsTo(pet, { as: "id_pet_pet", foreignKey: "id_pet"});
  pet.hasMany(pet_feature, { as: "pet_features", foreignKey: "id_pet"});
  photo.belongsTo(pet, { as: "pet_photo_pet", foreignKey: "pet_photo"});
  pet.hasMany(photo, { as: "photos", foreignKey: "pet_photo"});
  session.belongsTo(pet, { as: "pet_session_pet", foreignKey: "pet_session"});
  pet.hasMany(session, { as: "sessions", foreignKey: "pet_session"});
  breed.belongsTo(pet_type, { as: "pet_type_breed_pet_type", foreignKey: "pet_type_breed"});
  pet_type.hasMany(breed, { as: "breeds", foreignKey: "pet_type_breed"});
  operation.belongsTo(role, { as: "role_operation_role", foreignKey: "role_operation"});
  role.hasMany(operation, { as: "operations", foreignKey: "role_operation"});
  user.belongsTo(role, { as: "role_user_role", foreignKey: "role_user"});
  role.hasMany(user, { as: "users", foreignKey: "role_user"});
  social_account.belongsTo(social_account_provider, { as: "id_social_account_social_account_provider", foreignKey: "id_social_account"});
  social_account_provider.hasMany(social_account, { as: "social_accounts", foreignKey: "id_social_account"});
  subscription_config.belongsTo(subscription, { as: "id_subscription_subscription", foreignKey: "id_subscription"});
  subscription.hasMany(subscription_config, { as: "subscription_configs", foreignKey: "id_subscription"});
  user.belongsTo(subscription, { as: "subscription_user_subscription", foreignKey: "subscription_user"});
  subscription.hasMany(user, { as: "users", foreignKey: "subscription_user"});
  subscription.belongsTo(subscription_configuration, { as: "subscription_configuration_id_subscription_configuration_subscription_configuration", foreignKey: "subscription_configuration_id_subscription_configuration"});
  subscription_configuration.hasMany(subscription, { as: "subscriptions", foreignKey: "subscription_configuration_id_subscription_configuration"});
  subscription_configuration_history.belongsTo(subscription_configuration, { as: "subscription_configuration_subscription_configuration_history_subscription_configuration", foreignKey: "subscription_configuration_subscription_configuration_history"});
  subscription_configuration.hasMany(subscription_configuration_history, { as: "subscription_configuration_histories", foreignKey: "subscription_configuration_subscription_configuration_history"});
  subscription_config.belongsTo(subscription_feature, { as: "id_config_subscription_feature", foreignKey: "id_config"});
  subscription_feature.hasMany(subscription_config, { as: "subscription_configs", foreignKey: "id_config"});
  address.belongsTo(user, { as: "user_address_user", foreignKey: "user_address"});
  user.hasMany(address, { as: "addresses", foreignKey: "user_address"});
  auth.belongsTo(user, { as: "token_user_user", foreignKey: "token_user"});
  user.hasMany(auth, { as: "auths", foreignKey: "token_user"});
  log.belongsTo(user, { as: "user_id_user_user", foreignKey: "user_id_user"});
  user.hasMany(log, { as: "logs", foreignKey: "user_id_user"});
  message.belongsTo(user, { as: "sender_user_user", foreignKey: "sender_user"});
  user.hasMany(message, { as: "messages", foreignKey: "sender_user"});
  pet.belongsTo(user, { as: "user_pet_user", foreignKey: "user_pet"});
  user.hasMany(pet, { as: "pets", foreignKey: "user_pet"});
  photo.belongsTo(user, { as: "user_photo_user", foreignKey: "user_photo"});
  user.hasMany(photo, { as: "photos", foreignKey: "user_photo"});
  social_account.belongsTo(user, { as: "id_user_user", foreignKey: "id_user"});
  user.hasMany(social_account, { as: "social_accounts", foreignKey: "id_user"});

  return {
    address: address,
    auth: auth,
    breed: breed,
    chat: chat,
    chat_match: chat_match,
    city: city,
    config: config,
    configuration: configuration,
    country: country,
    department: department,
    device: device,
    device_has_device_permission: device_has_device_permission,
    device_permission: device_permission,
    dislike: dislike,
    document: document,
    document_type: document_type,
    feature: feature,
    http_method: http_method,
    like: like,
    log: log,
    match: match,
    message: message,
    modulo: modulo,
    operation: operation,
    payer: payer,
    payment: payment,
    payment_provider: payment_provider,
    permission: permission,
    pet: pet,
    pet_feature: pet_feature,
    pet_type: pet_type,
    photo: photo,
    role: role,
    session: session,
    social_account: social_account,
    social_account_provider: social_account_provider,
    subscription: subscription,
    subscription_config: subscription_config,
    subscription_configuration: subscription_configuration,
    subscription_configuration_history: subscription_configuration_history,
    subscription_feature: subscription_feature,
    user: user,
  };
}
