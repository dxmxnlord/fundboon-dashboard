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
	  bankName
	  loanDetails{
		loanAmount
		loanCity
		assetCity
		assetWorth
		loanTenure
		loanPurpose
		assetState
		assetType
		homeLoanCity
	  },
	  bankDetails{
		coApplicant
		coApplicantIncome
		coApplicantEMI
		coApplicantRelation
		exiloan
		exiLoanBank
		exiEMI
		chqbnc
		exiLoanType
		transfer
	  },
	  personalDetails{
		firstName
		lastName
		gender
		dob
		mob
		maritalStatus
		qualification
		pan
		aadhaar
		nation
		primaryEmail
		secondaryEmail
	  },
	  addressDetails{
		permanentAddress
		permanentAddressLandmark
		permanentAddressType
		permanentAddressPincode
		permanentAddressPincodeCity
		permanentAddressPincodeState
		permanentAddressAccomodation
		currentAddress
		currentAddressLandmark
		currentAddressType
		currentAddressPincode
		currentAddressPincodeCity
		currentAddressPincodeState
		currentAddressAccomodation
	  },
	  employmentDetails{
		emp
		income
		company
		turnover
		officeAddress
		officeAddressLandmark
		officeAddressPincode
		industryType
	  }
      appliedAt
      applicationComplete
      reviewStatus
    }
  }
`;


