import {Component} from '@angular/core';
import {  
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import {bootstrapApplication} from '@angular/platform-browser';
import { Utilizations } from './utilizations';

type AnliegendeNutzungenFormRaw = {
   schule: boolean | null;
   altenheim: boolean | null;
   schwimmbad: boolean | null;
   sportplatz: boolean | null;
   gruenflaeche: boolean | null;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[ReactiveFormsModule]
})
export class App {
  utilizations: Array<{prio: number; strike: boolean; label: string}> = [];
  statistik = new FormGroup({
    formative: new FormControl('', Validators.required),
    anliegendeNutzungen: new FormGroup({
      schule: new FormControl(false, Validators.required),
      altenheim: new FormControl(false, Validators.required),
      schwimmbad: new FormControl(false, Validators.required),
      sportplatz: new FormControl(false, Validators.required),
      gruenflaeche: new FormControl(false, Validators.required)
    }),  
    entrance: new FormControl('', Validators.required),
    type: new FormControl('', Validators.required),
    protection: new FormControl('', Validators.required),
    bausubstanz: new FormControl('', Validators.required),
    altersquotient: new FormControl('', Validators.required),
    jugendquotient: new FormControl('', Validators.required),
    youngAdults: new FormControl('', Validators.required),
    poverty: new FormControl('', Validators.required),
    stability: new FormControl('', Validators.required),
    migration: new FormControl('', Validators.required), 
  });

  constructor(){
    this.intializeUtilizationArray();
  }

  intializeUtilizationArray(this: any){
    this.utilizations = [];
    this.utilizations.push({prio: 0, strike: false, label: Utilizations.Turnhalle});
    this.utilizations.push({prio: 0, strike: false, label: "Kletterhalle"});
    this.utilizations.push({prio: 0, strike: false, label: "Hallenbad"});
    this.utilizations.push({prio: 0, strike: false, label: "Indoor-Spielplatz"});
    this.utilizations.push({prio: 0, strike: false, label: "Tanzschule"});
    this.utilizations.push({prio: 0, strike: false, label: "Musikschule"});
    this.utilizations.push({prio: 0, strike: false, label: "Atelier- und Kreativraum"});
    this.utilizations.push({prio: 0, strike: false, label: "Repaircafé"});
    this.utilizations.push({prio: 0, strike: false, label: "Sozialcafé"});
    this.utilizations.push({prio: 0, strike: false, label: "Jugendtreff"});
    this.utilizations.push({prio: 0, strike: false, label: "Sozialhotel"});
    this.utilizations.push({prio: 0, strike: false, label: "Alten-Service-Zentrum"});
    this.utilizations.push({prio: 0, strike: false, label: "Gemeindezentrum"});
    this.utilizations.push({prio: 0, strike: false, label: "Sozialkaufhaus"});
    this.utilizations.push({prio: 0, strike: false, label: "Vereinszentrum"});
    this.utilizations.push({prio: 0, strike: false, label: "Lern- und Leseort"});
    this.utilizations.push({prio: 0, strike: false, label: "Bibliothek"});
    this.utilizations.push({prio: 0, strike: false, label: "Nachbarschaftsrestaurant"});
    this.utilizations.push({prio: 0, strike: false, label: "Veranstaltungsraum"});
    this.utilizations.push({prio: 0, strike: false, label: "Co-Working-Space"});
    this.utilizations.push({prio: 0, strike: false, label: "Offenes religiöses Zentrum"});
    this.utilizations.push({prio: 0, strike: false, label: "Stadtpark"});
    this.utilizations.push({prio: 0, strike: false, label: "Gemeinschaftsgarten"});
    this.utilizations.push({prio: 0, strike: false, label: "Spielplatz"});
    this.utilizations.push({prio: 0, strike: false, label: "Marktplatz"});
    this.utilizations.push({prio: 0, strike: false, label: "Freibad"});
    this.utilizations.push({prio: 0, strike: false, label: "Sportplatz"});
    this.utilizations.push({prio: 0, strike: false, label: "Tennisplatz"});
    this.utilizations.push({prio: 0, strike: false, label: "Wohngruppe Frauen und Alleinerziehende"});
    this.utilizations.push({prio: 0, strike: false, label: "Wohngruppe Jugendliche"});
    this.utilizations.push({prio: 0, strike: false, label: "Betreutes Wohnen"});
    this.utilizations.push({prio: 0, strike: false, label: "Co-Housing Projekt"});
    this.utilizations.push({prio: 0, strike: false, label: "Wohnungslosenunterkunft"});
    this.utilizations.push({prio: 0, strike: false, label: "Geflüchtetenunterkunft"});
    this.utilizations.push({prio: 0, strike: false, label: "Mehrgenerationenwohnen"});
    this.utilizations.push({prio: 0, strike: false, label: "Gemeinschaftliches Alterswohnen"});
    this.utilizations.push({prio: 0, strike: false, label: "Kita"});
    this.utilizations.push({prio: 0, strike: false, label: "Offenes Ganztagsangebot"});
    this.utilizations.push({prio: 0, strike: false, label: "Universitätsgebäude"});
    this.utilizations.push({prio: 0, strike: false, label: "Verwaltungsgebäude"});
    this.utilizations.push({prio: 0, strike: false, label: "Erweiterungsbau Schule"});
    this.utilizations.push({prio: 0, strike: false, label: "Erweiterungsbau Altenheim"});
    this.utilizations.push({prio: 0, strike: false, label: "Volkshochschule"});
    this.utilizations.push({prio: 0, strike: false, label: "Theater"});
    this.utilizations.push({prio: 0, strike: false, label: "Konzertsaal"});
    this.utilizations.push({prio: 0, strike: false, label: "Club"});
    this.utilizations.push({prio: 0, strike: false, label: "Ausstellungsraum"});
    this.utilizations.push({prio: 0, strike: false, label: "Kolumbarium"});
    this.utilizations.push({prio: 0, strike: false, label: "Tafel"});
    this.utilizations.push({prio: 0, strike: false, label: "Studierenden- und Azubi-Wohnheim"});
    this.utilizations.push({prio: 0, strike: false, label: "Gesundheitskiosk"});
    this.utilizations.push({prio: 0, strike: false, label: "Eissportfläche"});
    this.utilizations.push({prio: 0, strike: false, label: "Amphitheater"});
    this.utilizations.push({prio: 0, strike: false, label: "Recycling-Zentrum"});
    this.utilizations.push({prio: 0, strike: false, label: "Handwerkshof"});
    this.utilizations.push({prio: 0, strike: false, label: "Produktionshalle"});
    this.utilizations.push({prio: 0, strike: false, label: "Großmarkthalle"});
    this.utilizations.push({prio: 0, strike: false, label: "Lagerhalle"});
    this.utilizations.push({prio: 0, strike: false, label: "Baumarkt"});
    this.utilizations.push({prio: 0, strike: false, label: "Gartencenter"});
    this.utilizations.push({prio: 0, strike: false, label: "Möbelhaus"});
    this.utilizations.push({prio: 0, strike: false, label: "Rechenzentrum"});
    this.utilizations.push({prio: 0, strike: false, label: "Storage Space"});
    this.utilizations.push({prio: 0, strike: false, label: "Block-Heizkraftwerk"});
    this.utilizations.push({prio: 0, strike: false, label: "Wärmepumpenstandort"});
    this.utilizations.push({prio: 0, strike: false, label: "Batteriespeicher"});
    this.utilizations.push({prio: 0, strike: false, label: "Mobility-Hub"});
  }


  calcUtilizations(this: any){
    this.intializeUtilizationArray();
    this.processFormative(this.statistik.value.formative);
    this.processAnliegendeNutzungen(this.statistik.getRawValue().anliegendeNutzungen);
    this.processEingang(this.statistik.value.entrance);
    this.processBautyp(this.statistik.value.type);
    this.processDenkmalschutz(this.statistik.value.protection);
    this.processBausubstanz(this.statistik.value.bausubstanz);
    this.processAltersquotient(this.statistik.value.altersquotient);
    this.processJugendquotient(this.statistik.value.jugendquotient);
    this.processJungeErwachsene(this.statistik.value.youngAdults);
    this.processArmutsquotient(this.statistik.value.poverty);
    this.processNachbarschaft(this.statistik.value.stability);
    this.processMigrationshintergrund(this.statistik.value.migration);
  }

  processFormative(this: any, selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "cityFormative":
        this.changePrioOfUtilization("Kletterhalle", 2);
        this.changePrioOfUtilization("Hallenbad", 2);
        this.changePrioOfUtilization("Freibad", 2);
        this.changePrioOfUtilization("Universitätsgebäude", 2);
        this.changePrioOfUtilization("Volkshochschule", 2);
        this.changePrioOfUtilization("Verwaltungsgebäude", 2);
        this.changePrioOfUtilization("Offenes religiöses Zentrum", 2);
        this.changePrioOfUtilization("Theater", 2);
        this.changePrioOfUtilization("Konzertsaal", 2);
        this.changePrioOfUtilization("Club", 2);
        this.changePrioOfUtilization("Bibliothek", 2);
        this.changePrioOfUtilization("Ausstellungsraum", 2);

        this.strikeUtilization(Utilizations.Turnhalle);
        this.strikeUtilization("Indoor-Spielplatz");
        this.strikeUtilization("Atelier- und Kreativraum");
        this.strikeUtilization("Sozialhotel");
        this.strikeUtilization("Alten-Service-Zentrum");
        this.strikeUtilization("Co-Working-Space");
        this.strikeUtilization("Lern- und Leseort");
        this.strikeUtilization("Spielplatz");
        this.strikeUtilization("Sportplatz");
        this.strikeUtilization("Tennisplatz");
        this.strikeUtilization("Wohngruppe Frauen und Alleinerziehende");
        this.strikeUtilization("Wohngruppe Jugendliche");
        this.strikeUtilization("Co-Housing Projekt");
        this.strikeUtilization("Betreutes Wohnen");
        this.strikeUtilization("Wohnungslosenunterkunft");
        this.strikeUtilization("Geflüchtetenunterkunft");
        this.strikeUtilization("Gemeinschaftliches Alterswohnen");
        this.strikeUtilization("Kita");
        this.strikeUtilization("Offenes Ganztagsangebot");
        this.strikeUtilization("Erweiterungsbau Schule");
        this.strikeUtilization("Erweiterungsbau Altenheim");
        this.strikeUtilization("Kolumbarium");
        this.strikeUtilization("Tafel");
        this.strikeUtilization("Studierenden- und Azubi-Wohnheim");
        this.strikeUtilization("Repaircafé");
        this.strikeUtilization("Sozialcafé");
        this.strikeUtilization("Jugendtreff");
        this.strikeUtilization("Nachbarschaftsrestaurant");
        this.strikeUtilization("Gesundheitskiosk");

        //and so on
        break;
      case "quaterFormative":        
        this.changePrioOfUtilization("Indoor-Spielplatz", 1);
        this.changePrioOfUtilization("Kletterhalle", 1);
        this.changePrioOfUtilization("Hallenbad", 1);
        this.changePrioOfUtilization("Tanzschule", 1);
        this.changePrioOfUtilization("Musikschule", 1);
        this.changePrioOfUtilization("Atelier- und Kreativraum", 1);
        this.changePrioOfUtilization("Repaircafé", 1);
        this.changePrioOfUtilization("Sozialcafé", 1);
        this.changePrioOfUtilization("Jugendtreff", 1);
        this.changePrioOfUtilization("Alten-Service-Zentrum", 1);
        this.changePrioOfUtilization("Gemeindezentrum", 1);
        this.changePrioOfUtilization("Sozialkaufhaus", 1);
        this.changePrioOfUtilization("Vereinszentrum", 1);
        this.changePrioOfUtilization("Lern- und Leseort", 1);
        this.changePrioOfUtilization("Bibliothek", 1);
        this.changePrioOfUtilization("Nachbarschaftsrestaurant", 1);
        this.changePrioOfUtilization("Veranstaltungsraum", 1);
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Ausstellungsraum", 1);
        this.changePrioOfUtilization("Kolumbarium", 1);
        this.changePrioOfUtilization("Tafel", 1);


        this.strikeUtilization("Wohngruppe Frauen und Alleinerziehende");
        this.strikeUtilization("Wohngruppe Jugendliche");
        this.strikeUtilization("Betreutes Wohnen");
        this.strikeUtilization("Co-Housing Projekt");
        this.strikeUtilization("Wohnungslosenunterkunft");
        this.strikeUtilization("Geflüchtetenunterkunft");
        this.strikeUtilization("Gemeinschaftliches Alterswohnen");
        this.strikeUtilization("Studierenden- und Azubi-Wohnheim");

        //and so on
        break;
      case "quaterCityFormative":
        this.changePrioOfUtilization("Indoor-Spielplatz", 1);
        this.changePrioOfUtilization(Utilizations.Turnhalle, 1);
        this.changePrioOfUtilization("Kletterhalle", 1);
        this.changePrioOfUtilization("Hallenbad", 1);
        this.changePrioOfUtilization("Tanzschule", 1);
        this.changePrioOfUtilization("Musikschule", 1);
        this.changePrioOfUtilization("Atelier- und Kreativraum", 1);
        this.changePrioOfUtilization("Repaircafé", 1);
        this.changePrioOfUtilization("Sozialcafé", 1);
        this.changePrioOfUtilization("Jugendtreff", 1);
        this.changePrioOfUtilization("Alten-Service-Zentrum", 1);
        this.changePrioOfUtilization("Gemeindezentrum", 1);
        this.changePrioOfUtilization("Sozialkaufhaus", 1);
        this.changePrioOfUtilization("Vereinszentrum", 1);
        this.changePrioOfUtilization("Lern- und Leseort", 1);
        this.changePrioOfUtilization("Bibliothek", 1);
        this.changePrioOfUtilization("Nachbarschaftsrestaurant", 1);
        this.changePrioOfUtilization("Veranstaltungsraum", 1);
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Universitätsgebäude", 1);
        this.changePrioOfUtilization("Volkshochschule", 1);
        this.changePrioOfUtilization("Verwaltungsgebäude", 1);
        this.changePrioOfUtilization("Offenes religiöses Zentrum", 1);
        this.changePrioOfUtilization("Theater", 1);
        this.changePrioOfUtilization("Konzertsaal", 1);
        this.changePrioOfUtilization("Club", 1);
        this.changePrioOfUtilization("Ausstellungsraum", 1);
        this.changePrioOfUtilization("Kolumbarium", 1);
        this.changePrioOfUtilization("Tafel", 1);
        this.changePrioOfUtilization("Gesundheitskiosk", 1);


        this.strikeUtilization("Wohngruppe Frauen und Alleinerziehende");
        this.strikeUtilization("Wohngruppe Jugendliche");
        this.strikeUtilization("Co-Housing Projekt");
        this.strikeUtilization("Wohnungslosenunterkunft");
        this.strikeUtilization("Geflüchtetenunterkunft");
        this.strikeUtilization("Gemeinschaftliches Alterswohnen");
        this.strikeUtilization("Studierenden- und Azubi-Wohnheim");

        //and so on
        break;
      case "notFormative":
        this.changePrioOfUtilization("Wohngruppe Frauen und Alleinerziehende", 1);
        this.changePrioOfUtilization("Wohngruppe Jugendliche", 1);
        this.changePrioOfUtilization("Betreutes Wohnen", 1);
        this.changePrioOfUtilization("Co-Housing Projekt", 1);
        this.changePrioOfUtilization("Wohnungslosenunterkunft", 1);
        this.changePrioOfUtilization("Geflüchtetenunterkunft", 1);
        this.changePrioOfUtilization("Gemeinschaftliches Alterswohnen", 1);
        this.changePrioOfUtilization("Studierenden- und Azubi-Wohnheim", 1);
        this.changePrioOfUtilization("Erweiterungsbau Schule", 1);
        this.changePrioOfUtilization("Erweiterungsbau Altenheim", 1);
        this.changePrioOfUtilization("Kita", 1);
        this.changePrioOfUtilization("Offenes Ganztagsangebot", 1);
        this.changePrioOfUtilization(Utilizations.Turnhalle, 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Co-Working-Space", 1);


        this.strikeUtilization("Kletterhalle");
        this.strikeUtilization("Hallenbad");
        this.strikeUtilization("Freibad");
        this.strikeUtilization("Universitätsgebäude");
        this.strikeUtilization("Volkshochschule");
        this.strikeUtilization("Verwaltungsgebäude");
        this.strikeUtilization("Offenes religiöses Zentrum");
        this.strikeUtilization("Theater");
        this.strikeUtilization("Konzertsaal");
        this.strikeUtilization("Club");
        this.strikeUtilization("Bibliothek");
        this.strikeUtilization("Ausstellungsraum");
        
        //and so on
        break;
    }
  }

  processAnliegendeNutzungen(this: any, selection: AnliegendeNutzungenFormRaw) {
    if(selection == null || selection == undefined){
      return;
    } 
    if(selection.schule){
      this.changePrioOfUtilization("Turnhalle", 1);
      this.changePrioOfUtilization("Jugendtreff", 1);
      this.changePrioOfUtilization("Lern- und Leseort", 1);
      this.changePrioOfUtilization("Tanzschule", 1);
      this.changePrioOfUtilization("Musikschule", 1);
      this.changePrioOfUtilization("Offenes Ganztagsangebot", 1);
      this.changePrioOfUtilization("Erweiterungsbau Schule", 1);
    } else{
      this.strikeUtilization("Erweiterungsbau Schule");
    }
    
    if(selection.altenheim){
      this.changePrioOfUtilization("Alten-Service-Zentrum", 1);
      this.changePrioOfUtilization("Gemeindezentrum", 1);
      this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
      this.changePrioOfUtilization("Gemeinschaftliches Alterswohnen", 1);
      this.changePrioOfUtilization("Kolumbarium", 1);
      this.changePrioOfUtilization("Erweiterungsbau Altenheim", 1);
    } else{
      this.strikeUtilization("Erweiterungsbau Altenheim");
    }

    if(selection.schwimmbad){
    } else{
      this.strikeUtilization("Freibad");
      this.strikeUtilization("Hallenbad");
    }
     
    if(selection.gruenflaeche){
      this.changePrioOfUtilization("Stadtpark", 1);
      this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
      this.changePrioOfUtilization("Spielplatz", 1);
      this.changePrioOfUtilization("Marktplatz", 1);
      this.changePrioOfUtilization("Sportplatz", 1);
      this.changePrioOfUtilization("Tennisplatz", 1);
    } else{
    }

    if(selection.schwimmbad){
    } else{
      this.strikeUtilization("Sportplatz");
      this.strikeUtilization("Tennisplatz");
    }
  }

  processEingang(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "ImWestwerk":
        this.strikeUtilization("Stadtpark");
        this.strikeUtilization("Gemeinschaftsgarten");
        this.strikeUtilization("Spielplatz");
        this.strikeUtilization("Marktplatz");
        this.strikeUtilization("Freibad");
        this.strikeUtilization("Sportplatz");
        this.strikeUtilization("Tennisplatz");
        //and so on
        break;

      case "Seitlich":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;
    }
  }
  processBautyp(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "Basilika":
        this.strikeUtilization("Stadtpark");
        this.strikeUtilization("Gemeinschaftsgarten");
        this.strikeUtilization("Spielplatz");
        this.strikeUtilization("Marktplatz");
        this.strikeUtilization("Freibad");
        this.strikeUtilization("Sportplatz");
        this.strikeUtilization("Tennisplatz");
        //and so on
        break;

      case "Hallenkirche":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;

      case "Saalkirche":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;
    }
  }

  processDenkmalschutz(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "Ja":
        this.strikeUtilization("Stadtpark");
        this.strikeUtilization("Gemeinschaftsgarten");
        this.strikeUtilization("Spielplatz");
        this.strikeUtilization("Marktplatz");
        this.strikeUtilization("Freibad");
        this.strikeUtilization("Sportplatz");
        this.strikeUtilization("Tennisplatz");
        //and so on
        break;

      case "JaAussen":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;

      case "Nein":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;
    }
  }


   processBausubstanz(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "Gut":
        this.strikeUtilization("Stadtpark");
        this.strikeUtilization("Gemeinschaftsgarten");
        this.strikeUtilization("Spielplatz");
        this.strikeUtilization("Marktplatz");
        this.strikeUtilization("Freibad");
        this.strikeUtilization("Sportplatz");
        this.strikeUtilization("Tennisplatz");
        //and so on
        break;

      case "Schlecht":        
        this.changePrioOfUtilization("Stadtpark", 1);
        this.changePrioOfUtilization("Gemeinschaftsgarten", 1);
        this.changePrioOfUtilization("Spielplatz", 1);
        this.changePrioOfUtilization("Marktplatz", 1);
        this.changePrioOfUtilization("Freibad", 1);
        this.changePrioOfUtilization("Sportplatz", 1);
        this.changePrioOfUtilization("Tennisplatz", 1);
        //and so on
        break;

      case "SehrSchlecht":
        this.strikeUtilization("Turnhalle");
        this.strikeUtilization("Hallenbad");
        this.strikeUtilization("Indoor Spielplatz");
        this.strikeUtilization("Tanzschule");
        this.strikeUtilization("Musikschule");
        this.strikeUtilization("Atelier- und Kreativraum");
        this.strikeUtilization("Sozialcafé");
        this.strikeUtilization("Repaircafé");
        this.strikeUtilization("Jugendtreff");
        this.strikeUtilization("Sozialhotel");
        this.strikeUtilization("Alten-Service-Zentrum");
        this.strikeUtilization("Gemeindezentrum");
        this.strikeUtilization("Sozialkaufhaus");
        this.strikeUtilization("Vereinszentrum");
        this.strikeUtilization("Lern- und Leseort");
        this.strikeUtilization("Bibliothek");
        this.strikeUtilization("Nachbarschaftsrestaurant");
        this.strikeUtilization("Veranstaltungsraum");
        this.strikeUtilization("Co-Working-Space");
        this.strikeUtilization("Wohngruppe Frauen und Alleinerziehende");
        this.strikeUtilization("Wohngruppe Jugendliche");
        this.strikeUtilization("Betreutes Wohnen");
        this.strikeUtilization("Co-Housing Projekt");
        this.strikeUtilization("Wohnungslosenunterkunft");
        this.strikeUtilization("Geflüchtetenunterkunft");
        this.strikeUtilization("Gemeinschaftliches Alterswohnen");
        this.strikeUtilization("Offenes Ganztagsangebot");
        this.strikeUtilization("Universitätsgebäude");
        this.strikeUtilization("Verwaltungsgebäude");
        this.strikeUtilization("Erweiterungsbau Schule");
        this.strikeUtilization("Erweiterungsbau Altenheim");
        this.strikeUtilization("Volkshochschule");
        this.strikeUtilization("Konzertsaal");
        this.strikeUtilization("Club");
        this.strikeUtilization("Ausstellungsraum");
        this.strikeUtilization("Tafel");
        this.strikeUtilization("Studierenden- und Azubi-Wohnheim");
      //and so on
        break;
    }
  }

  processAltersquotient(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 30){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }

  processJugendquotient(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 40){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }

    processJungeErwachsene(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 15){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }

  processArmutsquotient(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 20){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }

  processNachbarschaft(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 30){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }

  processMigrationshintergrund(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 40){
      this.changePrioOfUtilization("Indoor-Spielplatz", 1);
      this.changePrioOfUtilization("Kletterhalle", 1);
      this.changePrioOfUtilization("Hallenbad", 1);
    }
  }
  
  changePrioOfUtilization(searchLabel: String, newPrio: number){
    this.utilizations[this.findUsageIndex(searchLabel)] = {
      prio: this.utilizations[this.findUsageIndex(searchLabel)].prio + newPrio,
      strike: this.utilizations[this.findUsageIndex(searchLabel)].strike,
      label: this.utilizations[this.findUsageIndex(searchLabel)].label
    }
  }

  strikeUtilization(searchLabel: String){
    this.utilizations[this.findUsageIndex(searchLabel)] = {
      prio: this.utilizations[this.findUsageIndex(searchLabel)].prio,
      strike: true,
      label: this.utilizations[this.findUsageIndex(searchLabel)].label
    }
  }

  findUsageIndex(searchLabel: String): number {
    return this.utilizations.findIndex(i => i.label === searchLabel);
  }

}
bootstrapApplication(App);