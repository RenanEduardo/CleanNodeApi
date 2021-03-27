import { loginPath, surveyPath } from './paths'
import { unauthorized, badRequest, serverError, notFound, forbidden } from './components'
import { apiKeyAuthSchema, accountSchema, errorSchema, loginParamsSchema, surveySchema, surveysSchema, surveyAnswerSchema } from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Clean Node API',
    description: 'API do curso do Mango para realizar enquete entre programadores',
    version: '1.0.0'
  },
  license: {
    name: 'MIT',
    url: 'https://opensource.org/licenses/MIT'
  },
  servers: [{
    url: '/api'
  }],
  tags: [{
    name: 'Login'
  }, {
    name: 'Enquetes'
  }],
  paths: {
    '/login': loginPath,
    '/surveys': surveyPath
  },
  schemas: {
    account: accountSchema,
    loginParams: loginParamsSchema,
    error: errorSchema,
    surveys: surveysSchema,
    survey: surveySchema,
    surveyAnswer: surveyAnswerSchema
  },
  components: {
    securitySchemes: {
      apiKeyAuth: apiKeyAuthSchema
    },
    badRequest: badRequest,
    serverError: serverError,
    unauthorized: unauthorized,
    notFound: notFound,
    forbidden: forbidden
  }
}
