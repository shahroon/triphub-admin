 let APIRoot = "http://localhost:8000";
//let APIRoot = "https://my-rails-api.herokuapp.com";

export default {
  APIEndpoints: {
    LOGIN:  APIRoot + "/auth/sign_in",
    SIGNUP: APIRoot + "/auth/sign_up",
    SIGNOUT: APIRoot + "/auth/sign_out",
    USERS: APIRoot + "/v1/users",
  },
};