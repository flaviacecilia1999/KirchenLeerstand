import {Component} from '@angular/core';
import {  
  FormControl,
  FormGroup,
  ReactiveFormsModule} from '@angular/forms';
import {Validators} from '@angular/forms';
import {bootstrapApplication} from '@angular/platform-browser';
import { Utilizations } from './utilizations';
import { Tags } from './tags';
import { Types } from './types';

type AnliegendeNutzungenFormRaw = {
   schule: boolean | null;
   altenheim: boolean | null;
   schwimmbad: boolean | null;
   sportplatz: boolean | null;
   gruenflaeche: boolean | null;
};

interface Utilization {
  type: Types
  prio: number;
  strike: boolean;
  label: Utilizations;
  secondaryLabel?: Utilization;
  tags: Array<Tags>;
}

// Tags für die Nutzungen
const tagsForTurnhalle = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.SportNutzung, Tags.Mehrgeschossig, Tags.Rentabel, Tags.ErfordertKeinLicht, Tags.KonstantesPublikum, Tags.ZielgruppeKinder];
const tagsForKletterhalle = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.SportNutzung, Tags.ErfordertKeinLicht, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet, Tags.Konsumfrei];
const tagsForHallenbad = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.SportNutzung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.ZielgruppeKinder, Tags.ZielgruppeSenioren];



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports:[ReactiveFormsModule]
})
export class App {
  utilizations: Array<Utilization> = [];
  utilizationsMain: Array<Utilization> = [];
  utilizationsSecondary: Array<Utilization> = [];
  utilizationsBoth: Array<Utilization> = [];

  showSecondaryUtilization: boolean = true;

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
    this.utilizations.push({type: Types.main, tags: tagsForTurnhalle, prio: 0, strike: false, label: Utilizations.Turnhalle});
    this.utilizations.push({type: Types.main, tags: tagsForKletterhalle, prio: 0, strike: false, label: Utilizations.Kletterhalle});
    this.utilizations.push({type: Types.both, tags: tagsForHallenbad, prio: 0, strike: false, label: Utilizations.Hallenbad, secondaryLabel: Utilizations.Umkleide});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.ZielgruppeKinder, Tags.Rentabel, Tags.ErfordertKeinLicht, Tags.PublikumsMagnet, Tags.Mehrgeschossig], prio: 0, strike: false, label: Utilizations.IndoorSpielplatz});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.KonstantesPublikum, Tags.SportNutzung, Tags.KulturelleEinrichtung, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene], prio: 0, strike: false, label: Utilizations.Tanzschule});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.KonstantesPublikum, Tags.Bildungseinrichtung, Tags.KulturelleEinrichtung, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene], prio: 0, strike: false, label: Utilizations.Musikschule});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KulturelleEinrichtung, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.AtelierUndKreativraum});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Repaircafe});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Sozialcafe});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Jugendtreff});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Sozialhotel});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.ZielgruppeSenioren, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.AltenServiceZentrum});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Gemeindezentrum});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.SozialeEinrichtung, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Sozialkaufhaus});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Vereinszentrum});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.Bildungseinrichtung, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene], prio: 0, strike: false, label: Utilizations.LernUndLeseOrt});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.PublikumsMagnet, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeSenioren], prio: 0, strike: false, label: Utilizations.Bibliothek});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Nachbarschaftsrestaurant});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Veranstaltungsraum});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.CoWorkingSpace});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertLicht, Tags.Mehrgeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.OffenesReligioesesZentrum});
    this.utilizations.push({type: Types.main, tags: [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Stadtpark});
    this.utilizations.push({type: Types.main, tags: [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Gemeinschaftsgarten});
    this.utilizations.push({type: Types.main, tags: [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei, Tags.ZielgruppeKinder], prio: 0, strike: false, label: Utilizations.Spielplatz});
    this.utilizations.push({type: Types.main, tags: [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Marktplatz});
    this.utilizations.push({type: Types.main, tags: [Tags.Aussenraum, Tags.RepraesentativStadt, Tags.SportNutzung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Freibad});
    this.utilizations.push({type: Types.main, tags: [Tags.Aussenraum, Tags.nichtRepraesentativ, Tags.SportNutzung, Tags.KonstantesPublikum, Tags.Konsumfrei, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene], prio: 0, strike: false, label: Utilizations.Sportplatz});
    this.utilizations.push({type: Types.main, tags: [Tags.Aussenraum, Tags.nichtRepraesentativ, Tags.SportNutzung, Tags.KonstantesPublikum, Tags.Rentabel], prio: 0, strike: false, label: Utilizations.Tennisplatz});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ZielgruppeKinder, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.WohngruppeFrauenUndAlleinerziehend});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.WohngruppeJugendliche});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.BetreutesWohnen});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.Rentabel, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.CoHousingProjekt});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.Wohnungslosenunterkunft});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.Gefluechtetenunterkunft});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.Rentabel, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeSenioren, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar], prio: 0, strike: false, label: Utilizations.Mehrgenerationenwohnen});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Rentabel, Tags.ZielgruppeSenioren, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar], prio: 0, strike: false, label: Utilizations.GemeinschaftlichesAlterswohnen});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeKinder, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Kita});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeKinder, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.OffenesGanztagsAngebot});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.ZielgruppeJungeErwachsene, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Universitaetsgebaeude});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.Infrastruktur, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Verwaltungsgebaeude});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeKinder, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.ErweiterungsbauSchule});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeSenioren, Tags.Wohnraumnutzung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.ErweiterungsbauAltenheim});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Volkshochschule});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Theater});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Konzertsaal});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.ZielgruppeJungeErwachsene, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Club});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertLicht, Tags.Mehrgeschossig, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Ausstellungsraum});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei, Tags.ZielgruppeSenioren], prio: 0, strike: false, label: Utilizations.Kolumbarium});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Tafel});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar ], prio: 0, strike: false, label: Utilizations.StudierendenUndAzubiWohnheim});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei], prio: 0, strike: false, label: Utilizations.Gesundheitskiosk});
    this.utilizations.push({type: Types.main, tags: [Tags.RepraesentativStadt, Tags.SportNutzung, Tags.ErfordertKeinLicht, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Eissportfläche});
    this.utilizations.push({type: Types.main, tags: [Tags.Aussenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.Rentabel, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Amphitheater});
    this.utilizations.push({type: Types.main, tags: [Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.Infrastruktur, Tags.Rentabel, Tags.Mehrgeschossig, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.RecyclingZentrum});
    this.utilizations.push({type: Types.main, tags: [Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.Rentabel, Tags.Mehrgeschossig, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Handwerkshof});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.Produktionshalle});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.KonstantesPublikum], prio: 0, strike: false, label: Utilizations.Grossmarkthalle});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.Lagerhalle});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Baumarkt});
    this.utilizations.push({type: Types.main, tags: [Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertLicht, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Gartencenter});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.Moebelhaus});
    this.utilizations.push({type: Types.main, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.Rechenzentrum});
    this.utilizations.push({type: Types.secondary, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.StorageSpace});
    this.utilizations.push({type: Types.secondary, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.BlockHeizkraftwerk});
    this.utilizations.push({type: Types.both, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.Waermepumpenstandort});
    this.utilizations.push({type: Types.both, tags: [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.KeinPublikum], prio: 0, strike: false, label: Utilizations.Batteriespeicher});
    this.utilizations.push({type: Types.both, tags: [Tags.Innenraum, Tags.RepraesentativStadt, Tags.Infrastruktur, Tags.Rentabel, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.PublikumsMagnet], prio: 0, strike: false, label: Utilizations.MobilityHub});
  }

  calcUtilizations(){
    this.intializeUtilizationArray();
    this.processFormative(this.statistik.value.formative);
    this.processAnliegendeNutzungen(this.statistik.getRawValue().anliegendeNutzungen);
    this.processEingang(this.statistik.value.entrance);
    this.processBautyp(this.statistik.value.type);
    this.processDenkmalschutz(this.statistik.value.protection);
    this.processBausubstanz(this.statistik.value.bausubstanz);

    this.processArmutsquotient(this.statistik.value.poverty);
    this.processNachbarschaft(this.statistik.value.stability);
    this.processMigrationshintergrund(this.statistik.value.migration);


    if((this.statistik.value.altersquotient!=="" && this.processAltersquotient(this.statistik.value.altersquotient))
      && (this.statistik.value.jugendquotient!=="" && this.processJugendquotient(this.statistik.value.jugendquotient))
      && (this.statistik.value.youngAdults!=="" && this.processJungeErwachsene(this.statistik.value.youngAdults))){
       this.processDemographicQuotients(); 
    }

    this.utilizationsMain = this.utilizations.filter((item) => 
      item.type===Types.main || item.type===Types.both);
    this.utilizationsSecondary = this.utilizations.filter((item) => item.type===Types.secondary);
  }

  processFormative(this: any, selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "cityFormative":

        this.changePrioOfTag(Tags.RepraesentativStadt, 1);
        this.changePrioOfTag(Tags.PublikumsMagnet, 1);
        this.changePrioOfTag(Tags.KulturelleEinrichtung, 1);
        this.changePrioOfTag(Tags.Bildungseinrichtung, 1);

        this.changePrioOfTag(Tags.KonstantesPublikum, -1);

        this.strikeTag(Tags.RepraesentativQuartier);
        this.strikeTag(Tags.nichtRepraesentativ);
        this.strikeTag(Tags.KeinPublikum);
        break;


      case "quaterFormative":        
        this.changePrioOfTag(Tags.RepraesentativQuartier, 1);
        this.changePrioOfTag(Tags.PublikumsMagnet, 1);
        this.changePrioOfTag(Tags.SozialeEinrichtung, 1);
        this.changePrioOfTag(Tags.SportNutzung, 1);

        this.strikeTag(Tags.nichtRepraesentativ);
        this.strikeTag(Tags.KeinPublikum);
        break;

      case "quaterCityFormative":
        this.changePrioOfTag(Tags.RepraesentativStadt, 1);
        this.changePrioOfTag(Tags.RepraesentativQuartier, 1);
        this.changePrioOfTag(Tags.Bildungseinrichtung, 1);
        this.changePrioOfTag(Tags.KulturelleEinrichtung, 1);
        this.changePrioOfTag(Tags.PublikumsMagnet, 1);
        this.changePrioOfTag(Tags.SozialeEinrichtung, 1);
        this.changePrioOfTag(Tags.SportNutzung, 1);

        this.strikeTag(Tags.nichtRepraesentativ);
        this.strikeTag(Tags.KeinPublikum);
        break;
        
      case "notFormative":
        this.changePrioOfTag(Tags.nichtRepraesentativ, 1);
        this.changePrioOfTag(Tags.Rentabel, 1);
        this.changePrioOfTag(Tags.CashCow, 1);
        this.changePrioOfTag(Tags.Infrastruktur, 1);
        this.changePrioOfTag(Tags.IndustrieUndHandel, 1);
        this.changePrioOfTag(Tags.SozialeEinrichtung, 1);
        this.changePrioOfTag(Tags.KonstantesPublikum, 1);

        this.changePrioOfTag(Tags.RepraesentativQuartier, -1);
        
        this.strikeTag(Tags.RepraesentativStadt);
        this.strikeTag(Tags.PublikumsMagnet);
        break;
    }
  }

  processAnliegendeNutzungen(this: any, selection: AnliegendeNutzungenFormRaw) {
    if(selection == null || selection == undefined){
      return;
    } 
    if(selection.schule){
      this.changePrioOfTag(Tags.Bildungseinrichtung, 1);
      this.changePrioOfTag(Tags.ZielgruppeKinder, 1);
      this.changePrioOfTag(Tags.SportNutzung, 1);
      this.changePrioOfUtilization(Utilizations.ErweiterungsbauSchule, 1);
    } else{
      this.strikeUtilization(Utilizations.ErweiterungsbauSchule);
    }
    
    if(selection.altenheim){
      this.changePrioOfTag(Tags.ZielgruppeSenioren, 1);
      this.changePrioOfUtilization(Utilizations.ErweiterungsbauAltenheim, 1);
    } else{
      this.strikeUtilization(Utilizations.ErweiterungsbauAltenheim);
    }

    if(selection.schwimmbad){
      this.strikeUtilization(Utilizations.Freibad);
      this.strikeUtilization(Utilizations.Hallenbad);
      this.changePrioOfTag(Tags.SportNutzung, 1);
    } else{
    }

    if(selection.sportplatz){
    this.strikeUtilization(Utilizations.Sportplatz);
    this.strikeUtilization(Utilizations.Tennisplatz);
    this.changePrioOfTag(Tags.SportNutzung, 1);
    } else{  
    }
  }

  processEingang(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "ImWestwerk":
        this.changePrioOfUtilization(Utilizations.Kolumbarium, 1);
        this.changePrioOfUtilization(Utilizations.Club, 1);
        this.changePrioOfUtilization(Utilizations.Tanzschule, 1);
        this.changePrioOfUtilization(Utilizations.Musikschule, 1);
        this.changePrioOfUtilization(Utilizations.Universitaetsgebaeude, 1);
        this.changePrioOfUtilization(Utilizations.Verwaltungsgebaeude, 1);
        this.changePrioOfUtilization(Utilizations.ErweiterungsbauAltenheim, 1);
        this.changePrioOfUtilization(Utilizations.ErweiterungsbauSchule, 1);
        this.changePrioOfUtilization(Utilizations.Volkshochschule, 1);
        this.changePrioOfUtilization(Utilizations.Ausstellungsraum, 1);
        this.changePrioOfUtilization(Utilizations.Sozialhotel, 1);
        this.changePrioOfUtilization(Utilizations.Gemeindezentrum, 1);
        this.changePrioOfUtilization(Utilizations.Sozialkaufhaus, 1);
        this.changePrioOfUtilization(Utilizations.Bibliothek, 1);
        this.changePrioOfUtilization(Utilizations.Stadtpark, 1);
        this.changePrioOfUtilization(Utilizations.Marktplatz, 1);
        this.changePrioOfUtilization(Utilizations.RecyclingZentrum, 1);
        this.changePrioOfUtilization(Utilizations.Handwerkshof, 1);
        this.changePrioOfUtilization(Utilizations.Baumarkt, 1);
        this.changePrioOfUtilization(Utilizations.Gartencenter, 1);
        this.changePrioOfUtilization(Utilizations.Moebelhaus, 1);
        this.changePrioOfUtilization(Utilizations.MobilityHub, 1);

        this.changePrioOfTag(Tags.Wohnraumnutzung, 1);

        this.changePrioOfUtilization(Utilizations.AtelierUndKreativraum, 1);
        this.changePrioOfUtilization(Utilizations.LernUndLeseOrt, 1);
        this.changePrioOfUtilization(Utilizations.CoWorkingSpace, 1);
        this.changePrioOfUtilization(Utilizations.Kita, 1);
        this.changePrioOfUtilization(Utilizations.OffenesGanztagsAngebot, 1);
        this.changePrioOfUtilization(Utilizations.Tafel, 1);
        this.changePrioOfUtilization(Utilizations.Gemeinschaftsgarten, 1);
        this.changePrioOfUtilization(Utilizations.Spielplatz, 1);
        
        this.changePrioOfUtilization(Utilizations.Sportplatz, -1);
        this.changePrioOfUtilization(Utilizations.Tennisplatz, -1);
        this.changePrioOfUtilization(Utilizations.Theater, -1);
        this.changePrioOfUtilization(Utilizations.Konzertsaal, -1);
        this.changePrioOfUtilization(Utilizations.Eissportfläche, -1);
        this.changePrioOfUtilization(Utilizations.Amphitheater, -1);
        this.changePrioOfUtilization(Utilizations.Turnhalle, -1);
        this.changePrioOfUtilization(Utilizations.Kletterhalle, -1);
        this.changePrioOfUtilization(Utilizations.Hallenbad, -1);
        this.changePrioOfUtilization(Utilizations.IndoorSpielplatz, -1);
        this.changePrioOfUtilization(Utilizations.Veranstaltungsraum, -1);
        this.changePrioOfUtilization(Utilizations.OffenesReligioesesZentrum, -1);
        this.changePrioOfUtilization(Utilizations.Freibad, -1);
        this.changePrioOfUtilization(Utilizations.BlockHeizkraftwerk, -1);
        this.changePrioOfUtilization(Utilizations.Waermepumpenstandort, -1);
        this.changePrioOfUtilization(Utilizations.StorageSpace, -1);
        this.changePrioOfUtilization(Utilizations.Rechenzentrum, -1);
        this.changePrioOfUtilization(Utilizations.Lagerhalle, -1);
        this.changePrioOfUtilization(Utilizations.Produktionshalle, -1);
        this.changePrioOfUtilization(Utilizations.Grossmarkthalle, -1);
        this.changePrioOfUtilization(Utilizations.Batteriespeicher, -1);

        this.changePrioOfUtilization(Utilizations.Repaircafe, -1);
        this.changePrioOfUtilization(Utilizations.Sozialcafe, -1);
        this.changePrioOfUtilization(Utilizations.Jugendtreff, -1);
        this.changePrioOfUtilization(Utilizations.AltenServiceZentrum, -1);
        this.changePrioOfUtilization(Utilizations.Vereinszentrum, -1);
        this.changePrioOfUtilization(Utilizations.Nachbarschaftsrestaurant, -1);
        this.changePrioOfUtilization(Utilizations.Gesundheitskiosk, -1);


        //and so on
        break;

      case "Seitlich":        
        this.changePrioOfUtilization(Utilizations.Sportplatz, 1);
        this.changePrioOfUtilization(Utilizations.Tennisplatz, 1);
        this.changePrioOfUtilization(Utilizations.Theater, 1);
        this.changePrioOfUtilization(Utilizations.Konzertsaal, 1);
        this.changePrioOfUtilization(Utilizations.Eissportfläche, 1);
        this.changePrioOfUtilization(Utilizations.Amphitheater, 1);
        this.changePrioOfUtilization(Utilizations.Turnhalle, 1);
        this.changePrioOfUtilization(Utilizations.Kletterhalle, 1);
        this.changePrioOfUtilization(Utilizations.Hallenbad, 1);
        this.changePrioOfUtilization(Utilizations.IndoorSpielplatz, 1);
        this.changePrioOfUtilization(Utilizations.Veranstaltungsraum, 1);
        this.changePrioOfUtilization(Utilizations.OffenesReligioesesZentrum, 1);
        this.changePrioOfUtilization(Utilizations.Freibad, 1);
        this.changePrioOfUtilization(Utilizations.BlockHeizkraftwerk, 1);
        this.changePrioOfUtilization(Utilizations.Waermepumpenstandort, 1);
        this.changePrioOfUtilization(Utilizations.StorageSpace, 1);
        this.changePrioOfUtilization(Utilizations.Rechenzentrum, 1);
        this.changePrioOfUtilization(Utilizations.Lagerhalle, 1);
        this.changePrioOfUtilization(Utilizations.Produktionshalle, 1);
        this.changePrioOfUtilization(Utilizations.Grossmarkthalle, 1);
        this.changePrioOfUtilization(Utilizations.Batteriespeicher, 1);

        this.changePrioOfUtilization(Utilizations.Repaircafe, 1);
        this.changePrioOfUtilization(Utilizations.Sozialcafe, 1);
        this.changePrioOfUtilization(Utilizations.Jugendtreff, 1);
        this.changePrioOfUtilization(Utilizations.AltenServiceZentrum, 1);
        this.changePrioOfUtilization(Utilizations.Vereinszentrum, 1);
        this.changePrioOfUtilization(Utilizations.Nachbarschaftsrestaurant, 1);
        this.changePrioOfUtilization(Utilizations.Gesundheitskiosk, 1);

        this.changePrioOfUtilization(Utilizations.Kolumbarium, -1);
        this.changePrioOfUtilization(Utilizations.Club, -1);
        this.changePrioOfUtilization(Utilizations.Tanzschule, -1);
        this.changePrioOfUtilization(Utilizations.Musikschule, -1);
        this.changePrioOfUtilization(Utilizations.Universitaetsgebaeude, -1);
        this.changePrioOfUtilization(Utilizations.Verwaltungsgebaeude, -1);
        this.changePrioOfUtilization(Utilizations.ErweiterungsbauAltenheim, -1);
        this.changePrioOfUtilization(Utilizations.ErweiterungsbauSchule, -1);
        this.changePrioOfUtilization(Utilizations.Volkshochschule, -1);
        this.changePrioOfUtilization(Utilizations.Ausstellungsraum, -1);
        this.changePrioOfUtilization(Utilizations.Sozialhotel, -1);
        this.changePrioOfUtilization(Utilizations.Gemeindezentrum, -1);
        this.changePrioOfUtilization(Utilizations.Sozialkaufhaus, -1);
        this.changePrioOfUtilization(Utilizations.Bibliothek, -1);
        this.changePrioOfUtilization(Utilizations.Stadtpark, -1);
        this.changePrioOfUtilization(Utilizations.Marktplatz, -1);
        this.changePrioOfUtilization(Utilizations.RecyclingZentrum, -1);
        this.changePrioOfUtilization(Utilizations.Handwerkshof, -1);
        this.changePrioOfUtilization(Utilizations.Baumarkt, -1);
        this.changePrioOfUtilization(Utilizations.Gartencenter, -1);
        this.changePrioOfUtilization(Utilizations.Moebelhaus, -1);
        this.changePrioOfUtilization(Utilizations.MobilityHub, -1);

        this.changePrioOfTag(Tags.Wohnraumnutzung, -1);

        this.changePrioOfUtilization(Utilizations.AtelierUndKreativraum, -1);
        this.changePrioOfUtilization(Utilizations.LernUndLeseOrt, -1);
        this.changePrioOfUtilization(Utilizations.CoWorkingSpace, -1);
        this.changePrioOfUtilization(Utilizations.Kita, -1);
        this.changePrioOfUtilization(Utilizations.OffenesGanztagsAngebot, -1);
        this.changePrioOfUtilization(Utilizations.Tafel, -1);
        this.changePrioOfUtilization(Utilizations.Gemeinschaftsgarten, -1);
        this.changePrioOfUtilization(Utilizations.Spielplatz, -1);
        break;
    }
  }
  processBautyp(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "Basilika":
        this.showSecondaryUtilization = true;
        //and so on
        break;

      case "Hallenkirche":
        this.showSecondaryUtilization = true;        
        //and so on
        break;

      case "Saalkirche":        
        this.showSecondaryUtilization = false;
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
        this.changePrioOfTag(Tags.RepraesentativStadt, 1)
        this.changePrioOfTag(Tags.RepraesentativQuartier, 1)
        this.changePrioOfTag(Tags.PublikumsMagnet, 1)
        this.changePrioOfTag(Tags.SozialeEinrichtung, 1)

        this.strikeTag(Tags.KeinPublikum);
        this.strikeTag(Tags.IndustrieUndHandel);

        this.strikeUtilization(Utilizations.Hallenbad);
        this.strikeUtilization(Utilizations.Eissportfläche);
        this.strikeUtilization(Utilizations.Kletterhalle);
        this.strikeUtilization(Utilizations.MobilityHub);
        this.strikeUtilization(Utilizations.Turnhalle);
        this.strikeUtilization(Utilizations.Freibad);
        //and so on
        break;

      case "JaAussen":  
        this.changePrioOfTag(Tags.RepraesentativStadt, 1)
        this.changePrioOfTag(Tags.RepraesentativQuartier, 1)
        this.changePrioOfTag(Tags.PublikumsMagnet, 1)   
        this.changePrioOfTag(Tags.SozialeEinrichtung, 1)   

        this.changePrioOfTag(Tags.KeinPublikum, -1)     

        //and so on
        break;

      case "Nein": 
        this.changePrioOfTag(Tags.CashCow, 1)       
        this.changePrioOfTag(Tags.Rentabel, 1)       
  
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
        this.strikeTag(Tags.Aussenraum);
        //and so on
        break;

      case "Schlecht":        
        this.changePrioOfTag(Tags.Aussenraum, 1);
        //and so on
        break;

      case "SehrSchlecht":
        this.strikeTag(Tags.Innenraum);
      //and so on
        break;
    }
  }

  processAltersquotient(quotient: string | null | undefined): boolean{
    if(quotient == null || quotient == undefined  || quotient === ""){
      return true;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 30){
      this.changePrioOfTag(Tags.ZielgruppeSenioren, 1);
      this.changePrioOfTag(Tags.ZielgruppeKinder, -1);
      this.changePrioOfTag(Tags.ZielgruppeJungeErwachsene, -1);
      return false;
    }
    return true;
  }

  processJugendquotient(quotient: string | null | undefined): boolean{
    if(quotient == null || quotient == undefined || quotient === ""){
      return true;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 40){
      this.changePrioOfTag(Tags.ZielgruppeSenioren, -1);
      this.changePrioOfTag(Tags.ZielgruppeKinder, 1);
      this.changePrioOfTag(Tags.ZielgruppeJungeErwachsene, -1);
      return false;
    }
    return true;
  }

  processJungeErwachsene(quotient: string | null | undefined): boolean{
    if(quotient == null || quotient == undefined  || quotient === ""){
      return true;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 15){
      this.changePrioOfTag(Tags.ZielgruppeSenioren, -1);
      this.changePrioOfTag(Tags.ZielgruppeKinder, -1);
      this.changePrioOfTag(Tags.ZielgruppeJungeErwachsene, 1);
      return false;
    }
    return true;
  }

  processDemographicQuotients(){
    //this.changePrioOfTag(Tags.ErfordertLicht, 1000);
  }

  processArmutsquotient(quotient: string | null | undefined ){
    if(quotient == null || quotient == undefined  || quotient === ""){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 20){
      this.changePrioOfTag(Tags.SozialeEinrichtung, 1);
      this.changePrioOfTag(Tags.Konsumfrei, 1);
      this.changePrioOfTag(Tags.Bildungseinrichtung, 1);
    }
  }

  processNachbarschaft(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined || quotient === ""){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 30){
      this.changePrioOfTag(Tags.SozialeEinrichtung, 1);
      this.changePrioOfTag(Tags.RepraesentativQuartier, 1);
      this.changePrioOfTag(Tags.PublikumsMagnet, 1);
    }
    else {
      //this.changePrioOfTag(Tags.SozialeEinrichtung, 500);
    }
  }

  processMigrationshintergrund(quotient: string | null | undefined){
    if(quotient == null || quotient == undefined || quotient === ""){
      return;
    } 
    let quotientNumber = Number(quotient);
    if(quotientNumber >= 40){
      this.changePrioOfUtilization(Utilizations.Gefluechtetenunterkunft, 1);
      this.changePrioOfTag(Tags.SozialeEinrichtung, 1)
    }
  }
  
  changePrioOfUtilization(searchLabel: Utilizations, newPrio: number){
    this.utilizations[this.findUsageIndex(searchLabel)] = {
      prio: this.utilizations[this.findUsageIndex(searchLabel)].prio + newPrio,
      strike: this.utilizations[this.findUsageIndex(searchLabel)].strike,
      label: this.utilizations[this.findUsageIndex(searchLabel)].label,
      tags: this.utilizations[this.findUsageIndex(searchLabel)].tags,
      type: this.utilizations[this.findUsageIndex(searchLabel)].type
    }
  }

  strikeUtilization(searchLabel: Utilizations){
    this.utilizations[this.findUsageIndex(searchLabel)] = {
      prio: this.utilizations[this.findUsageIndex(searchLabel)].prio,
      strike: true,
      label: this.utilizations[this.findUsageIndex(searchLabel)].label,
      tags: this.utilizations[this.findUsageIndex(searchLabel)].tags,
      type: this.utilizations[this.findUsageIndex(searchLabel)].type
    }
  }

  findUsageIndex(searchLabel: Utilizations): number {
    return this.utilizations.findIndex(i => i.label === searchLabel);
  }

  changePrioOfTag(tag: Tags, newPrio: number) {
    this.utilizations.forEach((element,index) =>{
      if(element.tags.includes(tag)){
        element.prio += newPrio;
        this.utilizations[index] = element
      }
    })
  }

    strikeTag(tag: Tags) {
    this.utilizations.forEach((element,index) =>{
      if(element.tags.includes(tag)){
        element.strike = true;
        this.utilizations[index] = element
      }
    })
  }

}
bootstrapApplication(App);