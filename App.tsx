import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-native-gesture-handler'
import { MMKV } from 'react-native-mmkv'

import RootNavigator from '@/navigation/RootNavigator'
import { ThemeProvider } from '@/theme'
import '@/translations'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: false,
    },
    queries: {
      retry: false,
    },
  },
})

export const storage = new MMKV()

function App() {
  return (
    <GestureHandlerRootView>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}

export default App
