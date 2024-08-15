//TEST-DIN-VIDEN KNAP og CANCEL KNAP
const testDinVidenKnapper = document.querySelectorAll('.test-din-viden-button');
const spil = document.querySelector('.branching-spil');
const cancelBranchingKnap = document.querySelector('.cancel-button');
//BRANCHING
const checkboxes = document.querySelectorAll('input[type="checkbox"]'); 
const questions = document.querySelector('.question');
const answerOptions = document.querySelectorAll('.mulighed');
const continueButton = document.querySelector('.next-button');
const backButton = document.querySelector('.back-button');
let currentScenario = ['scenario0'];
const checkboxesAndOptions = document.querySelectorAll('.group');
const checkbox1 = document.getElementById('checkbox1');
const buttonFortrolighed = document.getElementById('button-fortrolighed');
const checkboxOgLabelContainer = document.getElementById('checkbox-og-label-container');

//Vis eller fjern branching spil
function visSpil(display){
    spil.style.display = display;
}

buttonFortrolighed.addEventListener('click', function(){
    visSpil('flex');

    scenarios = {
        scenario0: {question:'Du har en arbejdscomputer og benytter en e-mail til kommunikation internt og eksternt. Mens du tjekker din arbejds-e-mail, bemærker du en besked, der ser ud til at være fra din HR-afdeling. Beskeden beder dig om at opdatere din adgangskode i et svar på e-mailen, ved at skrive dit nuværende og nye kodeord, på grund af "sikkerhedsproblemer". Hvad gør du nu?', 
        options: ['Du følger instruktionerne i e-mailen og opdaterer din adgangskode som anmodet.', 'Du bliver bekymret og indser, at det muligvis er en phishing-e-mail, der beder om din adgangskode.', 'Du kontakter din IT-afdeling eller en kollega for at bekræfte, om e-mailen er legitim, før du træffer nogen handling.'], nextScenario: ['scenario1', 'scenario2', 'scenario3']},
        
        scenario1: {question:'Du har fulgt instrukserne og skal til at opdatere dit kodeord.\nHvad opdaterer du dit kodeord til?', options: ["P@ssw0rd!", "password123", "Du husker at computer-Carsten fra IT engang sagde noget om at man ikke skal oplyse sit kodeord til nogen."], 
        nextScenario: ['scenario4', 'scenario5', 'scenario6']},
        
        scenario2: {question:'Du blev bekymret og mistænker, at det muligvis er en phishing-e-mail. Hvad gør du nu, for at konkludere, om det er en phishing-e-mail eller ej?', options: ['Kontrollerer afsenderens e-mailadresse: Undersøger afsenderens e-mailadresse nøje for at se, om den ser legitim ud.', 'Vurderer e-mailens indhold: Læser e-mailens indhold omhyggeligt og ser efter tegn på phishing, såsom grammatiske fejl, stavefejl eller anmodninger om fortrolige oplysninger, som f.eks. adgangskoder eller personlige oplysninger.', 'Klikker på på vedhæftede filer og links: Du undersøger eventuelle vedhæftede filer eller links i e-mailen ved at klikke på dem.'], 
        nextScenario: ['scenario7', 'scenario8', 'scenario9']},
        
        scenario3: {question:'Du har kontaktet din IT-afdeling for at bekræfte, om e-mailen er legitim. Godt gået. Du har identificeret en phishing-e-mail. Du beslutter dig for at undersøge e-mailen yderligere i mellemtiden. Hvad gør du?', 
        options: ['Undersøger afsenderens e-mailadresse nøje for at se, om den ser legitim ud.', 'Læser e-mailens indhold omhyggeligt og ser efter tegn på phishing, såsom grammatiske fejl, stavefejl eller anmodninger om fortrolige oplysninger, som f.eks. adgangskoder eller personlige oplysninger.', 'Du undersøger eventuelle vedhæftede filer eller links i e-mailen ved at klikke på dem.'], 
        nextScenario: ['scenario10', 'scenario11', 'scenario9']},
        
        scenario4: {question:'Du har opdateret dit kodeord til "P@ssw0rd!". Godt valg. Den består af en kombination af store og små bogstaver, den indeholder specialtegn (i dette tilfælde "@"), den indeholder tal, og den er relativt lang, hvilket øger sikkerheden.\nSenere på dagen bemærker du en underlig meddelelse på din computer, der antyder, at der har været et forsøg på at få adgang til følsomme data fra din konto.\nHvad gør du?', 
        options: ["Du indser, at du muligvis er blevet narret af en phishing-e-mail, der bad om din adgangskode, og du rapporterer straks situationen til din IT-afdeling eller sikkerhedsansvarlige.", "Du ændrer straks dit kodeord til en ny, unik adgangskode, der ikke er blevet delt med nogen andre, og du aktiverer eventuelle yderligere sikkerhedsforanstaltninger, som virksomheden tilbyder, såsom to-faktor-autentificering.", "Du ignorerer den underlige meddelelse på din computer og fortsætter med at bruge din konto som normalt uden at foretage nogen ændringer i dine adgangsoplysninger eller rapportere situationen til nogen."], nextScenario: ['scenario13', 'scenario14', 'scenario15']},
        
        scenario5: {question:'Du har opdateret dit kodeord til "password123". Dårligt valg. Den er meget enkel og almindelig og bruger blot ordet "password", som er en af de mest anvendte adgangskoder og let at gætte, den indeholder ingen specialtegn, og den indeholder kun tal i slutningen, hvilket ikke giver tilstrækkelig kompleksitet.\nSenere på dagen bemærker du en underlig meddelelse på din computer, der antyder, at der har været et forsøg på at få adgang til følsomme data fra din konto.\nHvad gør du?', 
        options: ["Du indser, at du muligvis er blevet narret af en phishing-e-mail, der bad om din adgangskode, og du rapporterer straks situationen til din IT-afdeling eller sikkerhedsansvarlige.", "Du ændrer straks dit kodeord til en ny, unik adgangskode, der ikke er blevet delt med nogen andre, og du aktiverer eventuelle yderligere sikkerhedsforanstaltninger, som virksomheden tilbyder, såsom to-faktor-autentificering.", "Du ignorerer den underlige meddelelse på din computer og fortsætter med at bruge din konto som normalt uden at foretage nogen ændringer i dine adgangsoplysninger eller rapportere situationen til nogen."], nextScenario: ['scenario13', 'scenario14', 'scenario15']},
        
        scenario6: {question:'Du husker, hvad Computer-Carsten fra IT tidligere har sagt om ikke at oplyse sit kodeord til nogen. Ved at følge dette råd undgår du at dele dit kodeord og dermed risikoen for, at det bliver kompromitteret. Dette handler om at opretholde sikkerheden for dine konti og personlige oplysninger. Derfor undgår du potentielle konsekvenser såsom uautoriseret adgang til dine data eller hacking af dine konti, hvilket kan resultere i tab af fortrolige oplysninger eller endda identitetstyveri. Men hvad gør du nu? Du modtog trods alt en phishing-e-mail.', 
        options: ['Rapporter det til IT-afdelingen: Du vælger at rapportere den modtagne phishing-e-mail til din virksomheds IT-afdeling eller sikkerhedsansvarlige. Dette sikrer, at de kan undersøge situationen nærmere og træffe passende foranstaltninger for at beskytte virksomhedens systemer og medarbejdere mod lignende angreb i fremtiden.', 'Ignorer e-mailen og slet den: Du beslutter dig for at ignorere den modtagne phishing-e-mail og slette den uden yderligere handling. Ved ikke at engagere dig yderligere undgår du risikoen for at blive narret eller kompromittere dine oplysninger yderligere.', 'Gennemgå din IT-sikkerhedspraksis: Du bruger situationen som en påmindelse om vigtigheden af god IT-sikkerhedspraksis. Du tager dig tid til at gennemgå og opdatere dine sikkerhedsforanstaltninger, f.eks. ved at aktivere to-faktor-autentificering, opdatere dit antivirusprogram eller deltage i IT-sikkerhedstræning for at blive bedre rustet til at identificere og håndtere phishing-forsøg i fremtiden.'], 
        nextScenario: ['scenario16', 'scenario17', 'scenario18']},
        
        scenario7: {question:'Ofte vil phishing-e-mails komme fra en afsenderadresse, der ser mistænkelig ud eller ikke er relateret til virksomheden. Denne e-mail afsender kan du se, at der ikke stemmer overens med HRs normale e-mail. Hvad gør du?', options: ['Du indser, at du muligvis er blevet forsøgt narret af en phishing-e-mail, der bad om din adgangskode, og du rapporterer straks situationen til din IT-afdeling eller sikkerhedsansvarlige.', 'HR må have ændret e-mail, tænker du, så du vælger at følge instrukserne i e-mailen og opdatere dit kodeord ved at sende dit nuværende og nye.', 'Du svarer på e-mailen for at undersøge situationen nærmere.'], 
        nextScenario: ['scenario16', 'scenario15', 'scenario19']},
        
        scenario8: {question:'Der er ingen stavefejl. Gramatikken ser også fin ud. HR har altså bedt om at gøre noget som Computer-Carsten ikke ville have gjort. Hvad gør du nu?', options: ['Du følger instrukserne og opdaterer dit kodeord.', 'Du ringer til Computer-Carsten for at få hans anbefaling.', 'Du gennemgår din IT-sikkerhedspraksis: Du bruger situationen som en påmindelse om vigtigheden af god IT-sikkerhedspraksis. Du tager dig tid til at gennemgå og opdatere dine sikkerhedsforanstaltninger, f.eks. ved at aktivere to-faktor-autentificering, opdatere dit antivirusprogram eller deltage i IT-sikkerhedstræning for at blive bedre rustet til at identificere og håndtere phishing-forsøg i fremtiden.'], nextScenario: ['scenario15', 'scenario19', 'scenario18']},
        
        scenario9: {question:'Klik ikke på vedhæftede filer eller links. Her er hvad du kunne have gjort: Undersøg eventuelle vedhæftede filer eller links i e-mailen, men klik ikke på dem, før du er sikker på, at e-mailen er legitim. Phishing-e-mails kan indeholde skadelige links, der kan inficere din computer med malware eller dirigere dig til falske websteder, der stjæler dine oplysninger. Men skaden er sket, for du har allerede klikket på linket, hvor der stod, at du tilfældigvis havde vundet i lotteriet. Du har fattet mistanke om, at du faktisk ikke har vundet i lotteriet og e-mailen ikke er fra HR. Hvad gør du?', options: ['Du rapporterer straks situationen til din IT-afdeling eller sikkerhedsansvarlige.', 'Sender dine kontooplysninger, da de selvfølgelig må have forsøgt at overføre pengene uden held.', 'Du tager en frisk beslutning og brænder din computer, da du tænker at enhver fare, som "virus", i såfald må være væk.'], nextScenario: ['scenario20', 'scenario21', 'scenario22']},
        
        scenario10: {question:'Ofte vil phishing-e-mails komme fra en afsenderadresse, der ser mistænkelig ud eller ikke er relateret til virksomheden. Denne specikke e-mail-afsender kan du se, at der ikke stemmer overens med HRs normale e-mail. Mens du afventer svar fra IT gør du en af følgende:', 
        options: ['Du bruger situationen som en påmindelse om vigtigheden af god IT-sikkerhedspraksis. Du tager dig tid til at gennemgå og opdatere dine sikkerhedsforanstaltninger, f.eks. ved at aktivere to-faktor-autentificering, opdatere dit antivirusprogram eller deltage i IT-sikkerhedstræning.', 
        'Printer e-mailen ud og sletter den efterfølgende. Så er den ude af systemet.', 
        'Slukker for computeren med den fysiske sluk-knap, da disse formodede hackere, der har sendt e-mailen, ikke kan tage flere af dine data, selvom du ikke har gjort andet end at åbne mailen.'], 
        nextScenario: ['scenario18', 'scenario24', 'scenario24']},

        scenario11: {question:'Der er ingen stavefejl. Gramatikken ser også fin ud. Hvad gør du nu?', options: ['Glemmer alt om din mistanke og klikker på vedhæftede filer og links i e-mailen.', 'Fortsætter hvor du slap før du modtog e-mailen.', 'Tager en lur.'], nextScenario: ['scenario20', 'scenario16', 'scenario16']},

        scenario13: {question:'Godt at du fik mistanke om situationens alvor og rapporterede det. Du skulle adrig have delt dit kodeord i e-mailen. E-mailen var ikke fra HR. Det var en phishing-e-mail.\nGenerelt udgør deling af dit kodeord en alvorlig sikkerhedsrisiko af flere årsager. Først og fremmest er dit kodeord din private nøgle til at få adgang til følsomme oplysninger. Ved at dele det mister du kontrollen over, hvem der kan få adgang til dine data.\nDerudover tager du ansvar for sikkerheden af dine konti og data ved at holde dit kodeord fortroligt. Kompromittering af dit kodeord kan føre til tab af personlige oplysninger og økonomisk skade.\nSamtidig øger deling af kodeord risikoen for uautoriseret adgang til dine konti, hvilket kan invitere hackere til at få adgang til dine data.\nDerfor er det vigtigt at huske, at dit kodeord er en privat information, som kun du bør kende. Det er afgørende for at opretholde sikkerheden på internettet og beskytte dine personlige og professionelle data.\n\nGå tilbage i scenarierne og undersøg konsekvenserne af de andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']},
        scenario14: {question:'Godt at du fik mistanke om situationens alvor. Du skulle adrig have delt dit kodeord i e-mailen. E-mailen var ikke fra HR. Det var en phishing-e-mail. At have delt dit kodeord kan have alvorlige konsekvenser, herunder risikoen for uautoriseret adgang til dine konti og personlige oplysninger. Ved at ændre dit kodeord og aktivere yderligere sikkerhedsforanstaltninger kan du minimere denne risiko og beskytte dine data. Samtidig er det vigtigt at rapportere situationen til din IT-afdeling, så de kan træffe yderligere foranstaltninger for at sikre sikkerheden for virksomhedens systemer og data.\n\nGå tilbage i scenarierne og undersøg konsekvenserne af de andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']},
        scenario15: {question: 'Åh nej. Du skulle adrig have delt dit kodeord i e-mailen. E-mailen var ikke fra HR. Det var en phishing-e-mail. Ignorering af den underlige meddelelse og fortsættelse med at bruge din konto uden at foretage nogen ændringer i dine adgangsoplysninger eller rapportere situationen til nogen udgør en betydelig sikkerhedsrisiko. Ved ikke at reagere på potentielle advarsler om uautoriseret adgang til dine data, risikerer du at udsætte dine personlige oplysninger og virksomhedens data for fare. Det er vigtigt at tage enhver mistænkelig aktivitet alvorligt og træffe passende foranstaltninger for at beskytte dine konti og oplysninger. Derfor er det anbefalet at rapportere denne type situationer til din IT-afdeling eller sikkerhedsansvarlige, så de kan undersøge og håndtere truslen mod sikkerheden.\n\nGå tilbage i scenarierne og undersøg konsekvenserne af de andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']},

        scenario16: {question: 'Godt gået. Du lader til at have styr på faren ved phishing-e-mails. Det er afgørende at rapportere phishing-hændelser til IT-afdelingen for at beskytte virksomhedens sikkerhed og informere andre medarbejdere om potentielle trusler. Gå tilbage i scenarierne og undersøg konsekvenserne ved andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']},
        scenario17: {question: 'Ignorering af phishing-e-mails kan forværre sikkerhedsrisikoen og udsætte både virksomhedens data og medarbejderes personlige oplysninger for fare. Det er afgørende at rapportere phishing-hændelser til IT-afdelingen for at beskytte virksomhedens sikkerhed og informere andre medarbejdere om potentielle trusler. Gå tilbage i scenarierne og undersøg konsekvenserne af de andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']},
        scenario18: {question: 'Godt gået. Du lader til at have styr på faren ved phishing-e-mails. En regelmæssig gennemgang af og opdatering af dine IT-sikkerhedspraksis er afgørende for at imødegå trusler som phishing. Det er en vigtig del af at forbedre sikkerheden og beskytte virksomhedens og medarbejderes (dine) data. Derudover er det afgørende at rapportere phishing-hændelser til IT-afdelingen for at beskytte virksomhedens sikkerhed og informere andre medarbejdere om potentielle trusler. Gå tilbage i scenarierne og undersøg konsekvenserne af de andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']},

        scenario19: {question: 'Godt gået. Du lader til at være opmærksom på faren ved phishing-e-mails og faldt ikke i fælden. Det er dog afgørende at rapportere phishing-hændelser til IT-afdelingen for at beskytte virksomhedens sikkerhed og informere andre medarbejdere om potentielle trusler, så sørg for at kontakte din IT-afdeling eller ansvarlige hvis du får mistanke. Gå tilbage i scenarierne og undersøg konsekvenserne ved andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']},
        scenario20: {question:'Godt at du fik mistanke om situationens alvor og rapporterede det. Du skulle adrig have klikket på indholdet i e-mailen. E-mailen var ikke fra HR. Det var en phishing-e-mail. Ved at klikke på indholdet øger du risikoen for at inficere din computer med malware eller dirigere dig til falske websteder, der stjæler dine oplysninger. Det er vigtigt at rapportere situationen til din IT-afdeling, så de kan træffe yderligere foranstaltninger for at sikre sikkerheden for virksomhedens systemer og data.\n\nGå tilbage i scenarierne og undersøg konsekvenserne af de andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']},
        scenario21: {question: 'Det var godt, at du ikke sendte dit kodeord. Til gengæld lader du til at være uopmærksom på risikoen ved phishing-e-mails, og ved at oplyse dit kortnummer og/eller klikke på indholdet i e-mailen, risikerer du at blive mål for svindlere og phishing-angreb, hvor de forsøger at lokke dig til at afgive yderligere personlige oplysninger eller udføre skadelige handlinger, såsom at klikke på skadelige links eller downloade malware. Det er vigtigt at rapportere situationen til din IT-afdeling, så de kan træffe yderligere foranstaltninger for at sikre sikkerheden for virksomhedens systemer og data.\n\nGå tilbage i scenarierne og undersøg konsekvenserne af de andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']},
        scenario22: {question: 'Godt gået. Nyd din lur. Du lader til at have styr på faren ved phishing-e-mails. At få tilstrækkelig søvn kan faktisk bidrage til at forbedre ens evne til at opretholde datasikkerhed på flere måder: Forbedret kognitiv funktion: Når du får tilstrækkelig søvn, fungerer din hjerne optimalt, hvilket betyder, at du er mere opmærksom og i stand til at træffe velinformerede beslutninger, herunder at identificere og reagere på potentielle datasikkerhedstrusler. Reduceret risiko for fejl: Mangel på søvn kan føre til forringet koncentration og øget risiko for fejl, herunder at give uautoriseret adgang til følsomme oplysninger eller falde for phishing-forsøg. Ved at prioritere tilstrækkelig søvn kan man reducere risikoen for disse fejl. Styrket stresshåndtering: Manglende søvn kan øge stressniveauet, hvilket kan påvirke ens evne til at håndtere uventede situationer, herunder cyberangreb. Ved at få tilstrækkelig søvn kan man bedre håndtere stress og dermed reagere mere effektivt på datasikkerhedstrusler. Samlet set kan en god nats søvn være en vigtig del af at opretholde en sund og sikker arbejdspraksis, herunder beskyttelse af følsomme data og forhindring af datasikkerhedsangreb.', options: ['', '', ''], nextScenario: ['', '', '']},
        scenario23: {question: 'Åh nej. Fysisk destruktion af en computer vil ikke hjælpe, hvis man allerede har klikket på et skadeligt link eller lignende, fordi malware kan have spredt sig til andre enheder i netværket eller i skyen, følsomme data kan stadig være kompromitteret, og hackere kan fortsætte med at angribe andre enheder. I stedet for fysisk destruktion er det mere effektivt at have et omfattende sikkerhedsprogram, der inkluderer regelmæssige sikkerhedskopier, opdaterede antivirusprogrammer og træning af medarbejdere i at identificere og håndtere sikkerhedstrusler. Det er vigtigt at tage enhver mistænkelig aktivitet alvorligt og træffe passende foranstaltninger for at beskytte dine konti og oplysninger. Derfor er det anbefalet at rapportere denne type situationer til din IT-afdeling eller sikkerhedsansvarlige, så de kan undersøge og håndtere truslen mod sikkerheden.\n\nGå tilbage i scenarierne og undersøg konsekvenserne af de andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']},
        scenario24: {question: 'Selvom der er visse risici forbundet med at åbne en phishing-e-mail, kan det være, at visse handlinger, såsom blot at åbne e-mailen uden at klikke på links eller downloade vedhæftninger, har en lavere risiko.For at mindske disse risici er det bedst at slette phishing-e-mails uden at åbne dem. Har du allerede åbnet den men ikke klikket på noget indhold, er du ikke i fare. Når du åbner en phishing-e-mail, kan det dog stadig give afsenderen bekræftelse på, at din e-mail-adresse er aktiv og i brug. Dette kan potentielt føre til yderligere målrettede phishing-forsøg eller spam i din indbakke. Så pas på. Gå tilbage i scenarierne og undersøg konsekvenserne af de andre muligheder.', options: ['', '', ''], nextScenario: ['', '', '']}
    }       
    scenarioFunction(currentScenario[0]);
})

cancelBranchingKnap.addEventListener('click', function(){
    visSpil('none');
    currentScenario.splice(1, currentScenario.length);
    optionDisplay(currentScenario[currentScenario.length-1]);
    
})
//Function der manipulerer text content (spørgsmål og muligheder) i html.
function scenarioFunction(scenarioX){
    //spørgsmål
    questions.textContent = scenarios[scenarioX].question;
    //label tekst til muligheder
    answerOptions.forEach(function(mulighed, index){  //giver tilbage fra html: elementet og dets index. 
    mulighed.textContent = scenarios[scenarioX].options[index];
    })

    if(currentScenario.length === 1){
    backButton.style.display= 'none';
    }else {
    backButton.style.display= 'block';
    }     
}

function optionDisplay (scenarioX){
        if (currentScenario.includes('scenario13') ||
    currentScenario.includes('scenario14') ||
    currentScenario.includes('scenario15') ||
    currentScenario.includes('scenario16') ||
    currentScenario.includes('scenario17') ||
    currentScenario.includes('scenario18') ||
    currentScenario.includes('scenario19') ||
    currentScenario.includes('scenario20') ||
    currentScenario.includes('scenario21') ||
    currentScenario.includes('scenario22') ||
    currentScenario.includes('scenario23') ||
    currentScenario.includes('scenario24')) {
    continueButton.style.display = 'none';
    checkboxOgLabelContainer.style.display= 'none';
    } else {
        continueButton.style.display = 'block';
        checkboxOgLabelContainer.style.display= 'flex'; 
    }
}

//Gør at checkboxes kun kan være markeret én ad gangen
for (let i = 0; i < checkboxes.length; i++) { 
    checkboxes[i].addEventListener('click', function() { //hvis en checkbox clickes, så er [i] defineret og nedenstående starter:
        for (let j = 0; j < checkboxes.length; j++) { 
            if (checkboxes[j].checked && j !== i) { //hvis en checkbox er checked, så er [j] defineret. Hvis j!==i, så skal j uncheckes.  
                checkboxes[j].checked = false; 
            }
        }
    });
}

//Fortsæt-knap
continueButton.addEventListener('click', function(){ 
    let noneChecked = true;

    //Gemmer checkboxes og options   
    checkboxes.forEach(function(checkbox, index){
        if (checkbox.checked){
            //pusher det nuværende scenario før man går videre til en array med "historik". -1 så den tager index istedet for length.
            currentScenario.push(scenarios[currentScenario[currentScenario.length-1]].nextScenario[index]);
            scenarioFunction(currentScenario[currentScenario.length-1]); //tager fat i den, der er blevet pushet, som man lige har checked. manipulerer html tekst med function.
            optionDisplay(currentScenario[currentScenario.length-1]);
            checkbox.checked = false; //unchecker checkboxes
            noneChecked = false; 
        }  
    })
    if (noneChecked){
        alert("Vælg venligst en af mulighederne før du fortsætter.");
    }    
})

backButton.addEventListener('click', function(){
    currentScenario.pop();
    scenarioFunction(currentScenario[currentScenario.length-1]);  //tager fat i den seneste historik fra previousScenario array (index starter med 0, så den 3. værdi har index 2)
    checkboxes.forEach(function(checkbox){
        checkbox.checked = false; //unchecker checkboxes
    })
    optionDisplay(currentScenario[currentScenario.length-1]);
})