// PLUGINS IMPORTS //
import React from "react"
import { View, TouchableOpacity, TextInput, StyleSheet } from "react-native"
import Text from "~/Components/Shared/Components/Text/Text"
import { Formik } from "formik"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //
import Button from "../../../../../Shared/Components/Button/Button"

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  route: any
}

const CredentialsFieldChangeScreen: React.FC<PropsType> = (props) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={22} style={styles.title}>
        {props.route.params.title}
      </Text>
      <Formik
        initialValues={{
          field: "" as string,
        }}
        onSubmit={(values: any) => {
          props.route.params.changeFunction(values)
        }}
      >
        {(FormikProps) => (
          <>
            <TextInput
              placeholder={props.route.params.placeholder}
              placeholderTextColor="#696969"
              onChangeText={FormikProps.handleChange("field")}
              onBlur={FormikProps.handleBlur("field")}
              value={FormikProps.values.field}
              style={styles.input}
            />
            <Text style={styles.error_message}>
              {FormikProps.touched.field && FormikProps.errors.field}
            </Text>

            <Button
              text="Сохранить"
              onPress={FormikProps.handleSubmit}
              buttonStyle={{
                height: 50,
                width: 315,
                borderRadius: 6,
                backgroundColor: "#96A637",
              }}
              textStyle={{
                color: "white",
                fontSize: 16,
                letterSpacing: 0.3,
              }}
            />
          </>
        )}
      </Formik>
    </View>
  )
}

//   STYLES   //
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 30.19,
  },

  title: {
    marginBottom: 12,
  },

  input: {
    borderBottomColor: "#1A1824",
    borderBottomWidth: 1,
    height: 45,
    width: 315,
    fontSize: 16,
  },

  error_message: {},
})

export default CredentialsFieldChangeScreen
