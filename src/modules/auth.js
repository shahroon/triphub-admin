import AppConstant from './appConstants';

export const authAPI = {
    isAuthenticated: localStorage.hasOwnProperty('token'),
    authenticate(email, password) {
      fetch(AppConstant.APIEndpoints.LOGIN, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body:JSON.stringify({email:email, password:password})
    }).then(function(response) {
      if(response.status === 200){ 
        localStorage.setItem('token',response.headers.get('access-token'))
        console.log("AUTH RESP###" + localStorage.hasOwnProperty('token')); 
      }
      return response.text
    }, function(error) {
      return error.message 
    }
    )},
    signout() {
        localStorage.removeItem('token');
    }
};

export default authAPI;