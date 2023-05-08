import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'default message',
  reducers: {
    writeNotification(state, action) {
      const notification = action.payload
      return notification
    },
    removeNotification(state) {
        return 'default message'
    }
  }
})

export const { writeNotification, removeNotification } = notificationSlice.actions

export const setNotification = (text, seconds) => {
  return async dispatch => {
    dispatch(writeNotification(text))
    setTimeout(() => {
      dispatch(removeNotification())
    }, seconds * 1000)
  }
}

export default notificationSlice.reducer