import { Image, Button,Text, TouchableOpacity, View, TextInput, ScrollView } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      
        <Image
        // className="w-32 h-32"
        source={{uri: "https://avatars.githubusercontent.com/u/173110821?v=4"}}
        className="w-[300px] h-[300px] mb-4 rounded-full"
        // source={{require("Imagem do pc seguindo rota")}}
        />
        <Text className="text-2xl text-dark-200 font-bold">Enrique Sena</Text>
        <TouchableOpacity >
          <Text>Idade: 23 anos</Text>
          <Text>Localização: Campo grande Ms</Text>
        </TouchableOpacity>
        <Button title="Editar Perfil"/>
        {/* <TextInput
        // placeholder="Digite alguma coisa"

        className="border-2 border-solid rounderd-lg border-red-800"
        /> */}


      
    </View>
  );
}
