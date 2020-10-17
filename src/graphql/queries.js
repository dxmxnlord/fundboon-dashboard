export const USER_EXISTS_QUERY = `
  query($email: String!) {
    userExists(email: $email)
  }
`;

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


