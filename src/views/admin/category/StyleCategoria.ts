import { StyleSheet } from 'react-native';
import { MyColors } from '../../../theme/AppTheme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    imageCatergoria:{
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 50,
        resizeMode: 'contain',
        borderRadius: 100,
        borderColor: MyColors.primary,
        borderWidth: 2
    },
    btnGuardar: {
        marginTop: 250,
    }
});