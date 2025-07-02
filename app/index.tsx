import MyButton from "@/app-example/components/MyButton";
import { useRouter } from "expo-router";
import { Text, View ,Image } from "react-native";

export default function Index() {
  const router = useRouter();

  const onContinue = () => {
    router.navigate("/login")
  }
  return (
    <View style={{flex:1 , justifyContent: "center" , alignItems:"center"}}>
      <Image  source={require("@/assets/images/home.png")} resizeMode="cover"  style={{
       width:"100%",
       height:500
      }}/>
      <MyButton title={"continue"} onpress={onContinue}/>
    </View>
  );
}
