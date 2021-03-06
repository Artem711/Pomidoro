// PLUGINS IMPORTS //
import React from "react"
import { ScrollView, StyleSheet } from "react-native"
import { useTranslation } from "react-i18next"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "~/Components/Shared/Components/Button/Button"
import Text from "~/Components/Shared/Components/Text/Text"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  navigation: any
}

const SelectAccountScreen: React.FC<PropsType> = (props) => {
  const { t } = useTranslation()

  return (
    <ScrollView style={styles.container}>
      <Text size={20} weight="bold" style={styles.title}>
        {t("OrderingProcess.SelectAccountScreen.Title")}
      </Text>
      <Button
        onPress={() => props.navigation.navigate("RegistrationScreen")}
        text={t("Auth.RegisterScreen.Зарегистрироваться")}
        buttonStyle={{
          marginTop: 38,
          width: 315,
          height: 50,
          backgroundColor: "#96A637",
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          color: "white",
          fontSize: 16,
        }}
      />
      <Button
        onPress={() => props.navigation.navigate("Auth")}
        text={t("Auth.LoginScreen.Войти")}
        buttonStyle={{
          marginTop: 15,
          width: 315,
          height: 50,
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          color: "black",
          fontSize: 16,
        }}
      />
      <Button
        onPress={() => props.navigation.navigate("DeliveryTypeSelectionScreen")}
        text={t("OrderingProcess.SelectAccountScreen.ОформлениеБезРегистрации")}
        buttonStyle={{
          marginTop: 10,
          width: 315,
          height: 50,
          borderRadius: 6,
          alignSelf: null,
        }}
        textStyle={{
          color: "black",
          fontSize: 16,
        }}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 30,
  },

  title: {
    width: 315,
  },
})

export default SelectAccountScreen
