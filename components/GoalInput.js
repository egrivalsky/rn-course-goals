import React, { useState } from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
      };

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={ styles.inputContainer}>
            <TextInput 
                placeholder="Course Goal" 
                style={styles.input}
                onChangeText={ goalInputHandler }
                value = { enteredGoal }
                />
            <Button title="ADD" onPress= {() => props.onAddGoal(enteredGoal) }/>
            {/* <Button title="CLEAR" onPress={() = > )} /> */}
        </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center' 
      },
    
      input: {
        width: 200,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom:10
      },
})

export default GoalInput;
