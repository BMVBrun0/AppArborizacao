import { createNativeStackNavigator} from "@react-navigation/native-stack";
const {Screen, Navigator} = createNativeStackNavigator();

import {MenusTela} from '../telas/menusTela';
import {CadastroTelas} from '../telas/cadastroTela';
export function StackRoutes(){
    return (
        <Navigator>
            <Screen
                name="MenusTela"
                component={MenusTela}
            />
            <Screen
                name="CadastroTelas"
                component={CadastroTelas}
            />
        </Navigator>
    );
}