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
import { PanierComponent } from './panier/panier.component'

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
    PanierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
