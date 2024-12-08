export default {
	file_cvonFilesSelected () {
		inp_cv.setValue(api_file_convert_cv.data.text)
		storeValue('cv_contents', inp_cv.text, false)
	}
}