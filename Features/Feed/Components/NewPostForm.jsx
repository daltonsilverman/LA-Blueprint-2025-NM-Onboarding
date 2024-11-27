import {
  Button, TextInput, View, StyleSheet,
} from 'react-native';
import { useState } from 'react';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'lightgrey',
    backgroundColor: 'ghostwhite',
    width: '100%',
    height: 100,
    paddingHorizontal: 10,
    borderBottomWidth: 5,
    borderTopWidth: 1,
    alignItems: 'flex-start',
    alignContent: 'space-evenly',
    justifyContent: 'space-evenly',
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  printButton: {
    color: '#008AD8',
  },
});

export default function NewPostForm({ addNewPost }) {
  const [username, setUsername] = useState('');
  const [body, setBody] = useState('');

  const handleAddPost = () => {
    addNewPost({ username, body });
    setUsername('');
    setBody('');
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="What's Happening?"
        onChangeText={setBody}
        value={body}
      />
      <View style={styles.rowContainer}>
        <TextInput
          placeholder="Who's this?"
          onChangeText={setUsername}
          value={username}
        />
        <Button title="Print" onPress={handleAddPost} color="#008AD8" />
      </View>

    </View>
  );
}

NewPostForm.propTypes = {
  addNewPost: PropTypes.func.isRequired,
};
