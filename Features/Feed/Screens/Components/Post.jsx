// Features/Feed/Components/Post.jsx
import { Text } from 'react-native';
import PropTypes from 'prop-types';

export default function Post({ username, body }) {
  return (
    <>
        <Text>
            Author:
        </Text>
        <Text>
            Body:
        </Text>
    </>
  );
}

Post.propTypes = {
    username: PropTypes.string.isRequired,
    body: <PropTypes className="string isRe">,</PropTypes>
};