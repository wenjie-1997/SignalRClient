import { Component, OnInit } from '@angular/core';
import { AppSignalRService } from './app-signal-rservice.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  receivedMessage: string[] = [];
  chatForm = new FormGroup(
    {
      name: new FormControl(""),
      message: new FormControl(""),
    });

  constructor(private signalRService: AppSignalRService) { }

  ngOnInit(): void {
    this.signalRService.startConnection().subscribe(() => {
      this.signalRService.receiveMessage().subscribe((message) => {
        this.receivedMessage.push(message);
      });
    });
  }

  sendMessage(): void {
    if (this.chatForm.value.message)
      this.signalRService.sendMessage(`${this.chatForm.value.name}: ${this.chatForm.value.message}`);
  }


}
