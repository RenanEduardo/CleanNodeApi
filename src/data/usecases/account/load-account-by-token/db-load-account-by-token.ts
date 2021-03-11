import { LoadAccountByToken, AccountModel, LoadAccountByTokenRepository } from './db-load-account-by-token-protocols'
import { Decrypter } from '@/data/protocols/criptography/decrypter'
export class DbLoadAccountByToken implements LoadAccountByToken {
  constructor (
    private readonly decrypter: Decrypter,
    private readonly loadAccountByTokenReposytory: LoadAccountByTokenRepository) {}

  async load (accessToken: string, role?: string): Promise<AccountModel> {
    const token = await this.decrypter.decrypt(accessToken)
    if (token) {
      const account = await this.loadAccountByTokenReposytory.loadByToken(accessToken, role)
      if (account) {
        return account
      }
    }
    return null
  }
}