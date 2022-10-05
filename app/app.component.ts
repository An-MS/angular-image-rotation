import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  state: number = 0;

  constructor(private renderer: Renderer2) {}

  rotate(rotation: number) {
    const image = document.getElementById('image');
    console.log('rotation', rotation);
    console.log('currentState', this.state);

    let newState = this.state + rotation;

    console.log('newState before fix', newState);

    console.log('newState after fixt', newState);

    this.renderer.setStyle(image, 'transform', `rotate(${newState}deg)`);

    this.state = newState;

    console.log('newCurrentState', newState);
    console.log(
      'calculated',
      newState >= 0 ? newState % 360 : (newState * -3) % 360
    );

    console.log(this.state);
    console.log('hallo');
  }
}
