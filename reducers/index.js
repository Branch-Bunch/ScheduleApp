import {
  FETCH_SCHEDULES,
} from '../actions'
import { combineReducers } from 'redux'

const initalState = {
  minById: {},
  allId: [],
  detById: {},
}

const schedules = (state=initalState, action) => {
  switch (action.type) {
    case FETCH_SCHEDULES:
      const minById = action.schedules.reduce((byId, schedule) => {
        return {
          ...byId,
          [schedule.id]: schedule
        }
      }, state.minById)

      const allId = action.schedules
        .sort((a, b) => a.time - b.time)
        .map(schedule => schedule.id)

      return {
        minById,
        allId,
      }

    default:
      return state
  }
}

export default combineReducers({
  schedules,
})

