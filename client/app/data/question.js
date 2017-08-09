export const json = [
  {
    "id": "C10",
    "titel": "Welke schade wilt u melden?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K_ICONEN",
      "startvraag": true,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": "INB|IB2",
      "niet_van_toepassing_bij_verzekeringen": "WOO|GEB|GB2"
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Schade aan de woning",
        "tekst": null,
        "antwoordregels": [
          "Ruitschade, schade aan de tuin, een verandering aan de woning"
        ],
        "linkt_naar": "C20a",
        "antwoord_eigenschappen": {
          "icon": "icon-home",
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Losse spullen",
        "tekst": null,
        "linkt_naar": "C50c",
        "antwoord_eigenschappen": {
          "icon": "icon-inventory",
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Beide",
        "tekst": null,
        "antwoordregels": [
          "Zowel schade aan de woning als losse spullen"
        ],
        "linkt_naar": "C20b",
        "antwoord_eigenschappen": {
          "icon": "icon-other",
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C20a",
    "titel": "Schade aan uw woning",
    "tekst": null,
    "vraagregels": [
      "Ruitschade of schade aan eigen veranderingen aan de woning zijn in sommige gevallen verzekerd op uw inboedelverzekering."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": "WOO|GEB|GB2"
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ik ben de eigenaar van het appartement",
        "tekst": null,
        "antwoordregels": [
          "(!) Let op! De schade is alleen gedekt als de schade niet verzekerd is via de vereniging van eigenaren."
        ],
        "linkt_naar": "C30a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Ik ben de huurder van het huis of appartement",
        "tekst": null,
        "antwoordregels": [
          "(!) Let op! De schade is alleen gedekt als de schade niet verzekerd is via de verhuurder."
        ],
        "linkt_naar": "C30b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C20b",
    "titel": "Schade aan uw woning",
    "tekst": null,
    "vraagregels": [
      "Ruitschade of schade aan eigen veranderingen aan de woning zijn in sommige gevallen verzekerd op uw inboedelverzekering."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": "WOO|GEB|GB2"
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ik ben de eigenaar van het appartement",
        "tekst": null,
        "antwoordregels": [
          "(!) Let op! De schade is alleen gedekt als de schade niet verzekerd is via de vereniging van eigenaren."
        ],
        "linkt_naar": "C50a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Ik ben de huurder van het huis of appartement",
        "tekst": null,
        "antwoordregels": [
          "(!) Let op! De schade is alleen gedekt als de schade niet verzekerd is  via de vereniging van eigenaren."
        ],
        "linkt_naar": "C50e",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C30a",
    "titel": "Heeft u alléén ruitschade?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": "WOO|GEB|GB2|INB|IB2",
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "antwoordregels": [
          "Ik heb alléén ruitschade"
        ],
        "linkt_naar": "C40a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "antwoordregels": [
          "Er is meer of iets anders beschadigd"
        ],
        "linkt_naar": "C50b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C30b",
    "titel": "Heeft u alléén ruitschade?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": "WOO|GEB|GB2|INB|IB2",
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "antwoordregels": [
          "Ik heb alléén ruitschade"
        ],
        "linkt_naar": "C40b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "antwoordregels": [
          "Er is meer of iets anders beschadigd"
        ],
        "linkt_naar": "C50d",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C40a",
    "titel": "Waardoor is de schade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Hagel",
        "tekst": null,
        "antwoordregels": [
          "Ruitbreuk door hagel"
        ],
        "linkt_naar": "C200i",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Ruitschade - door hagel",
          "overzicht_gemeld_links": "Ruitschade",
          "overzicht_gemeld_rechts": "hagel"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB10",
          "oorzaak": "Z06",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Storm",
        "tekst": null,
        "antwoordregels": [
          "Ruitbreuk door storm"
        ],
        "linkt_naar": "C200i",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Ruitschade - door storm",
          "overzicht_gemeld_links": "Ruitschade",
          "overzicht_gemeld_rechts": "storm"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB10",
          "oorzaak": "Z09",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Ruitbreuk",
        "tekst": null,
        "antwoordregels": [
          "Ruitbreuk door andere oorzaak"
        ],
        "linkt_naar": "C200i",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Ruitschade - Ruitbreuk",
          "overzicht_gemeld_links": "Ruitschade",
          "overzicht_gemeld_rechts": "Ruitbreuk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB10",
          "oorzaak": "Z97",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Lekkage van dubbel glas",
        "tekst": null,
        "antwoordregels": [
          "Condens tussen de twee ruiten"
        ],
        "linkt_naar": "C200i",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Ruitschade - door lekkage",
          "overzicht_gemeld_links": "Ruitschade",
          "overzicht_gemeld_rechts": "lekkage"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB10",
          "oorzaak": "Y09",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C40b",
    "titel": "Waardoor is de schade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Hagel",
        "tekst": null,
        "antwoordregels": [
          "Ruitbreuk door hagel"
        ],
        "linkt_naar": "C200i",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Ruitschade - door hagel",
          "overzicht_gemeld_links": "Ruitschade",
          "overzicht_gemeld_rechts": "hagel"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB10",
          "oorzaak": "Z06",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Storm",
        "tekst": null,
        "antwoordregels": [
          "Ruitbreuk door storm"
        ],
        "linkt_naar": "C200i",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Ruitschade - door storm",
          "overzicht_gemeld_links": "Ruitschade",
          "overzicht_gemeld_rechts": "storm"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB10",
          "oorzaak": "Z09",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Ruitbreuk",
        "tekst": null,
        "antwoordregels": [
          "Ruitbreuk door andere oorzaak"
        ],
        "linkt_naar": "C200i",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Ruitschade - Ruitbreuk",
          "overzicht_gemeld_links": "Ruitschade",
          "overzicht_gemeld_rechts": "Ruitbreuk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB10",
          "oorzaak": "Z97",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Lekkage van dubbel glas",
        "tekst": null,
        "antwoordregels": [
          "Condens tussen de twee ruiten"
        ],
        "linkt_naar": "C200i",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Ruitschade - door lekkage",
          "overzicht_gemeld_links": "Ruitschade",
          "overzicht_gemeld_rechts": "lekkage"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB10",
          "oorzaak": "Y09",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C50a",
    "titel": "Waardoor is de schade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Natuur",
        "tekst": null,
        "antwoordregels": [
          "Storm, overstroming, neerslag of blikseminslag"
        ],
        "linkt_naar": "C60a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Lekkage",
        "tekst": null,
        "antwoordregels": [
          "Uit een apparaat of leiding"
        ],
        "linkt_naar": "C80a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Stroomuitval of piekspanning",
        "tekst": null,
        "antwoordregels": [
          "Door storing in het elektriciteitsnetwerk of door blikseminslag"
        ],
        "linkt_naar": "C90a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Diefstal, inbraak of vandalisme",
        "tekst": null,
        "linkt_naar": "C100a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Brand",
        "tekst": null,
        "antwoordregels": [
          "Brandschade, schroeischade of enkel rook en roetschade"
        ],
        "linkt_naar": "C110a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Andere oorzaak",
        "tekst": null,
        "linkt_naar": "C140a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C50b",
    "titel": "Waardoor is de schade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Natuur",
        "tekst": null,
        "antwoordregels": [
          "Storm, overstroming, neerslag of blikseminslag"
        ],
        "linkt_naar": "C60b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Lekkage",
        "tekst": null,
        "antwoordregels": [
          "Uit een apparaat of leiding"
        ],
        "linkt_naar": "C80b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Stroomuitval of piekspanning",
        "tekst": null,
        "antwoordregels": [
          "Door storing in het elektriciteitsnetwerk of door blikseminslag"
        ],
        "linkt_naar": "C90b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Diefstal, inbraak of vandalisme",
        "tekst": null,
        "linkt_naar": "C100b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Brand",
        "tekst": null,
        "antwoordregels": [
          "Brandschade, schroeischade of enkel rook en roetschade"
        ],
        "linkt_naar": "C110b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Andere oorzaak",
        "tekst": null,
        "linkt_naar": "C140b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C50c",
    "titel": "Waardoor is de schade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Natuur",
        "tekst": null,
        "antwoordregels": [
          "Storm, overstroming, neerslag of blikseminslag"
        ],
        "linkt_naar": "C60c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Lekkage",
        "tekst": null,
        "antwoordregels": [
          "Uit een apparaat of leiding"
        ],
        "linkt_naar": "C80c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Stroomuitval of piekspanning",
        "tekst": null,
        "antwoordregels": [
          "Door storing in het elektriciteitsnetwerk of door blikseminslag"
        ],
        "linkt_naar": "C90c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Diefstal, inbraak of vandalisme",
        "tekst": null,
        "linkt_naar": "C100c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Brand",
        "tekst": null,
        "antwoordregels": [
          "Brandschade, schroeischade of enkel rook en roetschade"
        ],
        "linkt_naar": "C110c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Andere oorzaak",
        "tekst": null,
        "linkt_naar": "C140c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C50d",
    "titel": "Waardoor is de schade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Natuur",
        "tekst": null,
        "antwoordregels": [
          "Storm, overstroming, neerslag of blikseminslag"
        ],
        "linkt_naar": "C60d",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Lekkage",
        "tekst": null,
        "antwoordregels": [
          "Uit een apparaat of leiding"
        ],
        "linkt_naar": "C80b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Stroomuitval of piekspanning",
        "tekst": null,
        "antwoordregels": [
          "Door storing in het elektriciteitsnetwerk of door blikseminslag"
        ],
        "linkt_naar": "C90b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Diefstal, inbraak of vandalisme",
        "tekst": null,
        "linkt_naar": "C100b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Brand",
        "tekst": null,
        "antwoordregels": [
          "Brandschade, schroeischade of enkel rook en roetschade"
        ],
        "linkt_naar": "C110b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Andere oorzaak",
        "tekst": null,
        "linkt_naar": "C140b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C50e",
    "titel": "Waardoor is de schade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Natuur",
        "tekst": null,
        "antwoordregels": [
          "Storm, overstroming, neerslag of blikseminslag"
        ],
        "linkt_naar": "C60e",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Lekkage",
        "tekst": null,
        "antwoordregels": [
          "Uit een apparaat of leiding"
        ],
        "linkt_naar": "C80a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Stroomuitval of piekspanning",
        "tekst": null,
        "antwoordregels": [
          "Door storing in het elektriciteitsnetwerk of door blikseminslag"
        ],
        "linkt_naar": "C90a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Diefstal, inbraak of vandalisme",
        "tekst": null,
        "linkt_naar": "C100a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Brand",
        "tekst": null,
        "antwoordregels": [
          "Brandschade, schroeischade of enkel rook en roetschade"
        ],
        "linkt_naar": "C110a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Andere oorzaak",
        "tekst": null,
        "linkt_naar": "C140a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C60a",
    "titel": "Wat was de natuuroorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Storm",
        "tekst": null,
        "linkt_naar": "C190g",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Storm",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Storm"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB03",
          "oorzaak": "Z09",
          "schadedatum": null,
          "typemelder": "ST",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aardbeving",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Aardbeving",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Aardbeving"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB03",
          "oorzaak": "Z89",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Blikseminslag",
        "tekst": null,
        "linkt_naar": "C70a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": "INB|IB2",
          "niet_van_toepassing_bij_verzekeringen": "WOO|GEB|GB2",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Schade aan de buitenkant door hagel",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Hagelschade buiten",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Hagelschade buiten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z06",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Sneeuw en waterdruk",
        "tekst": null,
        "antwoordregels": [
          "Verzakking of instorten van daken of muren"
        ],
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Sneeuw en waterdruk",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Sneeuw en waterdruk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y40",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Overstroming",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Overstroming",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Overstroming"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z07",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Schade aan de binnenkant door neerslag",
        "tekst": null,
        "antwoordregels": [
          "Door regen, sneeuw, hagel of smeltwater"
        ],
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Neerslagschade binnen",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Neerslagschade binnen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z54",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C60b",
    "titel": "Wat was de natuuroorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Storm",
        "tekst": null,
        "linkt_naar": "C190e",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Storm",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Storm"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB03",
          "oorzaak": "Z09",
          "schadedatum": null,
          "typemelder": "ST",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aardbeving",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Aardbeving",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Aardbeving"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB03",
          "oorzaak": "Z89",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Blikseminslag",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Blikseminslag",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Schade aan de buitenkant door hagel",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Hagelschade buiten",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Hagelschade buiten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z06",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Sneeuw en waterdruk",
        "tekst": null,
        "antwoordregels": [
          "Verzakking of instorten van daken of muren"
        ],
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Sneeuw en waterdruk",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Sneeuw en waterdruk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y40",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Overstroming",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Overstroming",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Overstroming"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z07",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Schade aan de binnenkant door neerslag",
        "tekst": null,
        "antwoordregels": [
          "Door regen, sneeuw, hagel of smeltwater"
        ],
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Neerslagschade binnen",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Neerslagschade binnen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z54",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C60c",
    "titel": "Wat was de natuuroorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Storm",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Storm",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Storm"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB03",
          "oorzaak": "Z09",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aardbeving",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Aardbeving",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Aardbeving"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB03",
          "oorzaak": "Z89",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Blikseminslag",
        "tekst": null,
        "linkt_naar": "C70c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": "INB|IB2",
          "niet_van_toepassing_bij_verzekeringen": "WOO|GEB|GB2",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Schade aan de buitenkant door hagel",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Hagelschade buiten",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Hagelschade buiten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z06",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Sneeuw en waterdruk",
        "tekst": null,
        "antwoordregels": [
          "Verzakking of instorten van daken of muren"
        ],
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Sneeuw en waterdruk",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Sneeuw en waterdruk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y40",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Overstroming",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Overstroming",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Overstroming"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z07",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Schade aan de binnenkant door neerslag",
        "tekst": null,
        "antwoordregels": [
          "Door regen, sneeuw, hagel of smeltwater"
        ],
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Neerslagschade binnen",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Neerslagschade binnen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z54",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C60d",
    "titel": "Wat was de natuuroorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Storm",
        "tekst": null,
        "linkt_naar": "C190d",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Storm",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Storm"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB03",
          "oorzaak": "Z09",
          "schadedatum": null,
          "typemelder": "ST",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aardbeving",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Aardbeving",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Aardbeving"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB03",
          "oorzaak": "Z89",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Blikseminslag",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Blikseminslag",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Schade aan de buitenkant door hagel",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Hagelschade buiten",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Hagelschade buiten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z06",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Sneeuw en waterdruk",
        "tekst": null,
        "antwoordregels": [
          "Verzakking of instorten van daken of muren"
        ],
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Sneeuw en waterdruk",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Sneeuw en waterdruk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y40",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Overstroming",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Overstroming",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Overstroming"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z07",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Schade aan de binnenkant door neerslag",
        "tekst": null,
        "antwoordregels": [
          "Door regen, sneeuw, hagel of smeltwater"
        ],
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Neerslagschade binnen",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Neerslagschade binnen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z54",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C60e",
    "titel": "Wat was de natuuroorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Storm",
        "tekst": null,
        "linkt_naar": "C190h",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Storm",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Storm"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB03",
          "oorzaak": "Z09",
          "schadedatum": null,
          "typemelder": "ST",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aardbeving",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Aardbeving",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Aardbeving"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB03",
          "oorzaak": "Z89",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Blikseminslag",
        "tekst": null,
        "linkt_naar": "C70a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": "INB|IB2",
          "niet_van_toepassing_bij_verzekeringen": "WOO|GEB|GB2",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Schade aan de buitenkant door hagel",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Hagelschade buiten",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Hagelschade buiten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z06",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Sneeuw en waterdruk",
        "tekst": null,
        "antwoordregels": [
          "Verzakking of instorten van daken of muren"
        ],
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Sneeuw en waterdruk",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Sneeuw en waterdruk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y40",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Overstroming",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Overstroming",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Overstroming"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z07",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Schade aan de binnenkant door neerslag",
        "tekst": null,
        "antwoordregels": [
          "Door regen, sneeuw, hagel of smeltwater"
        ],
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Neerslagschade binnen",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Neerslagschade binnen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z54",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C70a",
    "titel": "Wat is er beschadigd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Bedorven voedsel door stroomuitval",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Bedorven voedsel door stroomuitval",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Bedorven voedsel door stroomuitval"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Y03",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Schade aan apparaten",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Schade aan apparaten door blikseminslag",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Schade aan apparaten door blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Anders",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Blikseminslag",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C70c",
    "titel": "Wat is er beschadigd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Bedorven voedsel door stroomuitval",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Bedorven voedsel door stroomuitval",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Bedorven voedsel door stroomuitval"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Y03",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Schade aan apparaten",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Schade aan apparaten door blikseminslag",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Schade aan apparaten door blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Anders",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Blikseminslag",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C80a",
    "titel": "Waardoor is de lekkage ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Aquarium, waterbed",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Aquarium, waterbed",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Aquarium, waterbed"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z51",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vloerverwarming",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Vloerverwarming",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Vloerverwarming"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y64",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Waterleiding, sanitair",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Waterleiding, sanitair",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Waterleiding, sanitair"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z88",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Centrale verwarming, airconditioning",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Centrale verwarming, airconditioning",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Centrale verwarming, airconditioning"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z62",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Vaatwasser, wasmachine",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Vaatwasser, wasmachine",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Vaatwasser, wasmachine"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z86",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Riool, afvoerbuizen",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Riool, afvoerbuizen",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Riool, afvoerbuizen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z87",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Koelkasten, vriezers",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Koelkasten, vriezers",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Koelkasten, vriezers"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "080",
        "titel": "Olie uit verwarmingsinstallatie",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Olie uit verwarmingsinstallatie",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Olie uit verwarmingsinstallatie"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y90",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "090",
        "titel": "Gasleiding",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Gasleiding",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Gasleiding"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y91",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "100",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Overig",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C80b",
    "titel": "Waardoor is de lekkage ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Aquarium, waterbed",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Aquarium, waterbed",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Aquarium, waterbed"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z51",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vloerverwarming",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Vloerverwarming",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Vloerverwarming"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y64",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Waterleiding, sanitair",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Waterleiding, sanitair",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Waterleiding, sanitair"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z88",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Centrale verwarming, airconditioning",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Centrale verwarming, airconditioning",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Centrale verwarming, airconditioning"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z62",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Vaatwasser, wasmachine",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Vaatwasser, wasmachine",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Vaatwasser, wasmachine"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z86",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Riool, afvoerbuizen",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Riool, afvoerbuizen",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Riool, afvoerbuizen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z87",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Koelkasten, vriezers",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Koelkasten, vriezers",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Koelkasten, vriezers"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "080",
        "titel": "Olie uit verwarmingsinstallatie",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Olie uit verwarmingsinstallatie",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Olie uit verwarmingsinstallatie"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y90",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "090",
        "titel": "Gasleiding",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Gasleiding",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Gasleiding"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y91",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "100",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Overig",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C80c",
    "titel": "Waardoor is de lekkage ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Aquarium, waterbed",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Aquarium, waterbed",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Aquarium, waterbed"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z51",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vloerverwarming",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Vloerverwarming",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Vloerverwarming"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y64",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Waterleiding, sanitair",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Waterleiding, sanitair",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Waterleiding, sanitair"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z88",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Centrale verwarming, airconditioning",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Centrale verwarming, airconditioning",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Centrale verwarming, airconditioning"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z62",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Vaatwasser, wasmachine",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Vaatwasser, wasmachine",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Vaatwasser, wasmachine"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z86",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Riool, afvoerbuizen",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Riool, afvoerbuizen",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Riool, afvoerbuizen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z87",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Koelkasten, vriezers",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Koelkasten, vriezers",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Koelkasten, vriezers"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "080",
        "titel": "Olie uit verwarmingsinstallatie",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Olie uit verwarmingsinstallatie",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Olie uit verwarmingsinstallatie"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y90",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "090",
        "titel": "Gasleiding",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Gasleiding",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Gasleiding"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Y91",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "100",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Lekkage - Overig",
          "overzicht_gemeld_links": "Lekkage",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB07",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C90a",
    "titel": "Wat was de oorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Piekspanning",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Piekspanning",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Piekspanning"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Y07",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Bedorven voedsel door stroomuitval",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": "INB|IB2",
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Bedorven voedsel door stroomuitval",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Bedorven voedsel door stroomuitval"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Y03",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schade aan apparaten door blikseminslag",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Schade aan apparaten door blikseminslag",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Schade aan apparaten door blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C90b",
    "titel": "Wat was de oorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Piekspanning",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Piekspanning",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Piekspanning"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Y07",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schade aan apparaten door blikseminslag",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Schade aan apparaten door blikseminslag",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Schade aan apparaten door blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C90c",
    "titel": "Wat was de oorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Piekspanning",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Piekspanning",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Piekspanning"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Y07",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Bedorven voedsel door stroomuitval",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": "INB|IB2",
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Bedorven voedsel door stroomuitval",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Bedorven voedsel door stroomuitval"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Y03",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schade aan apparaten door blikseminslag",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Stroomuitval - Schade aan apparaten door blikseminslag",
          "overzicht_gemeld_links": "Stroomuitval",
          "overzicht_gemeld_rechts": "Schade aan apparaten door blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB05",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C100a",
    "titel": "Wat was de oorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Diefstal van sleutels",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Diefstal van sleutels",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Diefstal van sleutels"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB06",
          "oorzaak": "Y87",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Diefstal met braakschade",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Diefstal met braakschade",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Diefstal met braakschade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB06",
          "oorzaak": "Y50",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Rellen",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Rellen",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Rellen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB04",
          "oorzaak": "Z19",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Vandalisme",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Vandalisme",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Vandalisme"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB04",
          "oorzaak": "Z18",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C100b",
    "titel": "Wat was de oorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Poging tot inbraak",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": "INB|IB2",
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Poging tot inbraak",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Poging tot inbraak"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB06",
          "oorzaak": "Y88",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Diefstal van sleutels",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Diefstal van sleutels",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Diefstal van sleutels"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB06",
          "oorzaak": "Y87",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Diefstal met braakschade",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Diefstal met braakschade",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Diefstal met braakschade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB06",
          "oorzaak": "Y50",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Rellen",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Rellen",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Rellen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB04",
          "oorzaak": "Z19",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Vandalisme",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Vandalisme",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Vandalisme"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB04",
          "oorzaak": "Z18",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C100c",
    "titel": "Wat was de oorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Beroving, afpersing",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": "INB|IB2",
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Beroving, afpersing",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Beroving, afpersing"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB06",
          "oorzaak": "Y35",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Diefstal van sleutels",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Diefstal van sleutels",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Diefstal van sleutels"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB06",
          "oorzaak": "Y87",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Diefstal zonder braakschade",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": "INB|IB2",
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Diefstal zonder braakschade",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Diefstal zonder braakschade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB06",
          "oorzaak": "Y51",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Diefstal met braakschade",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Diefstal met braakschade",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Diefstal met braakschade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB06",
          "oorzaak": "Y50",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Rellen",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Rellen",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Rellen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB04",
          "oorzaak": "Z19",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Vandalisme",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Diefstal, inbraak of vandalisme - Vandalisme",
          "overzicht_gemeld_links": "Diefstal, inbraak of vandalisme",
          "overzicht_gemeld_rechts": "Vandalisme"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB04",
          "oorzaak": "Z18",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C110a",
    "titel": "Wat was de oorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Brand",
        "tekst": null,
        "antwoordregels": [
          "Hiermee bedoelen we vlammen die geblust moeten worden"
        ],
        "linkt_naar": "C120a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Enkel rook en roetschade",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Enkel rook en roetschade",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Enkel rook en roetschade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Y39",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schroeien en smelten",
        "tekst": null,
        "antwoordregels": [
          "Hiermee bedoelen we schade door warmte of vlammen zonder dat er brand geweest is"
        ],
        "linkt_naar": "C130a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C110b",
    "titel": "Wat was de oorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Brand",
        "tekst": null,
        "antwoordregels": [
          "Hiermee bedoelen we vlammen die geblust moeten worden"
        ],
        "linkt_naar": "C120b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Enkel rook en roetschade",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Enkel rook en roetschade",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Enkel rook en roetschade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Y39",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schroeien en smelten",
        "tekst": null,
        "antwoordregels": [
          "Hiermee bedoelen we schade door warmte of vlammen zonder dat er brand geweest is"
        ],
        "linkt_naar": "C130b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C110c",
    "titel": "Wat was de oorzaak?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Brand",
        "tekst": null,
        "antwoordregels": [
          "Hiermee bedoelen we vlammen die geblust moeten worden"
        ],
        "linkt_naar": "C120c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Enkel rook en roetschade",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Enkel rook en roetschade",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Enkel rook en roetschade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Y39",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schroeien en smelten",
        "tekst": null,
        "antwoordregels": [
          "Hiermee bedoelen we schade door warmte of vlammen zonder dat er brand geweest is"
        ],
        "linkt_naar": "C130c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C120a",
    "titel": "Waardoor is de brand ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ontploffing",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Ontploffing",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Ontploffing"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z02",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Kortsluiting",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Kortsluiting",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Kortsluiting"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z03",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Zelfontbranding",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Zelfontbranding",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Zelfontbranding"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z04",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Bosbrand",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Bosbrand",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Bosbrand"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z98",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Gasinstallatie",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Gasinstallatie",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Gasinstallatie"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z99",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Lassen, solderen, slijpen",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Lassen, solderen, slijpen",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Lassen, solderen, slijpen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Y59",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Schoorsteenbrand",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Schoorsteenbrand",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Schoorsteenbrand"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z63",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "080",
        "titel": "Vuurwerk",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Vuurwerk",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Vuurwerk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z94",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "090",
        "titel": "Brandstichting",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Brandstichting",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Brandstichting"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z52",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "100",
        "titel": "Blikseminslag",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Blikseminslag",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "110",
        "titel": "Vlam in de pan",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Vlam in de pan",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Vlam in de pan"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z83",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "120",
        "titel": "Kaarsen, rookwaren",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Kaarsen, rookwaren",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Kaarsen, rookwaren"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z59",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "130",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Overig",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C120b",
    "titel": "Waardoor is de brand ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ontploffing",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Ontploffing",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Ontploffing"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z02",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Kortsluiting",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Kortsluiting",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Kortsluiting"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z03",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Zelfontbranding",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Zelfontbranding",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Zelfontbranding"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z04",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Bosbrand",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Bosbrand",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Bosbrand"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z98",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Gasinstallatie",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Gasinstallatie",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Gasinstallatie"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z99",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Lassen, solderen, slijpen",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Lassen, solderen, slijpen",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Lassen, solderen, slijpen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Y59",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Schoorsteenbrand",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Schoorsteenbrand",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Schoorsteenbrand"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z63",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "080",
        "titel": "Vuurwerk",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Vuurwerk",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Vuurwerk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z94",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "090",
        "titel": "Brandstichting",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Brandstichting",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Brandstichting"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z52",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "100",
        "titel": "Blikseminslag",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Blikseminslag",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "110",
        "titel": "Vlam in de pan",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Vlam in de pan",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Vlam in de pan"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z83",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "120",
        "titel": "Kaarsen, rookwaren",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Kaarsen, rookwaren",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Kaarsen, rookwaren"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z59",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "130",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Overig",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C120c",
    "titel": "Waardoor is de brand ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ontploffing",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Ontploffing",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Ontploffing"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z02",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Kortsluiting",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Kortsluiting",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Kortsluiting"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z03",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Zelfontbranding",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Zelfontbranding",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Zelfontbranding"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z04",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Bosbrand",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Bosbrand",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Bosbrand"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z98",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Gasinstallatie",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Gasinstallatie",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Gasinstallatie"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z99",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Lassen, solderen, slijpen",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Lassen, solderen, slijpen",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Lassen, solderen, slijpen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Y59",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "070",
        "titel": "Schoorsteenbrand",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Schoorsteenbrand",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Schoorsteenbrand"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z63",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "080",
        "titel": "Vuurwerk",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Vuurwerk",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Vuurwerk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z94",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "090",
        "titel": "Brandstichting",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Brandstichting",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Brandstichting"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z52",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "100",
        "titel": "Blikseminslag",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Natuur - Blikseminslag",
          "overzicht_gemeld_links": "Natuur",
          "overzicht_gemeld_rechts": "Blikseminslag"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z01",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "110",
        "titel": "Vlam in de pan",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Vlam in de pan",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Vlam in de pan"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z83",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "120",
        "titel": "Kaarsen, rookwaren",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Kaarsen, rookwaren",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Kaarsen, rookwaren"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z59",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "130",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Brand - Overig",
          "overzicht_gemeld_links": "Brand",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB08",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C130a",
    "titel": "Waardoor is de schroeischade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Lassen, solderen, slijpen",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Lassen, solderen, slijpen",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Lassen, solderen, slijpen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Y59",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Kaarsen",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Kaarsen",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Kaarsen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Y71",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Roken",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Roken",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Roken"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Y53",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Vuurwerk",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Vuurwerk",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Vuurwerk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Z94",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Overig",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C130b",
    "titel": "Waardoor is de schroeischade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Lassen, solderen, slijpen",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Lassen, solderen, slijpen",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Lassen, solderen, slijpen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Y59",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Kaarsen",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Kaarsen",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Kaarsen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Y71",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Roken",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Roken",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Roken"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Y53",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Vuurwerk",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Vuurwerk",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Vuurwerk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Z94",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Overig",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C130c",
    "titel": "Waardoor is de schroeischade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Lassen, solderen, slijpen",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Lassen, solderen, slijpen",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Lassen, solderen, slijpen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Y59",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Kaarsen",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Kaarsen",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Kaarsen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Y71",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Roken",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Roken",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Roken"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Y53",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Vuurwerk",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Vuurwerk",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Vuurwerk"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Z94",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schroeien en smelten - Overig",
          "overzicht_gemeld_links": "Schroeien en smelten",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB02",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C140a",
    "titel": "Waardoor is de schade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Schade door scherven",
        "tekst": null,
        "linkt_naar": "C150a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aanrijding of aanvaring",
        "tekst": null,
        "linkt_naar": "C160a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schade door zaken die op of tegen uw woning zijn gevallen",
        "tekst": null,
        "linkt_naar": "C170a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Eigen gebrek",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Andere oorzaak - Eigen gebrek",
          "overzicht_gemeld_links": "Andere oorzaak",
          "overzicht_gemeld_rechts": "Eigen gebrek"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB09",
          "oorzaak": "Y11",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Overig",
        "tekst": null,
        "antwoordregels": [
          "Zoals val- of stootschade"
        ],
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Andere oorzaak - Overig",
          "overzicht_gemeld_links": "Andere oorzaak",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB09",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C140b",
    "titel": "Waardoor is de schade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Schade door scherven",
        "tekst": null,
        "linkt_naar": "C150b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aanrijding of aanvaring",
        "tekst": null,
        "linkt_naar": "C160b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schade door zaken die op of tegen uw woning zijn gevallen",
        "tekst": null,
        "linkt_naar": "C170b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Eigen gebrek",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Andere oorzaak - Eigen gebrek",
          "overzicht_gemeld_links": "Andere oorzaak",
          "overzicht_gemeld_rechts": "Eigen gebrek"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB09",
          "oorzaak": "Y11",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Overig",
        "tekst": null,
        "antwoordregels": [
          "Zoals val- of stootschade"
        ],
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Andere oorzaak - Overig",
          "overzicht_gemeld_links": "Andere oorzaak",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB09",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C140c",
    "titel": "Waardoor is de schade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Schade door scherven",
        "tekst": null,
        "linkt_naar": "C150c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aanrijding of aanvaring",
        "tekst": null,
        "linkt_naar": "C160c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schade door zaken die op of tegen uw woning zijn gevallen",
        "tekst": null,
        "linkt_naar": "C170c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Eigen gebrek",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Andere oorzaak - Eigen gebrek",
          "overzicht_gemeld_links": "Andere oorzaak",
          "overzicht_gemeld_rechts": "Eigen gebrek"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB09",
          "oorzaak": "Y11",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Inboedelschade tijdens verhuizing",
        "tekst": null,
        "linkt_naar": "C180c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "060",
        "titel": "Overig",
        "tekst": null,
        "antwoordregels": [
          "Zoals val- of stootschade"
        ],
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Andere oorzaak - Overig",
          "overzicht_gemeld_links": "Andere oorzaak",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB09",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C150a",
    "titel": "Welke scherven hebben de schade veroorzaakt?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ruiten",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schade door scherven - Ruiten",
          "overzicht_gemeld_links": "Schade door scherven",
          "overzicht_gemeld_rechts": "Ruiten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB13",
          "oorzaak": "Y93",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Spiegels",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schade door scherven - Spiegels",
          "overzicht_gemeld_links": "Schade door scherven",
          "overzicht_gemeld_rechts": "Spiegels"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB13",
          "oorzaak": "Y94",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Glas in wandversiering",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schade door scherven - Glas in wandversiering",
          "overzicht_gemeld_links": "Schade door scherven",
          "overzicht_gemeld_rechts": "Glas in wandversiering"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB13",
          "oorzaak": "Y95",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C150b",
    "titel": "Welke scherven hebben de schade veroorzaakt?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ruiten",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schade door scherven - Ruiten",
          "overzicht_gemeld_links": "Schade door scherven",
          "overzicht_gemeld_rechts": "Ruiten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB13",
          "oorzaak": "Y93",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Spiegels",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schade door scherven - Spiegels",
          "overzicht_gemeld_links": "Schade door scherven",
          "overzicht_gemeld_rechts": "Spiegels"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB13",
          "oorzaak": "Y94",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Glas in wandversiering",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schade door scherven - Glas in wandversiering",
          "overzicht_gemeld_links": "Schade door scherven",
          "overzicht_gemeld_rechts": "Glas in wandversiering"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB13",
          "oorzaak": "Y95",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C150c",
    "titel": "Welke scherven hebben de schade veroorzaakt?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ruiten",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schade door scherven - Ruiten",
          "overzicht_gemeld_links": "Schade door scherven",
          "overzicht_gemeld_rechts": "Ruiten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB13",
          "oorzaak": "Y93",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Spiegels",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schade door scherven - Spiegels",
          "overzicht_gemeld_links": "Schade door scherven",
          "overzicht_gemeld_rechts": "Spiegels"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB13",
          "oorzaak": "Y94",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Glas in wandversiering",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Schade door scherven - Glas in wandversiering",
          "overzicht_gemeld_links": "Schade door scherven",
          "overzicht_gemeld_rechts": "Glas in wandversiering"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB13",
          "oorzaak": "Y95",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C160a",
    "titel": "Wat voor aanrijding of aanvaring is er gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Aanrijding met motorvoertuig",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Aanrijding met motorvoertuig",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Aanrijding met motorvoertuig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z68",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aanvaring",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Aanvaring",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Aanvaring"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Y72",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schade door luchtvaartuig",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Schade door luchtvaartuig",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Schade door luchtvaartuig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Y73",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Aanrijding met overige voertuigen",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Aanrijding met overige voertuigen",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Aanrijding met overige voertuigen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z71",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C160b",
    "titel": "Wat voor aanrijding of aanvaring is er gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Aanrijding met motorvoertuig",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Aanrijding met motorvoertuig",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Aanrijding met motorvoertuig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z68",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aanvaring",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Aanvaring",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Aanvaring"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Y72",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schade door luchtvaartuig",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Schade door luchtvaartuig",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Schade door luchtvaartuig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Y73",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Aanrijding met overige voertuigen",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Aanrijding met overige voertuigen",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Aanrijding met overige voertuigen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z71",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C160c",
    "titel": "Wat voor aanrijding of aanvaring is er gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Aanrijding met motorvoertuig",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Aanrijding met motorvoertuig",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Aanrijding met motorvoertuig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z68",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Aanvaring",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Aanvaring",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Aanvaring"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Y72",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Schade door luchtvaartuig",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Schade door luchtvaartuig",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Schade door luchtvaartuig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Y73",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Aanrijding met overige voertuigen",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Aanrijding - Aanrijding met overige voertuigen",
          "overzicht_gemeld_links": "Aanrijding",
          "overzicht_gemeld_rechts": "Aanrijding met overige voertuigen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z71",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C170a",
    "titel": "Waardoor is de valschade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Schade door kappen of snoeien van bomen",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Valschade - Schade door kappen of snoeien van bomen",
          "overzicht_gemeld_links": "Valschade",
          "overzicht_gemeld_rechts": "Schade door kappen of snoeien van bomen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z64",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Omvallen van objecten",
        "tekst": null,
        "linkt_naar": "C200a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Valschade - Omvallen van objecten",
          "overzicht_gemeld_links": "Valschade",
          "overzicht_gemeld_rechts": "Omvallen van objecten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z66",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C170b",
    "titel": "Waardoor is de valschade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Schade door kappen of snoeien van bomen",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Valschade - Schade door kappen of snoeien van bomen",
          "overzicht_gemeld_links": "Valschade",
          "overzicht_gemeld_rechts": "Schade door kappen of snoeien van bomen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z64",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Omvallen van objecten",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Valschade - Omvallen van objecten",
          "overzicht_gemeld_links": "Valschade",
          "overzicht_gemeld_rechts": "Omvallen van objecten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z66",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C170c",
    "titel": "Waardoor is de valschade ontstaan?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Schade door kappen of snoeien van bomen",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Valschade - Schade door kappen of snoeien van bomen",
          "overzicht_gemeld_links": "Valschade",
          "overzicht_gemeld_rechts": "Schade door kappen of snoeien van bomen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z64",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Afvallende lading",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": "INB|IB2",
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Valschade - Afvallende lading",
          "overzicht_gemeld_links": "Valschade",
          "overzicht_gemeld_rechts": "Afvallende lading"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z27",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Omvallen van objecten",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Valschade - Omvallen van objecten",
          "overzicht_gemeld_links": "Valschade",
          "overzicht_gemeld_rechts": "Omvallen van objecten"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB01",
          "oorzaak": "Z66",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C180b",
    "titel": "Wat is er tijdens de verhuizing gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ongeval met een vervoersmiddel",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Verhuizing - Ongeval met een vervoersmiddel",
          "overzicht_gemeld_links": "Verhuizing",
          "overzicht_gemeld_rechts": "Ongeval met een vervoersmiddel"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB11",
          "oorzaak": "Y67",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Uit de strop raken",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Verhuizing - Uit de strop raken",
          "overzicht_gemeld_links": "Verhuizing",
          "overzicht_gemeld_rechts": "Uit de strop raken"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB11",
          "oorzaak": "Y58",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Defect hulpmiddel laden, lossen",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Verhuizing - Defect hulpmiddel laden, lossen",
          "overzicht_gemeld_links": "Verhuizing",
          "overzicht_gemeld_rechts": "Defect hulpmiddel laden, lossen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB11",
          "oorzaak": "Z79",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Diefstal of zoek raken verpakkingen",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Verhuizing - Diefstal of zoek raken verpakkingen",
          "overzicht_gemeld_links": "Verhuizing",
          "overzicht_gemeld_rechts": "Diefstal of zoek raken verpakkingen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB11",
          "oorzaak": "Y54",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Verhuizing - Overig",
          "overzicht_gemeld_links": "Verhuizing",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB11",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C180c",
    "titel": "Wat is er tijdens de verhuizing gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ongeval met een vervoersmiddel",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Verhuizing - Ongeval met een vervoersmiddel",
          "overzicht_gemeld_links": "Verhuizing",
          "overzicht_gemeld_rechts": "Ongeval met een vervoersmiddel"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB11",
          "oorzaak": "Y67",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Uit de strop raken",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Verhuizing - Uit de strop raken",
          "overzicht_gemeld_links": "Verhuizing",
          "overzicht_gemeld_rechts": "Uit de strop raken"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB11",
          "oorzaak": "Y58",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Defect hulpmiddel laden, lossen",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Verhuizing - Defect hulpmiddel laden, lossen",
          "overzicht_gemeld_links": "Verhuizing",
          "overzicht_gemeld_rechts": "Defect hulpmiddel laden, lossen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB11",
          "oorzaak": "Z79",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "040",
        "titel": "Diefstal of zoek raken verpakkingen",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Verhuizing - Diefstal of zoek raken verpakkingen",
          "overzicht_gemeld_links": "Verhuizing",
          "overzicht_gemeld_rechts": "Diefstal of zoek raken verpakkingen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB11",
          "oorzaak": "Y54",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "050",
        "titel": "Overig",
        "tekst": null,
        "linkt_naar": "C200c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Verhuizing - Overig",
          "overzicht_gemeld_links": "Verhuizing",
          "overzicht_gemeld_rechts": "Overig"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": "ZB01",
          "gebeurtenis": "ZB11",
          "oorzaak": "Z17",
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C190d",
    "titel": "Bent u aan het bouwen of verbouwen en heeft de storm hierbij schade veroorzaakt?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "C200d",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade tijdens (ver)bouwen",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Schade tijdens bouwen of verbouwen",
          "overzicht_gemeld_rechts": "Ja, ik was aan het bouwen of verbouwen en daarbij is schade ontstaan"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "C200d",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade tijdens (ver)bouwen",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Schade tijdens bouwen of verbouwen",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C190e",
    "titel": "Bent u aan het bouwen of verbouwen en heeft de storm hierbij schade veroorzaakt?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "C200e",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade tijdens (ver)bouwen",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Schade tijdens bouwen of verbouwen",
          "overzicht_gemeld_rechts": "Ja, ik was aan het bouwen of verbouwen en daarbij is schade ontstaan"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "C200e",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade tijdens (ver)bouwen",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Schade tijdens bouwen of verbouwen",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C190g",
    "titel": "Bent u aan het bouwen of verbouwen en heeft de storm hierbij schade veroorzaakt?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "C200g",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade tijdens (ver)bouwen",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Schade tijdens bouwen of verbouwen",
          "overzicht_gemeld_rechts": "Ja, ik was aan het bouwen of verbouwen en daarbij is schade ontstaan"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "C200g",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade tijdens (ver)bouwen",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Schade tijdens bouwen of verbouwen",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C190h",
    "titel": "Bent u aan het bouwen of verbouwen en heeft de storm hierbij schade veroorzaakt?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "C200h",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade tijdens (ver)bouwen",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Schade tijdens bouwen of verbouwen",
          "overzicht_gemeld_rechts": "Ja, ik was aan het bouwen of verbouwen en daarbij is schade ontstaan"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "C200h",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade tijdens (ver)bouwen",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Schade tijdens bouwen of verbouwen",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C200a",
    "titel": "Wanneer is het gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "KALENDER",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Gisteren",
        "tekst": null,
        "linkt_naar": "C300|C310|C320|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "YESTERDAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vandaag",
        "tekst": null,
        "linkt_naar": "C300|C310|C320|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TODAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Andere datum",
        "tekst": null,
        "linkt_naar": "C300|C310|C320|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TO_BE_DETERMINED",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C200b",
    "titel": "Wanneer is het gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "KALENDER",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Gisteren",
        "tekst": null,
        "linkt_naar": "C300|C310|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "YESTERDAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vandaag",
        "tekst": null,
        "linkt_naar": "C300|C310|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TODAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Andere datum",
        "tekst": null,
        "linkt_naar": "C300|C310|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TO_BE_DETERMINED",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C200c",
    "titel": "Wanneer is het gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "KALENDER",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Gisteren",
        "tekst": null,
        "linkt_naar": "C300|C320|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "YESTERDAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vandaag",
        "tekst": null,
        "linkt_naar": "C300|C320|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TODAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Andere datum",
        "tekst": null,
        "linkt_naar": "C300|C320|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TO_BE_DETERMINED",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C200d",
    "titel": "Wanneer is het gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "KALENDER",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Gisteren",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002e|Z25.00009",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "YESTERDAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vandaag",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002e|Z25.00009",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TODAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Andere datum",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002e|Z25.00009",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TO_BE_DETERMINED",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C200e",
    "titel": "Wanneer is het gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "KALENDER",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Gisteren",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002a|Z25.00008",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "YESTERDAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vandaag",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002a|Z25.00008",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TODAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Andere datum",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002a|Z25.00008",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TO_BE_DETERMINED",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C200g",
    "titel": "Wanneer is het gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "KALENDER",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Gisteren",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002c|Z25.00005",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "YESTERDAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vandaag",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002c|Z25.00005",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TODAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Andere datum",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002c|Z25.00005",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TO_BE_DETERMINED",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C200h",
    "titel": "Wanneer is het gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "KALENDER",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Gisteren",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002d|Z25.00006",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "YESTERDAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vandaag",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002d|Z25.00006",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TODAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Andere datum",
        "tekst": null,
        "linkt_naar": "Z25.00001|Z25.00002d|Z25.00006",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TO_BE_DETERMINED",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C200i",
    "titel": "Wanneer is het gebeurd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "KALENDER",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Gisteren",
        "tekst": null,
        "linkt_naar": "C300|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "YESTERDAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "020",
        "titel": "Vandaag",
        "tekst": null,
        "linkt_naar": "C300|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TODAY",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      },
      {
        "id": "030",
        "titel": "Andere datum",
        "tekst": null,
        "linkt_naar": "C300|C330",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": "Datum van de gebeurtenis",
          "overzicht_gemeld_links": "Datum van de gebeurtenis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": "TO_BE_DETERMINED",
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "Z25.00001",
    "titel": "Was de windsnelheid 14 m/s of hoger?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00001",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00001",
          "antwoord_id": "002"
        }
      },
      {
        "id": "030",
        "titel": "Onbekend",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00001",
          "antwoord_id": "003"
        }
      }
    ]
  },
  {
    "id": "Z25.00002a",
    "titel": "Wat is beschadigd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Inboedel",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Opstal",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "002"
        }
      },
      {
        "id": "030",
        "titel": "Inboedel en opstal",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "003"
        }
      },
      {
        "id": "040",
        "titel": "Eigenaarsbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "004"
        }
      },
      {
        "id": "050",
        "titel": "Huurdersbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "005"
        }
      },
      {
        "id": "060",
        "titel": "Inboedel en eigenaarsbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "006"
        }
      },
      {
        "id": "070",
        "titel": "Inboedel en huurdersbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "007"
        }
      }
    ]
  },
  {
    "id": "Z25.00002c",
    "titel": "Wat is beschadigd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Inboedel",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Opstal",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "002"
        }
      },
      {
        "id": "030",
        "titel": "Inboedel en opstal",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "003"
        }
      },
      {
        "id": "040",
        "titel": "Eigenaarsbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "004"
        }
      },
      {
        "id": "050",
        "titel": "Huurdersbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "005"
        }
      },
      {
        "id": "060",
        "titel": "Inboedel en eigenaarsbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "006"
        }
      },
      {
        "id": "070",
        "titel": "Inboedel en huurdersbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "007"
        }
      }
    ]
  },
  {
    "id": "Z25.00002d",
    "titel": "Wat is beschadigd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Inboedel",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Opstal",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "002"
        }
      },
      {
        "id": "030",
        "titel": "Inboedel en opstal",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "003"
        }
      },
      {
        "id": "040",
        "titel": "Eigenaarsbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "004"
        }
      },
      {
        "id": "050",
        "titel": "Huurdersbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "005"
        }
      },
      {
        "id": "060",
        "titel": "Inboedel en eigenaarsbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "006"
        }
      },
      {
        "id": "070",
        "titel": "Inboedel en huurdersbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "007"
        }
      }
    ]
  },
  {
    "id": "Z25.00002e",
    "titel": "Wat is beschadigd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Inboedel",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Opstal",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "002"
        }
      },
      {
        "id": "030",
        "titel": "Inboedel en opstal",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "003"
        }
      },
      {
        "id": "040",
        "titel": "Eigenaarsbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "004"
        }
      },
      {
        "id": "050",
        "titel": "Huurdersbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "005"
        }
      },
      {
        "id": "060",
        "titel": "Inboedel en eigenaarsbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "006"
        }
      },
      {
        "id": "070",
        "titel": "Inboedel en huurdersbelang",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00002",
          "antwoord_id": "007"
        }
      }
    ]
  },
  {
    "id": "Z25.00005",
    "titel": "Waaraan heeft u schade?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Aan mijn appartement, serre of tuin en mijn spullen hierin",
        "tekst": null,
        "antwoordregels": [
          "Hiermee bedoelen we ook zaken die aan het appartement vastzitten zoals zonwering, rolluiken of zonnepanelen."
        ],
        "linkt_naar": "Z25.00015a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Appartement, serre of tuin en spullen hierin",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Uw appartement, serre of tuin en uw spullen hierin"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00005",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Aan het trappenhuis of gemeenschappelijke ruimte bij mijn flat of appartement en mijn spullen hierin",
        "tekst": null,
        "linkt_naar": "Z25.00015b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Trappenhuis of gemeenschappelijke ruimte en spullen hierin",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Het trappenhuis of de gemeenschappelijke ruimte bij mijn flat of appartement en uw spullen hierin"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00005",
          "antwoord_id": "002"
        }
      },
      {
        "id": "030",
        "titel": "Aan een aparte garagebox of bergingsruimte op een ander adres en mijn spullen hierin",
        "tekst": null,
        "linkt_naar": "Z25.00015c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Aparte garagebox of bergingsruimte en spullen hierin",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Een aparte garagebox of bergingsruimte op een ander adres en uw spullen hierin"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00005",
          "antwoord_id": "003"
        }
      },
      {
        "id": "040",
        "titel": "Aan de tuin en mijn spullen in de tuin",
        "tekst": null,
        "antwoordregels": [
          "Met tuin bedoelen we schade aan planten, bomen, struiken, een pergola  of bestrating."
        ],
        "linkt_naar": "Z25.00021",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "De tuin en mijn spullen in de tuin",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "De tuin en mijn spullen in de tuin"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00005",
          "antwoord_id": "005"
        }
      },
      {
        "id": "050",
        "titel": "Combinatie van bovenstaande",
        "tekst": null,
        "linkt_naar": "Z25.00024|DDW.001|C330a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Woning, trappenhuis of aparte garagebox",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Een combinatie van uw woning, het trappenhuis of een aparte garagebox"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00005",
          "antwoord_id": "007"
        }
      },
      {
        "id": "060",
        "titel": "Ik heb schade aan iets anders, er is meer schade",
        "tekst": null,
        "linkt_naar": "Z25.00023|C250a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Uw opstal en/of andere schade",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Uw opstal, eventueel gecombineerd met andere schade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00005",
          "antwoord_id": "008"
        }
      }
    ]
  },
  {
    "id": "Z25.00006",
    "titel": "Waaraan heeft u schade?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Aan mijn woning, garage, serre of schuur en mijn spullen hierin",
        "tekst": null,
        "antwoordregels": [
          "Met woning bedoelen we ook zaken die aan de woning vastzitten zoals zonwering, rolluiken of zonnepanelen."
        ],
        "linkt_naar": "Z25.00017a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Uw woning, garage, serre, schuur of tuin en spullen hierin",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Uw woning, garage, serre, schuur of tuin en uw spullen hierin"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00006",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Aan het trappenhuis of gemeenschappelijke ruimte bij mijn flat of appartement en mijn spullen hierin",
        "tekst": null,
        "linkt_naar": "Z25.00017b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Trappenhuis of gemeenschappelijke ruimte en spullen hierin",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Het trappenhuis of de gemeenschappelijke ruimte bij mijn flat of appartement en uw spullen hierin"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00006",
          "antwoord_id": "002"
        }
      },
      {
        "id": "030",
        "titel": "Aan een aparte garagebox of bergingsruimte op een ander adres en mijn spullen hierin",
        "tekst": null,
        "linkt_naar": "Z25.00017c",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Aparte garagebox of bergingsruimte en spullen hierin",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Een aparte garagebox of bergingsruimte op een ander adres en uw spullen hierin"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00006",
          "antwoord_id": "003"
        }
      },
      {
        "id": "040",
        "titel": "Aan de tuin en mijn spullen in de tuin",
        "tekst": null,
        "antwoordregels": [
          "Met tuin bedoelen we schade aan planten, bomen, struiken, een pergola  of bestrating."
        ],
        "linkt_naar": "Z25.00027|Z25.00017d",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "De tuin en mijn spullen in de tuin",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "De tuin en mijn spullen in de tuin"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00006",
          "antwoord_id": "006"
        }
      },
      {
        "id": "050",
        "titel": "Combinatie van bovenstaande",
        "tekst": null,
        "linkt_naar": "Z25.00024|DDW.001|C330a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Woning, trappenhuis of aparte garagebox",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Een combinatie van uw woning, het trappenhuis of een aparte garagebox"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00006",
          "antwoord_id": "008"
        }
      },
      {
        "id": "060",
        "titel": "Ik heb schade aan iets anders, er is meer schade",
        "tekst": null,
        "linkt_naar": "Z25.00023|C250a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Uw opstal en/of andere schade",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Uw opstal, eventueel gecombineerd met andere schade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00006",
          "antwoord_id": "009"
        }
      }
    ]
  },
  {
    "id": "Z25.00008",
    "titel": "Waaraan heeft u schade?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Aan mijn appartement, serre of tuin",
        "tekst": null,
        "antwoordregels": [
          "Hiermee bedoelen we ook zaken die aan het appartement vastzitten zoals zonwering, rolluiken of zonnepanelen."
        ],
        "linkt_naar": "Z25.00016a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Appartement, serre of tuin",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Uw appartement, serre of tuin"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00008",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Aan het trappenhuis of gemeenschappelijke ruimte bij mijn flat of appartement",
        "tekst": null,
        "linkt_naar": "Z25.00025|C230a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Trappenhuis of gemeenschappelijke ruimte",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Het trappenhuis of de gemeenschappelijke ruimte bij mijn flat of appartement"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00008",
          "antwoord_id": "002"
        }
      },
      {
        "id": "030",
        "titel": "Aan een aparte garagebox of bergingsruimte op een ander adres",
        "tekst": null,
        "linkt_naar": "Z25.00016b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Aparte garagebox of bergingsruimte",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Een aparte garagebox of bergingsruimte op een ander adres"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00008",
          "antwoord_id": "003"
        }
      },
      {
        "id": "040",
        "titel": "Combinatie van bovenstaande",
        "tekst": null,
        "linkt_naar": "Z25.00024|DDW.001|C220a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Appartement, trappenhuis of aparte garagebox",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Een combinatie van uw appartement, het trappenhuis of een aparte garagebox"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00008",
          "antwoord_id": "005"
        }
      },
      {
        "id": "050",
        "titel": "Ik heb schade aan iets anders, er is meer schade",
        "tekst": null,
        "linkt_naar": "Z25.00023|C250a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Uw opstal en/of andere schade",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Uw opstal, eventueel gecombineerd met andere schade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00008",
          "antwoord_id": "006"
        }
      }
    ]
  },
  {
    "id": "Z25.00009",
    "titel": "Waaraan heeft u schade?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Aan mijn woning, garage, serre, schuur of tuin",
        "tekst": null,
        "antwoordregels": [
          "Hiermee bedoelen we ook zaken die aan de woning vastzitten zoals zonwering, rolluiken of zonnepanelen."
        ],
        "linkt_naar": "Z25.00018a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Woning, garage, serre, schuur of tuin",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Uw woning, garage, serre, schuur of tuin"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00009",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Aan een aparte garagebox of bergingsruimte op een ander adres",
        "tekst": null,
        "linkt_naar": "Z25.00018b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Aparte garagebox of bergingsruimte",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Een aparte garagebox of bergingsruimte op een ander adres"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00009",
          "antwoord_id": "002"
        }
      },
      {
        "id": "030",
        "titel": "Combinatie van bovenstaande",
        "tekst": null,
        "linkt_naar": "Z25.00024|DDW.001|C220a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Woning en een aparte garagebox",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Een combinatie van uw woning en een aparte garagebox"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00009",
          "antwoord_id": "004"
        }
      },
      {
        "id": "040",
        "titel": "Ik heb schade aan iets anders, er is meer schade",
        "tekst": null,
        "linkt_naar": "Z25.00023|C250a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade aan",
          "stappenplan_tekst": "Uw opstal en/of andere schade",
          "overzicht_gemeld_links": "U heeft schade aan",
          "overzicht_gemeld_rechts": "Uw opstal, eventueel gecombineerd met andere schade"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00009",
          "antwoord_id": "005"
        }
      }
    ]
  },
  {
    "id": "Z25.00015a",
    "titel": "Is er schade aan een verbetering of verandering van het appartement, de serre of de tuin uitgevoerd door u of een vorige eigenaar?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige eigenaar heeft uitgevoerd die niet verzekerd is via de vereniging van eigenaren."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "DDW.001|C330a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de vereniging van eigenaren"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00015",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00028|DDW.001|C330a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00015",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00015b",
    "titel": "Is er schade aan een verbetering of verandering van het trappenhuis of de gemeenschappelijke ruimte uitgevoerd door u of een vorige eigenaar?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige eigenaar heeft uitgevoerd die niet verzekerd is via de vereniging van eigenaren."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "C230a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de vereniging van eigenaren"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00015",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00028|C230a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00015",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00015c",
    "titel": "Is er schade aan een verbetering of verandering van de garage of bergingsruimte uitgevoerd door u of een vorige eigenaar?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige eigenaar heeft uitgevoerd die niet verzekerd is via de vereniging van eigenaren."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "DDW.003|C240a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de vereniging van eigenaren"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "beschadigd_tijdens_verbouwing": true,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00015",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00028|DDW.003|C240a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "beschadigd_tijdens_verbouwing": false,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00015",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00015d",
    "titel": "Is er schade aan een verbetering of verandering van de tuin uitgevoerd door u of een vorige eigenaar?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige eigenaar heeft uitgevoerd die niet verzekerd is via de vereniging van eigenaren."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "DDW.002|C330b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de vereniging van eigenaren"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00015",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00028|DDW.002|C330b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00015",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00016a",
    "titel": "Betreft de woonhuisschade een verandering of verbouwing door u of een vorige eigenaar?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "DDW.001|C220a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de vereniging van eigenaren"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00016",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00028|DDW.001|C220a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00016",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00016b",
    "titel": "Is er schade aan een verbetering of verandering van de garage of bergingsruimte uitgevoerd door u of een vorige eigenaar?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige eigenaar heeft uitgevoerd die niet verzekerd is via de vereniging van eigenaren."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "DDW.003|C240a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de vereniging van eigenaren"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00016",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00028|DDW.003|C240a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00016",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00017a",
    "titel": "Is er schade aan een verbetering of verandering aan de woning, garage, serre of schuur uitgevoerd door u of een vorige huurder?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige huurder heeft uitgevoerd die niet verzekerd is via de verhuurder."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "DDW.001|C330a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de verhuurder"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00017",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00029|DDW.001|C330a",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00017",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00017b",
    "titel": "Is er schade aan een verbetering of verandering van het trappenhuis uitgevoerd door u of een vorige huurder?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige huurder heeft uitgevoerd die niet verzekerd is via de verhuurder."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "C230a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de verhuurder"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00017",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00029|C230a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00017",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00017c",
    "titel": "Is er schade aan een verbetering of verandering van de garage of bergingsruimte uitgevoerd door u of een vorige huurder?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige huurder heeft uitgevoerd die niet verzekerd is via de verhuurder."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "DDW.003|C240a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de verhuurder"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00017",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00029|DDW.003|C240a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00017",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00017d",
    "titel": "Is er schade aan een verbetering of verandering van de tuin uitgevoerd door u of een vorige huurder?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige huurder heeft uitgevoerd die niet verzekerd is via de verhuurder."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "DDW.002|C330b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de verhuurder"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00017",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00029|DDW.002|C330b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00017",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00018a",
    "titel": "Is er schade aan een verandering of verbouwing van de woning, garage, serre, schuur of tuin uitgevoerd door u of een vorige huurder?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige huurder heeft uitgevoerd die niet verzekerd is via de verhuurder."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "DDW.001|C220a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de verhuurder"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00018",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00029|DDW.001|C220a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00018",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00018b",
    "titel": "Is er schade aan een verandering of verbouwing van de garage of bergingsruimte uitgevoerd door u of een vorige huurder?",
    "tekst": null,
    "vraagregels": [
      "Hiermee bedoelen we een verandering die u of een vorige huurder heeft uitgevoerd die niet verzekerd is via de verhuurder."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": "DDW.003|C240a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Ja, er is schade aan een eigen verbetering of verandering niet verzekerd via de verhuurder"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00018",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": "Z25.00029|DDW.003|C240a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Eigen verandering",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Eigen verandering",
          "overzicht_gemeld_rechts": "Nee"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00018",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00021",
    "titel": "Welke spullen zijn er in de tuin beschadigd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Alleen tuinspullen zoals tuinmeubels of tuin gereedschap",
        "tekst": null,
        "linkt_naar": "Z25.00015d",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Spullen in de tuin",
          "stappenplan_tekst": "Alleen tuinspullen",
          "overzicht_gemeld_links": "Spullen in de tuin",
          "overzicht_gemeld_rechts": "Er is alleen schade aan tuinspullen zoals tuinmeubels"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00021",
          "antwoord_id": "001"
        }
      },
      {
        "id": "020",
        "titel": "Ik heb schade aan iets anders, er is meer schade",
        "tekst": null,
        "linkt_naar": "Z25.00026|DDW.002|C330b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Spullen in de tuin",
          "stappenplan_tekst": "Tuinspullen en/of andere spullen",
          "overzicht_gemeld_links": "Spullen in de tuin",
          "overzicht_gemeld_rechts": "Er is schade aan tuinspullen zoals tuinmeubels en/of schade aan andere spullen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00021",
          "antwoord_id": "002"
        }
      }
    ]
  },
  {
    "id": "Z25.00023",
    "titel": "Informatiebericht",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "LABEL",
      "control": "MELDING",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Wijs claim af",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00023",
          "antwoord_id": "001"
        }
      }
    ]
  },
  {
    "id": "Z25.00024",
    "titel": "Informatiebericht",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "LABEL",
      "control": "MELDING",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Volg kritisch de polisvoorwaarden",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00024",
          "antwoord_id": "001"
        }
      }
    ]
  },
  {
    "id": "Z25.00025",
    "titel": "Informatiebericht",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "LABEL",
      "control": "MELDING",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Verwijs voor opstalschade naar verhuurder of VvE",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00025",
          "antwoord_id": "001"
        }
      }
    ]
  },
  {
    "id": "Z25.00026",
    "titel": "Informatiebericht",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "LABEL",
      "control": "MELDING",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Wijs inboedelclaim af",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00026",
          "antwoord_id": "001"
        }
      }
    ]
  },
  {
    "id": "Z25.00027",
    "titel": "Informatiebericht",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "LABEL",
      "control": "MELDING",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Wijs inboedelclaim af",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00027",
          "antwoord_id": "001"
        }
      }
    ]
  },
  {
    "id": "Z25.00028",
    "titel": "Informatiebericht",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "LABEL",
      "control": "MELDING",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Wijs eigenaarsbelang claim af",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00028",
          "antwoord_id": "001"
        }
      }
    ]
  },
  {
    "id": "Z25.00029",
    "titel": "Informatiebericht",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "LABEL",
      "control": "MELDING",
      "startvraag": false,
      "tonen": false,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Wijs huurdersbelangclaim af",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": "Z25",
          "type": "KF",
          "vraag_id": "00029",
          "antwoord_id": "001"
        }
      }
    ]
  },
  {
    "id": "DDW.001",
    "titel": "Wat is er beschadigd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "dialoogstap": "GEBEURTENIS",
      "type_validatie": "MIN_MAX",
      "validatie_parameters": "1|19",
      "vraagtype": "GESLOTEN_N",
      "control": "CHECKBOX_3K",
      "startvraag": false,
      "tonen": true,
      "foutmelding": "Maximum aantal schade indicatoren overschreden, pas uw invoer aan of geef uw schade telefonisch door.",
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Achterdeur",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Achterdeur",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Achterdeur"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z01"
        }
      },
      {
        "id": "020",
        "titel": "Voordeur",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Voordeur",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Voordeur"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z10"
        }
      },
      {
        "id": "030",
        "titel": "Balkonafscheiding",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Balkonafscheiding",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Balkonafscheiding"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z04"
        }
      },
      {
        "id": "040",
        "titel": "Dak",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": "C302",
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Dak",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Dak"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z19"
        }
      },
      {
        "id": "050",
        "titel": "Gevel",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Gevel",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Gevel"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z14"
        }
      },
      {
        "id": "060",
        "titel": "Ramen",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Ramen",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Ramen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z23"
        }
      },
      {
        "id": "070",
        "titel": "Kozijnen",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Kozijnen",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Kozijnen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z38"
        }
      },
      {
        "id": "071",
        "titel": "Dakgoot of boeideel",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Dakgoot of boeideel",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Dakgoot of boeideel"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z37"
        }
      },
      {
        "id": "080",
        "titel": "Schoorsteen",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Schoorsteen",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Schoorsteen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z22"
        }
      },
      {
        "id": "090",
        "titel": "Schutting",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": "C301",
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Schutting",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Schutting"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z02"
        }
      },
      {
        "id": "100",
        "titel": "Planten, struiken en bomen",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Planten, struiken en bomen",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Planten, struiken en bomen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z21"
        }
      },
      {
        "id": "110",
        "titel": "Zonwering",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Zonwering",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Zonwering"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z33"
        }
      },
      {
        "id": "120",
        "titel": "Zonnepanelen",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Zonnepanelen",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Zonnepanelen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z35"
        }
      },
      {
        "id": "130",
        "titel": "Lampen",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Lampen",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Lampen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z34"
        }
      },
      {
        "id": "140",
        "titel": "Rolluiken",
        "tekst": null,
        "groep_titel": "Woning buiten",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Rolluiken",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Rolluiken"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z36"
        }
      },
      {
        "id": "150",
        "titel": "Badkamer",
        "tekst": null,
        "groep_titel": "Woning binnen",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Badkamer",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Badkamer"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z03"
        }
      },
      {
        "id": "160",
        "titel": "Berging",
        "tekst": null,
        "groep_titel": "Woning binnen",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Berging",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Berging"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z18"
        }
      },
      {
        "id": "170",
        "titel": "Kelder",
        "tekst": null,
        "groep_titel": "Woning binnen",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Kelder",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Kelder"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z15"
        }
      },
      {
        "id": "180",
        "titel": "Keuken",
        "tekst": null,
        "groep_titel": "Woning binnen",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Keuken",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Keuken"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z07"
        }
      },
      {
        "id": "190",
        "titel": "Meterkast",
        "tekst": null,
        "groep_titel": "Woning binnen",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Meterkast",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Meterkast"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z20"
        }
      },
      {
        "id": "200",
        "titel": "Slaapkamer",
        "tekst": null,
        "groep_titel": "Woning binnen",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Slaapkamer",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Slaapkamer"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z09"
        }
      },
      {
        "id": "210",
        "titel": "WC",
        "tekst": null,
        "groep_titel": "Woning binnen",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "WC",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "WC"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z11"
        }
      },
      {
        "id": "220",
        "titel": "Woonkamer",
        "tekst": null,
        "groep_titel": "Woning binnen",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Woonkamer",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Woonkamer"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z12"
        }
      },
      {
        "id": "230",
        "titel": "Zolder",
        "tekst": null,
        "groep_titel": "Woning binnen",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Zolder",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Zolder"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z13"
        }
      },
      {
        "id": "240",
        "titel": "Garage / schuur",
        "tekst": null,
        "groep_titel": "Bijgebouw",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Garage / schuur",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Garage / schuur"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z06"
        }
      },
      {
        "id": "250",
        "titel": "Serre",
        "tekst": null,
        "groep_titel": "Bijgebouw",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Serre",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Serre"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z08"
        }
      },
      {
        "id": "260",
        "titel": "Overige bijgebouwen",
        "tekst": null,
        "groep_titel": "Bijgebouw",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Overige bijgebouwen",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Overige bijgebouwen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z16"
        }
      }
    ]
  },
  {
    "id": "DDW.002",
    "titel": "Wat is er beschadigd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "type_validatie": "MIN_MAX",
      "validatie_parameters": "1|19",
      "vraagtype": "GESLOTEN_N",
      "control": "CHECKBOX_3K",
      "startvraag": false,
      "tonen": true,
      "foutmelding": "Maximum aantal schade indicatoren overschreden, pas uw invoer aan of geef uw schade telefonisch door.",
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Planten, struiken en bomen",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Planten, struiken en bomen",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Planten, struiken en bomen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z21"
        }
      },
      {
        "id": "020",
        "titel": "Lampen",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Lampen",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Lampen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z34"
        }
      },
      {
        "id": "030",
        "titel": "Schutting",
        "tekst": null,
        "linkt_naar": "C301",
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Schutting",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Schutting"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z02"
        }
      },
      {
        "id": "040",
        "titel": "Garage / Schuur",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Garage / Schuur",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Garage / Schuur"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z06"
        }
      },
      {
        "id": "050",
        "titel": "Serre",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Serre",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Serre"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z08"
        }
      },
      {
        "id": "060",
        "titel": "Overige bijgebouwen",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Overige bijgebouwen",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Overige bijgebouwen"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z16"
        }
      }
    ]
  },
  {
    "id": "DDW.003",
    "titel": "Wat is er beschadigd?",
    "tekst": null,
    "vraag_eigenschappen": {
      "dialoogstap": "GEBEURTENIS",
      "type_validatie": "correct_gevuld",
      "validatie_parameters": "1|19",
      "vraagtype": "GESLOTEN_N",
      "control": "CHECKBOX_3K",
      "startvraag": false,
      "tonen": false,
      "foutmelding": "Maximum aantal schade indicatoren overschreden, pas uw invoer aan of geef uw schade telefonisch door.",
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Garage / schuur",
        "tekst": null,
        "groep_titel": "Bijgebouw",
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "verplicht": true,
          "icon": null,
          "formaat": "BOOLEAN",
          "max_lengte": null,
          "standaard_waarde": true,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Wat is er beschadigd?",
          "stappenplan_tekst": "Garage / schuur",
          "overzicht_gemeld_links": "Wat is er beschadigd?",
          "overzicht_gemeld_rechts": "Garage / schuur"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z06"
        }
      }
    ]
  },
  {
    "id": "C220a",
    "titel": "Geef een korte beschrijving van de schade aan uw woonhuis en/of bijgebouw\n",
    "tekst": null,
    "vraagregels": [
      "Geef een omschrijving van de schade in uw eigen woorden.\n"
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "TEKST",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": "STRING",
          "max_lengte": 800,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Toelichting",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": "Korte toelichting",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": "A5"
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C230a",
    "titel": "Geef een korte beschrijving van de schade aan het trappenhuis\n\n",
    "tekst": null,
    "vraagregels": [
      "Geef een omschrijving van de schade in uw eigen woorden.\n"
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "TEKST",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": "STRING",
          "max_lengte": 800,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Toelichting",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": "Korte toelichting",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": "A5"
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C240a",
    "titel": "Geef een korte beschrijving van de schade aan de garage of bergingsruimte\n\n\n",
    "tekst": null,
    "vraagregels": [
      "Geef een omschrijving van de schade in uw eigen woorden.\n"
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "TEKST",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": "STRING",
          "max_lengte": 800,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Toelichting",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": "Korte toelichting",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": "A5"
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C250a",
    "titel": "Geef een korte beschrijving van de schade\n\n\n",
    "tekst": null,
    "vraagregels": [
      "Geef een omschrijving van de schade in uw eigen woorden.\n"
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "TEKST",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": "STRING",
          "max_lengte": 800,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Toelichting",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": "Korte toelichting",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": "A5"
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C260a",
    "titel": "Geef een korte beschrijving van de schade aan uw tuin of bijgebouw in uw tuin\n\n\n\n",
    "tekst": null,
    "vraagregels": [
      "Geef een omschrijving van de schade in uw eigen woorden.\n"
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "TEKST",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": "STRING",
          "max_lengte": 800,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Toelichting",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": "Korte toelichting",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": "A5"
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C300",
    "titel": "Geef een korte toelichting wat er is gebeurd",
    "tekst": null,
    "vraagregels": [
      "Geef een omschrijving van de gebeurtenis in uw eigen woorden."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "TEKST",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": 800,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Toelichting",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": "Korte toelichting",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": "A1"
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C301",
    "titel": "Is de beschadigde schutting gezamenlijk eigendom van u en uw buren?",
    "tekst": null,
    "vraagregels": [
      "Als de schutting op de erfgrens staat dan is deze gezamenlijk eigendom van u en uw buren. Wij vergoeden alleen uw deel van de schade."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Gezamenlijk eigendom schutting?",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Gezamenlijk eigendom schutting?",
          "overzicht_gemeld_rechts": "Ja, de beschadigde schutting is gezamenlijk eigendom met de buren"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "beschadigd_gebouw": {
          "beschadigd_object": "0001",
          "schutting_rekening_delen": true
        }
      },
      {
        "id": "020",
        "titel": "Nee",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Gezamenlijk eigendom schutting?",
          "stappenplan_tekst": "Nee",
          "overzicht_gemeld_links": "Gezamenlijk eigendom schutting?",
          "overzicht_gemeld_rechts": "Nee, de beschadigde schutting is mijn eigendom"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "beschadigd_gebouw": {
          "beschadigd_object": "0001",
          "schutting_rekening_delen": false
        }
      }
    ]
  },
  {
    "id": "C302",
    "titel": "Is er asbest aanwezig in het beschadigd dak?",
    "tekst": null,
    "vraagregels": [
      "Is uw woning gebouwd voor 1993? Dan is er kans dat er asbest is verwerkt in het dak. Asbest heeft vaak een vezelachtige structuur en heeft een witte tot lichtgrijze kleur."
    ],
    "disclaimertekst": "Het opruimen van asbest is specialistisch werk. Wij willen de aanwezigheid van asbest graag weten om uw schade goed te kunnen regelen.",
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "RADIOBUTTON_2K",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ja",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Asbest aanwezig?",
          "stappenplan_tekst": "Ja",
          "overzicht_gemeld_links": "Is er schade aan een asbesthoudend dak?",
          "overzicht_gemeld_rechts": "Ja"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        },
        "schade_indicator_eigenschappen": {
          "beschadigd_object": "0001",
          "schade_indicator_id": "Z32"
        }
      },
      {
        "id": "020",
        "titel": "Nee / weet ik niet",
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Asbest aanwezig?",
          "stappenplan_tekst": "Nee / weet ik niet",
          "overzicht_gemeld_links": "Is er schade aan een asbesthoudend dak?",
          "overzicht_gemeld_rechts": "Nee / weet ik niet"
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C310",
    "titel": "Wat is de schade aan het woonhuis?",
    "tekst": null,
    "vraagregels": [
      "Beschrijf hier de schade aan uw huis of tuin."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "TEKST",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": 800,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade woonhuis",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": "Schade woonhuis",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": "A1"
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C320",
    "titel": "Wat is de schade aan de spullen?",
    "tekst": null,
    "vraagregels": [
      "Beschrijf hier de schade aan uw spullen. Informatie over de spullen, zoals het merk, type en de datum van aankoop, graag ook hier beschrijven."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "TEKST",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": "WOO|GB2|GEB"
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": 800,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade spullen",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": "Schade spullen",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": "A1"
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C320a",
    "titel": "Wat is de schade aan de spullen?",
    "tekst": null,
    "vraagregels": [
      "Beschrijf hier de schade aan uw spullen. Informatie over de spullen, zoals het merk, type en de datum van aankoop, graag ook hier beschrijven."
    ],
    "vraag_eigenschappen": {
      "verplicht": true,
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "OPEN_1",
      "control": "TEKST",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": "WOO|GB2|GEB"
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": null,
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": 800,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_kop": "Schade spullen",
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": "Schade spullen",
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": "A6"
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C330",
    "titel": null,
    "tekst": null,
    "vraag_eigenschappen": {
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "BUTTON",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ok",
        "tekst": null,
        "linkt_naar": "C500",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C330a",
    "titel": null,
    "tekst": null,
    "vraag_eigenschappen": {
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "BUTTON",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ok",
        "tekst": null,
        "linkt_naar": "C220a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C330b",
    "titel": null,
    "tekst": null,
    "vraag_eigenschappen": {
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "BUTTON",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ok",
        "tekst": null,
        "linkt_naar": "C260a|C320a|C360b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C360b",
    "titel": null,
    "tekst": null,
    "vraag_eigenschappen": {
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "BUTTON",
      "startvraag": false,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": "Ok",
        "tekst": null,
        "linkt_naar": "C500b",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C500",
    "titel": "Zijn alle gegevens goed ingevuld?",
    "tekst": null,
    "vraagregels": [
      "De schade is op dit moment nog niet gemeld. Als u verder gaat dan wordt de schade opgeslagen."
    ],
    "disclaimertekst": "Zorg ervoor dat u uw gegevens volledig naar waarheid heeft ingevuld. Zodra u de schade meldt kunnen deze niet meer aangepast worden.",
    "vraag_eigenschappen": {
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "LABEL",
      "startvraag": false,
      "eindvraag": true,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": "final",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|SCHADE MELDEN"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  },
  {
    "id": "C500b",
    "titel": "Zijn alle gegevens goed ingevuld?",
    "tekst": null,
    "vraagregels": [
      "Dan bekijken we of uw schade is verzekerd."
    ],
    "disclaimertekst": "Zorg ervoor dat u uw gegevens volledig naar waarheid heeft ingevuld. Uw schademelding wordt opgeslagen en u kunt uw schademelding hierna niet meer wijzigen.",
    "vraag_eigenschappen": {
      "dialoogstap": "GEBEURTENIS",
      "vraagtype": "GESLOTEN_1",
      "control": "LABEL",
      "startvraag": false,
      "eindvraag": true,
      "tonen": true,
      "van_toepassing_bij_labels": null,
      "niet_van_toepassing_bij_labels": null,
      "van_toepassing_bij_verzekeringen": null,
      "niet_van_toepassing_bij_verzekeringen": null
    },
    "antwoorden": [
      {
        "id": "010",
        "titel": null,
        "tekst": null,
        "linkt_naar": "final",
        "antwoord_eigenschappen": {
          "icon": null,
          "formaat": null,
          "max_lengte": null,
          "standaard_waarde": null,
          "van_toepassing_bij_labels": null,
          "niet_van_toepassing_bij_labels": null,
          "van_toepassing_bij_verzekeringen": null,
          "niet_van_toepassing_bij_verzekeringen": null,
          "stappenplan_tekst": null,
          "overzicht_gemeld_links": null,
          "overzicht_gemeld_rechts": null
        },
        "proces": {
          "stappenplan_stappen": "GEBEURTENIS|WAT IS VERZEKERD|OPLOSSINGEN|SCHADEAFWIKKELING"
        },
        "claim": {
          "polisproduct": null,
          "gebeurtenis": null,
          "oorzaak": null,
          "schadedatum": null,
          "soort_vaststelling": null,
          "herstel_netwerk": null,
          "telefoonnummer": null,
          "emailadres": null
        },
        "notitie": {
          "notitietype": null
        },
        "vragenboom_eigenschappen": {
          "id": null,
          "type": null,
          "vraag_id": null,
          "antwoord_id": null
        }
      }
    ]
  }
]