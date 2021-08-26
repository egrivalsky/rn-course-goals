import React from 'react';

import { StyleSheet, View, Text, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

const GoalItem = (props) => {
    return (
      <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem} onTouch>
        <Text>{props.title}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        backgroundColor:'#ccc',
        borderColor: 'black',
        borderWidth: 1
      },
})

export default GoalItem;
