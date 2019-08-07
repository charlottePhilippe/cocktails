import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PanierCocktailsComponent } from './panier-cocktails/panier-cocktails.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';

const routes: Routes = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  { path: 'panier', component: PanierCocktailsComponent},
  { path: 'cocktails', component: CocktailsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
