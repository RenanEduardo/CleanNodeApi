import { AccountModel } from '@/domain/models/account'

export type AddAcccountParams = Omit<AccountModel, 'id'>

export interface AddAccount {
  add(account: AddAcccountParams): Promise<AccountModel>
}
