import { Image, Button,Text, TouchableOpacity, View, TextInput, ScrollView } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 ">
      
        <View className="gap-3 mx-4 flex-row">
          <View className="bg-slate-400 w-[110px] h-[120px] ">
          <Text className="text-3xl text-dark-200 justify-center font-bold">
            Visitas
          </Text>
          <Text className="text-3xl text-dark-200 font-bold">
            1,5000
          </Text>
          <Text className="text-1xl text-dark-200 font-bold">
            Ultimos 7 dias
          </Text>
          </View>

          <View className="bg-slate-400 w-[110px] h-[120px] ">
          <Text className="text-3xl text-dark-200 justify-center font-bold">
            Visitas
          </Text>
          <Text className="text-3xl text-dark-200 font-bold">
            1,5000
          </Text>
          <Text className="text-1xl text-dark-200 font-bold">
            Ultimos 7 dias
          </Text>
          </View>

          <View className="bg-slate-400 w-[110px] h-[120px] ">
          <Text className="text-3xl text-dark-200 justify-center font-bold">
            Visitas
          </Text>
          <Text className="text-3xl text-dark-200 font-bold">
            1,5000
          </Text>
          <Text className="text-1xl text-dark-200 font-bold">
            Ultimos 7 dias
          </Text>
          </View>
        </View>
        <View className=" flex-col justify-center itens-center w-auto ">
          <View className="w-[200]">
          <Image source={{ uri: "https://a-static.mlcdn.com.br/1500x1500/jaqueta-couro-masculina-moderna-couro-resistente-slim-motoqueiro-vmong/prosperdigital/5553a4c4c72811ed87434201ac18502f/a5a2b8ae4fe16d71fb1bd28cf2a7383a.jpeg" }} className="w-[200] h-[250] "/>
            
          
          <Text className="text-1xl justify-center  text-dark-200 font-bold"> Item 1
          </Text>
          <Text className="text-1xl justify-center  text-dark-200 font-light"> Descrição item 1, informações adicionais podem ser inseridas aqui
          </Text>
          
          </View>
        
        </View>

        <View className=" flex-col justify-center itens-center w-auto ">
          <View className="w-[200]">
          <Image source={{ uri: "https://a-static.mlcdn.com.br/1500x1500/jaqueta-couro-masculina-moderna-couro-resistente-slim-motoqueiro-vmong/prosperdigital/5553a4c4c72811ed87434201ac18502f/a5a2b8ae4fe16d71fb1bd28cf2a7383a.jpeg" }} className="w-[200] h-[250] "/>
            
          
          <Text className="text-1xl justify-center  text-dark-200 font-bold"> Item 1
          </Text>
          <Text className="text-1xl justify-center  text-dark-200 font-light"> Descrição item 1, informações adicionais podem ser inseridas aqui
          </Text>
          
          </View>
        
        </View>
        
        <View className=" flex-col justify-center itens-center w-auto ">
          <View className="w-[200]">
          <Image source={{ uri: "https://a-static.mlcdn.com.br/1500x1500/jaqueta-couro-masculina-moderna-couro-resistente-slim-motoqueiro-vmong/prosperdigital/5553a4c4c72811ed87434201ac18502f/a5a2b8ae4fe16d71fb1bd28cf2a7383a.jpeg" }} className="w-[200] h-[250] "/>
            
          
          <Text className="text-1xl justify-center  text-dark-200 font-bold"> Item 1
          </Text>
          <Text className="text-1xl justify-center  text-dark-200 font-light"> Descrição item 1, informações adicionais podem ser inseridas aqui
          </Text>
          
          </View>
        
        </View>
    </View>
  
  );
}
