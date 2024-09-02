import React from 'react';
import { Text, View } from 'react-native';
import { appGlobalStyles, palletColors } from '../../config/theme/app-theme';
import { CalculatorButton } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';

export const CalculatorScreen = () => {
    const {
        formula,
        prevNumber,
        clean,
        toggleSign,
        buildNumber,
        addOperation,
        calculateResult,
        divideOperation,
        deleteOperation,
        multiplyOperation,
        substractOperation,
    } = useCalculator();

    return (
        <View style={appGlobalStyles.calculatorContainer}>
            <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={appGlobalStyles.mainResult}>
                    {formula}
                </Text>
                {(formula === prevNumber) ?
                    (
                        <Text style={appGlobalStyles.subResult}></Text>
                    )
                    : (
                        <Text
                            adjustsFontSizeToFit
                            numberOfLines={1}
                            style={appGlobalStyles.subResult}>
                            {prevNumber}
                        </Text>
                    )
                }
            </View>

            {/* Primera fila */}
            <View style={appGlobalStyles.row}>
                <CalculatorButton onPress={clean} colorText color={palletColors.lightGray} label='C' />
                <CalculatorButton onPress={toggleSign} colorText color={palletColors.lightGray} label='+/-' />
                <CalculatorButton onPress={deleteOperation} colorText color={palletColors.lightGray} label='del' />
                <CalculatorButton onPress={divideOperation} color={palletColors.orange} label='÷' />
            </View>

            {/* Segunda fila */}
            <View style={appGlobalStyles.row}>
                <CalculatorButton onPress={() => buildNumber('7')} label='7' />
                <CalculatorButton onPress={() => buildNumber('8')} label='8' />
                <CalculatorButton onPress={() => buildNumber('9')} label='9' />
                <CalculatorButton onPress={multiplyOperation} label='x' color={palletColors.orange} />
            </View>

            {/* Tercera fila */}
            <View style={appGlobalStyles.row}>
                <CalculatorButton onPress={() => buildNumber('4')} label='4' />
                <CalculatorButton onPress={() => buildNumber('5')} label='5' />
                <CalculatorButton onPress={() => buildNumber('6')} label='6' />
                <CalculatorButton onPress={substractOperation} label='-' color={palletColors.orange} />
            </View>

            {/* Cuarta fila */}
            <View style={appGlobalStyles.row}>
                <CalculatorButton onPress={() => buildNumber('1')} label='1' />
                <CalculatorButton onPress={() => buildNumber('2')} label='2' />
                <CalculatorButton onPress={() => buildNumber('3')} label='3' />
                <CalculatorButton onPress={addOperation} label='+' color={palletColors.orange} />
            </View>

            {/* Tercera fila */}
            <View style={appGlobalStyles.row}>
                <CalculatorButton onPress={() => buildNumber('0')} doubleSize label='0' />
                <CalculatorButton onPress={() => buildNumber('.')} label='.' />
                <CalculatorButton onPress={calculateResult} label='=' color={palletColors.orange} />
            </View>
        </View>
    )
}
