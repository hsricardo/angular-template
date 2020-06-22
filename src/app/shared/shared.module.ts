import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExampleComponentComponent } from './components/example/example-component/example-component.component';
import { ExampleScreenComponent } from './screens/example-screen/example-screen.component';

@NgModule({
  declarations: [
    ExampleComponentComponent,
    ExampleScreenComponent
  ],
  imports: [
    CommonModule
  ],
  exports: []
})
export class SharedModule { }

export {
  ExampleScreenComponent
}
