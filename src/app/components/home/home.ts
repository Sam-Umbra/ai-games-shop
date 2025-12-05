import { Component, signal, WritableSignal } from '@angular/core';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  name:string = "Samuel";
  imgUrl:string = "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg";
  count = signal(0);

  handleClick:Function = () => {
    this.count.update(count => count += 1);
  }
}