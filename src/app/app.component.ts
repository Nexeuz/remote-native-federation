import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MySharedLibraryService } from 'my-shared-library';

@Component({
  selector: 'remote-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'remote';

 constructor(private mySharedLibraryService: MySharedLibraryService) {
  console.log(this.mySharedLibraryService.getTodos())

 }
}
