import PropTypes from 'prop-types';
import {
  View, Text, Button, StyleSheet,
} from 'react-native';

export default function PostDetails({ navigation, route }) {
  const { author, body, time } = route.params;

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

  const popBack = () => {
    navigation.navigate('Feed');
  };

  return (
    <View style={{
      flex: 1, alignItems: 'center', justifyContent: 'center',
    }}
    >
      <Text>Post Details</Text>
      <View style={styles.postContainer}>
        <Text style={styles.authorText}>
          {author}
          {' said at '}
          {time}
          :
        </Text>
        <Text style={styles.bodyText}>
          {body}
        </Text>
      </View>

      <Button style={{ backgroundColor: 'green' }} title="Go back to feed" onPress={popBack} />
    </View>
  );
}

PostDetails.propTypes = {
  navigation: PropTypes.shape({
    popTo: PropTypes.func,
    navigate: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      author: PropTypes.string,
      body: PropTypes.string,
      time: PropTypes.string,
    }),
  }).isRequired,
};
