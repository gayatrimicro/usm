 <div id="get_infofrm" class="modal">
  <div class="modal-content">
    <span class="close">&times;</span>
    <div>
        <form id="frm">
            <input type="text" class="frm_cnt" id="txtfild" name="txtfild" placeholder="Name" required>
          <input type="email" class="frm_cnt" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" title="Enter valid E-mail address." id="emlfild" name="emlfild" placeholder="Email" required>
          <input type="text" class="frm_cnt" id="mobilefild" name="mobilefild" maxlength="10" pattern="[0-9]{10,10}$" title="Enter valid contact number." placeholder="Mobile" required>
          <input type="hidden" id="hid_val">
          <button type="submit" class="btnsub">submit</button>
      </form>
    </div>    
  </div>

</div>
<div id="snackbar">Your Information Sent Successfully ...</div>
<script type="text/javascript">

    $('#frm').submit(function(event) {
      event.preventDefault();
      var formdata = $('#frm').serialize();      
        if ($('#txtfild').val() != "" && $('#emlfild').val() != "" && $('#mobilefild').val() != "") {
          $.ajax({
                  url:'../pdf.php',
                  type:'POST',
                  data:formdata,
                  success:function(result){
                    document.getElementById("get_infofrm").style.display = "none";
                    show_snack();
                    var get_data=$("#hid_val").val();
                    setTimeout(function(){ open_pdf(get_data); }, 3000);
                    
                      $("#txtfild, #emlfild, #mobilefild").val("");
                  } 
                });
              }
       else{
        alert("All fields are mandatory");
          }
    });

</script>
<script type="text/javascript">
var modal = document.getElementById("get_infofrm");

function open_pdf(num){
    $(".btn_1")[num].click();
}

function get_num(val){
$("#hid_val").val(val);
modal.style.display = "block";
}

$(".close").click(function() {
   modal.style.display = "none";
 });

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function show_snack() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
</script>