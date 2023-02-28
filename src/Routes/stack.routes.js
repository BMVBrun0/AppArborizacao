import { createNativeStackNavigator} from "@react-navigation/native-stack";
const {Screen, Navigator} = createNativeStackNavigator();


import { MenusTela } from '../Screens/MenusTela/index';
import { ListaArvoresItem } from '../components/ListaArvoresItem';
import { TelaInicio } from '../Screens/TelaInicio/index';
import { QrCode } from '../Screens/QrCodeScanner/index';
import { ListaDeArvores } from '../Screens/ListaDeArvores/index';
import { Mapa } from "../Screens/Mapa/index";
import { ArvoreDetalhes } from "../Screens/ArvoreDetalhes/index";

export function StackRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="TelaInicio"
                component={TelaInicio}
            />
            <Screen
                name="Mapa"
                component={Mapa}
            />
            <Screen
                name="ListaArvoresItem"
                component={ListaArvoresItem}
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
            <Screen
                name="ArvoreDetalhes"
                component={ArvoreDetalhes}
            />
        </Navigator>
    );
}