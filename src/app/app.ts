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
const tagsForIndoorSpielplatz = [Tags.Innenraum, Tags.ZielgruppeKinder, Tags.Rentabel, Tags.ErfordertKeinLicht, Tags.PublikumsMagnet, Tags.Mehrgeschossig];
const tagsForTanzschule = [Tags.Innenraum, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.KonstantesPublikum, Tags.SportNutzung, Tags.KulturelleEinrichtung, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene];
const tagsForMusikschule = [Tags.Innenraum, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.KonstantesPublikum, Tags.Bildungseinrichtung, Tags.KulturelleEinrichtung, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene];
const tagsForAtelier = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KulturelleEinrichtung, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei];
const tagsForRepaircafe = [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei];
const tagsForSozialcafe = [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei];
const tagsForJugendtreff = [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.Konsumfrei];
const tagsForSozialhotel = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum];
const tagsForASZ = [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.ZielgruppeSenioren, Tags.Konsumfrei];
const tagsForGemeindezentrum = [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei];
const tagsForSozialkaufhaus = [Tags.Innenraum, Tags.SozialeEinrichtung, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.KonstantesPublikum];
const tagsForVereinszentrum = [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei];
const tagsForLernUndLeseort = [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.Bildungseinrichtung, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene];
const tagsForBibliothek = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.PublikumsMagnet, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeSenioren];
const tagsForNachbarschaftsrestaurant = [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Rentabel, Tags.PublikumsMagnet];
const tagsForVeranstaltungssraum = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet];
const tagsForCoWorkingSpace = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum];
const tagsForOffenReligioesesZentrum = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertLicht, Tags.Mehrgeschossig, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei];
const tagsForStadtpark = [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei];
const tagsForGemeinschaftsgarten = [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.KonstantesPublikum, Tags.Konsumfrei];
const tagsForSpielplatz = [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet, Tags.Konsumfrei, Tags.ZielgruppeKinder];
const tagsForMarktplatz = [Tags.Aussenraum, Tags.RepraesentativQuartier, Tags.Rentabel, Tags.PublikumsMagnet];
const tagsFürFreibad = [Tags.Aussenraum, Tags.RepraesentativStadt, Tags.SportNutzung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.PublikumsMagnet];
const tagsForSportplatz = [Tags.Aussenraum, Tags.nichtRepraesentativ, Tags.SportNutzung, Tags.KonstantesPublikum, Tags.Konsumfrei, Tags.ZielgruppeKinder, Tags.ZielgruppeJungeErwachsene];
const tagsForTennisplatz = [Tags.Aussenraum, Tags.nichtRepraesentativ, Tags.SportNutzung, Tags.KonstantesPublikum, Tags.Rentabel];
const tagsForWohnenFrauenAlleinerziehende = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ZielgruppeKinder, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar];
const tagsForWohnenJugendliche = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar];
const tagsForBetreutesWohnen = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar];
const tagsForCoHousing = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.Rentabel, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar];
const tagsForWohnungslosenunterkunft = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar];
const tagsForGefluechtetenunterkunft = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeKinder, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar];
const tagsForMehrgenerationenwohnen = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.Rentabel, Tags.ZielgruppeJungeErwachsene, Tags.ZielgruppeSenioren, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar];
const tagsForGemeinschaftlichesAlterswohen = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.SozialeEinrichtung, Tags.Rentabel, Tags.ZielgruppeSenioren, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar];
const tagsForKita = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeKinder, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.KonstantesPublikum];
const tagsForOGS = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeKinder, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.KonstantesPublikum];
const tagsForUnigebaeude = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.ZielgruppeJungeErwachsene, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum];
const tagsForVerwaltungsgebeaude = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.Infrastruktur, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.PublikumsMagnet];
const tagsForErweiterungSchule = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeKinder, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum];
const tagsForErweiterungAltenheim = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.ZielgruppeSenioren, Tags.Wohnraumnutzung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum];
const tagsForVHS = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.Bildungseinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KonstantesPublikum];
const tagsForTheater = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet];
const tagsForKonzertsaal = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet];
const tagsForClub = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.ZielgruppeJungeErwachsene, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Rentabel, Tags.PublikumsMagnet];
const tagsForAusstellungsraum = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertLicht, Tags.Mehrgeschossig, Tags.Eingeschossig, Tags.Stapelbar, Tags.Rentabel, Tags.PublikumsMagnet];
const tagsForKolumbarium = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei, Tags.ZielgruppeSenioren];
const tagsForTafel = [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei];
const tagsForStudiUndAzubiWohnheim = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Wohnraumnutzung, Tags.Finanzierungsbedarf, Tags.ZielgruppeJungeErwachsene, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Stapelbar];
const tagsForGesundheitskiosk = [Tags.Innenraum, Tags.RepraesentativQuartier, Tags.SozialeEinrichtung, Tags.ErfordertLicht, Tags.Eingeschossig, Tags.Finanzierungsbedarf, Tags.KonstantesPublikum, Tags.Konsumfrei];
const tagsForEissportfläche = [Tags.RepraesentativStadt, Tags.SportNutzung, Tags.ErfordertKeinLicht, Tags.Finanzierungsbedarf, Tags.PublikumsMagnet];
const tagsForAmphitheater = [Tags.Aussenraum, Tags.RepraesentativStadt, Tags.KulturelleEinrichtung, Tags.Rentabel, Tags.PublikumsMagnet];
const tagsForRecyclingZentrum = [Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.Rentabel, Tags.Mehrgeschossig, Tags.KonstantesPublikum];
const tagsForHandwerkshof = [Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.Rentabel, Tags.Mehrgeschossig, Tags.KonstantesPublikum];
const tagsForProduktionshalle = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.KeinPublikum];
const tagsForGrossmarkthalle = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.KonstantesPublikum];
const tagsForLagerhalle = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.KeinPublikum];
const tagsForBaumarkt = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.PublikumsMagnet];
const tagsForGartencenter = [Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertLicht, Tags.PublikumsMagnet];
const tagsForMoebelhaus = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.IndustrieUndHandel, Tags.CashCow, Tags.Mehrgeschossig, Tags.ErfordertKeinLicht, Tags.PublikumsMagnet];
const tagsForRechenzentrum = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KeinPublikum];
const tagsForStorageSpace = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.KeinPublikum];
const tagsForHeizkraftwerk = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.KeinPublikum];
const tagsForWaermepumpe = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.KeinPublikum];
const tagsForBatteriespeicher = [Tags.Innenraum, Tags.nichtRepraesentativ, Tags.Infrastruktur, Tags.CashCow, Tags.ErfordertKeinLicht, Tags.Mehrgeschossig, Tags.KeinPublikum];
const tagsForMobilityHub = [Tags.Innenraum, Tags.RepraesentativStadt, Tags.Infrastruktur, Tags.Rentabel, Tags.ErfordertKeinLicht, Tags.Eingeschossig, Tags.Stapelbar, Tags.PublikumsMagnet];
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
    this.utilizations.push({type: Types.both, tags: tagsForTurnhalle, prio: 0, strike: false, label: Utilizations.Turnhalle, secondaryLabel: Utilizations.Umkleide});
    this.utilizations.push({type: Types.both, tags: tagsForKletterhalle, prio: 0, strike: false, label: Utilizations.Kletterhalle, secondaryLabel: Utilizations.Umkleide});
    this.utilizations.push({type: Types.both, tags: tagsForHallenbad, prio: 0, strike: false, label: Utilizations.Hallenbad, secondaryLabel: Utilizations.Umkleide});
    this.utilizations.push({type: Types.main, tags: tagsForIndoorSpielplatz, prio: 0, strike: false, label: Utilizations.IndoorSpielplatz});
    this.utilizations.push({type: Types.main, tags: tagsForTanzschule, prio: 0, strike: false, label: Utilizations.Tanzschule});
    this.utilizations.push({type: Types.main, tags: tagsForMusikschule, prio: 0, strike: false, label: Utilizations.Musikschule});
    this.utilizations.push({type: Types.secondary, tags: tagsForAtelier, prio: 0, strike: false, label: Utilizations.AtelierUndKreativraum});
    this.utilizations.push({type: Types.secondary, tags: tagsForRepaircafe, prio: 0, strike: false, label: Utilizations.Repaircafe});
    this.utilizations.push({type: Types.secondary, tags: tagsForSozialcafe, prio: 0, strike: false, label: Utilizations.Sozialcafe});
    this.utilizations.push({type: Types.secondary, tags: tagsForJugendtreff, prio: 0, strike: false, label: Utilizations.Jugendtreff});
    this.utilizations.push({type: Types.main, tags: tagsForSozialhotel, prio: 0, strike: false, label: Utilizations.Sozialhotel});
    this.utilizations.push({type: Types.secondary, tags: tagsForASZ, prio: 0, strike: false, label: Utilizations.AltenServiceZentrum});
    this.utilizations.push({type: Types.main, tags: tagsForGemeindezentrum, prio: 0, strike: false, label: Utilizations.Gemeindezentrum});
    this.utilizations.push({type: Types.main, tags: tagsForSozialkaufhaus, prio: 0, strike: false, label: Utilizations.Sozialkaufhaus});
    this.utilizations.push({type: Types.secondary, tags: tagsForVereinszentrum, prio: 0, strike: false, label: Utilizations.Vereinszentrum});
    this.utilizations.push({type: Types.secondary, tags: tagsForLernUndLeseort, prio: 0, strike: false, label: Utilizations.LernUndLeseOrt});
    this.utilizations.push({type: Types.main, tags: tagsForBibliothek, prio: 0, strike: false, label: Utilizations.Bibliothek});
    this.utilizations.push({type: Types.secondary, tags: tagsForNachbarschaftsrestaurant, prio: 0, strike: false, label: Utilizations.Nachbarschaftsrestaurant});
    this.utilizations.push({type: Types.main, tags: tagsForVeranstaltungssraum, prio: 0, strike: false, label: Utilizations.Veranstaltungsraum});
    this.utilizations.push({type: Types.secondary, tags: tagsForCoWorkingSpace, prio: 0, strike: false, label: Utilizations.CoWorkingSpace});
    this.utilizations.push({type: Types.main, tags: tagsForOffenReligioesesZentrum, prio: 0, strike: false, label: Utilizations.OffenesReligioesesZentrum});
    this.utilizations.push({type: Types.main, tags: tagsForStadtpark, prio: 0, strike: false, label: Utilizations.Stadtpark});
    this.utilizations.push({type: Types.secondary, tags: tagsForGemeinschaftsgarten, prio: 0, strike: false, label: Utilizations.Gemeinschaftsgarten});
    this.utilizations.push({type: Types.secondary, tags: tagsForSpielplatz, prio: 0, strike: false, label: Utilizations.Spielplatz});
    this.utilizations.push({type: Types.main, tags: tagsForMarktplatz, prio: 0, strike: false, label: Utilizations.Marktplatz});
    this.utilizations.push({type: Types.both, tags: tagsFürFreibad, prio: 0, strike: false, label: Utilizations.Freibad, secondaryLabel: Utilizations.Umkleide});
    this.utilizations.push({type: Types.both, tags: tagsForSportplatz, prio: 0, strike: false, label: Utilizations.Sportplatz, secondaryLabel: Utilizations.Umkleide});
    this.utilizations.push({type: Types.both, tags: tagsForTennisplatz, prio: 0, strike: false, label: Utilizations.Tennisplatz, secondaryLabel: Utilizations.Umkleide});
    this.utilizations.push({type: Types.main, tags: tagsForWohnenFrauenAlleinerziehende, prio: 0, strike: false, label: Utilizations.WohngruppeFrauenUndAlleinerziehend});
    this.utilizations.push({type: Types.main, tags: tagsForWohnenJugendliche, prio: 0, strike: false, label: Utilizations.WohngruppeJugendliche});
    this.utilizations.push({type: Types.main, tags: tagsForBetreutesWohnen, prio: 0, strike: false, label: Utilizations.BetreutesWohnen});
    this.utilizations.push({type: Types.main, tags: tagsForCoHousing, prio: 0, strike: false, label: Utilizations.CoHousingProjekt});
    this.utilizations.push({type: Types.main, tags: tagsForWohnungslosenunterkunft, prio: 0, strike: false, label: Utilizations.Wohnungslosenunterkunft});
    this.utilizations.push({type: Types.main, tags: tagsForGefluechtetenunterkunft, prio: 0, strike: false, label: Utilizations.Gefluechtetenunterkunft});
    this.utilizations.push({type: Types.main, tags: tagsForMehrgenerationenwohnen, prio: 0, strike: false, label: Utilizations.Mehrgenerationenwohnen});
    this.utilizations.push({type: Types.main, tags: tagsForGemeinschaftlichesAlterswohen, prio: 0, strike: false, label: Utilizations.GemeinschaftlichesAlterswohnen});
    this.utilizations.push({type: Types.secondary, tags: tagsForKita, prio: 0, strike: false, label: Utilizations.Kita});
    this.utilizations.push({type: Types.secondary, tags: tagsForOGS, prio: 0, strike: false, label: Utilizations.OffenesGanztagsAngebot});
    this.utilizations.push({type: Types.main, tags: tagsForUnigebaeude, prio: 0, strike: false, label: Utilizations.Universitaetsgebaeude});
    this.utilizations.push({type: Types.main, tags: tagsForVerwaltungsgebeaude, prio: 0, strike: false, label: Utilizations.Verwaltungsgebaeude});
    this.utilizations.push({type: Types.main, tags: tagsForErweiterungSchule, prio: 0, strike: false, label: Utilizations.ErweiterungsbauSchule});
    this.utilizations.push({type: Types.main, tags: tagsForErweiterungAltenheim, prio: 0, strike: false, label: Utilizations.ErweiterungsbauAltenheim});
    this.utilizations.push({type: Types.main, tags: tagsForVHS, prio: 0, strike: false, label: Utilizations.Volkshochschule});
    this.utilizations.push({type: Types.both, tags: tagsForTheater, prio: 0, strike: false, label: Utilizations.Theater, secondaryLabel: Utilizations.Backstage});
    this.utilizations.push({type: Types.both, tags: tagsForKonzertsaal, prio: 0, strike: false, label: Utilizations.Konzertsaal, secondaryLabel: Utilizations.Backstage});
    this.utilizations.push({type: Types.main, tags: tagsForClub, prio: 0, strike: false, label: Utilizations.Club});
    this.utilizations.push({type: Types.main, tags: tagsForAusstellungsraum, prio: 0, strike: false, label: Utilizations.Ausstellungsraum});
    this.utilizations.push({type: Types.main, tags: tagsForKolumbarium, prio: 0, strike: false, label: Utilizations.Kolumbarium});
    this.utilizations.push({type: Types.secondary, tags: tagsForTafel, prio: 0, strike: false, label: Utilizations.Tafel});
    this.utilizations.push({type: Types.main, tags: tagsForStudiUndAzubiWohnheim, prio: 0, strike: false, label: Utilizations.StudierendenUndAzubiWohnheim});
    this.utilizations.push({type: Types.secondary, tags: tagsForGesundheitskiosk, prio: 0, strike: false, label: Utilizations.Gesundheitskiosk});
    this.utilizations.push({type: Types.main, tags: tagsForEissportfläche, prio: 0, strike: false, label: Utilizations.Eissportfläche, secondaryLabel: Utilizations.Umkleide});
    this.utilizations.push({type: Types.main, tags: tagsForAmphitheater, prio: 0, strike: false, label: Utilizations.Amphitheater});
    this.utilizations.push({type: Types.main, tags: tagsForRecyclingZentrum, prio: 0, strike: false, label: Utilizations.RecyclingZentrum});
    this.utilizations.push({type: Types.main, tags: tagsForHandwerkshof, prio: 0, strike: false, label: Utilizations.Handwerkshof});
    this.utilizations.push({type: Types.main, tags: tagsForProduktionshalle, prio: 0, strike: false, label: Utilizations.Produktionshalle});
    this.utilizations.push({type: Types.main, tags: tagsForGrossmarkthalle, prio: 0, strike: false, label: Utilizations.Grossmarkthalle});
    this.utilizations.push({type: Types.main, tags: tagsForLagerhalle, prio: 0, strike: false, label: Utilizations.Lagerhalle});
    this.utilizations.push({type: Types.main, tags: tagsForBaumarkt, prio: 0, strike: false, label: Utilizations.Baumarkt});
    this.utilizations.push({type: Types.main, tags: tagsForGartencenter, prio: 0, strike: false, label: Utilizations.Gartencenter});
    this.utilizations.push({type: Types.main, tags: tagsForMoebelhaus, prio: 0, strike: false, label: Utilizations.Moebelhaus});
    this.utilizations.push({type: Types.main, tags: tagsForRechenzentrum, prio: 0, strike: false, label: Utilizations.Rechenzentrum});
    this.utilizations.push({type: Types.main, tags: tagsForStorageSpace, prio: 0, strike: false, label: Utilizations.StorageSpace});
    this.utilizations.push({type: Types.main, tags: tagsForHeizkraftwerk, prio: 0, strike: false, label: Utilizations.BlockHeizkraftwerk});
    this.utilizations.push({type: Types.both, tags: tagsForWaermepumpe, prio: 0, strike: false, label: Utilizations.Waermepumpenstandort});
    this.utilizations.push({type: Types.both, tags: tagsForBatteriespeicher, prio: 0, strike: false, label: Utilizations.Batteriespeicher});
    this.utilizations.push({type: Types.both, tags: tagsForMobilityHub, prio: 0, strike: false, label: Utilizations.MobilityHub});
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
      item.type===Types.main || item.type===Types.both)
        .sort(this.sortPrio())
        .sort(this.sortStrike());
    this.utilizationsSecondary = this.utilizations.filter((item) => item.type===Types.secondary)
        .sort(this.sortPrio())
        .sort(this.sortStrike());
  }

  private sortStrike(): ((a: Utilization, b: Utilization) => number) | undefined {
    return (a, b) => (a.strike < b.strike ? -1 : 1);
  }

  private sortPrio(): ((a: Utilization, b: Utilization) => number) | undefined {
    return (a, b) => (a.prio < b.prio ? -1 : 1);
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
        this.changePrioOfTag(Tags.Eingeschossig, 1);
        this.changePrioOfTag(Tags.ErfordertLicht, 1);
        this.changePrioOfTag(Tags.Mehrgeschossig, 1);
        break;

      case "Hallenkirche":
        this.showSecondaryUtilization = true;
        this.changePrioOfTag(Tags.Stapelbar, 1);      
        this.changePrioOfTag(Tags.ErfordertKeinLicht, 1);            
        this.changePrioOfTag(Tags.Mehrgeschossig, 1);      
        break;

      case "Saalkirche":        
        this.showSecondaryUtilization = false;
        this.changePrioOfTag(Tags.Mehrgeschossig, 1);
        this.changePrioOfTag(Tags.Stapelbar, 1);
        break;
    }
 }

  processDenkmalschutz(selection: string | null | undefined) {
    if(selection == null || selection == undefined){
      return;
    } 
    switch ( selection ) {
      case "Ja":
        this.changePrioOfTag(Tags.RepraesentativStadt, 1);
        this.changePrioOfTag(Tags.RepraesentativQuartier, 1);
        this.changePrioOfTag(Tags.PublikumsMagnet, 1);
        this.changePrioOfTag(Tags.SozialeEinrichtung, 1);
        this.changePrioOfTag(Tags.KulturelleEinrichtung, 1);

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
        this.changePrioOfTag(Tags.RepraesentativStadt, 1);
        this.changePrioOfTag(Tags.RepraesentativQuartier, 1);
        this.changePrioOfTag(Tags.PublikumsMagnet, 1);   
        this.changePrioOfTag(Tags.SozialeEinrichtung, 1);   
        this.changePrioOfTag(Tags.KulturelleEinrichtung, 1);   

        this.changePrioOfTag(Tags.KeinPublikum, -1);     
        this.changePrioOfTag(Tags.nichtRepraesentativ, -1);     
        break;

      case "Nein": 
        this.changePrioOfTag(Tags.CashCow, 1);       
        this.changePrioOfTag(Tags.Rentabel, 1);       
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
        break;

      case "Schlecht":        
        this.changePrioOfTag(Tags.Aussenraum, 1);
        break;

      case "SehrSchlecht":
        this.strikeTag(Tags.Innenraum);
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
    this.changePrioOfTag(Tags.Infrastruktur, 1);
    this.changePrioOfTag(Tags.IndustrieUndHandel, 1);
    this.changePrioOfTag(Tags.Rentabel, 1);
    this.changePrioOfTag(Tags.CashCow, 1);
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
    else {
      this.changePrioOfTag(Tags.Infrastruktur, 1);
      this.changePrioOfTag(Tags.IndustrieUndHandel, 1);
      this.changePrioOfTag(Tags.Rentabel, 1);
      this.changePrioOfTag(Tags.CashCow, 1);
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
      this.changePrioOfTag(Tags.Infrastruktur, 1);
      this.changePrioOfTag(Tags.IndustrieUndHandel, 1);
      this.changePrioOfTag(Tags.Rentabel, 1);
      this.changePrioOfTag(Tags.CashCow, 1);
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
    else {
      this.changePrioOfTag(Tags.Infrastruktur, 1);
      this.changePrioOfTag(Tags.IndustrieUndHandel, 1);
      this.changePrioOfTag(Tags.Rentabel, 1);
      this.changePrioOfTag(Tags.CashCow, 1);
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