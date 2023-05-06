import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'default message',
  reducers: {
    setNotification(state, action) {
      const notification = action.payload
      return notification
    },
    removeNotification(state) {
        return 'default message'
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer