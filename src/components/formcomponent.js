import React from "react";



// to check if email and password entered is valid or not
const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passwordValidator = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;




class Formcomponent extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            showPassword: false,
            phoneNumber: "",
            countryCode: "",
            country: "",
            city: "",
            panNumber: "",
            aadharNumber: "",

            firstNameError: "",
            lastNameError: "",
            usernameError: "",
            emailError: "",
            passwordError: "",
            phoneNumberError: "",
            countryError: "",
            cityError: "",
            panNumberError: "",
            aadharNumberError: "",

            passwordConfirmation: "",


            isFormSubmitted: false
        };




       
        
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateFirstName = this.validateFirstName.bind(this);
        this.validateLastName = this.validateLastName.bind(this);
        this.validateUsername = this.validateUsername.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateLastName = this.validateLastName.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validatePhoneNumber = this.validatePhoneNumber.bind(this);
        this.validateCountry = this.validateCountry.bind(this);
        this.validateCity = this.validateCity.bind(this);
        this.validatePanNumber = this.validatePanNumber.bind(this);
        this.validateAadharNumber = this.validateAadharNumber.bind(this);

        this.validatePasswordConfirmation = this.validatePasswordConfirmation.bind(this);

        this.validateField = this.validateField.bind(this);

    }

    


    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
        return;
    }

    handleBlur(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
        return;
    }
    handleSubmit(event) {
        event.preventDefault();
        let formFields = [
            "firstName",
            "lastName",
            "username",
            "email",
            "password",
            "phoneNumber",
            "country",
            "city",
            "panNumber",
            "aadharNumber",
            "passwordConfirmation"
        ];

        let isValid = true;
        formFields.forEach(field => {
            isValid = this.validateField(field) && isValid;
        });

        if (isValid) this.setState({ isFormSubmitted: true });
        else this.setState({ isFormSubmitted: false });

        return this.state.isFormSubmitted;
    }

    handleCountryChange = (event) => {
        const selectedCountry = event.target.value;
        this.setState({
            country: selectedCountry,

        })
    }
    handleCityChange = (event) => {
        const selectedCity = event.target.value;
        this.setState({
            city: selectedCity,

        })
    }


    validateField(name) {
        let isValid = false;

        if (name === "firstName") isValid = this.validateFirstName();
        else if (name === "lastName") isValid = this.validateLastName();
        else if (name === "username") isValid = this.validateUsername();
        else if (name === "email") isValid = this.validateEmail();
        else if (name === "password") isValid = this.validatePassword();
        else if (name === "phoneNumber") isValid = this.validatePhoneNumber();
        else if (name === "country") isValid = this.validateCountry();
        else if (name === "city") isValid = this.validateCity();
        else if (name === "panNumber") isValid = this.validatePanNumber();
        else if (name === "aadharNumber") isValid = this.validateAadharNumber();
        else if (name === "passwordConfirmation") isValid = this.validatePasswordConfirmation();
        return isValid;
    }

    validateFirstName() {
        let firstNameError = "";
        const value = this.state.firstName;
        if (value.trim() === "") firstNameError = "First Name is required";

        this.setState({
            firstNameError
        });
        return firstNameError === "";
    }

    validateLastName() {
        let lastNameError = "";
        const value = this.state.lastName;
        if (value.trim() === "") lastNameError = "Last Name is required";

        this.setState({
            lastNameError
        });
        return lastNameError === "";
    }

    validateUsername() {
        let usernameError = "";
        const value = this.state.username;
        if (value.trim() === "") usernameError = "Username is required";

        this.setState({
            usernameError
        });
        return usernameError === "";
    }

    validateEmail() {
        let emailError = "";
        const value = this.state.email;
        if (value.trim() === "") emailError = "Email is required";

        this.setState({
            emailError
        });
        return emailError === "";
    }

    validatePassword() {
        let passwordError = "";
        const value = this.state.password;
        if (value.trim() === "") passwordError = "Password is required";

        this.setState({
            passwordError
        });
        return passwordError === "";
    }

    validatePhoneNumber() {
        let phoneNumberError = "";
        const value = this.state.phoneNumber;
        if (value.trim() === "") phoneNumberError = "Phone Number is required";

        this.setState({
            phoneNumberError
        });
        return phoneNumberError === "";
    }

    validateCountry() {
        let countryError = "";
        const value = this.state.country;
        if (value.trim() === "") countryError = "Country is required";

        this.setState({
            countryError
        });
        return countryError === "";
    }

    validateCity() {
        let cityError = "";
        const value = this.state.city;
        if (value.trim() === "") cityError = <b>"City is required"</b>;

        this.setState({
            cityError
        });
        return cityError === "";
    }

    validatePanNumber() {
        let panNumberError = "";
        const value = this.state.panNumber;
        if (value.trim() === "") panNumberError = "Pan Number is required";

        this.setState({
            panNumberError
        });
        return panNumberError === "";
    }

    validateAadharNumber() {
        let aadharNumberError = "";
        const value = this.state.aadharNumber;
        if (value.trim() === "") aadharNumberError = "Aadhar Number is required";

        this.setState({
            aadharNumberError
        });
        return aadharNumberError === "";
    }

    validatePasswordConfirmation() {
        let passwordConfirmationError = "";
        if (this.state.password !== this.state.passwordConfirmation)
            passwordConfirmationError = "Password does not match confirmation";


        this.setState({
            passwordConfirmationError
        });
        return passwordConfirmationError === "";
    }




    render() {

        return (
            <div className="main">

                <div className="submain">
                    {this.state.isFormSubmitted ? (
                        <div className="details" style={{ color: "black", fontSize: "larger" }}>
                            <h1>Thanks for submitting details, find your details below:</h1>
                            <div>First Name: {this.state.firstName}</div>
                            <div>Last Name: {this.state.lastName}</div>
                            <div>Last Name: {this.state.username}</div>
                            <div>Email: {this.state.email}</div>
                            <div>Password: {this.state.password}</div>
                            <div>Phone Number:{this.state.countryCode} {this.state.phoneNumber}</div>
                            <div>Country: {this.state.country}</div>
                            <div>City: {this.state.city}</div>
                            <div>Pan Number: {this.state.panNumber}</div>
                            <div>Aadhar Number: {this.state.aadharNumber}</div>
                        </div>
                    ) : (
                        <div style={{ textAlign: "center" }}>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    name="firstName"
                                    value={this.state.firstName}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    autoComplete="off"
                                />

                                <br />
                                {this.state.firstNameError && (
                                    <div className="errorMsg">
                                        {this.state.firstNameError}
                                    </div>

                                )}

                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastName"
                                    value={this.state.lastName}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    autoComplete="off"
                                />
                                <br />
                                {this.state.lastNameError && (
                                    <div className="errorMsg">{this.state.lastNameError}</div>
                                )}
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    autoComplete="off"
                                />
                                <br />
                                {this.state.emailError && (
                                    <div className="errorMsg">{this.state.emailError}</div>
                                )}

                                <input
                                    type="text"
                                    placeholder="Username"
                                    name="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    onBlur={this.handleBlur}
                                    autoComplete="off"
                                />
                                <br />
                                {this.state.usernameError && (
                                    <div className="errorMsg">{this.state.usernameError}</div>
                                )}
                                <div>
                                    <input
                                        type= "password"
                                        placeholder="Password"
                                        
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        onBlur={this.handleBlur}
                                        autoComplete="new-password"

                                     />
                                </div>



                                <br />
                                {this.state.passwordError && (
                        <div className="errorMsg">{this.state.passwordError}</div>
                    )}
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        autoComplete="off"
                    />
                    <br />
                    {this.state.passwordConfirmationError && (
                        <div className="errorMsg">
                            {this.state.passwordConfirmationError}
                        </div>
                    )}



                    <div>
                        <input
                            type="text"
                            placeholder="+91"
                            name="countryCode"
                            value={this.state.countryCode}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            autoComplete="off"
                            required
                            style={{ width: '60px' }}
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            name="phoneNumber"
                            value={this.state.phoneNumber}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            autoComplete="off"
                            required
                            pattern="[0-9]{6,15}"
                            style={{ flex: 1, width: '12rem' }}
                        />
                        <br />
                        {this.state.phoneNumberError && (
                            <div className="errorMsg">{this.state.phoneNumberError}</div>
                        )}
                    </div>


                    <label for="country"></label><span style={{ color: "red", display: "inline", float: "none" }}></span>

                    <select id="country" name="country" class="form-control" style={{ width: "330px", height: "40px" }} onChange={this.handleCountryChange} required>
                        <option value="">Select Country</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AX">Åland Islands</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                        <option value="AS">American Samoa</option>
                        <option value="AD">Andorra</option>
                        <option value="AO">Angola</option>
                        <option value="AI">Anguilla</option>
                        <option value="AQ">Antarctica</option>
                        <option value="AG">Antigua and Barbuda</option>
                        <option value="AR">Argentina</option>
                        <option value="AM">Armenia</option>
                        <option value="AW">Aruba</option>
                        <option value="AU">Australia</option>
                        <option value="AT">Austria</option>
                        <option value="AZ">Azerbaijan</option>
                        <option value="BS">Bahamas</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BB">Barbados</option>
                        <option value="BY">Belarus</option>
                        <option value="BE">Belgium</option>
                        <option value="BZ">Belize</option>
                        <option value="BJ">Benin</option>
                        <option value="BM">Bermuda</option>
                        <option value="BT">Bhutan</option>
                        <option value="BO">Bolivia (Plurinational State of)</option>
                        <option value="BA">Bosnia and Herzegovina</option>
                        <option value="BW">Botswana</option>
                        <option value="BV">Bouvet Island</option>
                        <option value="BR">Brazil</option>
                        <option value="IO">British Indian Ocean Territory</option>
                        <option value="BN">Brunei Darussalam</option>
                        <option value="BG">Bulgaria</option>
                        <option value="BF">Burkina Faso</option>
                        <option value="BI">Burundi</option>
                        <option value="CV">Cabo Verde</option>
                        <option value="KH">Cambodia</option>
                        <option value="CM">Cameroon</option>
                        <option value="CA">Canada</option>
                        <option value="BQ">Caribbean Netherlands</option>
                        <option value="KY">Cayman Islands</option>
                        <option value="CF">Central African Republic</option>
                        <option value="TD">Chad</option>
                        <option value="CL">Chile</option>
                        <option value="CN">China</option>
                        <option value="CX">Christmas Island</option>
                        <option value="CC">Cocos (Keeling) Islands</option>
                        <option value="CO">Colombia</option>
                        <option value="KM">Comoros</option>
                        <option value="CG">Congo</option>
                        <option value="CD">Congo, Democratic Republic of the</option>
                        <option value="CK">Cook Islands</option>
                        <option value="CR">Costa Rica</option>
                        <option value="HR">Croatia</option>
                        <option value="CU">Cuba</option>
                        <option value="CW">Curaçao</option>
                        <option value="CY">Cyprus</option>
                        <option value="CZ">Czech Republic</option>
                        <option value="CI">Côte d'Ivoire</option>
                        <option value="DK">Denmark</option>
                        <option value="DJ">Djibouti</option>
                        <option value="DM">Dominica</option>
                        <option value="DO">Dominican Republic</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="GQ">Equatorial Guinea</option>
                        <option value="ER">Eritrea</option>
                        <option value="EE">Estonia</option>
                        <option value="SZ">Eswatini (Swaziland)</option>
                        <option value="ET">Ethiopia</option>
                        <option value="FK">Falkland Islands (Malvinas)</option>
                        <option value="FO">Faroe Islands</option>
                        <option value="FJ">Fiji</option>
                        <option value="FI">Finland</option>
                        <option value="FR">France</option>
                        <option value="GF">French Guiana</option>
                        <option value="PF">French Polynesia</option>
                        <option value="TF">French Southern Territories</option>
                        <option value="GA">Gabon</option>
                        <option value="GM">Gambia</option>
                        <option value="GE">Georgia</option>
                        <option value="DE">Germany</option>
                        <option value="GH">Ghana</option>
                        <option value="GI">Gibraltar</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="GD">Grenada</option>
                        <option value="GP">Guadeloupe</option>
                        <option value="GU">Guam</option>
                        <option value="GT">Guatemala</option>
                        <option value="GG">Guernsey</option>
                        <option value="GN">Guinea</option>
                        <option value="GW">Guinea-Bissau</option>
                        <option value="GY">Guyana</option>
                        <option value="HT">Haiti</option>
                        <option value="HM">Heard Island and Mcdonald Islands</option>
                        <option value="HN">Honduras</option>
                        <option value="HK">Hong Kong</option>
                        <option value="HU">Hungary</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran</option>
                        <option value="IQ">Iraq</option>
                        <option value="IE">Ireland</option>
                        <option value="IM">Isle of Man</option>
                        <option value="IL">Israel</option>
                        <option value="IT">Italy</option>
                        <option value="JM">Jamaica</option>
                        <option value="JP">Japan</option>
                        <option value="JE">Jersey</option>
                        <option value="JO">Jordan</option>
                        <option value="KZ">Kazakhstan</option>
                        <option value="KE">Kenya</option>
                        <option value="KI">Kiribati</option>
                        <option value="KP">Korea, North</option>
                        <option value="KR">Korea, South</option>
                        <option value="XK">Kosovo</option>
                        <option value="KW">Kuwait</option>
                        <option value="KG">Kyrgyzstan</option>
                        <option value="LA">Lao People's Democratic Republic</option>
                        <option value="LV">Latvia</option>
                        <option value="LB">Lebanon</option>
                        <option value="LS">Lesotho</option>
                        <option value="LR">Liberia</option>
                        <option value="LY">Libya</option>
                        <option value="LI">Liechtenstein</option>
                        <option value="LT">Lithuania</option>
                        <option value="LU">Luxembourg</option>
                        <option value="MO">Macao</option>
                        <option value="MK">Macedonia North</option>
                        <option value="MG">Madagascar</option>
                        <option value="MW">Malawi</option>
                        <option value="MY">Malaysia</option>
                        <option value="MV">Maldives</option>
                        <option value="ML">Mali</option>
                        <option value="MT">Malta</option>
                        <option value="MH">Marshall Islands</option>
                        <option value="MQ">Martinique</option>
                        <option value="MR">Mauritania</option>
                        <option value="MU">Mauritius</option>
                        <option value="YT">Mayotte</option>
                        <option value="MX">Mexico</option>
                        <option value="FM">Micronesia</option>
                        <option value="MD">Moldova</option>
                        <option value="MC">Monaco</option>
                        <option value="MN">Mongolia</option>
                        <option value="ME">Montenegro</option>
                        <option value="MS">Montserrat</option>
                        <option value="MA">Morocco</option>
                        <option value="MZ">Mozambique</option>
                        <option value="MM">Myanmar (Burma)</option>
                        <option value="NA">Namibia</option>
                        <option value="NR">Nauru</option>
                        <option value="NP">Nepal</option>
                        <option value="NL">Netherlands</option>
                        <option value="AN">Netherlands Antilles</option>
                        <option value="NC">New Caledonia</option>
                        <option value="NZ">New Zealand</option>
                        <option value="NI">Nicaragua</option>
                        <option value="NE">Niger</option>
                        <option value="NG">Nigeria</option>
                        <option value="NU">Niue</option>
                        <option value="NF">Norfolk Island</option>
                        <option value="MP">Northern Mariana Islands</option>
                        <option value="NO">Norway</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PW">Palau</option>
                        <option value="PS">Palestine</option>
                        <option value="PA">Panama</option>
                        <option value="PG">Papua New Guinea</option>
                        <option value="PY">Paraguay</option>
                        <option value="PE">Peru</option>
                        <option value="PH">Philippines</option>
                        <option value="PN">Pitcairn Islands</option>
                        <option value="PL">Poland</option>
                        <option value="PT">Portugal</option>
                        <option value="PR">Puerto Rico</option>
                        <option value="QA">Qatar</option>
                        <option value="RE">Reunion</option>
                        <option value="RO">Romania</option>
                        <option value="RU">Russian Federation</option>
                        <option value="RW">Rwanda</option>
                        <option value="BL">Saint Barthelemy</option>
                        <option value="SH">Saint Helena</option>
                        <option value="KN">Saint Kitts and Nevis</option>
                        <option value="LC">Saint Lucia</option>
                        <option value="MF">Saint Martin</option>
                        <option value="PM">Saint Pierre and Miquelon</option>
                        <option value="VC">Saint Vincent and the Grenadines</option>
                        <option value="WS">Samoa</option>
                        <option value="SM">San Marino</option>
                        <option value="ST">Sao Tome and Principe</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="SN">Senegal</option>
                        <option value="RS">Serbia</option>
                        <option value="CS">Serbia and Montenegro</option>
                        <option value="SC">Seychelles</option>
                        <option value="SL">Sierra Leone</option>
                        <option value="SG">Singapore</option>
                        <option value="SX">Sint Maarten</option>
                        <option value="SK">Slovakia</option>
                        <option value="SI">Slovenia</option>
                        <option value="SB">Solomon Islands</option>
                        <option value="SO">Somalia</option>
                        <option value="ZA">South Africa</option>
                        <option value="GS">South Georgia and the South Sandwich Islands</option>
                        <option value="SS">South Sudan</option>
                        <option value="ES">Spain</option>
                        <option value="LK">Sri Lanka</option>
                        <option value="SD">Sudan</option>
                        <option value="SR">Suriname</option>
                        <option value="SJ">Svalbard and Jan Mayen</option>
                        <option value="SE">Sweden</option>
                        <option value="CH">Switzerland</option>
                        <option value="SY">Syria</option>
                        <option value="TW">Taiwan</option>
                        <option value="TJ">Tajikistan</option>
                        <option value="TZ">Tanzania</option>
                        <option value="TH">Thailand</option>
                        <option value="TL">Timor-Leste</option>
                        <option value="TG">Togo</option>
                        <option value="TK">Tokelau</option>
                        <option value="TO">Tonga</option>
                        <option value="TT">Trinidad and Tobago</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey (Türkiye)</option>
                        <option value="TM">Turkmenistan</option>
                        <option value="TC">Turks and Caicos Islands</option>
                        <option value="TV">Tuvalu</option>
                        <option value="UM">U.S. Outlying Islands</option>
                        <option value="UG">Uganda</option>
                        <option value="UA">Ukraine</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                        <option value="UY">Uruguay</option>
                        <option value="UZ">Uzbekistan</option>
                        <option value="VU">Vanuatu</option>
                        <option value="VA">Vatican City Holy See</option>
                        <option value="VE">Venezuela</option>
                        <option value="VN">Vietnam</option>
                        <option value="VG">Virgin Islands, British</option>
                        <option value="VI">Virgin Islands, U.S</option>
                        <option value="WF">Wallis and Futuna</option>
                        <option value="EH">Western Sahara</option>
                        <option value="YE">Yemen</option>
                        <option value="ZM">Zambia</option>
                        <option value="ZW">Zimbabwe</option>
                    </select>
                    <br />
                    {this.state.countryError && (
                        <div className="errorMsg">{this.state.countryError}</div>
                    )}

                    <br />


                    <label for="city" ></label>
                    <select id="city" name="city" style={{ width: "330px", height: "40px" }} onChange={this.handleCityChange} required>
                        <option value="">Select City</option>
                        <option value="Achhnera">Achhnera</option>
                        <option value="Afzalgarh">Afzalgarh</option>
                        <option value="Agra">Agra</option>
                        <option value="Ahraura">Ahraura</option>
                        <option value="Ajodhya">Ajodhya</option>
                        <option value="Akbarpur">Akbarpur</option>
                        <option value="Aliganj">Aliganj</option>
                        <option value="Aligarh">Aligarh</option>
                        <option value="Allahabad">Allahabad</option>
                        <option value="Allahganj">Allahganj</option>
                        <option value="Amanpur">Amanpur</option>
                        <option value="Ambahta">Ambahta</option>
                        <option value="Ambedkar Nagar">Ambedkar Nagar</option>
                        <option value="Amethi">Amethi</option>
                        <option value="Amroha">Amroha</option>
                        <option value="Anandnagar">Anandnagar</option>
                        <option value="Antu">Antu</option>
                        <option value="Anupshahr">Anupshahr</option>
                        <option value="Aonla">Aonla</option>
                        <option value="Atarra">Atarra</option>
                        <option value="Atrauli">Atrauli</option>
                        <option value="Atraulia">Atraulia</option>
                        <option value="Auraiya">Auraiya</option>
                        <option value="Auras">Auras</option>
                        <option value="Azamgarh">Azamgarh</option>
                        <option value="Baberu">Baberu</option>
                        <option value="Babina">Babina</option>
                        <option value="Babrala">Babrala</option>
                        <option value="Babugarh">Babugarh</option>
                        <option value="Bachhraon">Bachhraon</option>
                        <option value="Bachhrawan">Bachhrawan</option>
                        <option value="Baghpat">Baghpat</option>
                        <option value="Bah">Bah</option>
                        <option value="Baheri">Baheri</option>
                        <option value="Bahjoi">Bahjoi</option>
                        <option value="Bahraich">Bahraich</option>
                        <option value="Bahraigh">Bahraigh</option>
                        <option value="Bahsuma">Bahsuma</option>
                        <option value="Bahua">Bahua</option>
                        <option value="Bajna">Bajna</option>
                        <option value="Bakewar">Bakewar</option>
                        <option value="Baldev">Baldev</option>
                        <option value="Ballia">Ballia</option>
                        <option value="Balrampur">Balrampur</option>
                        <option value="Banat">Banat</option>
                        <option value="Banbasa">Banbasa</option>
                        <option value="Banda">Banda</option>
                        <option value="Bangarmau">Bangarmau</option>
                        <option value="Bansdih">Bansdih</option>
                        <option value="Bansgaon">Bansgaon</option>
                        <option value="Bansi">Bansi</option>
                        <option value="Bara Banki">Bara Banki</option>
                        <option value="Baragaon">Baragaon</option>
                        <option value="Baraut">Baraut</option>
                        <option value="Bareilly">Bareilly</option>
                        <option value="Barkhera Kalan">Barkhera Kalan</option>
                        <option value="Barsana">Barsana</option>
                        <option value="Basti">Basti</option>
                        <option value="Behat">Behat</option>
                        <option value="Bela">Bela</option>
                        <option value="Beniganj">Beniganj</option>
                        <option value="Beswan">Beswan</option>
                        <option value="Bewar">Bewar</option>
                        <option value="Bhadohi">Bhadohi</option>
                        <option value="Bhagwantnagar">Bhagwantnagar</option>
                        <option value="Bharthana">Bharthana</option>
                        <option value="Bharwari">Bharwari</option>
                        <option value="Bhinga">Bhinga</option>
                        <option value="Bhongaon">Bhongaon</option>
                        <option value="Bidhuna">Bidhuna</option>
                        <option value="Bighapur Khurd">Bighapur Khurd</option>
                        <option value="Bijnor">Bijnor</option>
                        <option value="Bikapur">Bikapur</option>
                        <option value="Bilari">Bilari</option>
                        <option value="Bilariaganj">Bilariaganj</option>
                        <option value="Bilaspur">Bilaspur</option>
                        <option value="Bilgram">Bilgram</option>
                        <option value="Bilhaur">Bilhaur</option>
                        <option value="Bilsanda">Bilsanda</option>
                        <option value="Bilsi">Bilsi</option>
                        <option value="Bilthra">Bilthra</option>
                        <option value="Bindki">Bindki</option>
                        <option value="Bisalpur">Bisalpur</option>
                        <option value="Bisauli">Bisauli</option>
                        <option value="Bisenda Buzurg">Bisenda Buzurg</option>
                        <option value="Bishunpur Urf Maharajganj">Bishunpur Urf Maharajganj</option>
                        <option value="Biswan">Biswan</option>
                        <option value="Bithur">Bithur</option>
                        <option value="Budaun">Budaun</option>
                        <option value="Budhana">Budhana</option>
                        <option value="Bulandshahr">Bulandshahr</option>
                        <option value="Captainganj">Captainganj</option>
                        <option value="Chail">Chail</option>
                        <option value="Chakia">Chakia</option>
                        <option value="Chandauli">Chandauli</option>
                        <option value="Chandauli District">Chandauli District</option>
                        <option value="Chandpur">Chandpur</option>
                        <option value="Chanduasi">Chanduasi</option>
                        <option value="Charkhari">Charkhari</option>
                        <option value="Charthawal">Charthawal</option>
                        <option value="Chhaprauli">Chhaprauli</option>
                        <option value="Chharra">Chharra</option>
                        <option value="Chhata">Chhata</option>
                        <option value="Chhibramau">Chhibramau</option>
                        <option value="Chhutmalpur">Chhutmalpur</option>
                        <option value="Chillupar">Chillupar</option>
                        <option value="Chirgaon">Chirgaon</option>
                        <option value="Chitrakoot">Chitrakoot</option>
                        <option value="Chopan">Chopan</option>
                        <option value="Chunar">Chunar</option>
                        <option value="Colonelganj">Colonelganj</option>
                        <option value="Dadri">Dadri</option>
                        <option value="Dalmau">Dalmau</option>
                        <option value="Dankaur">Dankaur</option>
                        <option value="Dasna">Dasna</option>
                        <option value="Dataganj">Dataganj</option>
                        <option value="Daurala">Daurala</option>
                        <option value="Dayal Bagh">Dayal Bagh</option>
                        <option value="Deoband">Deoband</option>
                        <option value="Deoranian">Deoranian</option>
                        <option value="Deoria">Deoria</option>
                        <option value="Dewa">Dewa</option>
                        <option value="Dhampur">Dhampur</option>
                        <option value="Dhanaura">Dhanaura</option>
                        <option value="Dhaurahra">Dhaurahra</option>
                        <option value="Dibai">Dibai</option>
                        <option value="Dohrighat">Dohrighat</option>
                        <option value="Dostpur">Dostpur</option>
                        <option value="Dudhi">Dudhi</option>
                        <option value="Etah">Etah</option>
                        <option value="Etawah">Etawah</option>
                        <option value="Faizabad">Faizabad</option>
                        <option value="Farah">Farah</option>
                        <option value="Faridnagar">Faridnagar</option>
                        <option value="Faridpur">Faridpur</option>
                        <option value="Farrukhabad">Farrukhabad</option>
                        <option value="Fatehabad">Fatehabad</option>
                        <option value="Fatehganj West">Fatehganj West</option>
                        <option value="Fatehgarh">Fatehgarh</option>
                        <option value="Fatehpur">Fatehpur</option>
                        <option value="Fatehpur Chaurasi">Fatehpur Chaurasi</option>
                        <option value="Fatehpur Sikri">Fatehpur Sikri</option>
                        <option value="Firozabad">Firozabad</option>
                        <option value="Fyzabad">Fyzabad</option>
                        <option value="Gajraula">Gajraula</option>
                        <option value="Gangoh">Gangoh</option>
                        <option value="Ganj Dundwara">Ganj Dundwara</option>
                        <option value="Ganj Muradabad">Ganj Muradabad</option>
                        <option value="Garautha">Garautha</option>
                        <option value="Garhi Pukhta">Garhi Pukhta</option>
                        <option value="Garhmuktesar">Garhmuktesar</option>
                        <option value="Gautam Buddha Nagar">Gautam Buddha Nagar</option>
                        <option value="Gawan">Gawan</option>
                        <option value="Ghatampur">Ghatampur</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                        <option value="Ghazipur">Ghazipur</option>
                        <option value="Ghiror">Ghiror</option>
                        <option value="Ghorawal">Ghorawal</option>
                        <option value="Ghosi">Ghosi</option>
                        <option value="Gohand">Gohand</option>
                        <option value="Gokul">Gokul</option>
                        <option value="Gola Bazar">Gola Bazar</option>
                        <option value="Gola Gokarannath">Gola Gokarannath</option>
                        <option value="Gonda">Gonda</option>
                        <option value="Gonda City">Gonda City</option>
                        <option value="Gopamau">Gopamau</option>
                        <option value="Gorakhpur">Gorakhpur</option>
                        <option value="Goshainganj">Goshainganj</option>
                        <option value="Govardhan">Govardhan</option>
                        <option value="Greater Noida">Greater Noida</option>
                        <option value="Gulaothi">Gulaothi</option>
                        <option value="Gunnaur">Gunnaur</option>
                        <option value="Gursahaiganj">Gursahaiganj</option>
                        <option value="Gursarai">Gursarai</option>
                        <option value="Gyanpur">Gyanpur</option>
                        <option value="Haldaur">Haldaur</option>
                        <option value="Hamirpur">Hamirpur</option>
                        <option value="Handia">Handia</option>
                        <option value="Hapur">Hapur</option>
                        <option value="Haraiya">Haraiya</option>
                        <option value="Hardoi">Hardoi</option>
                        <option value="Harduaganj">Harduaganj</option>
                        <option value="Hasanpur">Hasanpur</option>
                        <option value="Hastinapur">Hastinapur</option>
                        <option value="Hata">Hata</option>
                        <option value="Hathras">Hathras</option>
                        <option value="Iglas">Iglas</option>
                        <option value="Ikauna">Ikauna</option>
                        <option value="Indergarh">Indergarh</option>
                        <option value="Islamnagar">Islamnagar</option>
                        <option value="Itaunja">Itaunja</option>
                        <option value="Itimadpur">Itimadpur</option>
                        <option value="Jagdishpur">Jagdishpur</option>
                        <option value="Jagnair">Jagnair</option>
                        <option value="Jahanabad">Jahanabad</option>
                        <option value="Jahangirabad">Jahangirabad</option>
                        <option value="Jahangirpur">Jahangirpur</option>
                        <option value="Jainpur">Jainpur</option>
                        <option value="Jais">Jais</option>
                        <option value="Jalalabad">Jalalabad</option>
                        <option value="Jalali">Jalali</option>
                        <option value="Jalalpur">Jalalpur</option>
                        <option value="Jalaun">Jalaun</option>
                        <option value="Jalesar">Jalesar</option>
                        <option value="Jansath">Jansath</option>
                        <option value="Jarwal">Jarwal</option>
                        <option value="Jasrana">Jasrana</option>
                        <option value="Jaswantnagar">Jaswantnagar</option>
                        <option value="Jaunpur">Jaunpur</option>
                        <option value="Jewar">Jewar</option>
                        <option value="Jhalu">Jhalu</option>
                        <option value="Jhansi">Jhansi</option>
                        <option value="Jhinjhak">Jhinjhak</option>
                        <option value="Jhinjhana">Jhinjhana</option>
                        <option value="Jhusi">Jhusi</option>
                        <option value="Jyotiba Phule Nagar">Jyotiba Phule Nagar</option>
                        <option value="Kabrai">Kabrai</option>
                        <option value="Kachhwa">Kachhwa</option>
                        <option value="Kadaura">Kadaura</option>
                        <option value="Kadipur">Kadipur</option>
                        <option value="Kaimganj">Kaimganj</option>
                        <option value="Kairana">Kairana</option>
                        <option value="Kakori">Kakori</option>
                        <option value="Kakrala">Kakrala</option>
                        <option value="Kalinagar">Kalinagar</option>
                        <option value="Kalpi">Kalpi</option>
                        <option value="Kamalganj">Kamalganj</option>
                        <option value="Kampil">Kampil</option>
                        <option value="Kandhla">Kandhla</option>
                        <option value="Kannauj">Kannauj</option>
                        <option value="Kanpur">Kanpur</option>
                        <option value="Kanpur Dehat">Kanpur Dehat</option>
                        <option value="Kant">Kant</option>
                        <option value="Kanth">Kanth</option>
                        <option value="Karari">Karari</option>
                        <option value="Karhal">Karhal</option>
                        <option value="Kasganj">Kasganj</option>
                        <option value="Katra">Katra</option>
                        <option value="Kaushambi District">Kaushambi District</option>
                        <option value="Kemri">Kemri</option>
                        <option value="Khada">Khada</option>
                        <option value="Khaga">Khaga</option>
                        <option value="Khair">Khair</option>
                        <option value="Khairabad">Khairabad</option>
                        <option value="Khalilabad">Khalilabad</option>
                        <option value="Khanpur">Khanpur</option>
                        <option value="Kharela">Kharela</option>
                        <option value="Khargupur">Khargupur</option>
                        <option value="Kharkhauda">Kharkhauda</option>
                        <option value="Khatauli">Khatauli</option>
                        <option value="Khekra">Khekra</option>
                        <option value="Kheri">Kheri</option>
                        <option value="Khudaganj">Khudaganj</option>
                        <option value="Khurja">Khurja</option>
                        <option value="Khutar">Khutar</option>
                        <option value="Kirakat">Kirakat</option>
                        <option value="Kiraoli">Kiraoli</option>
                        <option value="Kiratpur">Kiratpur</option>
                        <option value="Kishanpur">Kishanpur</option>
                        <option value="Kishni">Kishni</option>
                        <option value="Kithor">Kithor</option>
                        <option value="Konch">Konch</option>
                        <option value="Kopaganj">Kopaganj</option>
                        <option value="Kosi">Kosi</option>
                        <option value="Kota">Kota</option>
                        <option value="Kotra">Kotra</option>
                        <option value="Kulpahar">Kulpahar</option>
                        <option value="Kunda">Kunda</option>
                        <option value="Kundarkhi">Kundarkhi</option>
                        <option value="Kurara">Kurara</option>
                        <option value="Kushinagar">Kushinagar</option>
                        <option value="Laharpur">Laharpur</option>
                        <option value="Lakhimpur">Lakhimpur</option>
                        <option value="Lakhna">Lakhna</option>
                        <option value="Lalganj">Lalganj</option>
                        <option value="Lalitpur">Lalitpur</option>
                        <option value="Lar">Lar</option>
                        <option value="Lawar Khas">Lawar Khas</option>
                        <option value="Loni">Loni</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Lucknow District">Lucknow District</option>
                        <option value="Machhlishahr">Machhlishahr</option>
                        <option value="Madhoganj">Madhoganj</option>
                        <option value="Madhogarh">Madhogarh</option>
                        <option value="Maghar">Maghar</option>
                        <option value="Mahaban">Mahaban</option>
                        <option value="Maharajganj">Maharajganj</option>
                        <option value="Mahmudabad">Mahmudabad</option>
                        <option value="Mahoba">Mahoba</option>
                        <option value="Maholi">Maholi</option>
                        <option value="Mahroni">Mahroni</option>
                        <option value="Mailani">Mailani</option>
                        <option value="Mainpuri">Mainpuri</option>
                        <option value="Malihabad">Malihabad</option>
                        <option value="Mandawar">Mandawar</option>
                        <option value="Maniar">Maniar</option>
                        <option value="Manikpur">Manikpur</option>
                        <option value="Manjhanpur">Manjhanpur</option>
                        <option value="Mankapur">Mankapur</option>
                        <option value="Marahra">Marahra</option>
                        <option value="Mariahu">Mariahu</option>
                        <option value="Mataundh">Mataundh</option>
                        <option value="Mathura">Mathura</option>
                        <option value="Mau">Mau</option>
                        <option value="Mau Aimma">Mau Aimma</option>
                        <option value="Maudaha">Maudaha</option>
                        <option value="Mauranwan">Mauranwan</option>
                        <option value="Mawana">Mawana</option>
                        <option value="Meerut">Meerut</option>
                        <option value="Mehnagar">Mehnagar</option>
                        <option value="Mehndawal">Mehndawal</option>
                        <option value="Milak">Milak</option>
                        <option value="Miranpur">Miranpur</option>
                        <option value="Miranpur Katra">Miranpur Katra</option>
                        <option value="Mirganj">Mirganj</option>
                        <option value="Mirzapur">Mirzapur</option>
                        <option value="Misrikh">Misrikh</option>
                        <option value="Mohan">Mohan</option>
                        <option value="Mohanpur">Mohanpur</option>
                        <option value="Moradabad">Moradabad</option>
                        <option value="Moth">Moth</option>
                        <option value="Mubarakpur">Mubarakpur</option>
                        <option value="Mughal Sarai">Mughal Sarai</option>
                        <option value="Muhammadabad">Muhammadabad</option>
                        <option value="Muradnagar">Muradnagar</option>
                        <option value="Mursan">Mursan</option>
                        <option value="Musafir-Khana">Musafir-Khana</option>
                        <option value="Muzaffarnagar">Muzaffarnagar</option>
                        <option value="Nadigaon">Nadigaon</option>
                        <option value="Nagina">Nagina</option>
                        <option value="Nagram">Nagram</option>
                        <option value="Najibabad">Najibabad</option>
                        <option value="Nakur">Nakur</option>
                        <option value="Nanauta">Nanauta</option>
                        <option value="Nandgaon">Nandgaon</option>
                        <option value="Nanpara">Nanpara</option>
                        <option value="Narauli">Narauli</option>
                        <option value="Naraura">Naraura</option>
                        <option value="Nautanwa">Nautanwa</option>
                        <option value="Nawabganj">Nawabganj</option>
                        <option value="Nichlaul">Nichlaul</option>
                        <option value="Nihtaur">Nihtaur</option>
                        <option value="Niwari">Niwari</option>
                        <option value="Nizamabad">Nizamabad</option>
                        <option value="Noida">Noida</option>
                        <option value="Nurpur">Nurpur</option>
                        <option value="Obra">Obra</option>
                        <option value="Orai">Orai</option>
                        <option value="Oran">Oran</option>
                        <option value="Pachperwa">Pachperwa</option>
                        <option value="Padrauna">Padrauna</option>
                        <option value="Pahasu">Pahasu</option>
                        <option value="Pali">Pali</option>
                        <option value="Palia Kalan">Palia Kalan</option>
                        <option value="Parichha">Parichha</option>
                        <option value="Parichhatgarh">Parichhatgarh</option>
                        <option value="Parshadepur">Parshadepur</option>
                        <option value="Patiali">Patiali</option>
                        <option value="Patti">Patti</option>
                        <option value="Pawayan">Pawayan</option>
                        <option value="Phalauda">Phalauda</option>
                        <option value="Phaphund">Phaphund</option>
                        <option value="Phariha">Phariha</option>
                        <option value="Phulpur">Phulpur</option>
                        <option value="Pihani">Pihani</option>
                        <option value="Pilibhit">Pilibhit</option>
                        <option value="Pilkhua">Pilkhua</option>
                        <option value="Pinahat">Pinahat</option>
                        <option value="Pipraich">Pipraich</option>
                        <option value="Pratapgarh">Pratapgarh</option>
                        <option value="Pukhrayan">Pukhrayan</option>
                        <option value="Puranpur">Puranpur</option>
                        <option value="Purwa">Purwa</option>
                        <option value="Rabupura">Rabupura</option>
                        <option value="Radhakund">Radhakund</option>
                        <option value="Raebareli">Raebareli</option>
                        <option value="Rajapur">Rajapur</option>
                        <option value="Ramkola">Ramkola</option>
                        <option value="Ramnagar">Ramnagar</option>
                        <option value="Rampur">Rampur</option>
                        <option value="Rampura">Rampura</option>
                        <option value="Ranipur">Ranipur</option>
                        <option value="Rasra">Rasra</option>
                        <option value="Rasulabad">Rasulabad</option>
                        <option value="Rath">Rath</option>
                        <option value="Raya">Raya</option>
                        <option value="Renukut">Renukut</option>
                        <option value="Reoti">Reoti</option>
                        <option value="Richha">Richha</option>
                        <option value="Robertsganj">Robertsganj</option>
                        <option value="Rudarpur">Rudarpur</option>
                        <option value="Rura">Rura</option>
                        <option value="Sadabad">Sadabad</option>
                        <option value="Sadat">Sadat</option>
                        <option value="Safipur">Safipur</option>
                        <option value="Saharanpur">Saharanpur</option>
                        <option value="Sahaspur">Sahaspur</option>
                        <option value="Sahaswan">Sahaswan</option>
                        <option value="Sahawar">Sahawar</option>
                        <option value="Saidpur">Saidpur</option>
                        <option value="Sakit">Sakit</option>
                        <option value="Salon">Salon</option>
                        <option value="Sambhal">Sambhal</option>
                        <option value="Samthar">Samthar</option>
                        <option value="Sandi">Sandi</option>
                        <option value="Sandila">Sandila</option>
                        <option value="Sant Kabir Nagar">Sant Kabir Nagar</option>
                        <option value="Sant Ravi Das Nagar">Sant Ravi Das Nagar</option>
                        <option value="Sarai Akil">Sarai Akil</option>
                        <option value="Sarai Ekdil">Sarai Ekdil</option>
                        <option value="Sarai Mir">Sarai Mir</option>
                        <option value="Sarauli">Sarauli</option>
                        <option value="Sardhana">Sardhana</option>
                        <option value="Sarila">Sarila</option>
                        <option value="Sasni">Sasni</option>
                        <option value="Satrikh">Satrikh</option>
                        <option value="Saurikh">Saurikh</option>
                        <option value="Sector">Sector</option>
                        <option value="Seohara">Seohara</option>
                        <option value="Shahabad">Shahabad</option>
                        <option value="Shahganj">Shahganj</option>
                        <option value="Shahi">Shahi</option>
                        <option value="Shahjahanpur">Shahjahanpur</option>
                        <option value="Shahpur">Shahpur</option>
                        <option value="Shamli">Shamli</option>
                        <option value="Shamsabad">Shamsabad</option>
                        <option value="Shankargarh">Shankargarh</option>
                        <option value="Shergarh">Shergarh</option>
                        <option value="Sherkot">Sherkot</option>
                        <option value="Shikarpur">Shikarpur</option>
                        <option value="Shikohabad">Shikohabad</option>
                        <option value="Shishgarh">Shishgarh</option>
                        <option value="Shrawasti">Shrawasti</option>
                        <option value="Siddharthnagar">Siddharthnagar</option>
                        <option value="Sidhauli">Sidhauli</option>
                        <option value="Sidhpura">Sidhpura</option>
                        <option value="Sikandarabad">Sikandarabad</option>
                        <option value="Sikandarpur">Sikandarpur</option>
                        <option value="Sikandra">Sikandra</option>
                        <option value="Sikandra Rao">Sikandra Rao</option>
                        <option value="Sirathu">Sirathu</option>
                        <option value="Sirsa">Sirsa</option>
                        <option value="Sirsaganj">Sirsaganj</option>
                        <option value="Sirsi">Sirsi</option>
                        <option value="Sisauli">Sisauli</option>
                        <option value="Siswa Bazar">Siswa Bazar</option>
                        <option value="Sitapur">Sitapur</option>
                        <option value="Sonbhadra">Sonbhadra</option>
                        <option value="Soron">Soron</option>
                        <option value="Suar">Suar</option>
                        <option value="Sultanpur">Sultanpur</option>
                        <option value="Surianwan">Surianwan</option>
                        <option value="Tajpur">Tajpur</option>
                        <option value="Talbahat">Talbahat</option>
                        <option value="Talgram">Talgram</option>
                        <option value="Tanda">Tanda</option>
                        <option value="Thakurdwara">Thakurdwara</option>
                        <option value="Thana Bhawan">Thana Bhawan</option>
                        <option value="Tikaitnagar">Tikaitnagar</option>
                        <option value="Tikri">Tikri</option>
                        <option value="Tilhar">Tilhar</option>
                        <option value="Tindwari">Tindwari</option>
                        <option value="Titron">Titron</option>
                        <option value="Tori-Fatehpur">Tori-Fatehpur</option>
                        <option value="Tulsipur">Tulsipur</option>
                        <option value="Tundla">Tundla</option>
                        <option value="Ugu">Ugu</option>
                        <option value="Ujhani">Ujhani</option>
                        <option value="Ūn">Ūn</option>
                        <option value="Unnao">Unnao</option>
                        <option value="Usehat">Usehat</option>
                        <option value="Utraula">Utraula</option>
                        <option value="Varanasi">Varanasi</option>
                        <option value="Vrindavan">Vrindavan</option>
                        <option value="Wazirganj">Wazirganj</option>
                        <option value="Zafarabad">Zafarabad</option>
                        <option value="Zaidpur">Zaidpur</option>
                        <option value="Zamania">Zamania</option>
                    </select>
                    <br />
                    {this.state.cityError && (
                        <div className="errorMsg">{this.state.cityError}</div>
                    )}

                    <input
                        type="text"
                        placeholder="Pan Number"
                        name="panNumber"
                        maxLength={10}
                        pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
                        value={this.state.panNumber}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        autoComplete="off"
                    />
                    <br />
                    {this.state.panNumberError && (
                        <div className="errorMsg">{this.state.panNumberError}</div>
                    )}

                    <input
                        type="text"
                        placeholder="Enter 12-digit Aadhar Number"
                        name="aadharNumber"
                        maxLength={12}
                        pattern="\d{12}"
                        value={this.state.aadharNumber}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        autoComplete="off"
                    />
                    <br />
                    {this.state.aadharNumberError && (
                        <div className="errorMsg">{this.state.aadharNumberError}</div>
                    )}


                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
                </div>
            </div >
        );
    }
}




export default Formcomponent;