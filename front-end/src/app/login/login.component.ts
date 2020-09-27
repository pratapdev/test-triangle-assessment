import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthenticationService } from "../shared/services";
import { first } from "rxjs/operators";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    ``;
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", Validators.required],
    });
  }

  get f() {
    return this.loginForm.controls;
  }
  getError(el) {
    switch (el) {
      case "username":
        if (this.loginForm.get("username").hasError("required")) {
          return "Username required";
        }
        break;
      case "pass":
        if (this.loginForm.get("password").hasError("required")) {
          return "Password required";
        }
        break;
      default:
        return "";
    }
  }

  onSubmit(post) {
    console.log(post);
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    console.log(this.f.username.value, this.f.password.value);

    this.authenticationService
      .login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          console.log(data);
          if(data.username){
            this.snackBar.open("Login Success","Success", {
              duration: 3000,
            });
          }else{
            this.snackBar.open(data.message,"Failed", {
              duration: 3000,
            });
          }
          localStorage.setItem("isLoggedin", "true");
          this.router.navigate(["/dashboard"]);
        },
        (error) => {
          //localStorage.clear();
          console.log(error);

          this.snackBar.open(error,"Failed", {
            duration: 3000,
          });
          this.error = error;
          this.loading = false;
        }
      );
  }
}
