export const LOGIN_MUTATION = `
  mutation($email: String!, $password: String!) {
    adminLogin(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

export const LOGOUT_MUTATION = `
  mutation {
    logout
  }
`;

export const UPDATE_ADMIN_USER_PROFILE = `
  mutation(
    $altEmail: String,
    $salutation: String,
    $firstName: String,
    $lastName: String,
    $gender: String,
    $dob: String,
    $age: Int,
    $mobileNumber: String,
    $nationality: String,
    $pan: String,
    $aadhar: String,
    $permanentAddress: String,
    $communicationAddress: String,
    $qualification: String,
    $officeName: String,
    $officeAddress: String,
  ) {
    updateAdminProfile(
      input : {
        altEmail: $altEmail,
        personalDetails: {
          salutation: $salutation,
          firstName: $firstName,
          lastName: $lastName,
          gender: $gender,
          dob: $dob,
          age: $age,
          mobileNumber: $mobileNumber,
          nationality: $nationality,
          pan: $pan,
          aadhar: $aadhar,
        },
        contactDetails:{
          permanentAddress: $permanentAddress,
          communicationAddress: $communicationAddress,
        },
        educationDetails:{
          qualification: $qualification
        },
        employmentDetails:{
          officeName: $officeName,
          officeAddress: $officeAddress,
        }
      }
    ){
      email
    }
  }
`

export const UPDATE_APPLICATION_DATA = `
  mutation(
    $firstName: String, 
		$lastName: String, 
		$gender: String,
		$mob: String,
    $dob: String,
    $nation:String,
		$maritalStatus: String,
		$qualification: String,
		$pan: String, 
		$aadhaar: String ,
		$primaryEmail: String,
    $secondaryEmail: String,
    $applicationNumber: String,
    $loanAmount: String,
    $loanCity: String,
    $assetCity: String,
    $assetWorth: String,
    $loanTenure: String,
    $loanPurpose: String,
    $assetState: String,
    $assetType: String,
    $homeLoanCity: String,
    $coApplicant: String,
    $coApplicantIncome: String,
    $coApplicantEMI: String,
    $coApplicantRelation: String,
    $exiloan: String,
    $exiLoanBank: String,
    $exiEMI: String,
    $chqbnc: String,
    $exiLoanType: String,
    $transfer: String,
    $permanentAddress: String,
    $permanentAddressLandmark: String,
    $permanentAddressType: String,
    $permanentAddressPincode: String,
    $permanentAddressPincodeCity: String,
    $permanentAddressPincodeState: String,
    $permanentAddressAccomodation: String,
    $currentAddress: String,
    $currentAddressLandmark: String,
    $currentAddressType: String,
    $currentAddressPincode: String,
    $currentAddressPincodeCity: String,
    $currentAddressPincodeState: String,
    $currentAddressAccomodation: String,
    $emp: String,
    $income: String,
    $company: String,
    $turnover: String,
    $officeAddress: String,
    $officeAddressLandmark: String,
    $officeAddressPincode: String,
    $industryType: String
		) {
    updateApplicationData(input:{
      applicationNumber: $applicationNumber,
      personalDetails: {
				firstName: $firstName
				lastName: $lastName
        gender: $gender
        dob: $dob
        mob: $mob
        nation: $nation
        maritalStatus: $maritalStatus
        qualification: $qualification
        pan: $pan
        aadhaar: $aadhaar
        primaryEmail: $primaryEmail
        secondaryEmail: $secondaryEmail
      },
      loanDetails: {
        loanAmount: $loanAmount
        loanCity: $loanCity
        assetCity: $assetCity
        assetWorth: $assetWorth
        loanTenure: $loanTenure
        loanPurpose: $loanPurpose
        assetState: $assetState
        assetType: $assetType
        homeLoanCity: $homeLoanCity
      },
      bankDetails: {
        coApplicant: $coApplicant
        coApplicantIncome: $coApplicantIncome
        coApplicantEMI: $coApplicantEMI
        coApplicantRelation: $coApplicantRelation
        exiloan: $exiloan
        exiLoanBank: $exiLoanBank
        exiEMI: $exiEMI
        chqbnc: $chqbnc
        exiLoanType: $exiLoanType
        transfer: $transfer
      },
      addressDetails: {
        permanentAddress: $permanentAddress
        permanentAddressLandmark: $permanentAddressLandmark
        permanentAddressType: $permanentAddressType
        permanentAddressPincode: $permanentAddressPincode
        permanentAddressPincodeCity: $permanentAddressPincodeCity
        permanentAddressPincodeState: $permanentAddressPincodeState
        permanentAddressAccomodation: $permanentAddressAccomodation
        currentAddress: $currentAddress
        currentAddressLandmark: $currentAddressLandmark
        currentAddressType: $currentAddressType
        currentAddressPincode: $currentAddressPincode
        currentAddressPincodeCity: $currentAddressPincodeCity
        currentAddressPincodeState: $currentAddressPincodeState
        currentAddressAccomodation: $currentAddressAccomodation
      },
      employmentDetails: {
        emp: $emp
        income: $income
        company: $company
        turnover: $turnover
        officeAddress: $officeAddress
        officeAddressLandmark: $officeAddressLandmark
        officeAddressPincode: $officeAddressPincode
        industryType: $industryType
      }
    }){
      _id
    }
  }
`;


export const UPDATE_PRODUCT_DATA = `
  mutation(
    $bankName: String,
    $bankCode: String,
    $fbBankCode: String,
    $productName: String,
    $productCode: String,
    $fbProductCode: String,
    $minAge: Float,
    $maxAge: Float,
    $minIncome: Float,
    $minLoanAmount: Float,
    $maxLoanAmount: Float,
    $minLoanRatio: Float,
    $maxLoanRatio: Float,
    $minLoanTenure: Float,
    $maxLoanTenure: Float,
    $minInterestRateMen: Float,
    $minInterestRateWomen: Float,
    $minProcessingFee: Float,
    $minPreclosureCharge: Float,
    $maxPreclosureCharge: Float,
    $fbProcessingFee: Float,
    $minProcessingFeeSlab: Float,
    $maxProcessingFeeSlab: Float,
    $coApplicantMaxEMI: Float,
    $coApplicantMinAge: Float,
    $coApplicantMinSalary: Float
		) {
    updateProductData(input:{
      bankName: $bankName,
      bankCode: $bankCode,
      fbBankCode: $fbBankCode,
      productName: $productName,
      productCode: $productCode,
      fbProductCode: $fbProductCode,
      minAge: $minAge,
      maxAge: $maxAge,
      minIncome: $minIncome,
      minLoanAmount: $minLoanAmount,
      maxLoanAmount: $maxLoanAmount,
      minLoanRatio: $minLoanRatio,
      maxLoanRatio: $maxLoanRatio,
      minLoanTenure: $minLoanTenure,
      maxLoanTenure: $maxLoanTenure,
      minInterestRateMen: $minInterestRateMen,
      minInterestRateWomen: $minInterestRateWomen,
      minProcessingFee: $minProcessingFee,
      minPreclosureCharge: $minPreclosureCharge,
      maxPreclosureCharge: $maxPreclosureCharge,
      fbProcessingFee: $fbProcessingFee,
      minProcessingFeeSlab: $minProcessingFeeSlab,
      maxProcessingFeeSlab: $maxProcessingFeeSlab,
      coApplicantMaxEMI: $coApplicantMaxEMI,
      coApplicantMinAge: $coApplicantMinAge,
      coApplicantMinSalary: $coApplicantMinSalary
    }){
      _id
    }
  }
`;