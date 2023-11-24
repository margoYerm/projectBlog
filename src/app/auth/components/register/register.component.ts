import { Component, OnInit } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { register } from "../../store/actions";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { RouterModule } from "@angular/router";
import { selectIsSubmitting } from "../../store/reducers";
import { AuthStateInterface } from "../../types/authState.interface";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'apm-register',
    templateUrl: './register.component.html',
    standalone: true,    
    imports: [ReactiveFormsModule, RouterModule, CommonModule]
})

export class RegisterComponent {
    form = this.fb.nonNullable.group({
       username: ['', Validators.required],
       email: ['', Validators.required],
       password: ['', Validators.required], 
    })

    isSubmitting$ = this.store.select(selectIsSubmitting)

    constructor(
        private fb: FormBuilder,
        private store: Store,
        // private store: Store<{auth: AuthStateInterface}>,
        // private authService: AuthService
    ) {}  
    
    onSubmit() {
        console.log('form', this.form.getRawValue());

        const request: RegisterRequestInterface = {
            user: this.form.getRawValue()            
        }        

        this.store.dispatch(register({request}))
        // this.authService
        //     .register(request)
        //     .subscribe(res => console.log('Resp', res))
    }    
}

//Commented code is for check request