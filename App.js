import { Routes } from './src/Routes';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return(
        <SafeAreaProvider>
            <SafeAreaView style={{flex:1, backgroundColor:'black'}}>
                <Routes/>
            </SafeAreaView>
        </SafeAreaProvider>
        
    );
}