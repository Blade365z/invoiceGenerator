$(document).ready(function(){
    $('#download').hide();
    $('#invoice_generator_form').on('submit',function(e){
        e.preventDefault();
        let name = $('#name').val().trim();
        let address = $('#address').val().trim(); 
        let state = $('#state').val().trim();
        let pincode = $('#pincode').val().trim();
        
        var unique_id = randomIntFromInterval(999999, 9999999);
        
        var current_date = get_current_date();
        console.log('Values : ' , name + ' ' + address+'  '+state+'  '+pincode+'  '+unique_id+'   '+current_date);
        initate_form_submit(name, address, state, pincode, unique_id, current_date);
    
    });

    $('#download').on('click',function(){
        var options = {};
        var pdf = new jsPDF('p', 'in');
        pdf.addHTML($("#page_1"), 0, 0, options, function () {
            pdf.save('pageContent.pdf');
        });
    })

});
function initate_form_submit(name,address,state,pincode,unique_id,current_date){

    $('#cutosmerName').text(name);
    $('#customerAddress').text(address);
    $('#customerState').text(state);
    $('#customerPincode').text(pincode);
    $('#invoice_id').text(unique_id);
    $('#invoice_date').text(current_date);
setTimeout(() => {
    $('#download').show();

}, 1000);
 

}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function get_current_date(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
}