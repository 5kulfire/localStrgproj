$(document).ready(function(){
    $("#submit").click( function(){
        localStorage.clear();
        var scompname= $("#custcompname").val();
        var sowner= $("#compowner").val(); 
        var semail= $("#email").val(); 
        var sborrow= $("#borrowamt").val(); 
        var sterms= $("#paymentTerms").val();  
        localStorage.setItem("Company", scompname);
        localStorage.setItem("Owner", sowner);
        localStorage.setItem("Email", semail);
        localStorage.setItem("BorrowAmt", sborrow);
        localStorage.setItem("PaymentTerms", sterms);
        window.location.href="approval.html";
        var borrowstr= localStorage.getItem("BorrowAmt");
        var termsstr= localStorage.getItem("PaymentTerms");
        var borrow= parseFloat(borrowstr);
        var terms= parseFloat(termsstr);
        var interest= borrow*terms/12*3/100;
        var payment= borrow+interest;
        var profit= payment- borrow;
    });
    $("#decision").click( ()=>{
        var sel= $("#selectapprov").val();
        localStorage.setItem("Interest", interest);
        localStorage.setItem("Profit", profit);
        localStorage.setItem("Decision", sel);
        alert("Done");
    });
});