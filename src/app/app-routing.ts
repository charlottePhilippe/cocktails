import { Route, RouterModule } from '@angular/router';
import { PanierCocktailsComponent } from './panier-cocktails/panier-cocktails.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { CocktailsDetailComponent } from './cocktails-container/cocktails-detail/cocktails-detail.component';
import { CocktailEditComponent } from './cocktails-container/cocktail-edit/cocktail-edit.component';

const routes: Route[] = [
  { path: '', redirectTo: 'cocktails', pathMatch: 'full'},
  { path: 'panier', component: PanierCocktailsComponent},
  { path: 'cocktails', component: CocktailsContainerComponent, children: [
    {path: '', component: CocktailsDetailComponent},
    {path: 'new', component: CocktailEditComponent },
    {path: ':index', component: CocktailsDetailComponent},
    {path: ':index/edit', component: CocktailEditComponent },
    
  ]}
]


export const AppRouting = RouterModule.forRoot(routes);
