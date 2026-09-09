// Bensavahti pilot: paikallinen referenssi. Automaattinen selainhaku asemille lisätään kun lähde sallii vakaan CORS/API-haun.
window.SAHKOVAHTI_FUEL={
  fallback:2.10,
  consumption:7.0,
  electricConsumption:18.0,
  local:[
    {station:'St1 Keskusta',price:1.999,date:'6.9.'},
    {station:'St1 Tiiriö',price:2.004,date:'6.9.'},
    {station:'St1 Iittala',price:2.009,date:'6.9.'},
    {station:'Neste Idänpää',price:2.053,date:'5.9.'},
    {station:'ABC Harvialantie',price:2.063,date:'5.9.'}
  ],
  source:'Polttoaine.net',
  note:'Hämeenlinnan käyttäjäilmoituksia; paikallinen data ei ole reaaliaikaista.'
};
