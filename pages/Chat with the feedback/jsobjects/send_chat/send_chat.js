export default {
	IconButton1onClick () {
		let chat_response = chat_with_feedback.data
		
		storeValue("final_feedback", chat_response)
		Input1.setValue(chat_response)
		
	}
}