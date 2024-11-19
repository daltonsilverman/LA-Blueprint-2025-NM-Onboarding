import { Button, TextInput } from 'react-native';
import { useState, useEffect } from 'react';

export default function NewPostForm() {
    const [username, setUsername] = useState('');
    const [body, setBody] = useState('')

    useEffect(() => console.log({ username, body }), [username, body])


    return (
        <>
            <TextInput
              placeholder="Who is this?"
              onChangeText={setUsername}
            />
            <TextInput
              placeholder="What are you Printing?"
              onChangeText={setBody}
            />
            <Button title="Print" />
        </>
    );
}