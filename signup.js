
    <script>
        function validateForm() {
            var name = document.getElementById("name").value;
            var email = document.getElementById("email").value;
            var phone = document.getElementById("phone").value;
            var password = document.getElementById("password").value;

            if (name == "" || email == "" || phone == "" || password == "") {
                alert("All fields must be filled out");
                return false;
            }

            var phonePattern = /^\d{3}-?\s?\d{3}-?\s?\d{4}$/;
            if (!phone.match(phonePattern)) {
                alert("Invalid phone number format");
                return false;
            }

            alert("Form submitted successfully!");
            return true;
        }
    </script>

