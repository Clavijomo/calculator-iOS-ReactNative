import { StyleSheet } from "react-native";

export const palletColors = {
    darkGray: "#2D2D2D",
    lightGray: '#9B9B9B',
    orange: '#FF9427',

    textPrimary: 'white',
    textSecondary: '#666666',
    background: '#000000'
}

export const appGlobalStyles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: palletColors.background
    },
    // Container
    calculatorContainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end'
    },
    // Container result
    mainResult: {
        color: palletColors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        marginBottom: 10,
        fontWeight: '300'
    },
    subResult: {
        color: palletColors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '400'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'center',        
        marginBottom: 10,
        paddingHorizontal: 10
    },

    // Buttons
    button: {
        height: 80,
        width: 80,
        backgroundColor: palletColors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 5
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '500'
    }
});