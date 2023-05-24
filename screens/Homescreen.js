import {View, Text, Image} from "react-native";
import React, {useLayoutEffect} from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import {useNavigation} from "@react-navigation/native";
import {
    UserIcon,
    ChevronDownIcon,
    SearchIcon,
    AdjustmentsIcon,

} from "react-native-heroicons/outline";


const HomeScreen = () => {
   const navigation = useNavigation()

   useLayoutEffect(() => {
       navigation.setOptions({
        headerShown: false,
       });
   }, [])

    return (
        <SafeAreaView>
             <Text className="text-red-500">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                {/* Header */}
                <Image 
                
                 source={{
                    uri: "https://links.papareact.com/wru",
                 }}
                 className = "h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View>
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-nxl">Current Location</Text>
                    <ChevronDownIcon size={20} color="#00CCBB" />
                  </View>
            </View>
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen;