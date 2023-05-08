import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    const filter = state.filter
    if (filter === '') {
      return state.anecdotes
    } else {
      return state.anecdotes.filter(a => a.content.includes(filter))
    }
  })
  const dispatch = useDispatch()
  const arrayAnecdotes = [...anecdotes]

  const Vote = async (id) => {
    console.log('vote', id)
    const anecdote = arrayAnecdotes.find(a => a.id === id)
    dispatch(voteAnecdote(id))

    dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
  }

  return (
    <div>
      {arrayAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => Vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList