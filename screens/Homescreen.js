import {View, Text, Image, TextInput} from "react-native";
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
        <SafeAreaView className="bg-white pt-5">
             <Text className="text-red-500">
            <View className="flex-row pb-3 items-center mx-4 space-x-2">
                {/* Header */}
                <Image 
                
                 source={{
                    uri: "https://links.papareact.com/wru",
                 }}
                 className = "h-7 w-7 bg-gray-300 p-4 rounded-full"
                />
                <View className="flex-1">
                    <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
                    <Text className="font-bold text-nxl">Current Location</Text>
                    <ChevronDownIcon size={20} color="#00CCBB" />
                    
                  </View>

                  <UserIcon size={35} color="#00CCBB" />
            </View>

            {/* search */}

            <View>
                <View className="flex-row space-x-2 flex-1">
                <SearchIcon />
                <TextInput 
                placeholder="Restaurants and Cuisines"
                keyboardType="Default"
                />
                </View>


                <AdjustmentsIcon color="#00CCBB" />
            </View>
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen;