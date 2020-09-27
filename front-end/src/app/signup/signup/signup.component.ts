import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material";
import { Router } from "@angular/router";
import { RegisterService } from "../services/register.service";
import { ConfirmPasswordValidator } from "./../../shared/validators";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted: boolean = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private regSer: RegisterService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        username: ["", [Validators.required]],
        email: [
          "",
          [
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
          ],
        ],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmpassword: ["", [Validators.required, Validators.minLength(6)]],
        displayName: ["", [Validators.required, Validators.minLength(3)]],
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        nickName: [""],
        website: [""],
        bio: [""],
        jabber: [""],
        aolIm: [""],
        yahooIm: [""],
      },
      {
        validator: ConfirmPasswordValidator("password", "confirmpassword"),
      }
    );
  }

  get username() {
    return this.registerForm.get("username");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get("password");
  }
  get confirmpassword() {
    return this.registerForm.get("confirmpassword");
  }
  get displayName() {
    return this.registerForm.get("displayName");
  }
  get firstName() {
    return this.registerForm.get("firstName");
  }

  get lastName() {
    return this.registerForm.get("lastName");
  }
  get nickName() {
    return this.registerForm.get("nickName");
  }
  get website() {
    return this.registerForm.get("website");
  }
  get bio() {
    return this.registerForm.get("bio");
  }
  get jabber() {
    return this.registerForm.get("jabber");
  }
  get aolIm() {
    return this.registerForm.get("aolIm");
  }
  get yahooIm() {
    return this.registerForm.get("yahooIm");
  }

  onSubmit(formValue) {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    console.log(formValue);
    var req = {
      firstName: formValue.firstName,
      lastName: formValue.lastName,
      username: formValue.username,
      password: formValue.password,
    };
    this.regSer.register(req).subscribe((res: any) => {
      console.log(res);
      if(res.statusCode == 200){
        this.snackBar.open(res.message,"success", {
          duration: 3000,
        });
        this.router.navigate(["/login"]);
      }else{
        this.snackBar.open(res.message,"failure", {
          duration: 3000,
        });
      }
    });

  }
}
