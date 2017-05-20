import { Component,Input,trigger, state, animate, transition, style } from '@angular/core'
@Component({
  selector: 'message-error',
  templateUrl: './message-error.html',
  styleUrls: ['./message-error.css'],
  animations: [
    trigger('isVisibleChanged', [
      state('true' , style({ opacity: 0, transform: 'translateY(-100%)' })),
      state('false', style({ opacity: 1, transform: 'translateY(0)'  })),
      transition('1 => 0', animate('300ms')),
      transition('0 => 1', animate('900ms'))
    ])
  ]
})

export class MessageError{

  private ErrosDescription : string
  private showAlert : boolean

  constructor() {
    this.showAlert = false
  }


  public addAlert(errorCode: string): void {

    this.ErrosDescription = errorCode
    this.showAlert = true
    setTimeout(()=>{this.showAlert = false}, 3000);

  }
}
