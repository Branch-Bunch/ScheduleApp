export const FETCH_SCHEDULES = 'FETCH_SCHEDULES'
export const UPDATE_FILTER = 'UPDATE_FILTER'
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
