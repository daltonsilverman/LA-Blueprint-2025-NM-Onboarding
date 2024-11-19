import { Button, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import Post from '../Components/Post'
import NewPostForm from '../Components/NewPostForm';
import { useState, useEffect } from 'react';

export default function Feed({ navigation }) {
  const [posts, setPosts] = useState(
    [
      {
        _id: 1,
        username: 'James',
        body: 'Mobile development is fun!',
        //time: '2023-10-24T00:41:59.057Z',
      },
      {
        _id: 2,
        username: 'Sidd',
        body: 'I just finished watching another movie. It was interesting, but kind of boring :(',
        //time: '2023-10-23T00:41:59.057Z',
      },
      {
        _id: 3,
        username: 'Jerry',
        body: 'I am excited to see everyone become friends!',
        //time: '2023-10-25T00:41:59.057Z',
      },
    ]    
  );
  const [newId, setNewId] = useState(0);

  const addNewPost = (newPost) => {
    const updatedPosts = [...posts];
    updatesPosts.push({...newPost, _id: newId });
    setPosts(updatedPosts);
    setNewId((id) => (id + 1));
  };


  const navigateToLanding = () => {
    navigation.navigate('Landing');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Posts</Text>
      <NewPostForm addNewPost={addNewPost} />
      {posts.map((post) => (
        <Post key={post._id} username={post.username} body={post.body}/>
      ))}
      <Button
        title="To Landing"
        onPress={navigateToLanding}
      />
    </View>
  );
}

Feed.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
