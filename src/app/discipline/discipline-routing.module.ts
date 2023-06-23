import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisciplineComponent } from './discipline/discipline.component';

const routes: Routes = [
  {
    path: '',
    component: DisciplineComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplineRoutingModule {}
