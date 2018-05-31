<template>
<div class="card">
  <header class="card-header">
    <p class="card-header-title">
      Edytuj pracownika
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
        <label class="label" for="name">Imie</label>
        <div class="control">
          <input id="name" class="input" :class="{'is-danger' : errors.name}" type="text" placeholder="Podaj swoje imię..." v-model="name">
        </div>
        <p v-if="errors.name" class="help is-danger">
          {{errors.name}}
        </p>
      </div>

      <div class="field">
        <label class="label" for="surrname">Nazwisko</label>
        <div class="control">
          <input id="surrname" class="input" :class="{'is-danger' : errors.surrname}" type="text" placeholder="Podaj swoję nazwisko..." v-model="surrname">
        </div>
        <p v-if="errors.surrname" class="help is-danger">
          {{errors.surrname}}
        </p>
      </div>

      <div class="field">
        <label class="label">Stanowisko</label>
        <div class="select" :class="{'is-danger' : errors.job}">
          <select v-model="job">
                <option value="podawacz">Podawacz kawy</option>
                <option value="Koder">Koder</option>
              </select>
        </div>
        <p v-if="errors.job" class="help is-danger">
          {{errors.job}}
        </p>
      </div>

      <div class="field">
        <label class="label">Płeć</label>
        <div class="control">
          <label class="radio">
                <input type="radio" value="male" checked v-model="gender">
                Mężczyzna
              </label>
          <label class="radio">
                <input type="radio" value="female" v-model="gender" >
                Kobieta
              </label>
        </div>
      </div>

      <div class="field is-grouped">
        <p class="control">
          <a class="button is-primary" >
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
export default {
  name: 'EditUser',
  props: ['id'],
  data() {
    return {
      name: '',
      surrname: '',
      gender: 'male',
      job: '',
      born: '',
      errors: {}
    }
  },
  methods: {
    getUser() {
      this.$http.get(this.globalURL + '/worker/get/' + this.id)
        .then(res => {
          let data = res.json();
          for (let prop in data) {
            this.$data[prop] = data[prop];
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getUser();
  }
}
</script>

<style >

</style>
