import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { AppService } from '../../app.service';
import { MatSnackBar } from '@angular/material';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signupForm: boolean = false;
  statusBar: HTMLElement;
  public email: string;
  public password: string;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();
  firstName: any;
  lastName: any;
  progress: boolean;

  constructor(public appService: AppService, public snackBar: MatSnackBar, public router: Router, public _route: ActivatedRoute) {
    this.statusBar = document.getElementById('zap');

  }

  ngOnInit() {
    this.statusBar.style.display = 'none';
  }

  ngOnDestroy() {
    this.statusBar.style.display = 'block';
  }



  // On submit function
  submit() {

    if (!this.firstName) {
      this.snackBar.open(`enter first name`, "Dismiss", {
        duration: 5000,
      })


    } else if (!this.lastName) {
      this.snackBar.open(`enter last name`, "Dismiss", {
        duration: 5000,
      })


    } else if (!this.email) {
      this.snackBar.open(`enter email`, "Dismiss", {
        duration: 5000,
      })

    } 
      else {
      this.progress = true;
      let data = {
        firstName: this.firstName.toLowerCase(),
        lastName: this.lastName.toLowerCase(),
        type: 'email',
        email: this.email.toLowerCase(),
        password: this.password,
      }


      this.appService.signupFunction(data)
        .subscribe((apiResponse) => {
          
          
          if (apiResponse.status === 200) {
            
            let card = document.getElementById('card');
            card.classList.add('anime')

            Cookie.set('authtoken', apiResponse.data.authToken);

            this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails)

            setTimeout(() => {
              this.router.navigate(['/home']);
            }, 500);

          } else {

            this.snackBar.open(`${apiResponse.message}.`, "Dismiss", {
              duration: 5000,
            })

          }

        }, (err) => {

          this.snackBar.open(`some error occured. Please try again later`, "Dismiss", {
            duration: 5000,
          })

          setTimeout(() => {
            this.router.navigate(['/500'])
          }, 500);
  

        });

    } // end condition

  }


  // Submit function
  signIn() {

    this.progress = true;

    // check for email
    if (this.email) {

      // check for password 
      

        let data = {
          email: this.email.toLowerCase(),
          password: this.password
        }

        this.appService.signinFunction(data)
          .subscribe((apiResponse) => {

            if (apiResponse.status === 200) {
              let card = document.getElementById('card');
             // card.classList.add('anime')

              Cookie.set('authtoken', apiResponse.data.authToken);


              this.appService.setUserInfoInLocalStorage(apiResponse.data.userDetails);

              setTimeout(() => {
                this.router.navigate(['/home']);
              }, 500);

            } else if (apiResponse.status === 404) {
              this.progress = false;
              this.snackBar.open(`Email or Password wrong`, "Dismiss", {
                duration: 5000,
              });

            } else {

              this.snackBar.open(`${apiResponse.message}`, "Dismiss", {
                duration: 5000,
              });

            }

          }, (err) => {

            this.snackBar.open(`some error occured`, "Dismiss", {
              duration: 5000,
            });
            
            setTimeout(() => {
              this.router.navigate(['/500'])
            }, 500);
    
          });    
    } else {

      this.snackBar.open(`Please enter a valid Email and Password`, "Dismiss", {
        duration: 5000,
      })

    } // check for email ends here

  }

}
