let prescription = document.getElementById("prescrip-div");
let mcountEl = document.getElementById("medcount");
let pnameEl = document.getElementById("pName");
let dobEl = document.getElementById("dob");
let doiEl = document.getElementById("doi");
let gBtnEl = document.getElementById("gBtn")
let url = {
    "tab": "https://res.cloudinary.com/nithish0504/image/upload/v1626842779/capsule_f5z1op.png",
    "inj": "https://res.cloudinary.com/nithish0504/image/upload/c_scale,w_25/v1626854368/injection_mbjaic.png",
    "Headache": "https://res.cloudinary.com/nithish0504/image/upload/c_scale,w_25/v1626844559/headache_nmaoa0.png",
    "Dizziness": "https://res.cloudinary.com/nithish0504/image/upload/c_scale,w_25/v1626844995/dizzy_rgy3yl.png"
};
let patient = {
    "PName": "Joyneel Acharya",
    "DOB": "16-May-1991",
    "DOI": "30 Nov 2020",
    "Medicines": [{
            "Name": "IBUPROFEN",
            "Composition": ["IBUPROFEN"],
            "dose": "600 MG",
            "Type": "tab",
            "img": "url",
            "dosage": "4",
            "frequency": "4",
            "timings": [{
                    "8:00 AM": ["1", "After"]
                },
                {
                    "12:00 PM": ["1", "After"]
                },
                {
                    "04:00 PM": ["1", "After"]
                },
                {
                    "08:00 PM": ["1", "After"]
                }
            ],
            "Reason": "For treatment of lower back pain",
            "Directions": `1 Tablet by mouth, 4 Times a day with food every 4 hours`,
            "side_effects": ["Headache", "Dizziness"],
            "Help_if": ["Experiencing chest pain", "Shortness of breath", "rapid weight gain"],
        },
        {
            "Name": "IBUPROFEN",
            "Composition": ["INSULIN", "GLARGINE", "HUMAN"],
            "dose": "100ML",
            "Type": "inj",
            "img": "url",
            "dosage": "4",
            "frequency": "4",
            "timings": [{
                    "8:00 AM": ["1", "After"]
                },
                {
                    "12:00 PM": ["1", "After"]
                },
                {
                    "04:00 PM": ["1", "After"]
                },
                {
                    "08:00 PM": ["1", "After"]
                }
            ],
            "Reason": "Reduce blood pressure.",
            "Directions": `1 injection at bedtime
Inject 10 ml vial under the skin as directed for
28 days inject 25 units under the skin at bedtime
do not mix with other insulins/discard open vials
after 28 days.`,
            "side_effects": ["Headache", "Dizziness"],
            "Help_if": ["Experiencing itching skin,wheezing, and fast heart rate."],
        },
    ]
};

function create_prescription(patient) {
    mcountEl.textContent = patient.Medicines.length;
    pnameEl.textContent = patient.PName;
    dobEl.textContent = patient.DOB;
    doiEl.textContent = patient.DOI;
    for (let medicine of patient.Medicines) {
        create_medicine(medicine);
    }
}

function create_medicine(medicine) {
    /////
    let medDivEl = document.createElement("div");
    medDivEl.classList.add("med-div", "col-12", "dbb");
    prescription.appendChild(medDivEl);
    //////
    let medNameEl = document.createElement("p");
    medNameEl.classList.add("med-name");
    medNameEl.textContent = `${medicine.Composition} ${medicine.dose}`;
    medDivEl.appendChild(medNameEl);
    /////
    let medindivEl = document.createElement("div");
    medindivEl.classList.add("med-inner-div", "col-12");
    medDivEl.appendChild(medindivEl);


    console.log("here");
    ///// <div class=" med-inner-div-1 col-3">
    let medindiv1El = document.createElement("div");
    medindiv1El.classList.add("med-inner-div-1", "col-3");
    medindivEl.appendChild(medindiv1El);
    // <div class="d-flex flex-row sidep-div">
    let sidepEl = document.createElement("div");
    sidepEl.classList.add("d-flex", "flex-row", "sidep-div");
    medindiv1El.appendChild(sidepEl);
    //<p class="sidep">Side1</p>
    let sidepEl1 = document.createElement("p");
    sidepEl1.classList.add("sidep");
    sidepEl1.textContent = "side1";
    sidepEl.appendChild(sidepEl1);
    //  <p class="sidep">Side2</p>
    let sidepEl2 = document.createElement("p");
    sidepEl2.classList.add("sidep");
    sidepEl2.textContent = "side2";
    sidepEl.appendChild(sidepEl2);
    //<div class="d-flex flex-row sidep-div dbb">
    let imgdivEl = document.createElement("div");
    imgdivEl.classList.add("d-flex", "flex-row", "sidep-div", "dbb");
    medindiv1El.appendChild(imgdivEl);
    if (medicine.Type === "tab") {
        //<img class="cap-img" src="https://res.cloudinary.com/nithish0504/image/upload/v1626842779/capsule_f5z1op.png">
        let imgEl1 = document.createElement("img");
        imgEl1.classList.add("cap-img");
        imgEl1.src = url[medicine.Type];
        imgdivEl.appendChild(imgEl1);
        // <img class="cap-img" src="https://res.cloudinary.com/nithish0504/image/upload/v1626842779/capsule_f5z1op.png">
        let imgEl2 = document.createElement("img");
        imgEl2.classList.add("cap-img");
        imgEl2.src = url[medicine.Type];
        imgdivEl.appendChild(imgEl2);
    } else {
        //<img class="cap-img" src="https://res.cloudinary.com/nithish0504/image/upload/v1626842779/capsule_f5z1op.png">
        let imgEl1 = document.createElement("img");
        imgEl1.classList.add("cap-img");
        imgEl1.src = url[medicine.Type];
        imgdivEl.appendChild(imgEl1);
    }

    //<div>
    let rfdivEl = document.createElement("div");
    medindiv1El.appendChild(rfdivEl);
    //<p class="medp m-1">REASON FOR MEDICATION</p>
    let rfmEl = document.createElement("p");
    rfmEl.classList.add("medp", "m-1");
    rfmEl.textContent = "REASON FOR MEDICATION";
    rfdivEl.appendChild(rfmEl);
    //<p class="hres" id="rfmed"></p>
    let rfmresEl = document.createElement("p");
    rfmresEl.classList.add("hres");
    rfmresEl.textContent = medicine.Reason;
    rfdivEl.appendChild(rfmresEl);


    //////<div class="med-inner-div-1 col-6 dbl pl-2">
    let medindiv2El = document.createElement("div");
    medindiv2El.classList.add("med-inner-div-1", "col-6", "dbl", "pl-2");
    medindivEl.appendChild(medindiv2El);
    //<p class="med-name">DIRECTIONS/NOTES</p>
    let dnEl = document.createElement("p");
    dnEl.classList.add("med-name");
    dnEl.textContent = "DIRECTIONS/NOTES";
    medindiv2El.appendChild(dnEl);
    //<p class="med-dir" id="medDir"></p>
    let dnresEl = document.createElement("p");
    dnresEl.classList.add("med-dir");
    dnresEl.textContent = medicine.Directions;
    medindiv2El.appendChild(dnresEl);

    ////<div class="med-inner-div-1 col-3 dbl">
    let medindiv3El = document.createElement("div");
    medindiv3El.classList.add("med-inner-div-1", "col-3", "dbl");
    medindivEl.appendChild(medindiv3El);

    //<p class="med-name m-0">POSSIBLE SIDE EFFECTS</p>
    let psdEl = document.createElement("p");
    psdEl.classList.add("med-name", "m-0");
    psdEl.textContent = "POSSIBLE SIDE EFFECTS";
    medindiv3El.appendChild(psdEl);
    count = 0;
    for (let effect of medicine.side_effects) {

        //<div class="frsac mt-0">
        let sedivEl = document.createElement("div");
        sedivEl.classList.add("frsac", "mt-0");
        medindiv3El.appendChild(sedivEl);
        // <img class="sideimg" src="https://res.cloudinary.com/nithish0504/image/upload/c_scale,w_25/v1626844559/headache_nmaoa0.png">
        let eimgEl = document.createElement("img");
        eimgEl.classList.add("sideimg");
        eimgEl.src = url[effect];
        sedivEl.appendChild(eimgEl);
        //<p class="sideres">Headache</p>
        let epEl = document.createElement("p");
        epEl.classList.add("sideres");
        epEl.textContent = effect;
        sedivEl.appendChild(epEl);

    }
    //<div class="mt-1 p-0">
    let gmhdiv = document.createElement("div");
    gmhdiv.classList.add("mt-1", "p-0");
    medindiv3El.appendChild(gmhdiv);
    //<p class="medp m-1">GET MEDICAL HELP IF</p>
    let gmhip = document.createElement("p");
    gmhip.classList.add("medp", "m-1");
    gmhip.textContent = "GET MEDICAL HELP IF"
    gmhdiv.appendChild(gmhip);
    //<p class="hres" id="gmhi"></p>
    let gmhiresp = document.createElement("p");
    gmhiresp.classList.add("hres");
    gmhiresp.textContent = medicine.Help_if;
    gmhdiv.appendChild(gmhiresp);
}

gBtnEl.addEventListener("click", function() {
    create_prescription(patient)
    gBtnEl.classList.add("d-none")
})




//medNameEl.textContent = `${patient.Medicines[0].Name} ${patient.Medicines[0].dose}`;
//rfmedEl.textContent = patient.Medicines[0].Reason;
//medDirEl.textContent = patient.Medicines[0].Directions;
//gmhiEl.textContent = patient.Medicines[0].Help_if;
