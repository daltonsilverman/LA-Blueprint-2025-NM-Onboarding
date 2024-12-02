import {
  Button, Text, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Post from '../Components/Post';
import NewPostForm from '../Components/NewPostForm';
import DropdownComponent from '../Components/DropDown';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', // This will ensure the footer stays at the bottom
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
  },
  mainContent: {
    flex: 1, // This takes up the available space between the header and footer
    width: '100%',
  },
  footer: {
    padding: 10,
    alignItems: 'center',
  },
});

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState([
    {
      _id: 1,
      username: 'James',
      body: 'Mobile development is fun!',
      time: '10/24/23 5:41:59 PM',
    },
    {
      _id: 2,
      username: 'Sidd',
      body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
      time: '10/23/23 5:41:59 PM',
    },
    {
      _id: 3,
      username: 'Jerry',
      body: 'I am excited to see everyone become friends!',
      time: '10/25/23 5:41:59 PM',
    },
  ]);
  const [newId, setNewId] = useState(posts.length + 1);

  const addNewPost = (newPost) => {
    const currentDate = new Date().toLocaleString();
    const updatedPosts = [...posts];
    updatedPosts.push({ ...newPost, time: currentDate, _id: newId });
    setPosts(updatedPosts);
    setNewId((id) => id + 1);
  };

  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  const navigateToPostDetails = (author, body, time) => {
    navigation.push('PostDetails', {
      author,
      body,
      time,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Posts</Text>
      <View style={styles.mainContent}>
        <NewPostForm addNewPost={addNewPost} />
        {posts.map((post) => (
          <Post
            key={post._id}
            username={post.username}
            body={post.body}
            time={post.time}
            getPostDetails={navigateToPostDetails}
          />
        ))}
      </View>
      <View style={styles.footer}>
        <DropdownComponent />
        <Button title="To Landing" onPress={navigateToLanding} />
      </View>
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    push: PropTypes.func,
  }).isRequired,
};
