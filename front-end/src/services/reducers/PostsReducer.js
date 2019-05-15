import { CARD_BUTTON as POST } from '../../app/constants/actions'
import { deletePostInState, updateChageInState } from '../../utils'

let newState = {}

export const posts = (state = null, action) => {
  switch (action.type) {
    case POST.INITIAL_DATA:
      return {
        ...state,
        ...action.payload
      }
    case POST.CHANGE_VOTE[action.type]:
      newState = updateChageInState(state, action.payload)
      return {
        ...newState
      }
    case POST.DELETE:
      const newPosts = deletePostInState(state, action.payload)
      return {
        ...newPosts
      }
    case POST.EDIT:
      newState = updateChageInState(state, action.payload)
      return {
        ...newState
      }
    default:
      return state
  }
}
