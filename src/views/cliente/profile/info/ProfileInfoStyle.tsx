import { StyleSheet } from "react-native";
import { MyColors } from "../../../../theme/AppTheme";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgBg: {
    width: "100%",
    height: "100%",
    opacity: 0.9,
    bottom: "30%",
  },
  btnSalir: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  btnSalirImag: {
    height: 40,
    width: 40,
  },
  form: {
    width: "100%",
    height: "60%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 16,
  },
  formHeader: {
    fontWeight: "bold",
    fontSize: 20,
    color: MyColors.primary,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginLeft: 10,
  },
  formTextInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  registerText: {
    color: MyColors.primary,
    marginLeft: 5,
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
  inputIcon: {
    width: 25,
    height: 25,
    marginTop: 5,
  },
  logoContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "5%",
  },
  imageProfile: {
    width: 180,
    height: 180,
    alignSelf: "center",
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 1,
  },
  logoText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginTop: 10,
  },
});
