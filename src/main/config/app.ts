import setupMiddlewares from './middlewares'
import setupRoutes from './routes'
import SetupSwagger from './config-swagger'
import express from 'express'

const app = express()
SetupSwagger(app)
setupMiddlewares(app)
setupRoutes(app)
export default app
