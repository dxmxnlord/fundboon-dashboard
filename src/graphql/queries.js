export const USER_EXISTS_QUERY = `
  query($email: String!) {
    userExists(email: $email)
  }
`;

export const GET_ADMIN_USER_QUERY = `
	query{
	  getAdmin{
	    email: String
	    altEmail: String,
	    password: String,
	    personalDetails: {
	    	permanentAddress: String,
	    	communicationAddress: String,
	    },
	    contactDetails: {
	    	qualification: String
	    },
	    educationDetails: {
	    	officeName: String,
	    	officeAddress: String,
	    },
	    employmentDetails: {
	    	dateOfApply: String
	    	fname: String
	    	lname:String
	    	email:String
	    	mobile: String
	    	msg:String
	    }
	  }
	}
`