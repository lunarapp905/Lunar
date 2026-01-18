import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { SpacesScreen } from './src/screens/SpacesScreen';
import { HalalFinderScreen } from './src/screens/HalalFinderScreen';
import { BazaarScreen } from './src/screens/BazaarScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#0B0D17',
            borderTopColor: '#1E2335',
          },
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: '#7D86A8',
          tabBarIcon: ({ color, size }) => {
            const iconMap: Record<string, keyof typeof Ionicons.glyphMap> = {
              Spaces: 'planet',
              'Halal Finder': 'restaurant',
              Bazaar: 'cart',
            };

            return <Ionicons name={iconMap[route.name]} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Spaces" component={SpacesScreen} />
        <Tab.Screen name="Halal Finder" component={HalalFinderScreen} />
        <Tab.Screen name="Bazaar" component={BazaarScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
