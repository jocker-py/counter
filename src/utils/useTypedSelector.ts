import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, StoreType } from "../store/store";
import { StateType } from "../store/reducers/counterReducer";

export const useTypedSelector = useSelector<StoreType, StateType>;

type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
