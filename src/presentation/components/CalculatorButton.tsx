import React from 'react';
import { Pressable, Text } from 'react-native';
import { appGlobalStyles, palletColors } from '../../config/theme/app-theme';

interface Props {
    label: string;
    color?: string;
    doubleSize?: boolean;
    colorText?: boolean;
    onPress: () => void;
}

export const CalculatorButton = (props: Props) => {    
    const {
        label,
        color = palletColors.darkGray,
        doubleSize = false,
        colorText = false,
        onPress
    } = props;

    return (
        <Pressable
            onPress={() => onPress()}
            style={({ pressed }) => ({
                ...appGlobalStyles.button,
                width: doubleSize ? 180 : 80,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1
            })}
        >
            <Text style={{
                ...appGlobalStyles.buttonText,
                color: colorText ? 'black' : 'white'
            }}>
                {label}
            </Text>
        </Pressable>
    )
}
