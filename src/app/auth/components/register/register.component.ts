import { Component, OnInit } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { register } from "../../store/actions";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { RouterModule } from "@angular/router";
import { selectIsSubmitting } from "../../store/reducers";
import { AuthStateInterface } from "../../types/authState.interface";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'apm-register',
    templateUrl: './register.component.html',
    standalone: true,    
    imports: [ReactiveFormsModule, RouterModule, CommonModule]
})

export class RegisterComponent implements OnInit{
    form = this.fb.nonNullable.group({
       username: ['', Validators.required],
       email: ['', Validators.required],
       password: ['', Validators.required], 
    })

    isSubmitting$ = this.store.select(selectIsSubmitting)

    constructor(
        private fb: FormBuilder,
        private store: Store<{auth: AuthStateInterface}>
    ) {}  
    
    ngOnInit(): void {
        //console.log(this.store)
    }  

    onSubmit() {
        console.log('form', this.form.getRawValue());

        const request: RegisterRequestInterface = {
            user: this.form.getRawValue()
        }

        this.store.dispatch(register({request}))
    }    
}