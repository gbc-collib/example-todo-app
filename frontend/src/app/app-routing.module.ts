import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JiraBoardComponent } from 'src/features/todo/jira-board/jira-board.component';

const routes: Routes = [{path:'/', component: JiraBoardComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
