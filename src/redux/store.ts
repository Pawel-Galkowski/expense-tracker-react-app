import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'

export default function configureAppStore(preloadedState: {}) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware(),
    preloadedState,
  })

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('', () => store.replaceReducer(rootReducer))
  // }

  return store
}