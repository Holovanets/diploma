import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'

import Navigation from '@/navigation/Navigation'

import Store from './app/Store'
import { AuthProvider } from '@/providers'

const queryClient = new QueryClient()

export default function App() {
	return (
		// <QueryClientProvider client={queryClient}>
		<Provider store={Store}>
			<AuthProvider>
				<SafeAreaProvider>
					<Navigation />
				</SafeAreaProvider>
			</AuthProvider>
			<StatusBar style='light' />
		</Provider>
		// </QueryClientProvider>
	)
}
