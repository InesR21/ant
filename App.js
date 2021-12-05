import React from 'react';
// react-navigation
import 'react-native-gesture-handler';
// Providers
import { AntsProvider } from './provider/antsProvider';
//Routes
import Routes from './router/Routes';

export default () => {
    return (  
        <AntsProvider>
           <Routes />
        </AntsProvider>
    );
}