import React from 'react';
import { StatusBar, View } from 'react-native';
import { CalculatorScreen } from './presentation/screens/CalculatorScreen';
import { appGlobalStyles } from './config/theme/app-theme';

function App() {
    return (
        <View style={appGlobalStyles.background}>
            <StatusBar 
                barStyle={'light-content'} 
                backgroundColor={'black'} 
            />
            <CalculatorScreen />
        </View>
    );
}

export default App;
