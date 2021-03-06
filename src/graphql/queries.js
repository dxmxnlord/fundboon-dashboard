export const USER_EXISTS_QUERY = `
  query($email: String!) {
    userExists(email: $email)
  }
`;


export const GET_ADMIN_USER_QUERY = `
	query{
	  getAdmin{
        email
	    altEmail
    	personalDetails {
    		salutation
    		firstName
    		lastName
    		gender
    		dob
    		age
    		mobileNumber
    		nationality
    		pan
    		aadhar
    		ptype
    	},
    	contactDetails{
    		permanentAddress
    		communicationAddress
    	},
    	educationDetails{
    		qualification
    	},
    	employmentDetails{
    		officeName
    		officeAddress
    	}
	  }
	}
`

export const GET_ALL_APPLICATIONS_QUERY = `
  query {
    getAllApplicationsRequest {
      applicationNumber
      applicantId
      policyId
      type
      appliedAt
      applicationComplete
      reviewStatus
    }
  }
`;


