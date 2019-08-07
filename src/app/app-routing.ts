import { Route, RouterModule } from '@angular/router';
import { PanierCocktailsComponent } from './panier-cocktails/panier-cocktails.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';

const routes: Route[] = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  { path: 'panier', component: PanierCocktailsComponent},
  { path: 'cocktails', component: CocktailsContainerComponent}
];


export const AppRouting = RouterModule.forRoot(routes);
