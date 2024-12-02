import {
  Text, View, StyleSheet, Button,
} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  postContainer: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'lightgrey',
    width: '100%',
    paddingLeft: 50,
    borderBottomWidth: 1,
    backgroundColor: 'ghostwhite',
  },
  authorText: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  bodyText: {
    paddingBottom: 25,
  },
  rowContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center', // Added to ensure items align properly in a row
  },
  columnContainer: {
    flex: 0, // Correct usage: use a number value (0 means no growing/shrinking)
    display: 'flex',
    flexDirection: 'column',
    marginRight: 20, // Removed quotes, margin is in number values
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flex: 1, // Ensures this container takes the remaining space
  },
});

export default function Post({
  username, body, time, getPostDetails,
}) {
  const handleGetDetails = () => {
    getPostDetails(username, body, time);
  };
  return (
    <View style={styles.postContainer}>
      <View style={styles.rowContainer}>
        <View style={styles.columnContainer}>
          <Text style={styles.authorText}>
            {username}
          </Text>
          <Text style={styles.bodyText}>
            {body}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button title="+" onPress={handleGetDetails} />
        </View>
      </View>
    </View>
  );
}

Post.propTypes = {
  username: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  getPostDetails: PropTypes.func.isRequired,
};
