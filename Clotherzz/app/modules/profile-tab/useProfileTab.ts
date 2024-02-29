import { ParamListBase, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Routes } from "../../constants";

const useProfileTab = () =>{
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const navigateToAddress = () =>{
        navigation.navigate(Routes.AddressProfile)
    }

    return{
        navigateToAddress
    }
}

export default useProfileTab