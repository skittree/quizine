import { configureStore } from '@reduxjs/toolkit'
import colorSlice from '../redux/colorSlice'

export default configureStore({
  reducer: {palette: colorSlice}
})