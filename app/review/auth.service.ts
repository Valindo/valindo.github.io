import { Injectable }      from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';
import { Router } from '@angular/router';

// Avoid name not found warnings
declare var Auth0Lock: any;

@Injectable()
export class Auth {
  //Store profile object in auth class
  userProfile: Object;

  // Configure Auth0
  lock = new Auth0Lock('Slx1ubr3CHKdpaEGMuzGSroW9zvO99jW', 'kiritayya.auth0.com', {
    allowedConnections: ["facebook", "google-oauth2"],
    auth: {
        redirect: false
    },
    autoclose: true,
    languageDictionary: {
      title: "Do Tayaari"
    },
    theme: {
      logo: '../images/logoStar.png'
    }
  });

  constructor(private router: Router) {
    // Set userProfile attribute of already saved profile
    this.userProfile = JSON.parse(localStorage.getItem('profile'));

    // Add callback for the Lock `authenticated` event
    this.lock.on("authenticated", (authResult) => {
      localStorage.setItem('id_token', authResult.idToken);

      // Fetch profile information
      this.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          // Handle error
          alert(error);
          return;
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        this.userProfile = profile;
      });
    });
  };

  public login() {
    // Call the show method to display the widget.
    this.lock.show();
  };

  getUrlPath(){
      return this.router.url;
  };

  public authenticated() {
    // Check if there's an unexpired JWT
    // This searches for an item in localStorage with key == 'id_token'
    return tokenNotExpired();
  };

  public logout() {
    // Remove token from localStorage
    localStorage.removeItem('id_token');
  };
}