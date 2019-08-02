import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CocktailsListComponent } from './cocktails-container/cocktails-list/cocktails-list.component';
import { CocktailsDetailComponent } from './cocktails-container/cocktails-detail/cocktails-detail.component';
import { ItemComponent } from './item/item.component';
import { CocktailsContainerComponent } from './cocktails-container/cocktails-container.component';
import { ColorDirective } from './shared/directives/color.directive';
import { AddComponent } from './add/add.component';
import { PanierComponent } from './panier/panier.component';
import { ActiveDirective } from './shared/directives/active.directive';
import { Route, RouterModule } from '@angular/router';


const app_route: Route[] = [
  {path: '', component: AppComponent},
  {path: 'users', component: CocktailsContainerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailsDetailComponent,
    ItemComponent,
    CocktailsContainerComponent,
    ColorDirective,
    AddComponent,
    PanierComponent,
    ActiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(app_route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
