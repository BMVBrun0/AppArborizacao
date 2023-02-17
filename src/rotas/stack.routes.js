import { createNativeStackNavigator} from "@react-navigation/native-stack";
const {Screen, Navigator} = createNativeStackNavigator();


import {MenusTela} from '../telas/menusTela';
import {ListaArvoresItem} from '../components/ListaArvoresItem';
import {TelaInicio} from '../telas/telaInicio';
import {QrCode} from '../telas/qrCodeScanner';
import {ListaDeArvores} from '../telas/listaDeArvores';
import { CardArvoresDetalhes } from "../telas/CardArvoresDetalhes";

export function StackRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="TelaInicio"
                component={TelaInicio}
            />
            <Screen
                name="ListaArvoresItem"
                component={ListaArvoresItem}
            />
            <Screen
                name= "CardArvoresDetalhes"
                component={CardArvoresDetalhes}
            />
            <Screen
                name="MenusTela"
                component={MenusTela}
            />
            <Screen
                name="QrCode"
                component={QrCode}
            />
            <Screen
                name="ListaDeArvores"
                component={ListaDeArvores}
            />
        </Navigator>
    );
}