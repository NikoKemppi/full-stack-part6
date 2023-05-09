import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
          return `anecdote '${action.text}' added`
      case "VOTE":
          return `anecdote '${action.text}' voted`
      case "REMOVE":
          return 'default text'
      case "ERROR":
          return 'too short anecdote, must have length 5 or more'
      default:
          return state
    }
  }
  
  const NotificationContext = createContext()
  
  export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, 'default text')
  
    return (
      <NotificationContext.Provider value={[notification, notificationDispatch] }>
        {props.children}
      </NotificationContext.Provider>
    )
  }

  export const useNotificationValue = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[0]
  }
  
  export const useNotificationDispatch = () => {
    const notificationAndDispatch = useContext(NotificationContext)
    return notificationAndDispatch[1]
  }
  
  export default NotificationContext