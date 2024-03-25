import React, { useEffect } from 'react';
import { useFonts } from 'expo-font';
import RootNavigation from './navigation/';



export default function App() {
  const [loaded] = useFonts({
    'Lobster-Regular': require('./assets/fonts/Lobster-Regular.ttf'),
  });

  if (!loaded ) {
    return null; 

  }
  return(
    <RootNavigation/>
  )
}
