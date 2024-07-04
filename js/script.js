// Ini JavaScript

 //Form setelah di submit//
 function validateForm() {
    const name = document.forms["message-form"]["name"].value;
    const nomorHP = document.forms["message-form"]["nomorHP"].value;
    const tanggal = document.forms["message-form"]["tanggal"].value;
    const jumlahOrang = document.forms["message-form"]["jumlahOrang"].value;
    const messages = document.forms["message-form"]["messages"].value;

    if (name == "" || nomorHP == "" || tanggal == "" || jumlahOrang == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, nomorHP, tanggal, jumlahOrang, messages);
    return false;
}

function setSenderUI(name , nomorHP, tanggal, jumlahOrang, messages) {
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-nomorHP").innerHTML = nomorHP;
    document.getElementById("sender-tanggal").innerHTML = tanggal;
    document.getElementById("sender-jumlahOrang").innerHTML = jumlahOrang;
    document.getElementById("sender-messages").innerHTML = messages;
}
