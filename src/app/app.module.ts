import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WidgetContainerComponent } from './widget-container/widget-container.component';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ContinentsComponent } from './continents/continents.component';
import { PlanetsComponent } from './planets/planets.component';
import { MoonsComponent } from './moons/moons.component';
import { NebulaComponent } from './nebula/nebula.component';
import { GalaxiesComponent } from './galaxies/galaxies.component';
import { StarsComponent } from './stars/stars.component';
import { EarthComponent } from './earth/earth.component';
import { MarsComponent } from './mars/mars.component';
import { VenusComponent } from './venus/venus.component';
import { MercuryComponent } from './mercury/mercury.component';

import { JupiterComponent } from './jupiter/jupiter.component';
import { SpainComponent } from './spain/spain.component';
import { FranceComponent } from './france/france.component';
import { EnglandComponent } from './england/england.component';
import { NewZelandComponent } from './new-zeland/new-zeland.component';
import { PortugalComponent } from './portugal/portugal.component';
import { ParisComponent } from './paris/paris.component';
import { BordeauxComponent } from './bordeaux/bordeaux.component';
import { DimensionsComponent } from './dimensions/dimensions.component';
import { SimulatedRealityComponent } from './simulated-reality/simulated-reality.component';
import { ParallelEarthComponent } from './parallel-earth/parallel-earth.component';
import { TrillionGalaxiesComponent } from './trillion-galaxies/trillion-galaxies.component';
import { TrillionGalaxiesComponent } from './trillion-galaxies/trillion-galaxies.component';
import { ParallelEarthComponent } from './parallel-earth/parallel-earth.component';
import { TrillionGalaxiesComponent } from './trillion-galaxies/trillion-galaxies.component';

// new comment for second commit

@NgModule({
  declarations: [
    AppComponent,
    WidgetContainerComponent,
    ContinentsComponent,
    PlanetsComponent,
    MoonsComponent,
    NebulaComponent,
    PlanetsComponent,
    GalaxiesComponent,
    StarsComponent,
    EarthComponent,
    MarsComponent,
    VenusComponent,
    MercuryComponent,
    VenusComponent,
    JupiterComponent,
    SpainComponent,
    FranceComponent,
    EnglandComponent,
    NewZelandComponent,
    PortugalComponent,
    BordeauxComponent,
    PortugalComponent,
    ParisComponent,
    SimulatedRealityComponent,
    ParisComponent,
    DimensionsComponent,
    TrillionGalaxiesComponent,
    ParallelEarthComponent

  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
