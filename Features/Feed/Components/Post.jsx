// Features/Feed/Components/Post.jsx
import {
  Text, View, StyleSheet, Button,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'lightgrey',
    backgroundColor: 'ghostwhite',
    width: '100%',
    paddingHorizontal: 50,
    borderBottomWidth: 1,
  },
  authorText: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },

  bodyText: {
    paddingBottom: 25,
  },
});

export default function Post({ username, body }) {
  return (
    <View style={styles.postContainer}>
      <Text style={styles.authorText}>
        {username}
      </Text>
      <View>
        <Text style={styles.bodyText}>
          {body}
        </Text>
        <Button title="+" />
      </View>

    </View>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  // time: PropTypes.string.isRequired,
};
