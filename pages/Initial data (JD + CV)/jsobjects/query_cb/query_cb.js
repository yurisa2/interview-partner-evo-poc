export default {
	btn_run_analysisonClick () {
		
		let script_response = cv_jd_match_interview_script.data["candidates"][0]["content"]["parts"][0]["text"]
	
		
		storeValue('interview_script', script_response)
		storeValue('jd', inp_job_description.text)
		storeValue('cv', inp_cv.text)
		navigateTo("Interview Script")
	
	}
}