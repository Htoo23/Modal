import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import CustomModal from './CustomModal'; // Assuming this is the path to your CustomModal component

const MainComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [secondModalVisible, setSecondModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={showModal}>
        Show Modal
      </Button>
      
      <CustomModal visible={modalVisible} hideModal={hideModal} />
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  anotherButton: {
    marginTop: 20,
  },
});

export default MainComponent;
