function orderProduct(productName) {

    let phoneNumber = "918148689454";

    let message =
        "Hello Thaiveedu! I am interested in ordering " +
        productName +
        ". Please share the details.";

    let whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");
}