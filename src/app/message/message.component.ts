import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  constructor(public messageService: MessageService) {}
  //Angular will inject the singleton MessageService into that property when it creates the MessagesComponent.

  ngOnInit(): void {}
}
