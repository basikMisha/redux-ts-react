import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import  ActionCreators from '../store/action-creators/index'


export const useActios = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)
}