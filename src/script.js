// boutons des sections de form
let boutonSuivant1 = document.querySelector(".bouton1");
let boutonSuivant2 = document.querySelector(".bouton2");
let boutonSuivant3 = document.querySelector(".bouton3");
let boutonSuivant4 = document.querySelector(".bouton4");
let boutonSuivant5 = document.querySelector(".bouton5");
let boutonSuivant6 = document.querySelector(".bouton6");
let boutonSuivant7 = document.querySelector(".bouton7");
let boutonSuivant8 = document.querySelector(".bouton8");
let boutonPlus = document.querySelector(".boutonPlus")
let buttonPlusSoft = document.querySelector(".buttonPlusSoft")
let boutonSubmit = document.querySelector(".boutonSubmit")
let boutonLangue = document.querySelector(".boutonLangue")
let boutonPlusLoisirs = document.querySelector(".boutonPlusLoisirs")
let boutonPlusDiplome = document.querySelector(".boutonPlusDiplome")
let boutonPlusExperience = document.querySelector(".boutonPlusExperience")
let boutonPlusCertificat = document.querySelector(".boutonPlusCertificat")

let competenceForm = document.querySelector(".competence-form ")

// queryselector de chaque section
let section_cv1 = document.querySelector(".section-cv1");
let section_cv2 = document.querySelector(".section-cv2");
let section_cv3 = document.querySelector(".section-cv3");
let section_cv4 = document.querySelector(".section-cv4");
let section_cv5 = document.querySelector(".section-cv5");
let section_cv6 = document.querySelector(".section-cv6");
let section_cv7 = document.querySelector(".section-cv7");
let section_cv8 = document.querySelector(".section-cv8");
let section_cv9 = document.querySelector(".section-cv9");


function changeIcon(sectionIndex) {

    let icons = document.querySelectorAll('.progress-item i');
    
    if (icons[sectionIndex - 1]) {  
        icons[sectionIndex - 1].classList.remove('fa-spinner');  
        icons[sectionIndex - 1].classList.add('fa-check');
    }
}

// les fonctions de change de section de form et barre de progress
function nextSection2() {
        section_cv1.style.display = "none";
        section_cv2.style.display = "block";
        changeIcon(1)
}
function nextSection3() {
    section_cv2.style.display = "none";
    section_cv3.style.display = "block";
    changeIcon(2)
}
function nextSection4() {
    section_cv3.style.display = "none";
    section_cv4.style.display = "block";
    changeIcon(3)
}
function nextSection5() {
    section_cv4.style.display = "none";
    section_cv5.style.display = "block";
    changeIcon(4)
}
function nextSection6() {
    section_cv5.style.display = "none";
    section_cv6.style.display = "block";
    changeIcon(5)
}
function nextSection7() {
    section_cv6.style.display = "none";
    section_cv7.style.display = "block";
    changeIcon(6)
}
function nextSection8() {
    section_cv7.style.display = "none";
    section_cv8.style.display = "block";
    changeIcon(7)
}
function nextSection9() {
    section_cv8.style.display = "none";
    section_cv9.style.display = "block";
    changeIcon(8)
}

// onclick de chaque bouton
if (boutonSuivant1) {
    boutonSuivant1.addEventListener("click",()=>{
        //  const nom = document.getElementById('nom0').value;
        //  const prenom = document.getElementById('prenom').value;
        //  const photo = document.getElementById('photo').files.length;
        //  const adresse = document.getElementById('adresse').value;
        //  const telephone = document.getElementById('telephone').value;
        //  const email = document.getElementById('email').value;
        //  const linkedin = document.getElementById('lien').value;
        //  const github = document.getElementById('lien').value;
        //  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
         
        //  if (!nom || !prenom || !photo || !adresse || !telephone || !email || !linkedin || !github) {
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "You didn't enter all the informations!",
        //       });
             
        //  }
        //  else if(!emailPattern.test(email)){
        //     Swal.fire({
        //         icon: "error",
        //         title: "Oops...",
        //         text: "Entrez un email valide!",
        //       });
        //  }
        //  else{
        //     nextSection2();
        //  }
        nextSection2();
         
        });
}
if (boutonSuivant2) {
    boutonSuivant2.addEventListener("click", nextSection3);
}
if (boutonSuivant3) {
    boutonSuivant3.addEventListener("click",()=>{ 
        let competenceIputs = document.querySelectorAll(".competence-input")
        competenceIputs.forEach((e)=>{
        console.log(e.value);
        
    })
        nextSection4();

    });
}
if (boutonSuivant4) {
    boutonSuivant4.addEventListener("click", nextSection5);
}
if (boutonSuivant5) {
    boutonSuivant5.addEventListener("click", nextSection6);
}
if (boutonSuivant6) {
    boutonSuivant6.addEventListener("click", nextSection7);
}
if (boutonSuivant7) {
    boutonSuivant7.addEventListener("click", nextSection8);
}
if (boutonSuivant8) {
    boutonSuivant8.addEventListener("click", nextSection9);
}


boutonPlus.addEventListener('click', function() {
    let divCompetence = document.querySelector(".form-element1");
        let competence = document.createElement('div');
        competence.classList.add('form-element', 'flex', 'flex-col', 'w-full');
        competence.innerHTML = `
            <label for="nom" class="text-sm font-medium text-gray-700">Compétence:</label>
            <input type="text" id="nom" name="nom" class="competence-input w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez votre compétence...">
        `;
        divCompetence.appendChild(competence);

});
buttonPlusSoft.addEventListener('click', function() {
    let divCompetence = document.querySelector(".form-element2");
        let competence = document.createElement('div');
        competence.classList.add('form-element', 'flex', 'flex-col', 'w-full');
        competence.innerHTML = `
            <label for="nom" class="text-sm font-medium text-gray-700">Compétence:</label>
            <input type="text" id="nom" name="nom" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez votre soft skill...">
        `;
        divCompetence.appendChild(competence);

});
boutonLangue.addEventListener("click",()=>{
    ajouterLangue();
})

boutonPlusDiplome.addEventListener("click", ()=>{
    let divDiplome = document.querySelector(".form-element7")
    let diplome = document.createElement("div")
    diplome.classList.add('flex','flex-col','space-y-2','mb-4')
    diplome.innerHTML=`
        <div class="flex space-x-4">
            <div class="flex-1">
                <label for="diplome" class="text-sm font-medium text-gray-700">Nom du Diplôme</label>
                <input type="text" name="diplome" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le nom du diplôme">
            </div>

            <div class="flex-1">
                <label for="universite" class="text-sm font-medium text-gray-700">Université</label>
                <input type="text" name="universite" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le nom de l'université">
            </div>
        </div>

        <div class="flex space-x-4">
            <div class="flex-1">
                <label for="date_debut" class="text-sm font-medium text-gray-700">Date de début</label>
                <input type="date" name="date_debut" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>

            <div class="flex-1">
                <label for="date_fin" class="text-sm font-medium text-gray-700">Date de fin</label>
                <input type="date" name="date_fin" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
        </div>
    `
    divDiplome.appendChild(diplome);

})

boutonPlusExperience.addEventListener("click",()=>{
    let divExperience = document.querySelector(".form-element8")
    let experience = document.createElement("div")
    experience.classList.add('flex','flex-col','space-y-2','mb-4')
    experience.innerHTML=`
         <div class="flex space-x-4">
                                    <div class="flex-1">
                                        <label for="diplome" class="text-sm font-medium text-gray-700">Nom du Diplôme</label>
                                        <input type="text" id="diplome" name="diplome" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le nom du diplôme">
                                    </div>
                                    

                                    <div class="flex-1">
                                        <label for="universite" class="text-sm font-medium text-gray-700">Université</label>
                                        <input type="text" id="universite" name="universite" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le nom de l'université">
                                    </div>
                                </div>
                        

                                <div class="flex space-x-4">

                                    <div class="flex-1">
                                        <label for="date_debut" class="text-sm font-medium text-gray-700">Date de début</label>
                                        <input type="date" id="date_debut" name="date_debut" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    </div>


                                    <div class="flex-1">
                                        <label for="date_fin" class="text-sm font-medium text-gray-700">Date de fin</label>
                                        <input type="date" id="date_fin" name="date_fin" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    </div>
                                </div>
    `
    divExperience.appendChild(experience);
})

boutonPlusCertificat.addEventListener("click", ()=>{
    let divCertificat = document.querySelector(".form-element9")
    let certificat = document.createElement('div')
    certificat.classList.add('flex','flex-col','w-full')
    certificat.innerHTML=`
    <div class="flex space-x-4">
                                    <div class="flex-1">
                                        <label for="certificat_nom" class="text-sm font-medium text-gray-700">Nom du certificat</label>
                                        <input type="text" id="certificat_nom" name="certificat_nom" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le nom du certificat">
                                    </div>

                                    <div class="flex-1">
                                        <label for="certificat_lieu" class="text-sm font-medium text-gray-700">Lieu d'obtention</label>
                                        <input type="text" id="certificat_lieu" name="certificat_lieu" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez le lieu d'obtention">
                                    </div>
    `
    divCertificat.appendChild(certificat)
})

// boutonLangue.addEventListener("click",=>)

boutonSubmit.addEventListener("click", (e)=>{
    e.preventDefault();
    let nom0 = document.querySelector("#nom0")
    console.log(nom0.value);
    
})

boutonPlusLoisirs.addEventListener("click", ()=>{

    let divLoisir = document.querySelector(".form-element6");
        let loisir = document.createElement('div');
        loisir.classList.add('form-element', 'flex', 'flex-col', 'w-full');
        loisir.innerHTML = `
            <label for="nom" class="text-sm font-medium text-gray-700">Loisir:</label>
            <input type="text" id="nom" name="nom" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez votre loisir...">
        `;
        divLoisir.appendChild(loisir);
})

function ajouterLangue() {
    
    let divLangue = document.querySelector(".form-element5");
    const nouvelleLangue = document.createElement('div');
    nouvelleLangue.classList.add('form-element','flex', 'items-center', 'space-x-2');

   
    nouvelleLangue.innerHTML = `
        <div class="flex-1 mb-3">
            <label for="nom" class="text-sm font-medium text-gray-700">Langue</label>
            <input type="text" name="nom" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Entrez votre langue...">
        </div>

        <div class="flex-1 mb-3">
            <label for="niveau" class="text-sm font-medium text-gray-700">Niveau</label>
            <select name="niveau" class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Sélectionnez le niveau</option>
                <option value="maternelle">Maternelle</option>
                <option value="intermediaire">Intermédiaire</option>
                <option value="avance">Avancé</option>
            </select>
        </div>
    `;

    divLangue.appendChild(nouvelleLangue);
}


// let competenceForm = document.querySelector(".competence-form ")
// let suivant = document.querySelector(".suivant-competence")

// suivant.addEventListener("click", ()=>{
//     let competenceIputs = document.querySelectorAll(".competence-input")
//     competenceIputs.forEach((e)=>{
//         console.log(e.value);
        
//     })
    
// })

