<template>
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Dodaj pracownika
    </p>
    <a href="#" class="card-header-icon" aria-label="more options">
        <span class="icon">
          <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </a>
  </header>
  <div class="card-content">
    <form class="content">

      <div class="field">
        <label class="label" for="imie">Imie</label>
        <div class="control">
          <input id="imie" class="input" :class="{'is-danger' : errors.imie}" type="text" placeholder="Podaj swoje imię..." v-model="imie">
        </div>
        <p v-if="errors.imie" class="help is-danger">
          {{errors.imie}}
        </p>
      </div>

      <div class="field">
        <label class="label" for="nazwisko">Nazwisko</label>
        <div class="control">
          <input id="nazwisko" class="input" :class="{'is-danger' : errors.nazwisko}" type="text" placeholder="Podaj swoję nazwisko..." v-model="nazwisko">
        </div>
        <p v-if="errors.nazwisko" class="help is-danger">
          {{errors.nazwisko}}
        </p>
      </div>

      <div class="field">
        <label class="label">Stanowisko</label>
        <div class="select" :class="{'is-danger' : errors.stanowisko_id}">
          <select v-model="stanowisko_id">
              <option value="podawacz">Podawacz kawy</option>
              <option value="Koder">Koder</option>
          </select>
        </div>
        <p v-if="errors.stanowisko_id" class="help is-danger">
          {{errors.stanowisko_id}}
        </p>
      </div>

      <div class="field">
        <label class="label">Data urodzin</label>
        <div class="select" :class="{'is-danger' : errors.data_urodzenia}">
          <datepicker v-model="data_urodzenia" :config="{language,altFormat: 'Y,m,d'}"></datepicker>
        </div>
        <p v-if="errors.data_urodzenia" class="help is-danger">
          {{errors.data_urodzenia}}
        </p>
      </div>

      <div class="field">
        <label class="label">Płeć</label>
        <div class="control">
          <label class="radio">
              <input type="radio" value="m" checked v-model="plec">
              Mężczyzna
            </label>
          <label class="radio">
              <input type="radio" value="f" v-model="plec" >
              Kobieta
            </label>
        </div>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary" @click="submit">
              Submit
            </a>
        </p>
        <p class="control">
          <a class="button is-light">
              Cancel
            </a>
        </p>
      </div>
    </form>
  </div>
</div>
</template>

<script>
import Datepicker from 'vue-bulma-datepicker'

export default {
  name: 'AddUser',
  data() {
    return {
      imie: '',
      nazwisko: '',
      plec: 'male',
      stanowisko_id: '',
      data_urodzenia: '',
      errors: {}
    }
  },
  components: {
    Datepicker
  },
  methods: {
    submit() {
      if (this.validate()) {
        this.addUser();
        this.reset();
      }
    },
    validate() {
      var flag = true;
      let {
        errors
      } = this;

      this.$delete(errors, 'imie');
      this.$delete(errors, 'nazwisko');
      this.$delete(errors, 'stanowisko_id');
      this.$delete(errors, 'data_urodzenia');

      // Validation
      if (this.imie.length == 0) {
        flag = false;
        this.$set(errors, 'imie', 'Proszę podać imię.');
      }
      if (this.nazwisko.length == 0) {
        flag = false;
        this.$set(errors, 'nazwisko', 'Proszę podać nazwisko.');
      }
      if (this.stanowisko_id.length == 0) {
        flag = false;
        this.$set(errors, 'stanowisko_id', 'Proszę podać stanowsko.');
      }
      if (this.data_urodzenia.length == 0) {
        flag = false;
        this.$set(errors, 'data_urodzenia', 'Proszę podać datę urodzin.');
      }

      return flag;
    },
    addUser() {
      let {
        errors,
        globalURL,
        language,
        ...data
      } = this.$data;

      console.log(data)

      this.$http.post(this.globalURL + '/worker/add', data)
        .then(res => {

        })
        .catch(err => {
          console.log(err)
        });
    },
    reset() {
      this.imie = '';
      this.nazwisko = '';
      this.plec = 'male';
      this.stanowisko_id = '';
      this.data_urodzenia = '';
      this.errors = {};
      this.$delete(this.errors, 'imie');
      this.$delete(this.errors, 'surrname');
      this.$delete(this.errors, 'stanowisko_id');
      this.$delete(this.errors, 'data_urodzenia');
    }
  },
  created() {
    console.log(this.language)
  }
}
</script>

<style></style>
