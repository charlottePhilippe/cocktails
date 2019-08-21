import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import { PanierCocktailsComponent } from './panier-cocktails/panier-cocktails.component';
import { IngredientsListComponent } from './panier-cocktails/ingredients-list/ingredients-list.component';
import { AppRouting } from './app-routing';
import { PanierCocktailsService } from './shared/services/panier.cocktails.service';
import { CocktailEditComponent } from './cocktails-container/cocktail-edit/cocktail-edit.component';
import { FilterPipe } from './shared/pipes/filter.pipe';

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
    ActiveDirective,
    PanierCocktailsComponent,
    IngredientsListComponent,
    CocktailEditComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRouting
  ],
  providers: [PanierCocktailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
