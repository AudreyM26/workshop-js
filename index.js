
function ajouter() {

    if ($("#nom").val() === "") {
        alert("Veuillez saisir un nom");
        console.log($("#nom").val());
    } else {
        if ($("#password").val() === "") {
            alert("Veuillez saisir un mot de passe");
        }
        else {
            console.log($("#nom").val());
            console.log($("#password").val());


            fetch('https://loisirs-web-backend.cleverapps.io/users', {
                method: 'post',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name:$("#nom").val(), password:$("#password").val() })
            }).then(res => res.json())
                .then(res => console.log(res));
        }
    }

}

function afficheListe() {
    fetch('https://loisirs-web-backend.cleverapps.io/users')
        .then(function (response) {
            // traiter la réponse
            if (!response.ok) {
                throw Error(response.statusText);
            }
            // lecture du corps de la réponse en tant que JSON.
            return response.json();
        })
        .then(function (responseAsJson) {
            // traitement de l'objet
            console.log(responseAsJson);
            var cpt = 0;

            var listeUtilisateurs = responseAsJson.filter(function(element){
                return element.name;
            }).map(function(element){
                return element;
            });
            console.log(listeUtilisateurs);
            for (var prop in listeUtilisateurs) {
                console.log(listeUtilisateurs[prop].name + " " + listeUtilisateurs[prop].password);

                var classColorRow = "";
                if (cpt % 2 === 0) {
                    classColorRow = " bg-light";
                }

                var divColId = document.createElement('div');
                divColId.textContent = listeUtilisateurs[prop].id;
                divColId.setAttribute('class', 'col-1');

                var divColName = document.createElement('div');
                divColName.textContent = listeUtilisateurs[prop].name;
                divColName.setAttribute('class', 'col-6');

                var divColPwd = document.createElement('div');
                divColPwd.textContent = listeUtilisateurs[prop].password;
                divColPwd.setAttribute('class', 'col-5');

                var divRow = document.createElement('div');
                divRow.setAttribute('class', 'row ml-0' + classColorRow);
                divRow.appendChild(divColId);
                divRow.appendChild(divColName);
                divRow.appendChild(divColPwd);

                document.getElementById('liste_utilisateur').appendChild(divRow);

                cpt = cpt + 1;
            }


        })
        .catch(function (error) {
            console.log('Il semble avoir un soucis...', error);
        });
}