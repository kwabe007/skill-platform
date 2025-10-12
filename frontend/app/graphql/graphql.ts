/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  connection_requests?: Maybe<Connection_RequestsAccess>;
  media?: Maybe<MediaAccess>;
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>;
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  settings?: Maybe<SettingsAccess>;
  skills?: Maybe<SkillsAccess>;
  users?: Maybe<UsersAccess>;
};

export type ConnectionRequest = {
  __typename?: 'ConnectionRequest';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  message: Scalars['String']['output'];
  receiver: User;
  sendEmail?: Maybe<Scalars['Boolean']['output']>;
  sender: User;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ConnectionRequest_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ConnectionRequest_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type ConnectionRequest_Message_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type ConnectionRequest_Receiver_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type ConnectionRequest_SendEmail_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ConnectionRequest_Sender_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type ConnectionRequest_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ConnectionRequest_Where = {
  AND?: InputMaybe<Array<InputMaybe<ConnectionRequest_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ConnectionRequest_Where_Or>>>;
  createdAt?: InputMaybe<ConnectionRequest_CreatedAt_Operator>;
  id?: InputMaybe<ConnectionRequest_Id_Operator>;
  message?: InputMaybe<ConnectionRequest_Message_Operator>;
  receiver?: InputMaybe<ConnectionRequest_Receiver_Operator>;
  sendEmail?: InputMaybe<ConnectionRequest_SendEmail_Operator>;
  sender?: InputMaybe<ConnectionRequest_Sender_Operator>;
  updatedAt?: InputMaybe<ConnectionRequest_UpdatedAt_Operator>;
};

export type ConnectionRequest_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<ConnectionRequest_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ConnectionRequest_Where_Or>>>;
  createdAt?: InputMaybe<ConnectionRequest_CreatedAt_Operator>;
  id?: InputMaybe<ConnectionRequest_Id_Operator>;
  message?: InputMaybe<ConnectionRequest_Message_Operator>;
  receiver?: InputMaybe<ConnectionRequest_Receiver_Operator>;
  sendEmail?: InputMaybe<ConnectionRequest_SendEmail_Operator>;
  sender?: InputMaybe<ConnectionRequest_Sender_Operator>;
  updatedAt?: InputMaybe<ConnectionRequest_UpdatedAt_Operator>;
};

export type ConnectionRequest_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<ConnectionRequest_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<ConnectionRequest_Where_Or>>>;
  createdAt?: InputMaybe<ConnectionRequest_CreatedAt_Operator>;
  id?: InputMaybe<ConnectionRequest_Id_Operator>;
  message?: InputMaybe<ConnectionRequest_Message_Operator>;
  receiver?: InputMaybe<ConnectionRequest_Receiver_Operator>;
  sendEmail?: InputMaybe<ConnectionRequest_SendEmail_Operator>;
  sender?: InputMaybe<ConnectionRequest_Sender_Operator>;
  updatedAt?: InputMaybe<ConnectionRequest_UpdatedAt_Operator>;
};

export type ConnectionRequests = {
  __typename?: 'ConnectionRequests';
  docs: Array<ConnectionRequest>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type ConnectionRequestsCreateAccess = {
  __typename?: 'ConnectionRequestsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConnectionRequestsCreateDocAccess = {
  __typename?: 'ConnectionRequestsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConnectionRequestsDeleteAccess = {
  __typename?: 'ConnectionRequestsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConnectionRequestsDeleteDocAccess = {
  __typename?: 'ConnectionRequestsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConnectionRequestsDocAccessFields = {
  __typename?: 'ConnectionRequestsDocAccessFields';
  createdAt?: Maybe<ConnectionRequestsDocAccessFields_CreatedAt>;
  message?: Maybe<ConnectionRequestsDocAccessFields_Message>;
  receiver?: Maybe<ConnectionRequestsDocAccessFields_Receiver>;
  sendEmail?: Maybe<ConnectionRequestsDocAccessFields_SendEmail>;
  sender?: Maybe<ConnectionRequestsDocAccessFields_Sender>;
  updatedAt?: Maybe<ConnectionRequestsDocAccessFields_UpdatedAt>;
};

export type ConnectionRequestsDocAccessFields_CreatedAt = {
  __typename?: 'ConnectionRequestsDocAccessFields_createdAt';
  create?: Maybe<ConnectionRequestsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<ConnectionRequestsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<ConnectionRequestsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<ConnectionRequestsDocAccessFields_CreatedAt_Update>;
};

export type ConnectionRequestsDocAccessFields_CreatedAt_Create = {
  __typename?: 'ConnectionRequestsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'ConnectionRequestsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_CreatedAt_Read = {
  __typename?: 'ConnectionRequestsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_CreatedAt_Update = {
  __typename?: 'ConnectionRequestsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Message = {
  __typename?: 'ConnectionRequestsDocAccessFields_message';
  create?: Maybe<ConnectionRequestsDocAccessFields_Message_Create>;
  delete?: Maybe<ConnectionRequestsDocAccessFields_Message_Delete>;
  read?: Maybe<ConnectionRequestsDocAccessFields_Message_Read>;
  update?: Maybe<ConnectionRequestsDocAccessFields_Message_Update>;
};

export type ConnectionRequestsDocAccessFields_Message_Create = {
  __typename?: 'ConnectionRequestsDocAccessFields_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Message_Delete = {
  __typename?: 'ConnectionRequestsDocAccessFields_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Message_Read = {
  __typename?: 'ConnectionRequestsDocAccessFields_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Message_Update = {
  __typename?: 'ConnectionRequestsDocAccessFields_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Receiver = {
  __typename?: 'ConnectionRequestsDocAccessFields_receiver';
  create?: Maybe<ConnectionRequestsDocAccessFields_Receiver_Create>;
  delete?: Maybe<ConnectionRequestsDocAccessFields_Receiver_Delete>;
  read?: Maybe<ConnectionRequestsDocAccessFields_Receiver_Read>;
  update?: Maybe<ConnectionRequestsDocAccessFields_Receiver_Update>;
};

export type ConnectionRequestsDocAccessFields_Receiver_Create = {
  __typename?: 'ConnectionRequestsDocAccessFields_receiver_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Receiver_Delete = {
  __typename?: 'ConnectionRequestsDocAccessFields_receiver_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Receiver_Read = {
  __typename?: 'ConnectionRequestsDocAccessFields_receiver_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Receiver_Update = {
  __typename?: 'ConnectionRequestsDocAccessFields_receiver_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_SendEmail = {
  __typename?: 'ConnectionRequestsDocAccessFields_sendEmail';
  create?: Maybe<ConnectionRequestsDocAccessFields_SendEmail_Create>;
  delete?: Maybe<ConnectionRequestsDocAccessFields_SendEmail_Delete>;
  read?: Maybe<ConnectionRequestsDocAccessFields_SendEmail_Read>;
  update?: Maybe<ConnectionRequestsDocAccessFields_SendEmail_Update>;
};

export type ConnectionRequestsDocAccessFields_SendEmail_Create = {
  __typename?: 'ConnectionRequestsDocAccessFields_sendEmail_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_SendEmail_Delete = {
  __typename?: 'ConnectionRequestsDocAccessFields_sendEmail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_SendEmail_Read = {
  __typename?: 'ConnectionRequestsDocAccessFields_sendEmail_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_SendEmail_Update = {
  __typename?: 'ConnectionRequestsDocAccessFields_sendEmail_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Sender = {
  __typename?: 'ConnectionRequestsDocAccessFields_sender';
  create?: Maybe<ConnectionRequestsDocAccessFields_Sender_Create>;
  delete?: Maybe<ConnectionRequestsDocAccessFields_Sender_Delete>;
  read?: Maybe<ConnectionRequestsDocAccessFields_Sender_Read>;
  update?: Maybe<ConnectionRequestsDocAccessFields_Sender_Update>;
};

export type ConnectionRequestsDocAccessFields_Sender_Create = {
  __typename?: 'ConnectionRequestsDocAccessFields_sender_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Sender_Delete = {
  __typename?: 'ConnectionRequestsDocAccessFields_sender_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Sender_Read = {
  __typename?: 'ConnectionRequestsDocAccessFields_sender_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_Sender_Update = {
  __typename?: 'ConnectionRequestsDocAccessFields_sender_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_UpdatedAt = {
  __typename?: 'ConnectionRequestsDocAccessFields_updatedAt';
  create?: Maybe<ConnectionRequestsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<ConnectionRequestsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<ConnectionRequestsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<ConnectionRequestsDocAccessFields_UpdatedAt_Update>;
};

export type ConnectionRequestsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'ConnectionRequestsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'ConnectionRequestsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'ConnectionRequestsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'ConnectionRequestsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields = {
  __typename?: 'ConnectionRequestsFields';
  createdAt?: Maybe<ConnectionRequestsFields_CreatedAt>;
  message?: Maybe<ConnectionRequestsFields_Message>;
  receiver?: Maybe<ConnectionRequestsFields_Receiver>;
  sendEmail?: Maybe<ConnectionRequestsFields_SendEmail>;
  sender?: Maybe<ConnectionRequestsFields_Sender>;
  updatedAt?: Maybe<ConnectionRequestsFields_UpdatedAt>;
};

export type ConnectionRequestsFields_CreatedAt = {
  __typename?: 'ConnectionRequestsFields_createdAt';
  create?: Maybe<ConnectionRequestsFields_CreatedAt_Create>;
  delete?: Maybe<ConnectionRequestsFields_CreatedAt_Delete>;
  read?: Maybe<ConnectionRequestsFields_CreatedAt_Read>;
  update?: Maybe<ConnectionRequestsFields_CreatedAt_Update>;
};

export type ConnectionRequestsFields_CreatedAt_Create = {
  __typename?: 'ConnectionRequestsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_CreatedAt_Delete = {
  __typename?: 'ConnectionRequestsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_CreatedAt_Read = {
  __typename?: 'ConnectionRequestsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_CreatedAt_Update = {
  __typename?: 'ConnectionRequestsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Message = {
  __typename?: 'ConnectionRequestsFields_message';
  create?: Maybe<ConnectionRequestsFields_Message_Create>;
  delete?: Maybe<ConnectionRequestsFields_Message_Delete>;
  read?: Maybe<ConnectionRequestsFields_Message_Read>;
  update?: Maybe<ConnectionRequestsFields_Message_Update>;
};

export type ConnectionRequestsFields_Message_Create = {
  __typename?: 'ConnectionRequestsFields_message_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Message_Delete = {
  __typename?: 'ConnectionRequestsFields_message_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Message_Read = {
  __typename?: 'ConnectionRequestsFields_message_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Message_Update = {
  __typename?: 'ConnectionRequestsFields_message_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Receiver = {
  __typename?: 'ConnectionRequestsFields_receiver';
  create?: Maybe<ConnectionRequestsFields_Receiver_Create>;
  delete?: Maybe<ConnectionRequestsFields_Receiver_Delete>;
  read?: Maybe<ConnectionRequestsFields_Receiver_Read>;
  update?: Maybe<ConnectionRequestsFields_Receiver_Update>;
};

export type ConnectionRequestsFields_Receiver_Create = {
  __typename?: 'ConnectionRequestsFields_receiver_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Receiver_Delete = {
  __typename?: 'ConnectionRequestsFields_receiver_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Receiver_Read = {
  __typename?: 'ConnectionRequestsFields_receiver_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Receiver_Update = {
  __typename?: 'ConnectionRequestsFields_receiver_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_SendEmail = {
  __typename?: 'ConnectionRequestsFields_sendEmail';
  create?: Maybe<ConnectionRequestsFields_SendEmail_Create>;
  delete?: Maybe<ConnectionRequestsFields_SendEmail_Delete>;
  read?: Maybe<ConnectionRequestsFields_SendEmail_Read>;
  update?: Maybe<ConnectionRequestsFields_SendEmail_Update>;
};

export type ConnectionRequestsFields_SendEmail_Create = {
  __typename?: 'ConnectionRequestsFields_sendEmail_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_SendEmail_Delete = {
  __typename?: 'ConnectionRequestsFields_sendEmail_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_SendEmail_Read = {
  __typename?: 'ConnectionRequestsFields_sendEmail_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_SendEmail_Update = {
  __typename?: 'ConnectionRequestsFields_sendEmail_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Sender = {
  __typename?: 'ConnectionRequestsFields_sender';
  create?: Maybe<ConnectionRequestsFields_Sender_Create>;
  delete?: Maybe<ConnectionRequestsFields_Sender_Delete>;
  read?: Maybe<ConnectionRequestsFields_Sender_Read>;
  update?: Maybe<ConnectionRequestsFields_Sender_Update>;
};

export type ConnectionRequestsFields_Sender_Create = {
  __typename?: 'ConnectionRequestsFields_sender_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Sender_Delete = {
  __typename?: 'ConnectionRequestsFields_sender_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Sender_Read = {
  __typename?: 'ConnectionRequestsFields_sender_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_Sender_Update = {
  __typename?: 'ConnectionRequestsFields_sender_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_UpdatedAt = {
  __typename?: 'ConnectionRequestsFields_updatedAt';
  create?: Maybe<ConnectionRequestsFields_UpdatedAt_Create>;
  delete?: Maybe<ConnectionRequestsFields_UpdatedAt_Delete>;
  read?: Maybe<ConnectionRequestsFields_UpdatedAt_Read>;
  update?: Maybe<ConnectionRequestsFields_UpdatedAt_Update>;
};

export type ConnectionRequestsFields_UpdatedAt_Create = {
  __typename?: 'ConnectionRequestsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_UpdatedAt_Delete = {
  __typename?: 'ConnectionRequestsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_UpdatedAt_Read = {
  __typename?: 'ConnectionRequestsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsFields_UpdatedAt_Update = {
  __typename?: 'ConnectionRequestsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type ConnectionRequestsReadAccess = {
  __typename?: 'ConnectionRequestsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConnectionRequestsReadDocAccess = {
  __typename?: 'ConnectionRequestsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConnectionRequestsUpdateAccess = {
  __typename?: 'ConnectionRequestsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type ConnectionRequestsUpdateDocAccess = {
  __typename?: 'ConnectionRequestsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  filename?: Maybe<Scalars['String']['output']>;
  filesize?: Maybe<Scalars['Float']['output']>;
  focalX?: Maybe<Scalars['Float']['output']>;
  focalY?: Maybe<Scalars['Float']['output']>;
  height?: Maybe<Scalars['Float']['output']>;
  id: Scalars['Int']['output'];
  mimeType?: Maybe<Scalars['String']['output']>;
  thumbnailURL?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Float']['output']>;
};

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields';
  alt?: Maybe<MediaDocAccessFields_Alt>;
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>;
  filename?: Maybe<MediaDocAccessFields_Filename>;
  filesize?: Maybe<MediaDocAccessFields_Filesize>;
  focalX?: Maybe<MediaDocAccessFields_FocalX>;
  focalY?: Maybe<MediaDocAccessFields_FocalY>;
  height?: Maybe<MediaDocAccessFields_Height>;
  mimeType?: Maybe<MediaDocAccessFields_MimeType>;
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>;
  url?: Maybe<MediaDocAccessFields_Url>;
  width?: Maybe<MediaDocAccessFields_Width>;
};

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt';
  create?: Maybe<MediaDocAccessFields_Alt_Create>;
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>;
  read?: Maybe<MediaDocAccessFields_Alt_Read>;
  update?: Maybe<MediaDocAccessFields_Alt_Update>;
};

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt';
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>;
};

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename';
  create?: Maybe<MediaDocAccessFields_Filename_Create>;
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>;
  read?: Maybe<MediaDocAccessFields_Filename_Read>;
  update?: Maybe<MediaDocAccessFields_Filename_Update>;
};

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize';
  create?: Maybe<MediaDocAccessFields_Filesize_Create>;
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>;
  read?: Maybe<MediaDocAccessFields_Filesize_Read>;
  update?: Maybe<MediaDocAccessFields_Filesize_Update>;
};

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX';
  create?: Maybe<MediaDocAccessFields_FocalX_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalX_Read>;
  update?: Maybe<MediaDocAccessFields_FocalX_Update>;
};

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY';
  create?: Maybe<MediaDocAccessFields_FocalY_Create>;
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>;
  read?: Maybe<MediaDocAccessFields_FocalY_Read>;
  update?: Maybe<MediaDocAccessFields_FocalY_Update>;
};

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height';
  create?: Maybe<MediaDocAccessFields_Height_Create>;
  delete?: Maybe<MediaDocAccessFields_Height_Delete>;
  read?: Maybe<MediaDocAccessFields_Height_Read>;
  update?: Maybe<MediaDocAccessFields_Height_Update>;
};

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType';
  create?: Maybe<MediaDocAccessFields_MimeType_Create>;
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>;
  read?: Maybe<MediaDocAccessFields_MimeType_Read>;
  update?: Maybe<MediaDocAccessFields_MimeType_Update>;
};

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL';
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>;
};

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt';
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>;
};

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url';
  create?: Maybe<MediaDocAccessFields_Url_Create>;
  delete?: Maybe<MediaDocAccessFields_Url_Delete>;
  read?: Maybe<MediaDocAccessFields_Url_Read>;
  update?: Maybe<MediaDocAccessFields_Url_Update>;
};

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width';
  create?: Maybe<MediaDocAccessFields_Width_Create>;
  delete?: Maybe<MediaDocAccessFields_Width_Delete>;
  read?: Maybe<MediaDocAccessFields_Width_Read>;
  update?: Maybe<MediaDocAccessFields_Width_Update>;
};

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields = {
  __typename?: 'MediaFields';
  alt?: Maybe<MediaFields_Alt>;
  createdAt?: Maybe<MediaFields_CreatedAt>;
  filename?: Maybe<MediaFields_Filename>;
  filesize?: Maybe<MediaFields_Filesize>;
  focalX?: Maybe<MediaFields_FocalX>;
  focalY?: Maybe<MediaFields_FocalY>;
  height?: Maybe<MediaFields_Height>;
  mimeType?: Maybe<MediaFields_MimeType>;
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>;
  updatedAt?: Maybe<MediaFields_UpdatedAt>;
  url?: Maybe<MediaFields_Url>;
  width?: Maybe<MediaFields_Width>;
};

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt';
  create?: Maybe<MediaFields_Alt_Create>;
  delete?: Maybe<MediaFields_Alt_Delete>;
  read?: Maybe<MediaFields_Alt_Read>;
  update?: Maybe<MediaFields_Alt_Update>;
};

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt';
  create?: Maybe<MediaFields_CreatedAt_Create>;
  delete?: Maybe<MediaFields_CreatedAt_Delete>;
  read?: Maybe<MediaFields_CreatedAt_Read>;
  update?: Maybe<MediaFields_CreatedAt_Update>;
};

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename';
  create?: Maybe<MediaFields_Filename_Create>;
  delete?: Maybe<MediaFields_Filename_Delete>;
  read?: Maybe<MediaFields_Filename_Read>;
  update?: Maybe<MediaFields_Filename_Update>;
};

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize';
  create?: Maybe<MediaFields_Filesize_Create>;
  delete?: Maybe<MediaFields_Filesize_Delete>;
  read?: Maybe<MediaFields_Filesize_Read>;
  update?: Maybe<MediaFields_Filesize_Update>;
};

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX';
  create?: Maybe<MediaFields_FocalX_Create>;
  delete?: Maybe<MediaFields_FocalX_Delete>;
  read?: Maybe<MediaFields_FocalX_Read>;
  update?: Maybe<MediaFields_FocalX_Update>;
};

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY';
  create?: Maybe<MediaFields_FocalY_Create>;
  delete?: Maybe<MediaFields_FocalY_Delete>;
  read?: Maybe<MediaFields_FocalY_Read>;
  update?: Maybe<MediaFields_FocalY_Update>;
};

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height = {
  __typename?: 'MediaFields_height';
  create?: Maybe<MediaFields_Height_Create>;
  delete?: Maybe<MediaFields_Height_Delete>;
  read?: Maybe<MediaFields_Height_Read>;
  update?: Maybe<MediaFields_Height_Update>;
};

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType';
  create?: Maybe<MediaFields_MimeType_Create>;
  delete?: Maybe<MediaFields_MimeType_Delete>;
  read?: Maybe<MediaFields_MimeType_Read>;
  update?: Maybe<MediaFields_MimeType_Update>;
};

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL';
  create?: Maybe<MediaFields_ThumbnailUrl_Create>;
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>;
  read?: Maybe<MediaFields_ThumbnailUrl_Read>;
  update?: Maybe<MediaFields_ThumbnailUrl_Update>;
};

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt';
  create?: Maybe<MediaFields_UpdatedAt_Create>;
  delete?: Maybe<MediaFields_UpdatedAt_Delete>;
  read?: Maybe<MediaFields_UpdatedAt_Read>;
  update?: Maybe<MediaFields_UpdatedAt_Update>;
};

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url = {
  __typename?: 'MediaFields_url';
  create?: Maybe<MediaFields_Url_Create>;
  delete?: Maybe<MediaFields_Url_Delete>;
  read?: Maybe<MediaFields_Url_Read>;
  update?: Maybe<MediaFields_Url_Update>;
};

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width = {
  __typename?: 'MediaFields_width';
  create?: Maybe<MediaFields_Width_Create>;
  delete?: Maybe<MediaFields_Width_Delete>;
  read?: Maybe<MediaFields_Width_Read>;
  update?: Maybe<MediaFields_Width_Update>;
};

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read';
  permission: Scalars['Boolean']['output'];
};

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update';
  permission: Scalars['Boolean']['output'];
};

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Media_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>;
  alt?: InputMaybe<Media_Alt_Operator>;
  createdAt?: InputMaybe<Media_CreatedAt_Operator>;
  filename?: InputMaybe<Media_Filename_Operator>;
  filesize?: InputMaybe<Media_Filesize_Operator>;
  focalX?: InputMaybe<Media_FocalX_Operator>;
  focalY?: InputMaybe<Media_FocalY_Operator>;
  height?: InputMaybe<Media_Height_Operator>;
  id?: InputMaybe<Media_Id_Operator>;
  mimeType?: InputMaybe<Media_MimeType_Operator>;
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>;
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>;
  url?: InputMaybe<Media_Url_Operator>;
  width?: InputMaybe<Media_Width_Operator>;
};

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createConnectionRequest?: Maybe<ConnectionRequest>;
  createMedia?: Maybe<Media>;
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  createPayloadPreference?: Maybe<PayloadPreference>;
  createSkill?: Maybe<Skill>;
  createUser?: Maybe<User>;
  deleteConnectionRequest?: Maybe<ConnectionRequest>;
  deleteMedia?: Maybe<Media>;
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteSkill?: Maybe<Skill>;
  deleteUser?: Maybe<User>;
  duplicateConnectionRequest?: Maybe<ConnectionRequest>;
  duplicateMedia?: Maybe<Media>;
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  duplicatePayloadPreference?: Maybe<PayloadPreference>;
  duplicateSkill?: Maybe<Skill>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updateConnectionRequest?: Maybe<ConnectionRequest>;
  updateMedia?: Maybe<Media>;
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateSetting?: Maybe<Setting>;
  updateSkill?: Maybe<Skill>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreateConnectionRequestArgs = {
  data: MutationConnectionRequestInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateMediaArgs = {
  data: MutationMediaInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateSkillArgs = {
  data: MutationSkillInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteConnectionRequestArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteSkillArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDuplicateConnectionRequestArgs = {
  data: MutationConnectionRequestInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  id: Scalars['Int']['input'];
};


export type MutationDuplicateSkillArgs = {
  data: MutationSkillInput;
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email: Scalars['String']['input'];
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLogoutUserArgs = {
  allSessions?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateConnectionRequestArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationConnectionRequestUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationMediaUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadLockedDocumentUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateSettingArgs = {
  data: MutationSettingInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateSkillArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationSkillUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  document?: Maybe<PayloadLockedDocument_Document_Relationship>;
  globalSlug?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadLockedDocument_User_Relationship;
};

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  ConnectionRequests = 'connection_requests',
  Media = 'media',
  Skills = 'skills',
  Users = 'users'
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Document = ConnectionRequest | Media | Skill | User;

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  ConnectionRequests = 'connection_requests',
  Media = 'media',
  Skills = 'skills',
  Users = 'users'
}

export enum PayloadLockedDocument_Document_RelationTo {
  ConnectionRequests = 'connection_requests',
  Media = 'media',
  Skills = 'skills',
  Users = 'users'
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>;
  value?: Maybe<PayloadLockedDocument_Document>;
};

export type PayloadLockedDocument_User = User;

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship';
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>;
  value?: Maybe<PayloadLockedDocument_User>;
};

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  ConnectionRequests = 'connection_requests',
  Media = 'media',
  Skills = 'skills',
  Users = 'users'
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadLockedDocument_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadLockedDocument_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocument_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>;
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>;
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>;
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>;
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>;
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadLockedDocument_User_Relation>;
};

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments';
  docs: Array<PayloadLockedDocument>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields';
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user';
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>;
};

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields';
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>;
  document?: Maybe<PayloadLockedDocumentsFields_Document>;
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>;
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>;
  user?: Maybe<PayloadLockedDocumentsFields_User>;
};

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt';
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>;
};

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document';
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>;
};

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug';
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>;
};

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt';
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>;
};

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user';
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>;
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>;
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>;
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>;
};

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs: Array<PayloadPreference>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  ConnectionRequest?: Maybe<ConnectionRequest>;
  ConnectionRequests?: Maybe<ConnectionRequests>;
  Media?: Maybe<Media>;
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>;
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Setting?: Maybe<Setting>;
  Skill?: Maybe<Skill>;
  Skills?: Maybe<Skills>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  allMedia?: Maybe<AllMedia>;
  countConnectionRequests?: Maybe<CountConnectionRequests>;
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>;
  countPayloadPreferences?: Maybe<CountPayloadPreferences>;
  countSkills?: Maybe<CountSkills>;
  countUsers?: Maybe<CountUsers>;
  countallMedia?: Maybe<CountallMedia>;
  docAccessConnectionRequest?: Maybe<Connection_RequestsDocAccess>;
  docAccessMedia?: Maybe<MediaDocAccess>;
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessSetting?: Maybe<SettingsDocAccess>;
  docAccessSkill?: Maybe<SkillsDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryConnectionRequestArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryConnectionRequestsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ConnectionRequest_Where>;
};


export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QuerySettingArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySkillArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySkillsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Skill_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
  trash?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pagination?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryCountConnectionRequestsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<ConnectionRequest_Where>;
};


export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadLockedDocument_Where>;
};


export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryCountSkillsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Skill_Where>;
};


export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  trash?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<Media_Where>;
};


export type QueryDocAccessConnectionRequestArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessSkillArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};

export type Setting = {
  __typename?: 'Setting';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type SettingsDocAccessFields = {
  __typename?: 'SettingsDocAccessFields';
  createdAt?: Maybe<SettingsDocAccessFields_CreatedAt>;
  updatedAt?: Maybe<SettingsDocAccessFields_UpdatedAt>;
};

export type SettingsDocAccessFields_CreatedAt = {
  __typename?: 'SettingsDocAccessFields_createdAt';
  create?: Maybe<SettingsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SettingsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SettingsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SettingsDocAccessFields_CreatedAt_Update>;
};

export type SettingsDocAccessFields_CreatedAt_Create = {
  __typename?: 'SettingsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SettingsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_CreatedAt_Read = {
  __typename?: 'SettingsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_CreatedAt_Update = {
  __typename?: 'SettingsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_UpdatedAt = {
  __typename?: 'SettingsDocAccessFields_updatedAt';
  create?: Maybe<SettingsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SettingsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SettingsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SettingsDocAccessFields_UpdatedAt_Update>;
};

export type SettingsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SettingsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields = {
  __typename?: 'SettingsFields';
  createdAt?: Maybe<SettingsFields_CreatedAt>;
  updatedAt?: Maybe<SettingsFields_UpdatedAt>;
};

export type SettingsFields_CreatedAt = {
  __typename?: 'SettingsFields_createdAt';
  create?: Maybe<SettingsFields_CreatedAt_Create>;
  delete?: Maybe<SettingsFields_CreatedAt_Delete>;
  read?: Maybe<SettingsFields_CreatedAt_Read>;
  update?: Maybe<SettingsFields_CreatedAt_Update>;
};

export type SettingsFields_CreatedAt_Create = {
  __typename?: 'SettingsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_CreatedAt_Delete = {
  __typename?: 'SettingsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_CreatedAt_Read = {
  __typename?: 'SettingsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_CreatedAt_Update = {
  __typename?: 'SettingsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_UpdatedAt = {
  __typename?: 'SettingsFields_updatedAt';
  create?: Maybe<SettingsFields_UpdatedAt_Create>;
  delete?: Maybe<SettingsFields_UpdatedAt_Delete>;
  read?: Maybe<SettingsFields_UpdatedAt_Read>;
  update?: Maybe<SettingsFields_UpdatedAt_Update>;
};

export type SettingsFields_UpdatedAt_Create = {
  __typename?: 'SettingsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_UpdatedAt_Delete = {
  __typename?: 'SettingsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_UpdatedAt_Read = {
  __typename?: 'SettingsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SettingsFields_UpdatedAt_Update = {
  __typename?: 'SettingsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SettingsReadAccess = {
  __typename?: 'SettingsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SettingsReadDocAccess = {
  __typename?: 'SettingsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SettingsUpdateAccess = {
  __typename?: 'SettingsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SettingsUpdateDocAccess = {
  __typename?: 'SettingsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Skill = {
  __typename?: 'Skill';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  neededUsers?: Maybe<Skill_NeededUsers>;
  offeredUsers?: Maybe<Skill_OfferedUsers>;
  slug: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type SkillNeededUsersArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type SkillOfferedUsersArgs = {
  count?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};

export type Skill_NeededUsers = {
  __typename?: 'Skill_NeededUsers';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Skill_OfferedUsers = {
  __typename?: 'Skill_OfferedUsers';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type Skill_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Skill_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Skill_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Skill_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Skill_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Skill_Where = {
  AND?: InputMaybe<Array<InputMaybe<Skill_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Skill_Where_Or>>>;
  createdAt?: InputMaybe<Skill_CreatedAt_Operator>;
  id?: InputMaybe<Skill_Id_Operator>;
  name?: InputMaybe<Skill_Name_Operator>;
  slug?: InputMaybe<Skill_Slug_Operator>;
  updatedAt?: InputMaybe<Skill_UpdatedAt_Operator>;
};

export type Skill_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Skill_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Skill_Where_Or>>>;
  createdAt?: InputMaybe<Skill_CreatedAt_Operator>;
  id?: InputMaybe<Skill_Id_Operator>;
  name?: InputMaybe<Skill_Name_Operator>;
  slug?: InputMaybe<Skill_Slug_Operator>;
  updatedAt?: InputMaybe<Skill_UpdatedAt_Operator>;
};

export type Skill_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Skill_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Skill_Where_Or>>>;
  createdAt?: InputMaybe<Skill_CreatedAt_Operator>;
  id?: InputMaybe<Skill_Id_Operator>;
  name?: InputMaybe<Skill_Name_Operator>;
  slug?: InputMaybe<Skill_Slug_Operator>;
  updatedAt?: InputMaybe<Skill_UpdatedAt_Operator>;
};

export type Skills = {
  __typename?: 'Skills';
  docs: Array<Skill>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type SkillsCreateAccess = {
  __typename?: 'SkillsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsCreateDocAccess = {
  __typename?: 'SkillsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsDeleteAccess = {
  __typename?: 'SkillsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsDeleteDocAccess = {
  __typename?: 'SkillsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsDocAccessFields = {
  __typename?: 'SkillsDocAccessFields';
  createdAt?: Maybe<SkillsDocAccessFields_CreatedAt>;
  name?: Maybe<SkillsDocAccessFields_Name>;
  neededUsers?: Maybe<SkillsDocAccessFields_NeededUsers>;
  offeredUsers?: Maybe<SkillsDocAccessFields_OfferedUsers>;
  slug?: Maybe<SkillsDocAccessFields_Slug>;
  updatedAt?: Maybe<SkillsDocAccessFields_UpdatedAt>;
};

export type SkillsDocAccessFields_CreatedAt = {
  __typename?: 'SkillsDocAccessFields_createdAt';
  create?: Maybe<SkillsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<SkillsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<SkillsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<SkillsDocAccessFields_CreatedAt_Update>;
};

export type SkillsDocAccessFields_CreatedAt_Create = {
  __typename?: 'SkillsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'SkillsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_CreatedAt_Read = {
  __typename?: 'SkillsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_CreatedAt_Update = {
  __typename?: 'SkillsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Name = {
  __typename?: 'SkillsDocAccessFields_name';
  create?: Maybe<SkillsDocAccessFields_Name_Create>;
  delete?: Maybe<SkillsDocAccessFields_Name_Delete>;
  read?: Maybe<SkillsDocAccessFields_Name_Read>;
  update?: Maybe<SkillsDocAccessFields_Name_Update>;
};

export type SkillsDocAccessFields_Name_Create = {
  __typename?: 'SkillsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Name_Delete = {
  __typename?: 'SkillsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Name_Read = {
  __typename?: 'SkillsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Name_Update = {
  __typename?: 'SkillsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_NeededUsers = {
  __typename?: 'SkillsDocAccessFields_neededUsers';
  create?: Maybe<SkillsDocAccessFields_NeededUsers_Create>;
  delete?: Maybe<SkillsDocAccessFields_NeededUsers_Delete>;
  read?: Maybe<SkillsDocAccessFields_NeededUsers_Read>;
  update?: Maybe<SkillsDocAccessFields_NeededUsers_Update>;
};

export type SkillsDocAccessFields_NeededUsers_Create = {
  __typename?: 'SkillsDocAccessFields_neededUsers_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_NeededUsers_Delete = {
  __typename?: 'SkillsDocAccessFields_neededUsers_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_NeededUsers_Read = {
  __typename?: 'SkillsDocAccessFields_neededUsers_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_NeededUsers_Update = {
  __typename?: 'SkillsDocAccessFields_neededUsers_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_OfferedUsers = {
  __typename?: 'SkillsDocAccessFields_offeredUsers';
  create?: Maybe<SkillsDocAccessFields_OfferedUsers_Create>;
  delete?: Maybe<SkillsDocAccessFields_OfferedUsers_Delete>;
  read?: Maybe<SkillsDocAccessFields_OfferedUsers_Read>;
  update?: Maybe<SkillsDocAccessFields_OfferedUsers_Update>;
};

export type SkillsDocAccessFields_OfferedUsers_Create = {
  __typename?: 'SkillsDocAccessFields_offeredUsers_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_OfferedUsers_Delete = {
  __typename?: 'SkillsDocAccessFields_offeredUsers_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_OfferedUsers_Read = {
  __typename?: 'SkillsDocAccessFields_offeredUsers_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_OfferedUsers_Update = {
  __typename?: 'SkillsDocAccessFields_offeredUsers_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Slug = {
  __typename?: 'SkillsDocAccessFields_slug';
  create?: Maybe<SkillsDocAccessFields_Slug_Create>;
  delete?: Maybe<SkillsDocAccessFields_Slug_Delete>;
  read?: Maybe<SkillsDocAccessFields_Slug_Read>;
  update?: Maybe<SkillsDocAccessFields_Slug_Update>;
};

export type SkillsDocAccessFields_Slug_Create = {
  __typename?: 'SkillsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Slug_Delete = {
  __typename?: 'SkillsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Slug_Read = {
  __typename?: 'SkillsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_Slug_Update = {
  __typename?: 'SkillsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt = {
  __typename?: 'SkillsDocAccessFields_updatedAt';
  create?: Maybe<SkillsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<SkillsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<SkillsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<SkillsDocAccessFields_UpdatedAt_Update>;
};

export type SkillsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'SkillsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'SkillsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'SkillsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'SkillsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields = {
  __typename?: 'SkillsFields';
  createdAt?: Maybe<SkillsFields_CreatedAt>;
  name?: Maybe<SkillsFields_Name>;
  neededUsers?: Maybe<SkillsFields_NeededUsers>;
  offeredUsers?: Maybe<SkillsFields_OfferedUsers>;
  slug?: Maybe<SkillsFields_Slug>;
  updatedAt?: Maybe<SkillsFields_UpdatedAt>;
};

export type SkillsFields_CreatedAt = {
  __typename?: 'SkillsFields_createdAt';
  create?: Maybe<SkillsFields_CreatedAt_Create>;
  delete?: Maybe<SkillsFields_CreatedAt_Delete>;
  read?: Maybe<SkillsFields_CreatedAt_Read>;
  update?: Maybe<SkillsFields_CreatedAt_Update>;
};

export type SkillsFields_CreatedAt_Create = {
  __typename?: 'SkillsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_CreatedAt_Delete = {
  __typename?: 'SkillsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_CreatedAt_Read = {
  __typename?: 'SkillsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_CreatedAt_Update = {
  __typename?: 'SkillsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Name = {
  __typename?: 'SkillsFields_name';
  create?: Maybe<SkillsFields_Name_Create>;
  delete?: Maybe<SkillsFields_Name_Delete>;
  read?: Maybe<SkillsFields_Name_Read>;
  update?: Maybe<SkillsFields_Name_Update>;
};

export type SkillsFields_Name_Create = {
  __typename?: 'SkillsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Name_Delete = {
  __typename?: 'SkillsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Name_Read = {
  __typename?: 'SkillsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Name_Update = {
  __typename?: 'SkillsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_NeededUsers = {
  __typename?: 'SkillsFields_neededUsers';
  create?: Maybe<SkillsFields_NeededUsers_Create>;
  delete?: Maybe<SkillsFields_NeededUsers_Delete>;
  read?: Maybe<SkillsFields_NeededUsers_Read>;
  update?: Maybe<SkillsFields_NeededUsers_Update>;
};

export type SkillsFields_NeededUsers_Create = {
  __typename?: 'SkillsFields_neededUsers_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_NeededUsers_Delete = {
  __typename?: 'SkillsFields_neededUsers_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_NeededUsers_Read = {
  __typename?: 'SkillsFields_neededUsers_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_NeededUsers_Update = {
  __typename?: 'SkillsFields_neededUsers_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_OfferedUsers = {
  __typename?: 'SkillsFields_offeredUsers';
  create?: Maybe<SkillsFields_OfferedUsers_Create>;
  delete?: Maybe<SkillsFields_OfferedUsers_Delete>;
  read?: Maybe<SkillsFields_OfferedUsers_Read>;
  update?: Maybe<SkillsFields_OfferedUsers_Update>;
};

export type SkillsFields_OfferedUsers_Create = {
  __typename?: 'SkillsFields_offeredUsers_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_OfferedUsers_Delete = {
  __typename?: 'SkillsFields_offeredUsers_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_OfferedUsers_Read = {
  __typename?: 'SkillsFields_offeredUsers_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_OfferedUsers_Update = {
  __typename?: 'SkillsFields_offeredUsers_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Slug = {
  __typename?: 'SkillsFields_slug';
  create?: Maybe<SkillsFields_Slug_Create>;
  delete?: Maybe<SkillsFields_Slug_Delete>;
  read?: Maybe<SkillsFields_Slug_Read>;
  update?: Maybe<SkillsFields_Slug_Update>;
};

export type SkillsFields_Slug_Create = {
  __typename?: 'SkillsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Slug_Delete = {
  __typename?: 'SkillsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Slug_Read = {
  __typename?: 'SkillsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_Slug_Update = {
  __typename?: 'SkillsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt = {
  __typename?: 'SkillsFields_updatedAt';
  create?: Maybe<SkillsFields_UpdatedAt_Create>;
  delete?: Maybe<SkillsFields_UpdatedAt_Delete>;
  read?: Maybe<SkillsFields_UpdatedAt_Read>;
  update?: Maybe<SkillsFields_UpdatedAt_Update>;
};

export type SkillsFields_UpdatedAt_Create = {
  __typename?: 'SkillsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt_Delete = {
  __typename?: 'SkillsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt_Read = {
  __typename?: 'SkillsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type SkillsFields_UpdatedAt_Update = {
  __typename?: 'SkillsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type SkillsReadAccess = {
  __typename?: 'SkillsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsReadDocAccess = {
  __typename?: 'SkillsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsUpdateAccess = {
  __typename?: 'SkillsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type SkillsUpdateDocAccess = {
  __typename?: 'SkillsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  _verificationToken?: Maybe<Scalars['String']['output']>;
  _verified?: Maybe<Scalars['Boolean']['output']>;
  apiKey?: Maybe<Scalars['String']['output']>;
  apiKeyIndex?: Maybe<Scalars['String']['output']>;
  company?: Maybe<User_Company>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  enableAPIKey?: Maybe<Scalars['Boolean']['output']>;
  fullName?: Maybe<Scalars['String']['output']>;
  hash?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  neededSkills?: Maybe<Array<Skill>>;
  offeredSkills?: Maybe<Array<Skill>>;
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  role?: Maybe<User_Role>;
  salt?: Maybe<Scalars['String']['output']>;
  sessions?: Maybe<Array<User_Sessions>>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum UserUpdate_Role_MutationInput {
  Admin = 'admin',
  App = 'app',
  Member = 'member'
}

export type User_Company = {
  __typename?: 'User_Company';
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type User_Sessions = {
  __typename?: 'User_Sessions';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  expiresAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['String']['output']>;
};

export type User__Verified_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_ApiKey_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Company__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type User_Company__Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_EnableApiKey_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  not_equals?: InputMaybe<Scalars['Boolean']['input']>;
};

export type User_FullName_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type User_NeededSkills_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type User_OfferedSkills_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export enum User_Role {
  Admin = 'admin',
  App = 'app',
  Member = 'member'
}

export enum User_Role_Input {
  Admin = 'admin',
  App = 'app',
  Member = 'member'
}

export enum User_Role_MutationInput {
  Admin = 'admin',
  App = 'app',
  Member = 'member'
}

export type User_Role_Operator = {
  all?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
  equals?: InputMaybe<User_Role_Input>;
  in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
  not_equals?: InputMaybe<User_Role_Input>;
  not_in?: InputMaybe<Array<InputMaybe<User_Role_Input>>>;
};

export type User_Sessions__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__ExpiresAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Sessions__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  company__description?: InputMaybe<User_Company__Description_Operator>;
  company__name?: InputMaybe<User_Company__Name_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  fullName?: InputMaybe<User_FullName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  neededSkills?: InputMaybe<User_NeededSkills_Operator>;
  offeredSkills?: InputMaybe<User_OfferedSkills_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  company__description?: InputMaybe<User_Company__Description_Operator>;
  company__name?: InputMaybe<User_Company__Name_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  fullName?: InputMaybe<User_FullName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  neededSkills?: InputMaybe<User_NeededSkills_Operator>;
  offeredSkills?: InputMaybe<User_OfferedSkills_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  _verified?: InputMaybe<User__Verified_Operator>;
  apiKey?: InputMaybe<User_ApiKey_Operator>;
  company__description?: InputMaybe<User_Company__Description_Operator>;
  company__name?: InputMaybe<User_Company__Name_Operator>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  enableAPIKey?: InputMaybe<User_EnableApiKey_Operator>;
  fullName?: InputMaybe<User_FullName_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  neededSkills?: InputMaybe<User_NeededSkills_Operator>;
  offeredSkills?: InputMaybe<User_OfferedSkills_Operator>;
  role?: InputMaybe<User_Role_Operator>;
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>;
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>;
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs: Array<User>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  _verified?: Maybe<UsersDocAccessFields__Verified>;
  apiKey?: Maybe<UsersDocAccessFields_ApiKey>;
  company?: Maybe<UsersDocAccessFields_Company>;
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  enableAPIKey?: Maybe<UsersDocAccessFields_EnableApiKey>;
  fullName?: Maybe<UsersDocAccessFields_FullName>;
  neededSkills?: Maybe<UsersDocAccessFields_NeededSkills>;
  offeredSkills?: Maybe<UsersDocAccessFields_OfferedSkills>;
  role?: Maybe<UsersDocAccessFields_Role>;
  sessions?: Maybe<UsersDocAccessFields_Sessions>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields__Verified = {
  __typename?: 'UsersDocAccessFields__verified';
  create?: Maybe<UsersDocAccessFields__Verified_Create>;
  delete?: Maybe<UsersDocAccessFields__Verified_Delete>;
  read?: Maybe<UsersDocAccessFields__Verified_Read>;
  update?: Maybe<UsersDocAccessFields__Verified_Update>;
};

export type UsersDocAccessFields__Verified_Create = {
  __typename?: 'UsersDocAccessFields__verified_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Delete = {
  __typename?: 'UsersDocAccessFields__verified_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Read = {
  __typename?: 'UsersDocAccessFields__verified_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields__Verified_Update = {
  __typename?: 'UsersDocAccessFields__verified_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey = {
  __typename?: 'UsersDocAccessFields_apiKey';
  create?: Maybe<UsersDocAccessFields_ApiKey_Create>;
  delete?: Maybe<UsersDocAccessFields_ApiKey_Delete>;
  read?: Maybe<UsersDocAccessFields_ApiKey_Read>;
  update?: Maybe<UsersDocAccessFields_ApiKey_Update>;
};

export type UsersDocAccessFields_ApiKey_Create = {
  __typename?: 'UsersDocAccessFields_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Delete = {
  __typename?: 'UsersDocAccessFields_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Read = {
  __typename?: 'UsersDocAccessFields_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_ApiKey_Update = {
  __typename?: 'UsersDocAccessFields_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company = {
  __typename?: 'UsersDocAccessFields_company';
  create?: Maybe<UsersDocAccessFields_Company_Create>;
  delete?: Maybe<UsersDocAccessFields_Company_Delete>;
  fields?: Maybe<UsersDocAccessFields_Company_Fields>;
  read?: Maybe<UsersDocAccessFields_Company_Read>;
  update?: Maybe<UsersDocAccessFields_Company_Update>;
};

export type UsersDocAccessFields_Company_Create = {
  __typename?: 'UsersDocAccessFields_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Delete = {
  __typename?: 'UsersDocAccessFields_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Fields = {
  __typename?: 'UsersDocAccessFields_company_Fields';
  description?: Maybe<UsersDocAccessFields_Company_Description>;
  name?: Maybe<UsersDocAccessFields_Company_Name>;
};

export type UsersDocAccessFields_Company_Read = {
  __typename?: 'UsersDocAccessFields_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Update = {
  __typename?: 'UsersDocAccessFields_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Description = {
  __typename?: 'UsersDocAccessFields_company_description';
  create?: Maybe<UsersDocAccessFields_Company_Description_Create>;
  delete?: Maybe<UsersDocAccessFields_Company_Description_Delete>;
  read?: Maybe<UsersDocAccessFields_Company_Description_Read>;
  update?: Maybe<UsersDocAccessFields_Company_Description_Update>;
};

export type UsersDocAccessFields_Company_Description_Create = {
  __typename?: 'UsersDocAccessFields_company_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Description_Delete = {
  __typename?: 'UsersDocAccessFields_company_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Description_Read = {
  __typename?: 'UsersDocAccessFields_company_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Description_Update = {
  __typename?: 'UsersDocAccessFields_company_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Name = {
  __typename?: 'UsersDocAccessFields_company_name';
  create?: Maybe<UsersDocAccessFields_Company_Name_Create>;
  delete?: Maybe<UsersDocAccessFields_Company_Name_Delete>;
  read?: Maybe<UsersDocAccessFields_Company_Name_Read>;
  update?: Maybe<UsersDocAccessFields_Company_Name_Update>;
};

export type UsersDocAccessFields_Company_Name_Create = {
  __typename?: 'UsersDocAccessFields_company_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Name_Delete = {
  __typename?: 'UsersDocAccessFields_company_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Name_Read = {
  __typename?: 'UsersDocAccessFields_company_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Company_Name_Update = {
  __typename?: 'UsersDocAccessFields_company_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey = {
  __typename?: 'UsersDocAccessFields_enableAPIKey';
  create?: Maybe<UsersDocAccessFields_EnableApiKey_Create>;
  delete?: Maybe<UsersDocAccessFields_EnableApiKey_Delete>;
  read?: Maybe<UsersDocAccessFields_EnableApiKey_Read>;
  update?: Maybe<UsersDocAccessFields_EnableApiKey_Update>;
};

export type UsersDocAccessFields_EnableApiKey_Create = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Delete = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Read = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_EnableApiKey_Update = {
  __typename?: 'UsersDocAccessFields_enableAPIKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FullName = {
  __typename?: 'UsersDocAccessFields_fullName';
  create?: Maybe<UsersDocAccessFields_FullName_Create>;
  delete?: Maybe<UsersDocAccessFields_FullName_Delete>;
  read?: Maybe<UsersDocAccessFields_FullName_Read>;
  update?: Maybe<UsersDocAccessFields_FullName_Update>;
};

export type UsersDocAccessFields_FullName_Create = {
  __typename?: 'UsersDocAccessFields_fullName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FullName_Delete = {
  __typename?: 'UsersDocAccessFields_fullName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FullName_Read = {
  __typename?: 'UsersDocAccessFields_fullName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_FullName_Update = {
  __typename?: 'UsersDocAccessFields_fullName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_NeededSkills = {
  __typename?: 'UsersDocAccessFields_neededSkills';
  create?: Maybe<UsersDocAccessFields_NeededSkills_Create>;
  delete?: Maybe<UsersDocAccessFields_NeededSkills_Delete>;
  read?: Maybe<UsersDocAccessFields_NeededSkills_Read>;
  update?: Maybe<UsersDocAccessFields_NeededSkills_Update>;
};

export type UsersDocAccessFields_NeededSkills_Create = {
  __typename?: 'UsersDocAccessFields_neededSkills_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_NeededSkills_Delete = {
  __typename?: 'UsersDocAccessFields_neededSkills_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_NeededSkills_Read = {
  __typename?: 'UsersDocAccessFields_neededSkills_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_NeededSkills_Update = {
  __typename?: 'UsersDocAccessFields_neededSkills_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_OfferedSkills = {
  __typename?: 'UsersDocAccessFields_offeredSkills';
  create?: Maybe<UsersDocAccessFields_OfferedSkills_Create>;
  delete?: Maybe<UsersDocAccessFields_OfferedSkills_Delete>;
  read?: Maybe<UsersDocAccessFields_OfferedSkills_Read>;
  update?: Maybe<UsersDocAccessFields_OfferedSkills_Update>;
};

export type UsersDocAccessFields_OfferedSkills_Create = {
  __typename?: 'UsersDocAccessFields_offeredSkills_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_OfferedSkills_Delete = {
  __typename?: 'UsersDocAccessFields_offeredSkills_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_OfferedSkills_Read = {
  __typename?: 'UsersDocAccessFields_offeredSkills_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_OfferedSkills_Update = {
  __typename?: 'UsersDocAccessFields_offeredSkills_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role = {
  __typename?: 'UsersDocAccessFields_role';
  create?: Maybe<UsersDocAccessFields_Role_Create>;
  delete?: Maybe<UsersDocAccessFields_Role_Delete>;
  read?: Maybe<UsersDocAccessFields_Role_Read>;
  update?: Maybe<UsersDocAccessFields_Role_Update>;
};

export type UsersDocAccessFields_Role_Create = {
  __typename?: 'UsersDocAccessFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Delete = {
  __typename?: 'UsersDocAccessFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Read = {
  __typename?: 'UsersDocAccessFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Role_Update = {
  __typename?: 'UsersDocAccessFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions = {
  __typename?: 'UsersDocAccessFields_sessions';
  create?: Maybe<UsersDocAccessFields_Sessions_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Delete>;
  fields?: Maybe<UsersDocAccessFields_Sessions_Fields>;
  read?: Maybe<UsersDocAccessFields_Sessions_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Update>;
};

export type UsersDocAccessFields_Sessions_Create = {
  __typename?: 'UsersDocAccessFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Fields = {
  __typename?: 'UsersDocAccessFields_sessions_Fields';
  createdAt?: Maybe<UsersDocAccessFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersDocAccessFields_Sessions_Id>;
};

export type UsersDocAccessFields_Sessions_Read = {
  __typename?: 'UsersDocAccessFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Update = {
  __typename?: 'UsersDocAccessFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt';
  create?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Update>;
};

export type UsersDocAccessFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt';
  create?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Update>;
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id = {
  __typename?: 'UsersDocAccessFields_sessions_id';
  create?: Maybe<UsersDocAccessFields_Sessions_Id_Create>;
  delete?: Maybe<UsersDocAccessFields_Sessions_Id_Delete>;
  read?: Maybe<UsersDocAccessFields_Sessions_Id_Read>;
  update?: Maybe<UsersDocAccessFields_Sessions_Id_Update>;
};

export type UsersDocAccessFields_Sessions_Id_Create = {
  __typename?: 'UsersDocAccessFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Read = {
  __typename?: 'UsersDocAccessFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Sessions_Id_Update = {
  __typename?: 'UsersDocAccessFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  _verified?: Maybe<UsersFields__Verified>;
  apiKey?: Maybe<UsersFields_ApiKey>;
  company?: Maybe<UsersFields_Company>;
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  enableAPIKey?: Maybe<UsersFields_EnableApiKey>;
  fullName?: Maybe<UsersFields_FullName>;
  neededSkills?: Maybe<UsersFields_NeededSkills>;
  offeredSkills?: Maybe<UsersFields_OfferedSkills>;
  role?: Maybe<UsersFields_Role>;
  sessions?: Maybe<UsersFields_Sessions>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields__Verified = {
  __typename?: 'UsersFields__verified';
  create?: Maybe<UsersFields__Verified_Create>;
  delete?: Maybe<UsersFields__Verified_Delete>;
  read?: Maybe<UsersFields__Verified_Read>;
  update?: Maybe<UsersFields__Verified_Update>;
};

export type UsersFields__Verified_Create = {
  __typename?: 'UsersFields__verified_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Delete = {
  __typename?: 'UsersFields__verified_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Read = {
  __typename?: 'UsersFields__verified_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields__Verified_Update = {
  __typename?: 'UsersFields__verified_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey = {
  __typename?: 'UsersFields_apiKey';
  create?: Maybe<UsersFields_ApiKey_Create>;
  delete?: Maybe<UsersFields_ApiKey_Delete>;
  read?: Maybe<UsersFields_ApiKey_Read>;
  update?: Maybe<UsersFields_ApiKey_Update>;
};

export type UsersFields_ApiKey_Create = {
  __typename?: 'UsersFields_apiKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Delete = {
  __typename?: 'UsersFields_apiKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Read = {
  __typename?: 'UsersFields_apiKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_ApiKey_Update = {
  __typename?: 'UsersFields_apiKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company = {
  __typename?: 'UsersFields_company';
  create?: Maybe<UsersFields_Company_Create>;
  delete?: Maybe<UsersFields_Company_Delete>;
  fields?: Maybe<UsersFields_Company_Fields>;
  read?: Maybe<UsersFields_Company_Read>;
  update?: Maybe<UsersFields_Company_Update>;
};

export type UsersFields_Company_Create = {
  __typename?: 'UsersFields_company_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Delete = {
  __typename?: 'UsersFields_company_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Fields = {
  __typename?: 'UsersFields_company_Fields';
  description?: Maybe<UsersFields_Company_Description>;
  name?: Maybe<UsersFields_Company_Name>;
};

export type UsersFields_Company_Read = {
  __typename?: 'UsersFields_company_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Update = {
  __typename?: 'UsersFields_company_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Description = {
  __typename?: 'UsersFields_company_description';
  create?: Maybe<UsersFields_Company_Description_Create>;
  delete?: Maybe<UsersFields_Company_Description_Delete>;
  read?: Maybe<UsersFields_Company_Description_Read>;
  update?: Maybe<UsersFields_Company_Description_Update>;
};

export type UsersFields_Company_Description_Create = {
  __typename?: 'UsersFields_company_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Description_Delete = {
  __typename?: 'UsersFields_company_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Description_Read = {
  __typename?: 'UsersFields_company_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Description_Update = {
  __typename?: 'UsersFields_company_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Name = {
  __typename?: 'UsersFields_company_name';
  create?: Maybe<UsersFields_Company_Name_Create>;
  delete?: Maybe<UsersFields_Company_Name_Delete>;
  read?: Maybe<UsersFields_Company_Name_Read>;
  update?: Maybe<UsersFields_Company_Name_Update>;
};

export type UsersFields_Company_Name_Create = {
  __typename?: 'UsersFields_company_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Name_Delete = {
  __typename?: 'UsersFields_company_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Name_Read = {
  __typename?: 'UsersFields_company_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Company_Name_Update = {
  __typename?: 'UsersFields_company_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey = {
  __typename?: 'UsersFields_enableAPIKey';
  create?: Maybe<UsersFields_EnableApiKey_Create>;
  delete?: Maybe<UsersFields_EnableApiKey_Delete>;
  read?: Maybe<UsersFields_EnableApiKey_Read>;
  update?: Maybe<UsersFields_EnableApiKey_Update>;
};

export type UsersFields_EnableApiKey_Create = {
  __typename?: 'UsersFields_enableAPIKey_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Delete = {
  __typename?: 'UsersFields_enableAPIKey_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Read = {
  __typename?: 'UsersFields_enableAPIKey_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_EnableApiKey_Update = {
  __typename?: 'UsersFields_enableAPIKey_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FullName = {
  __typename?: 'UsersFields_fullName';
  create?: Maybe<UsersFields_FullName_Create>;
  delete?: Maybe<UsersFields_FullName_Delete>;
  read?: Maybe<UsersFields_FullName_Read>;
  update?: Maybe<UsersFields_FullName_Update>;
};

export type UsersFields_FullName_Create = {
  __typename?: 'UsersFields_fullName_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FullName_Delete = {
  __typename?: 'UsersFields_fullName_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FullName_Read = {
  __typename?: 'UsersFields_fullName_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_FullName_Update = {
  __typename?: 'UsersFields_fullName_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_NeededSkills = {
  __typename?: 'UsersFields_neededSkills';
  create?: Maybe<UsersFields_NeededSkills_Create>;
  delete?: Maybe<UsersFields_NeededSkills_Delete>;
  read?: Maybe<UsersFields_NeededSkills_Read>;
  update?: Maybe<UsersFields_NeededSkills_Update>;
};

export type UsersFields_NeededSkills_Create = {
  __typename?: 'UsersFields_neededSkills_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_NeededSkills_Delete = {
  __typename?: 'UsersFields_neededSkills_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_NeededSkills_Read = {
  __typename?: 'UsersFields_neededSkills_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_NeededSkills_Update = {
  __typename?: 'UsersFields_neededSkills_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_OfferedSkills = {
  __typename?: 'UsersFields_offeredSkills';
  create?: Maybe<UsersFields_OfferedSkills_Create>;
  delete?: Maybe<UsersFields_OfferedSkills_Delete>;
  read?: Maybe<UsersFields_OfferedSkills_Read>;
  update?: Maybe<UsersFields_OfferedSkills_Update>;
};

export type UsersFields_OfferedSkills_Create = {
  __typename?: 'UsersFields_offeredSkills_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_OfferedSkills_Delete = {
  __typename?: 'UsersFields_offeredSkills_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_OfferedSkills_Read = {
  __typename?: 'UsersFields_offeredSkills_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_OfferedSkills_Update = {
  __typename?: 'UsersFields_offeredSkills_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role = {
  __typename?: 'UsersFields_role';
  create?: Maybe<UsersFields_Role_Create>;
  delete?: Maybe<UsersFields_Role_Delete>;
  read?: Maybe<UsersFields_Role_Read>;
  update?: Maybe<UsersFields_Role_Update>;
};

export type UsersFields_Role_Create = {
  __typename?: 'UsersFields_role_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Delete = {
  __typename?: 'UsersFields_role_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Read = {
  __typename?: 'UsersFields_role_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Role_Update = {
  __typename?: 'UsersFields_role_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions = {
  __typename?: 'UsersFields_sessions';
  create?: Maybe<UsersFields_Sessions_Create>;
  delete?: Maybe<UsersFields_Sessions_Delete>;
  fields?: Maybe<UsersFields_Sessions_Fields>;
  read?: Maybe<UsersFields_Sessions_Read>;
  update?: Maybe<UsersFields_Sessions_Update>;
};

export type UsersFields_Sessions_Create = {
  __typename?: 'UsersFields_sessions_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Delete = {
  __typename?: 'UsersFields_sessions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Fields = {
  __typename?: 'UsersFields_sessions_Fields';
  createdAt?: Maybe<UsersFields_Sessions_CreatedAt>;
  expiresAt?: Maybe<UsersFields_Sessions_ExpiresAt>;
  id?: Maybe<UsersFields_Sessions_Id>;
};

export type UsersFields_Sessions_Read = {
  __typename?: 'UsersFields_sessions_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Update = {
  __typename?: 'UsersFields_sessions_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt = {
  __typename?: 'UsersFields_sessions_createdAt';
  create?: Maybe<UsersFields_Sessions_CreatedAt_Create>;
  delete?: Maybe<UsersFields_Sessions_CreatedAt_Delete>;
  read?: Maybe<UsersFields_Sessions_CreatedAt_Read>;
  update?: Maybe<UsersFields_Sessions_CreatedAt_Update>;
};

export type UsersFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersFields_sessions_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersFields_sessions_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersFields_sessions_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersFields_sessions_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt = {
  __typename?: 'UsersFields_sessions_expiresAt';
  create?: Maybe<UsersFields_Sessions_ExpiresAt_Create>;
  delete?: Maybe<UsersFields_Sessions_ExpiresAt_Delete>;
  read?: Maybe<UsersFields_Sessions_ExpiresAt_Read>;
  update?: Maybe<UsersFields_Sessions_ExpiresAt_Update>;
};

export type UsersFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersFields_sessions_expiresAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersFields_sessions_expiresAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersFields_sessions_expiresAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersFields_sessions_expiresAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id = {
  __typename?: 'UsersFields_sessions_id';
  create?: Maybe<UsersFields_Sessions_Id_Create>;
  delete?: Maybe<UsersFields_Sessions_Id_Delete>;
  read?: Maybe<UsersFields_Sessions_Id_Read>;
  update?: Maybe<UsersFields_Sessions_Id_Update>;
};

export type UsersFields_Sessions_Id_Create = {
  __typename?: 'UsersFields_sessions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Delete = {
  __typename?: 'UsersFields_sessions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Read = {
  __typename?: 'UsersFields_sessions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Sessions_Id_Update = {
  __typename?: 'UsersFields_sessions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type AllMedia = {
  __typename?: 'allMedia';
  docs: Array<Media>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPrevPage: Scalars['Boolean']['output'];
  limit: Scalars['Int']['output'];
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page: Scalars['Int']['output'];
  pagingCounter: Scalars['Int']['output'];
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Connection_RequestsAccess = {
  __typename?: 'connection_requestsAccess';
  create?: Maybe<ConnectionRequestsCreateAccess>;
  delete?: Maybe<ConnectionRequestsDeleteAccess>;
  fields?: Maybe<ConnectionRequestsFields>;
  read?: Maybe<ConnectionRequestsReadAccess>;
  update?: Maybe<ConnectionRequestsUpdateAccess>;
};

export type Connection_RequestsDocAccess = {
  __typename?: 'connection_requestsDocAccess';
  create?: Maybe<ConnectionRequestsCreateDocAccess>;
  delete?: Maybe<ConnectionRequestsDeleteDocAccess>;
  fields?: Maybe<ConnectionRequestsDocAccessFields>;
  read?: Maybe<ConnectionRequestsReadDocAccess>;
  update?: Maybe<ConnectionRequestsUpdateDocAccess>;
};

export type CountConnectionRequests = {
  __typename?: 'countConnectionRequests';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountSkills = {
  __typename?: 'countSkills';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountUsers = {
  __typename?: 'countUsers';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type CountallMedia = {
  __typename?: 'countallMedia';
  totalDocs?: Maybe<Scalars['Int']['output']>;
};

export type MediaAccess = {
  __typename?: 'mediaAccess';
  create?: Maybe<MediaCreateAccess>;
  delete?: Maybe<MediaDeleteAccess>;
  fields?: Maybe<MediaFields>;
  read?: Maybe<MediaReadAccess>;
  update?: Maybe<MediaUpdateAccess>;
};

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess';
  create?: Maybe<MediaCreateDocAccess>;
  delete?: Maybe<MediaDeleteDocAccess>;
  fields?: Maybe<MediaDocAccessFields>;
  read?: Maybe<MediaReadDocAccess>;
  update?: Maybe<MediaUpdateDocAccess>;
};

export type MutationConnectionRequestInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  receiver?: InputMaybe<Scalars['Int']['input']>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  sender?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationConnectionRequestUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  receiver?: InputMaybe<Scalars['Int']['input']>;
  sendEmail?: InputMaybe<Scalars['Boolean']['input']>;
  sender?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationMediaInput = {
  alt: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  filename?: InputMaybe<Scalars['String']['input']>;
  filesize?: InputMaybe<Scalars['Float']['input']>;
  focalX?: InputMaybe<Scalars['Float']['input']>;
  focalY?: InputMaybe<Scalars['Float']['input']>;
  height?: InputMaybe<Scalars['Float']['input']>;
  mimeType?: InputMaybe<Scalars['String']['input']>;
  thumbnailURL?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Float']['input']>;
};

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>;
};

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>;
  globalSlug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationSettingInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSkillInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  slug: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationSkillUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserInput = {
  _verificationToken?: InputMaybe<Scalars['String']['input']>;
  _verified?: InputMaybe<Scalars['Boolean']['input']>;
  apiKey?: InputMaybe<Scalars['String']['input']>;
  apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<MutationUser_CompanyInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  neededSkills?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  offeredSkills?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<User_Role_MutationInput>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUser_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  _verificationToken?: InputMaybe<Scalars['String']['input']>;
  _verified?: InputMaybe<Scalars['Boolean']['input']>;
  apiKey?: InputMaybe<Scalars['String']['input']>;
  apiKeyIndex?: InputMaybe<Scalars['String']['input']>;
  company?: InputMaybe<MutationUserUpdate_CompanyInput>;
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  enableAPIKey?: InputMaybe<Scalars['Boolean']['input']>;
  fullName?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  neededSkills?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  offeredSkills?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<UserUpdate_Role_MutationInput>;
  salt?: InputMaybe<Scalars['String']['input']>;
  sessions?: InputMaybe<Array<InputMaybe<MutationUserUpdate_SessionsInput>>>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdate_CompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdate_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type MutationUser_CompanyInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUser_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  expiresAt: Scalars['String']['input'];
  id: Scalars['String']['input'];
};

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess';
  create?: Maybe<PayloadLockedDocumentsCreateAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>;
  fields?: Maybe<PayloadLockedDocumentsFields>;
  read?: Maybe<PayloadLockedDocumentsReadAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>;
};

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess';
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>;
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>;
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>;
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>;
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type SettingsAccess = {
  __typename?: 'settingsAccess';
  fields?: Maybe<SettingsFields>;
  read?: Maybe<SettingsReadAccess>;
  update?: Maybe<SettingsUpdateAccess>;
};

export type SettingsDocAccess = {
  __typename?: 'settingsDocAccess';
  fields?: Maybe<SettingsDocAccessFields>;
  read?: Maybe<SettingsReadDocAccess>;
  update?: Maybe<SettingsUpdateDocAccess>;
};

export type SkillsAccess = {
  __typename?: 'skillsAccess';
  create?: Maybe<SkillsCreateAccess>;
  delete?: Maybe<SkillsDeleteAccess>;
  fields?: Maybe<SkillsFields>;
  read?: Maybe<SkillsReadAccess>;
  update?: Maybe<SkillsUpdateAccess>;
};

export type SkillsDocAccess = {
  __typename?: 'skillsDocAccess';
  create?: Maybe<SkillsCreateDocAccess>;
  delete?: Maybe<SkillsDeleteDocAccess>;
  fields?: Maybe<SkillsDocAccessFields>;
  read?: Maybe<SkillsReadDocAccess>;
  update?: Maybe<SkillsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  strategy?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type GetConnectionRequestsQueryVariables = Exact<{
  userId?: InputMaybe<Scalars['JSON']['input']>;
}>;


export type GetConnectionRequestsQuery = { __typename?: 'Query', ConnectionRequests?: { __typename?: 'ConnectionRequests', docs: Array<{ __typename?: 'ConnectionRequest', id: number, message: string, createdAt?: any | null, sender: { __typename?: 'User', id: number, fullName?: string | null, email: any, company?: { __typename?: 'User_Company', name?: string | null, description?: string | null } | null }, receiver: { __typename?: 'User', id: number, fullName?: string | null, company?: { __typename?: 'User_Company', name?: string | null, description?: string | null } | null } }> } | null };


export const GetConnectionRequestsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetConnectionRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"JSON"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ConnectionRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"OR"},"value":{"kind":"ListValue","values":[{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"sender"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]},{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"receiver"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}]}}]}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"0"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"sender"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"receiver"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fullName"}},{"kind":"Field","name":{"kind":"Name","value":"company"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}}]}}]}}]}}]} as unknown as DocumentNode<GetConnectionRequestsQuery, GetConnectionRequestsQueryVariables>;