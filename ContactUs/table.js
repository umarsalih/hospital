//I got this idea by attempting the coding challenges in Tutorial 10. 

var nameOfUnit = [];
nameOfUnit[0] = "Paediatric Consultation";
nameOfUnit[1] = "Childhood Vaccinations";
nameOfUnit[2] = "Emergency Services";
nameOfUnit[3] = "Cancer Unit";
nameOfUnit[4] = "Nutrition and Dieting";
nameOfUnit[5] = "Speech Pathology";
nameOfUnit[6] = "Mental Health";
nameOfUnit[7] = "Disabled Care";

var description = [];
description[0] = "Make consultation appointments with specialised paediatricians";
description[1] = "Get information regarding the required vaccines to keep your newborn healthy and to make vaccine appointments";
description[2] = "Get information regarding a patient being treated in emergency";
description[3] = "Chemotheraphy appointments and checkups for children diagnosed with cancer";
description[4] = "Consult a nutritionist or dietician out of concern of odd eating habits";
description[5] = "Some children may have speech disorders that might require early consultation";
description[6] = "Make an appointment or change your dates for an appointment with our specialized panel of child therapists";
description[7] = "Physical and mental disabiltiies must be treated with extreme care, another one of our specialized servies.";

var telephone = [];
telephone[0] = "+1 604-875-2245";
telephone[1] = "+1 604-875-2355";
telephone[2] = "+1 604-875-2365";
telephone[3] = "+1 604-875-2375";
telephone[4] = "+1 604-875-2415";
telephone[5] = "+1 604-875-2425";
telephone[6] = "+1 604-875-2435";
telephone[7] = "+1 604-875-2400";

var htmlCode = "<table> <thead> <tr> <th> Service/Unit </th> <th> Detail </th> <th> Telephone </th> </tr> </thead> <body>";

for (i = 0; i <=7; i++) {
    htmlCode += "<tr> <td>" + nameOfUnit[i] + "</td> <td>" + description[i] + "</td> <td>" + telephone[0] + "</td>";
}

htmlCode += "</tbody> </table>";
document.getElementById("table").innerHTML = htmlCode;