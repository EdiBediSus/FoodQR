FOODQR - STARTER APP (HTML/CSS/JavaScript + Firebase)

FUNCȚII INCLUSE
- Înregistrare și conectare cu email/parolă.
- Listă cu produse adăugate recent.
- Formular pentru adăugarea produselor și informațiilor nutriționale.
- Încărcarea fotografiei produsului în Firebase Storage.
- Generarea unui QR unic pentru fiecare produs.
- Scanarea codurilor QR cu camera telefonului.
- Pagină publică pentru fiecare produs.
- Recenzii cu stele; un utilizator poate lăsa o singură recenzie per produs (verificare în aplicație).
- Descărcarea QR-ului ca PNG.
- Copierea imaginii QR (unde browserul permite); dacă nu, se copiază linkul produsului.
- Distribuire WhatsApp: pe telefoanele compatibile se poate partaja direct fișierul QR; în celelalte cazuri se deschide WhatsApp cu linkul și utilizatorul poate atașa PNG-ul descărcat.

1. FIREBASE
- Creează un proiect Firebase separat pentru FoodQR (recomandat, ca să nu amesteci datele cu EdChat).
- Adaugă o aplicație Web în Firebase.
- Copiază configurația din Project settings -> General -> Your apps -> SDK setup and configuration.
- Deschide firebase-config.js și înlocuiește toate valorile PASTE_... cu valorile tale.
- Authentication -> Sign-in method -> activează Email/Password.
- Firestore Database -> Create database.
- Storage -> Get started / activează Firebase Storage.

2. REGULI
- Firestore Database -> Rules: integrează conținutul din FIRESTORE_RULES.txt în interiorul blocului match /databases/{database}/documents.
- Dacă proiectul Firebase este nou și nu ai alte reguli, păstrează antetul rules_version = '2'; service cloud.firestore { ... } și adaugă match-urile în interiorul documents.
- Storage -> Rules: adaugă regulile din STORAGE_RULES.txt.
- Publicarea regulilor este necesară. Nu folosi reguli allow read, write: if true.

3. GITHUB PAGES
- Încarcă index.html, style.css, app.js, firebase-config.js și cele două fișiere de reguli/README în repository.
- Repository -> Settings -> Pages -> Deploy from a branch -> main -> /(root).
- Așteaptă publicarea. Aplicația trebuie deschisă prin HTTPS pentru acces la camera telefonului.
- Linkurile QR folosesc adresa GitHub Pages curentă + ?product=ID. Dacă schimbi domeniul/repository-ul, QR-urile vechi pot să nu mai ducă la noua adresă.

4. APK
- Introdu adresa HTTPS GitHub Pages în HTML-to-APK Builder.
- Activează permisiunea Camera și accesul la internet în aplicația Android.
- Testează scanarea pe telefon real. Unele convertoare APK pot limita camera, Clipboard sau partajarea de fișiere; în acel caz folosește descărcarea QR-ului și linkul WhatsApp.

NOTE IMPORTANTE
- Datele nutriționale și ingredientele sunt introduse de utilizatori; aplicația nu le verifică automat. Pentru o aplicație comercială, adaugă raportare/moderare și o etichetă clară că informațiile sunt furnizate de comunitate.
- Verificarea unei singure recenzii per utilizator/produs din interfață poate fi ocolită de un utilizator tehnic. Pentru producție, mută validarea într-o tranzacție Firestore sau Cloud Function și adaugă moderare.
- Imaginile sunt stocate în Firebase Storage, nu ca Base64 în Firestore.
- Nu publica chei private sau service-account JSON în aplicația web. Firebase web config este publică prin design; securitatea se face cu Authentication și reguli.
