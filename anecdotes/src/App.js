import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { useSelector } from 'react-redux'

const App = () => {
  return (
    <div>
      <h2>Anecdotes</h2>
      {useSelector(state => state.notification) !== 'default message' && <Notification/>}
      <Filter/>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App