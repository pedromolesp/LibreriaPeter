import { Component } from '@angular/core';
import {trigger, state, style, animate, keyframes, transition} from '@angular/animations';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    /*trigger('rotatedState', [
      state('default', style({})),
      state('rotated', style({})),
      transition('default <=> rotated', animate('4s', keyframes([
        style({transform: 'rotate(0)',  offset: 0.1}),
        style({transform: 'rotate(90)',  offset: 0.2}),
        style({transform: 'rotate(180)',  offset: 0.3}),
        style({transform: 'rotate(180)',  offset: 0.4}),
        style({transform: 'rotate(360)',  offset: 0.5}),
        style({transform: 'rotate(360)',  offset: 0.6}),
        style({transform: 'rotate(180)',  offset: 0.7}),
        style({transform: 'rotate(180)',  offset: 0.8}),
        style({transform: 'rotate(90)',  offset: 0.9}),
        style({transform: 'rotate(0)',  offset: 1})
      ])))
  ]),
 */

  trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)'})),
      state('rotated', style({ transform: 'rotate(1080deg)'})),
      transition('default <=> rotated', animate('3s ease-in'))
  ]),
  trigger('rotatedState2', [
    state('default', style({})),
    state('rotated', style({})),
    transition('default <=> rotated', animate('4.7s ease-in', keyframes([
      style({opacity: 1}),
      style({opacity: 0.5}),
      style({opacity: 0}),
      style({opacity: 0.5}),
      style({opacity: 1})

    ])))
]),
  ],  
})
export class AppComponent {
  title = 'pruebaAnimacion';
  state: string = 'default';
  state2: string = 'default';
 
  constructor(private route : Router){
  
  }

  
  
    rotate(ruta : string) {
      setTimeout(()=>{    //<<<---    using ()=> syntax
       this.route.navigateByUrl(ruta);
       
      }, 3000);
      this.state2 = (this.state2 === 'default' ? 'rotated' : 'default');
      this.state = (this.state === 'default' ? 'rotated' : 'default');
    }

}
