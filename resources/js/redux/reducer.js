const initialState = {}

export default function reducer (state = initialState, action) {
  if (action.type === 'UPDATE') {
    state = action.newData
  }

  return state
}
