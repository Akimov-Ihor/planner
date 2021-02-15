import {createStore} from 'redux'
import {plannerReducer} from './reducers/plannerReducer'

const store = createStore(plannerReducer)

export default store