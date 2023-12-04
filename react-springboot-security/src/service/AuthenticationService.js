import axios from 'axios'

export const KEY_USER = 'auth_user'
export const KEY_PWD = 'auth_pwd'

class AuthenticationService {
	
	authenticate(username, password) {
		/*return fetch(`http://localhost:8080/auth`, {
			method: 'get',
			headers: {
				authorization: this.createBasicAuthToken(username, password)
			}
		}).then(function(res) {
			return res.json();
		}).then(res => {
			return res;
		});*/
		
		return axios.get(`http://localhost:8080/auth`,
            { headers: { authorization: this.createBasicAuthToken(username, password) } });
	}
	
	getAxiosConfig() {
        return {
            headers: {
				authorization: this.createBasicAuthToken(sessionStorage.getItem(this.KEY_USER), sessionStorage.getItem(this.KEY_PWD))
            }    
		}
    }

	createBasicAuthToken(username, password) {
		return 'Basic ' + window.btoa(username + ":" + password)
	}
	
	registerUserInSession(username, password) {
		sessionStorage.setItem(this.KEY_USER, username);
		sessionStorage.setItem(this.KEY_PWD, password);
		this.setupAxiosInterceptors(this.createBasicAuthToken(username, password));
	}

	logout() {
		sessionStorage.removeItem(this.KEY_USER);
		sessionStorage.removeItem(this.KEY_PWD);
	}

	isUserLoggedin() {
		let user = sessionStorage.getItem(this.KEY_USER)
		if (user === null) return false
		return true
	}

	getLoggedinUser() {
		let user = sessionStorage.getItem(this.KEY_USER)
		if (user === null) return ''
		return user
	}
	
	setupAxiosInterceptors(token) {		
		axios.interceptors.request.use(request => {
			
			if (this.isUserLoggedIn()) {
				request.headers.authorization = token
			}
			
			return request;
		}, error => {
			return Promise.reject(error);
		});
    }
	
}

export default new AuthenticationService()
