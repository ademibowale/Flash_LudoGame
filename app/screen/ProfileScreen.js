import React, { useState } from 'react';
import { Button, Text } from 'react-native'; // Import Button component
import auth from '@react-native-firebase/auth';

const ProfileScreen = () => {
  const handleSignOut = async () => {
    try {
        await auth().signOut();
        console.log('User signed out successfully!');
        // Optionally, navigate to login screen after signout
      } catch (error) {
        console.error('Sign out error:', error);
      }
    
    // ... your handleSignOut function implementation
  };

  return (
    <View>
      <Text>Welcome, User!</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default ProfileScreen;