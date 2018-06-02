<template>
<div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Dodaj Stanowisko
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
          <label class="label" for="nazwa_stanowiska">Nazwa</label>
          <div class="control">
            <input id="nazwa_stanowiska" class="input" :class="{'is-danger' : errors.nazwa_stanowiska}" type="text" placeholder="Podaj nazwę..." v-model="job.nazwa_stanowiska">
          </div>
          <p v-if="errors.nazwa_stanowiska" class="help is-danger">
            {{errors.nazwa_stanowiska}}
          </p>
        </div>

        <div class="field">
          <label class="label">Dział</label>
          <div class="select" :class="{'is-danger' : errors.dzial_id}">
            <select v-model="job.dzial_id">
              <option value="podawacz">Podawacz kawy</option>
              <option value="Koder">Koder</option>
          </select>
          </div>
          <p v-if="errors.dzial_id" class="help is-danger">
            {{errors.dzial_id}}
          </p>
        </div>

        <div class="field">
          <label class="label">Godziny Pracy</label>
          <div class="select" :class="{'is-danger' : errors.godz_rozpoczecia_naliczania_oplaty}">
            <datepicker v-model="job.godz_rozpoczecia_naliczania_oplaty" :config="{language, enableTime: true,
              noCalendar: true,
              dateFormat: 'H:i',
              time_24hr: true,
              defaultDate: '08:00',
              //maxDate: job.godz_zakonczenia_naliczania_oplaty
              }">
            </datepicker>
          </div>
          <div class="select" :class="{'is-danger' : errors.godz_rozpoczecia_naliczania_oplaty}">
            <datepicker v-model="job.godz_zakonczenia_naliczania_oplaty" :config="{language, enableTime: true,
              noCalendar: true,
              dateFormat: 'H:i',
              time_24hr: true,
              defaultDate: '20:00',
              //minDate: job.godz_rozpoczecia_naliczania_oplaty
              }">
            </datepicker>
          </div>
          <p v-if="errors.godz_rozpoczecia_naliczania_oplaty" class="help is-danger">
            {{errors.godz_rozpoczecia_naliczania_oplaty}}
          </p>
        </div>

        <div class="field">
          <label class="label" for="stawka_godz">Stawka</label>
          <div class="control">
            <input id="stawka_godz" class="input" :class="{'is-danger' : errors.stawka_godz}" type="number" placeholder="Podaj stawkę..." v-model="job.stawka_godz">
          </div>
          <p v-if="errors.stawka_godz" class="help is-danger">
            {{errors.stawka_godz}}
          </p>
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

  <div class="notification" :class="{'is-success':alert.success, 'is-danger':!alert.success}" v-if="alert.message">
    {{alert.message}}
  </div>

</div>
</template>

<script>
import Datepicker from 'vue-bulma-datepicker'

export default {
  name: 'AddUser',
  data() {
    return {
      job: {
        nazwa: '',
        dzial_id: '',
        nazwa_stanowiska: '',
        godz_rozpoczecia_naliczania_oplaty: '',
        godz_zakonczenia_naliczania_oplaty: '',
        stawka_godz:''
      },
      errors: {},
      alert: {}
    }
  },
  components: {
    Datepicker
  },
  methods: {
    submit() {
      if (this.validate()) {
        this.addJob();
        this.reset();
      }
    },
    resetErrors() {
      this.errors = {};
      for (let prop in this.job) {
        this.$delete(errors, prop);
      };
    },
    validate() {
      var flag = true;
      let {
        errors,
        job
      } = this;

      this.resetErrors();

      // Validation
      if (job.nazwa_stanowiska.length == 0) {
        flag = false;
        this.$set(errors, 'nazwa_stanowiska', 'Proszę podać nazwę.');
      }
      if (job.godz_rozpoczecia_naliczania_oplaty.length == 0 || job.godz_zakonczenia_naliczania_oplaty.length == 0) {
        flag = false;
        this.$set(errors, 'godz_rozpoczecia_naliczania_oplaty', 'Proszę podać godziny pracy');
      }
      if (job.stawka_godz.length == 0) {
        flag = false;
        this.$set(errors, 'stawka_godz', 'Proszę podać stawkę za godzinę.');
      }
      if (job.dzial_id.length == 0) {
        flag = false;
        this.$set(errors, 'dzial_id', 'Proszę podać dział.');
      }

      return flag;
    },
    addJob() {
      let {
        job
      } = this;

      this.$http.post(this.globalURL + '/api/jobs', job)
        .then(res => {
          if (res.status == 201) {
            this.alert = {
              success: true,
              message: 'Dodano pomyślnie pracownika'
            };
          } else {
            this.alert = {
              success: false,
              message: 'Bład SQL: ' + res.status
            }
          }
        })
        .catch(err => {
          this.alert = {
            success: false,
            message: 'Bład podczas połączenia z bazą danych'
          }
        });
    },
    reset() {
      for (let prop in this.job) {
        this.job[prop] = '';
      }
      this.resetErrors();
    }
  }
}
</script>

<style></style>
