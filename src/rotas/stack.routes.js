import { createNativeStackNavigator} from "@react-navigation/native-stack";
const {Screen, Navigator} = createNativeStackNavigator();


import { MenusTela } from '../telas/MenusTela/index';
import { ListaArvoresItem } from '../components/ListaArvoresItem';
import { TelaInicio } from '../telas/TelaInicio/index';
import { QrCode } from '../telas/QrCodeScanner/index';
import { ListaDeArvores } from '../telas/listaDeArvores';
import { Mapa } from "../telas/mapa";
import { ArvoreDetalhes } from "../telas/ArvoreDetalhes/index";

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