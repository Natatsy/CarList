import React, {useEffect, useState} from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProtectedContent = ({navigation}) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const token = await AsyncStorage.getItem('authToken');
      if (!token) return navigation.replace('Login');

      const response = await fetch('http://your-api-url/api/protected', {
        headers: {Authorization: token},
      });
      const data = await response.json();
      setContent(data.message);
    };

    fetchContent();
  }, []);

  return (
    <View>{content ? <Text>{content}</Text> : <ActivityIndicator />}</View>
  );
};

export default ProtectedContent;
