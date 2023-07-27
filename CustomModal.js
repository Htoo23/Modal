import React from 'react';
import { Modal, Portal, Text, Button } from 'react-native-paper';
import { View, Image, StyleSheet } from 'react-native';

const CustomModal = ({ visible, hideModal }) => (
  <Portal>
    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
      <View style={styles.container}>
        <Image source={require('./warning.gif')} style={styles.image} />
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={hideModal} style={styles.noButton}>
          No
        </Button>
        <Button mode="contained" onPress={hideModal} style={styles.yesButton}>
          Yes
        </Button>
      </View>
    </Modal>

    
    
  </Portal>
);

const styles = StyleSheet.create({
  modal: {
    backgroundColor: 'white',
    padding: 20,
    height: 400,
    margin: 20,
    borderRadius: 8,
  },
  container: {
    alignItems: 'center',
  },
  image: {
    width: 150, // Reduced width
    height: 150, // Reduced height
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  noButton: {
    flex: 1,
    marginRight: 10,
  },
  yesButton: {
    flex: 1,
    marginLeft: 10,
  },
});

export default CustomModal;
