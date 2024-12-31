import { connect } from 'mongoose'
import { logger } from '../fn/logger'

export function connectdb(tok: string) {
    connect(tok, {}).catch((err) => { logger.fatal(err) }).then(() => { logger.debug('✔  Se conecto a mongo.') })
}