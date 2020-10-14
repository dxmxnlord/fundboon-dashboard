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