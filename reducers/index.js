import {
  FETCH_SCHEDULES,
} from '../actions'
import { combineReducers } from 'redux'

const initalState = {
  minById: {},
  byTime: {},
  detById: {},
}

const schedules = (state = initalState, action) => {
  switch (action.type) {
    case FETCH_SCHEDULES:
      const minById = action.schedules.reduce((byId, schedule) => ({
          ...byId,
          [schedule.id]: schedule
      }), state.minById)

      const byTime = action.schedules
        .reduce((times, schedule) => {
          const prevTimes = times[schedule.time] || []
          return {
            ...times,
            [schedule.time]: [...prevTimes, schedule.id]
          }
        }, {})

      return {
        minById,
        byTime,
      }

    default:
      return state
  }
}

export default combineReducers({
  schedules,
})
