/** @flow */
import type {Action, SuccessPayload, FailPayload} from '../types'
/**
 * Helpers to standartize Actions format
 */

export function actionCreator<T>(type: string, payload: T): Action<T> {
  return {
    type,
    payload: payload || {}
  }
}

export function failCreator(type: string, error: string, data: {[key: string]: any} = {}): Action<FailPayload> {
  return {
    type,
    payload: {
      error,
      data
    }
  }
}
