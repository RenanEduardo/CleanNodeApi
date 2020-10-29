export class InvalidParamError extends Error {
  constructor (paramName: string) {
    super('Internal server error')
    this.name = 'InvalidParamError'
  }
}
