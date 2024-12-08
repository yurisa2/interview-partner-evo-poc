export default {
	FilePicker1onFilesSelected () {
		inp_job_description.setValue(api_file_convert_jd.data.text)
		storeValue('jd_contents', inp_job_description.text, false)

	}
}