MCMLXXVIII – mobil og landingsside v1.1
=====================================

Denne pakken inneholder:
  index.html     – ny kryptisk landingsside uten betalingsfunksjon
  signature.css  – eksisterende sentral CSS med tillegg for mobiltrykk
  signature.js   – første trykk viser tooltip, andre følger lenken

GITHUB
1. I github.com/darktronMT/mcmlxxviii: erstatt index.html med denne filen.
2. Erstatt signature.css med denne filen (samme filnavn).
3. Last opp signature.js som ny fil i hovedmappen.
4. La ALLE SVG-filer ligge urørt. Offentlige SVG-adresser skal ikke endres.

FLATSOME / SLETTA
I Flatsome > Advanced Options > Global Settings > Header Scripts:
Behold eksisterende:
<link rel="stylesheet" href="https://darktronmt.github.io/mcmlxxviii/signature.css">

Legg til denne rett under:
<script defer src="https://darktronmt.github.io/mcmlxxviii/signature.js"></script>

Footer-HTML behøver ikke endres, så lenge linken har klassen
'mcmlxxviii-signature' og attributtet data-tooltip.

TEST
- På PC: hover viser tooltip, klikk åpner landingssiden.
- På mobil: første trykk viser tooltip, andre trykk åpner landingssiden.
- Uten JavaScript: lenken fungerer fortsatt, men første trykk navigerer direkte.
- Hvis CSS virker, men JS ikke gjør det, kontroller nettleserkonsollen og ev. cache.
- Sørg for at Pages er aktivert, og test også i privat vindu.

Ingen betaling er inkludert. Ingen font- eller skriptavhengigheter på landingssiden.
