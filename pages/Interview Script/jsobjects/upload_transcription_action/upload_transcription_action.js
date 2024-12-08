export default {
	FilePicker1onFilesSelected () {
		
		let transcription_contents = FilePicker1.files[0].data
		
		Input1.setValue(transcription_contents)
		
		storeValue("transcription_file", transcription_contents)
		
	}
}