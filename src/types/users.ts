export interface IUserLogin {
  accessToken: string
}

export interface DataUserInfo {
  creationTime: Date
  emailAddress: string
  surname: string
  name: string
  isActive: boolean
  userName: string
  password?: string
  confirmPassword?: string
}

export interface DataUserId {
  id: number
}

export type DataUser = IUserProfileRes

export interface DataUserForm {
  id?: number
  emailAddress: string
  isActive: boolean
  name: string
  password?: string
  confirmPassword?: string
  surname: string
  userName: string
}

export interface DataUserChecked {
  name: string
  value: number
  isChecked: boolean
}

export interface DataUserTab {
  name: string
  value: string
}

export type DataUserName =
  | "name"
  | "id"
  | "emailAddress"
  | "isActive"
  | "password"
  | "confirmPassword"
  | "surname"
  | "userName"

export interface DataUserFilters {
  search: string
}

export enum UserTabsEnum {
  USER_DETAILS = "1",
  USER_ROLES = "2"
}

export enum UserRolesEnum {
  ADMIN = 1,
  HR,
  CEO,
  INTERN,
  EMPLOYEE,
  PM,
  ROLE_CHECK,
  ROLE_TEST,
  ROLE_FIND,
  ROLE_NAME
}

export enum UserSelectActive {
  ALL = "All",
  ACTIVE = "Active",
  NO_ACTIVE = "No Active"
}

export interface ILoginGoogle {
  accessToken: string
}

export enum USER_ROLES_NAME {
  ADMIN = "ADMIN",
  USER = "USER",
}

export interface UserRoles {
  name: USER_ROLES_NAME
}

export interface IUserProfileRes {
  id: number,
  username: string,
  email: string,
  roles: UserRoles[]
}

export interface IUserInformationSelector {
  id: number
  name: string
  surname: string
  avatar: string
}

export interface IUserRole {
  id: number
  name: USER_ROLES_NAME
}

interface IFullPermissions {
  create: boolean
  update: boolean
  read: boolean
  delete: boolean
}

export interface IUserRolePermissions {
  timesheet: IFullPermissions
  hrm: IFullPermissions
  authorization: IFullPermissions
  cms: IFullPermissions
  album: IFullPermissions
  comment: IFullPermissions
  like: IFullPermissions
  widget: IFullPermissions & {
    manage: boolean
  }
  setting: Pick<IFullPermissions, "read" | "update">
  upload_file: Omit<IFullPermissions, "update">
}
export interface IEditCheckBoxUserRolePermissions {
  name: string
  value: boolean
}

export interface IUpdateUserRolePermissions {
  rolePermissions: IUserRolePermissions
  name: string
}

export interface IUpdateUserRole {
  userId: number
  roleNames: USER_ROLES_NAME[]
}
