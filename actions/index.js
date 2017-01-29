export const FETCH_SCHEDULES = 'FETCH_SCHEDULES'
export const UPDATE_FILTER = 'UPDATE_FILTER'
export const FETCH_DETAILED_SCHEDULE = 'FETCH_DETAILED_SCHEDULE'
export const UPDATE_SELECTED_ID = 'UPDATE_SELECTED_ID'
export const BASE_URL = 'https://eventify-backend.herokuapp.com'

export const fetchSchedules = () => dispatch => (
  fetch(`${BASE_URL}/schedules`)
    .then(res => res.json())
    .then(schedules => dispatch({ type: FETCH_SCHEDULES, schedules }))
    .catch(err => console.log(err))
)

export const updateFilter = filter => dispatch => dispatch({
  type: UPDATE_FILTER,
  filter,
})

export const fetchDetailedSchedule = id => dispatch => (
  fetch(`${BASE_URL}/schedules/${id}`)
    .then(res => res.json())
    .then(schedule => dispatch({ type: FETCH_DETAILED_SCHEDULE, schedule }))
    .catch(err => console.log(err))
)

export const updateSelectedId = id => dispatch => dispatch({
  type: UPDATE_SELECTED_ID,
  id,
})
