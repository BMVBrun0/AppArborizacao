import { createNativeStackNavigator} from "@react-navigation/native-stack";
const {Screen, Navigator} = createNativeStackNavigator();


import {MenusTela} from '../telas/menusTela';
import {CadastroTelas} from '../telas/cadastroTela';
import {TelaInicio} from '../telas/telaInicio';
import {QrCode} from '../telas/qrCodeScanner';
import {ListaDeArvores} from '../telas/listaDeArvores';

export function StackRoutes(){
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
                name="TelaInicio"
                component={TelaInicio}
            />
            <Screen
                name="MenusTela"
                component={MenusTela}
            />
            {/* <Screen
                name="CadastroTelas"
                component={CadastroTelas}
            /> */}
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