import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  useForm: FormGroup = new FormGroup({});
  submitted = false;
  apiErrorMessages: string[] = [];
  openChat = false;
  constructor(private formBuilder: FormBuilder, private chatService: ChatService) { }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm() {
    this.useForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    })
  }
  submitForm() {
    this.submitted = true;
    this.apiErrorMessages = [];
    if (this.useForm.valid) {
      this.chatService.registerUser(this.useForm.value).subscribe({
        next: () => {
          this.chatService.myName = this.useForm.get('name')?.value;
          this.openChat = true;
          this.useForm.reset();
          this.submitted = false;
        },
        error: error => {
          if (typeof (error.error) !== 'object') {
            this.apiErrorMessages.push(error.error);
          }
        }
      });
    }
  }
  closeChat(){
    this.openChat = false;
  }
}
