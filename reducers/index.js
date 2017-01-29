import {
  FETCH_SCHEDULES,
  UPDATE_FILTER,
} from '../actions'
import { combineReducers } from 'redux'

const initalState = {
  schedules: {
    minById: {},
    byTime: {},
    detById: {},
  },
  currentFilter: '',
}

const schedules = (state = initalState.schedules, action) => {
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
        ...state,
        minById,
        byTime,
      }

    case UPDATE_FILTER:
      return {
        ...state,
        byTime: Object.keys(byTime).reduce((map, time) => ({
          ...map,
          [time]: state.schedules.byTime[time]
            .filter(id => state.schedule.minById[id].tag === action.filter) 
        })),
      }

    default:
      return state
  }
}

const currentFilter = (state = initalState.currentFilter, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.filter
    default:
      return state
  }
}

export default combineReducers({
  schedules,
})
