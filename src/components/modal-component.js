import React from 'react'
import { View, Modal, Text, Button } from 'react-native'

const ModalComponent = ({ visible, onConfirm, onCancel }) => {
	return (
		<Modal visible={visible} transparent>
			<View className="flex-1 justify-center items-center bg-black/50">
				<View className="bg-white p-5 rounded-md">
					<Text className="mb-3">
						Are you sure you want to delete all favorites?
					</Text>
					<View className="flex-row items-center justify-center gap-2">
						<Button title="Cancel" onPress={onCancel} />
						<Button title="Confirm" onPress={onConfirm} />
					</View>
				</View>
			</View>
		</Modal>
	)
}

export default ModalComponent
