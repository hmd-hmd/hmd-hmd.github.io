document.getElementById("btnBuy").addEventListener("click", function() {
    document.getElementById("payment").style.display = "block";
    document.getElementById("choosePayment").style.display = "block";
});

function sent() {
    document.getElementById("sentMessage").style.display = "block";
};


// Set up formatting for Credit Card fields


function payOvo() {
    document.getElementById("choosePayment").style.display = "none";
    document.getElementById("visaMasterMaestro").style.display = "none";
    document.getElementById("paypalGoogle").style.display = "none";

    document.getElementById("pay").style.display = "block";
    document.getElementById("ovoDana").style.display = "block";
    document.querySelector(".pay-data img").src = "img/payment/ovo.png";
}

function payDana() {
    document.getElementById("choosePayment").style.display = "none";
    document.getElementById("visaMasterMaestro").style.display = "none";
    document.getElementById("paypalGoogle").style.display = "none";

    document.getElementById("pay").style.display = "block";
    document.getElementById("ovoDana").style.display = "block";
    document.querySelector(".pay-data img").src = "img/payment/dana.png";
}

$(function() {
    // Set up formatting for Credit Card fields
    $('#visaMasterMaestro .cc-number').formatCardNumber();
    $('#visaMasterMaestro .cc-exp').formatCardExpiry();
    $('#visaMasterMaestro .cc-cvc').formatCardCVC();
});

function payVisa() {
    document.getElementById("choosePayment").style.display = "none";
    document.getElementById("ovoDana").style.display = "none";
    document.getElementById("paypalGoogle").style.display = "none";

    document.getElementById("pay").style.display = "block";
    document.getElementById("visaMasterMaestro").style.display = "block";
    document.querySelector("#visaMasterMaestro img").src = "img/payment/visa.svg";
}

function payMaster() {
    document.getElementById("choosePayment").style.display = "none";
    document.getElementById("ovoDana").style.display = "none";
    document.getElementById("paypalGoogle").style.display = "none";

    document.getElementById("pay").style.display = "block";
    document.getElementById("visaMasterMaestro").style.display = "block";
    document.querySelector("#visaMasterMaestro img").src = "img/payment/mastercard.svg";
}

function payMaestro() {
    document.getElementById("choosePayment").style.display = "none";
    document.getElementById("ovoDana").style.display = "none";
    document.getElementById("paypalGoogle").style.display = "none";

    document.getElementById("pay").style.display = "block";
    document.getElementById("visaMasterMaestro").style.display = "block";
    document.querySelector("#visaMasterMaestro img").src = "img/payment/maestro.svg";
}

function payPaypal() {
    document.getElementById("choosePayment").style.display = "none";
    document.getElementById("ovoDana").style.display = "none";
    document.getElementById("visaMasterMaestro").style.display = "none";

    document.getElementById("pay").style.display = "block";
    document.getElementById("paypalGoogle").style.display = "block";
    document.querySelector("#paypalGoogle img").src = "img/payment/paypal2.png";
}

function payGoogle() {
    document.getElementById("choosePayment").style.display = "none";
    document.getElementById("ovoDana").style.display = "none";
    document.getElementById("visaMasterMaestro").style.display = "none";

    document.getElementById("pay").style.display = "block";
    document.getElementById("paypalGoogle").style.display = "block";
    document.querySelector("#paypalGoogle img").src = "img/payment/google.png";
};

function buy() {
    document.getElementById("pay").style.display = "none";
    document.getElementById("paymentMethod").style.display = "none";

    document.getElementById("choosePayment").style.display = "block"
    document.getElementById("paySuccess").style.display = "block";
    document.getElementById("payStatus").innerHTML = "Status Pembayaran";
    alert("Berhasil");
};

function buyConfirm() {
    document.getElementById("pay").style.display = "none";
    document.getElementById("paymentMethod").style.display = "none";

    document.getElementById("paySuccess").style.display = "block";
    document.getElementById("choosePayment").style.display = "block"
    document.getElementById("payStatus").innerHTML = "Status Pembayaran";
    document.querySelector("#paySuccess h5").innerHTML = "Silahkan konfirmasi pada rekening virtual anda";
    document.querySelector("#paySuccess h5").style.color = "#222222";
}

function closePayment() {
    document.getElementById("payment").style.display = "none";
    document.getElementById("choosePayment").style.display = "none";
    document.getElementById("pay").style.display = "none";
    document.getElementById("ovo").style.display = "none";
}