import { createSignal } from "solid-js";
import { GenderEnum } from "../../services/StoreService";
import { pushNotif } from "../../services/Notification";
import AuthService from "../../services/AuthService";

export function Register() {
  const [gender, setGender] = createSignal<GenderEnum>();
  const [birthday, setBirthday] = createSignal<Date>(new Date(Date.now()));
  const [name, setName] = createSignal<string>("");
  const [lastName, setLastName] = createSignal<string>("");
  const [email, setEmail] = createSignal<string>("");
  const [country, setCountry] = createSignal<string>("");
  const [city, setCity] = createSignal<string>("");
  const [postal, setPostal] = createSignal<string>("");
  const [phone, setPhone] = createSignal<string>("");
  const [password, setPassword] = createSignal<string>("");
  const [address, setAddress] = createSignal<string>("");

  function checkForm() {
    console.log("gender:", gender());

    if (!gender()) return false;
    console.log("gender ok");

    if (!name() || name().length == 0) return false;
    console.log("name ok");

    if (!lastName() || lastName().length == 0) return false;
    console.log("lastname ok");

    if (!email() || email().length == 0) return false;
    console.log("email ok");

    if (!birthday()) return false;
    console.log("birthday ok");

    if (!country()) return false;
    console.log("country ok");

    if (!city()) return false;
    console.log("city ok");

    if (!phone()) return false;
    console.log("phone ok");

    if (!postal()) return false;
    console.log("postal ok");

    if (!password() || password().length == 0) return false;
    console.log("password ok");

    return true;
  }

  async function register() {
    if (!checkForm()) {
      pushNotif({
        content: "Veuillez remplir tous les champs du formulaire.",
        type: "error",
      });
    }

    await AuthService.register(name(), email(), password());
  }

  function GenderSelection() {
    return (
      <div class="select-gender mb-3">
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            onClick={() => setGender(GenderEnum.male)}
          />
          <label class="form-check-label" for="inlineRadio1">
            Mr
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
            onClick={() => setGender(GenderEnum.female)}
          />
          <label class="form-check-label" for="inlineRadio2">
            Mme
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input
            class="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
            onClick={() => setGender(GenderEnum.other)}
          />
          <label class="form-check-label" for="inlineRadio3">
            Autre
          </label>
        </div>
      </div>
    );
  }

  function BirthdaySelection() {
    return (
      <div class="birth-select">
        <label>Date d'anniversaire :</label>
        <select
          class="form-select ms-0"
          onChange={(e) => {
            birthday()?.setDate(Number(e.target.value));
            console.log(birthday());
          }}
        >
          <option selected>Jours</option>
          <option value="1">01</option>
          <option value="2">02</option>
          <option value="3">03</option>
          <option value="4">04</option>
          <option value="5">05</option>
          <option value="6">06</option>
          <option value="7">07</option>
          <option value="8">08</option>
          <option value="9">09</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="25">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <select
          class="form-select"
          onChange={(e) => {
            birthday()?.setMonth(Number(e.target.value));
            console.log(birthday());
          }}
        >
          <option selected>Mois</option>
          <option value="0">January</option>
          <option value="1">February</option>
          <option value="2">March</option>
          <option value="3">April</option>
          <option value="4">May</option>
          <option value="5">June</option>
          <option value="6">July</option>
          <option value="7">August</option>
          <option value="8">September</option>
          <option value="9">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>
        <select
          class="form-select"
          onChange={(e) => {
            birthday()?.setFullYear(Number(e.target.value));
            console.log(birthday());
          }}
        >
          <option selected>Année</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
          <option value="2010">2010</option>
          <option value="2009">2009</option>
          <option value="2008">2008</option>
          <option value="2007">2007</option>
          <option value="2006">2006</option>
          <option value="2005">2005</option>
          <option value="2004">2004</option>
          <option value="2003">2003</option>
          <option value="2002">2002</option>
          <option value="2001">2001</option>
          <option value="2000">2000</option>
          <option value="1999">1999</option>
          <option value="1998">1998</option>
          <option value="1997">1997</option>
          <option value="1996">1996</option>
          <option value="1995">1995</option>
          <option value="1994">1994</option>
          <option value="1993">1993</option>
          <option value="1992">1992</option>
          <option value="1991">1991</option>
          <option value="1990">1990</option>
          <option value="1989">1989</option>
          <option value="1988">1988</option>
          <option value="1987">1987</option>
          <option value="1986">1986</option>
          <option value="1985">1985</option>
          <option value="1984">1984</option>
          <option value="1983">1983</option>
          <option value="1982">1982</option>
          <option value="1981">1981</option>
          <option value="1980">1980</option>
          <option value="1979">1979</option>
          <option value="1978">1978</option>
          <option value="1977">1977</option>
          <option value="1976">1976</option>
          <option value="1975">1975</option>
          <option value="1974">1974</option>
          <option value="1973">1973</option>
          <option value="1972">1972</option>
          <option value="1971">1971</option>
        </select>
      </div>
    );
  }

  function CountrySelection() {
    return (
      <div class="country">
        <label>Pays de Résidence :</label>
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        >
          <option selected>Open this select menu</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="Andorra">Andorra</option>
          <option value="Angola">Angola</option>
          <option value="Antigua">Antigua</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
          <option value="Australia">Australia</option>
          <option value="Austria">Austria</option>
          <option value="Azerbaijan">Azerbaijan</option>
          <option value="Bahamas">Bahamas</option>
          <option value="Bahrain">Bahrain</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Barbados">Barbados</option>
          <option value="Belarus">Belarus</option>
          <option value="Belgium">Belgium</option>
          <option value="Brazil">Brazil</option>
          <option value="Brunei">Brunei</option>
          <option value="Burundi">Burundi</option>
          <option value="Cambodia">Cambodia</option>
          <option value="Cameroon">Cameroon</option>
          <option value="Canada">Canada</option>
          <option value="Chad">Chad</option>
          <option value="Chile">Chile</option>
          <option value="China">China</option>
          <option value="Colombia">Colombia</option>
          <option value="Cyprus">Cyprus</option>
          <option value="Denmark">Denmark</option>
          <option value="Djibouti">Djibouti</option>
          <option value="Dominica">Dominica</option>
          <option value="Ecuador">Ecuador</option>
          <option value="Egypt">Egypt</option>
          <option value="Eritrea">Eritrea</option>
          <option value="Estonia">Estonia</option>
          <option value="Ethiopia">Ethiopia</option>
          <option value="Fiji">Fiji</option>
          <option value="Finland">Finland</option>
          <option value="France">France</option>
          <option value="Gabon">Gabon</option>
          <option value="Gambia">Gambia</option>
          <option value="Georgia">Georgia</option>
          <option value="Germany">Germany</option>
          <option value="Ghana">Ghana</option>
          <option value="Haiti">Haiti</option>
          <option value="Honduras">Honduras</option>
          <option value="Hungary">Hungary</option>
          <option value="Iceland">Iceland</option>
          <option value="India">India</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Iran">Iran</option>
          <option value="Jamaica">Jamaica</option>
          <option value="Japan">Japan</option>
          <option value="Jordan">Jordan</option>
          <option value="Kazakhstan">Kazakhstan</option>
          <option value="Kenya">Kenya</option>
          <option value="Kiribati">Kiribati</option>
          <option value="Kuwait">Kuwait</option>
          <option value="Laos">Laos</option>
        </select>
      </div>
    );
  }
  return (
    <div class="account-form text-start">
      <GenderSelection />

      <div class="form-group">
        <label>Prénom : </label>
        <input
          type="text"
          placeholder="First Name"
          name="Fname"
          onInput={(e) => setName(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label>Nom : </label>
        <input
          type="text"
          name="surname"
          onInput={(e) => setLastName(e.target.value)}
        />
      </div>

      <BirthdaySelection />
      <CountrySelection />

      <div class="form-group">
        <label>Adresse :</label>
        <input
          type="text"
          name="Address"
          onInput={(e) => setAddress(e.target.value)}
        />
      </div>

      <div class="form-group">
        <label>Mot de passe :</label>
        <input
          type="password"
          name="City"
          onInput={(e) => setPassword(e.target.value)}
        />
      </div>
      <div class="provency-group">
        <label>Ville :</label>
        <select
          class="form-select"
          aria-label="Default select example"
          onChange={(e) => setCity(e.target.value)}
        >
          <option selected>Selectionner la ville</option>
          <option value="Dhaka">Dhaka</option>
          <option value="Dhanmondi">Dhanmondi</option>
          <option value="Bonani">Bonani</option>
        </select>
      </div>
      <div class="form-group">
        <label>Code postal</label>
        <input
          type="text"
          name="Postal"
          onInput={(e) => setPostal(e.target.value)}
        />
      </div>
      <div class="form-group">
        <label>Email : </label>
        <input
          type="text"
          name="email"
          onInput={(e) => setEmail(e.target.value)}
        />
      </div>
      <div class="number-group">
        <label>Téléphone :</label>
        <select class="form-select" aria-label="Default select example">
          <option selected>+98</option>
          <option value="1">+262</option>
          <option value="2">+263</option>
        </select>
        <input
          type="text"
          name="number"
          onInput={(e) => setPhone(e.target.value)}
        />
      </div>
      <div class="form-group">
        <button class="d-block default-button" onClick={register}>
          <span>Commencez dès maintenant!</span>
        </button>
      </div>
    </div>
  );
}
