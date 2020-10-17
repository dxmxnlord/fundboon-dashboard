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