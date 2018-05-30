Vue.component('stats', {
  data() {
    return {}
  },
  template: `  <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Statystyki
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>`
});

Vue.component('workers', {
  data() {
    return {}
  },
  template: `  <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Workers
        </p>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
      </header>
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
          <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
          <br>
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div>`
});

Vue.component('add', {
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
    submit() {
      if (this.validate()) {
        let {
          _data
        } = this
        console.log(_data);
        this.reset();
      }
    },
    validate() {
      var flag = true;
      let {
        errors
      } = this;

      Vue.delete(errors, 'name');
      Vue.delete(errors, 'surrname');
      Vue.delete(errors, 'job');
      Vue.delete(errors, 'born');

      // Validation
      if (this.name.length == 0) {
        flag = false;
        Vue.set(errors, 'name', 'Proszę podać imię.');
      }
      if (this.surrname.length == 0) {
        flag = false;
        Vue.set(errors, 'surrname', 'Proszę podać nazwisko.');
      }
      if (this.job.length == 0) {
        flag = false;
        Vue.set(errors, 'job', 'Proszę podać stanowsko.');
      }
      if (this.born.length == 0) {
        //  flag = false;
        Vue.set(errors, 'born', 'Proszę podać datę urodzin.');
      }
      console.log(flag)
      return flag;
    },
    reset() {
      this.name = '';
      this.surrname = '';
      this.gender = 'male';
      this.job = '';
      this.born = '';
      this.errors = {};
      Vue.delete(this.errors, 'name');
      Vue.delete(this.errors, 'surrname');
      Vue.delete(this.errors, 'job');
      Vue.delete(this.errors, 'born');
    }
  },
  template: `
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
                    <input id="surrname" class="input" :class="{'is-danger' : errors.surrname}"  type="text" placeholder="Podaj swoję nazwisko..."  v-model="surrname">
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
                    <a class="button is-primary" @click="submit">
                      Submit
                    </a>
                  </p>
                  <p class="control">
                    <a class="button is-light" >
                      Cancel
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>`
});

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    currentTab: 'stats',
    previousTab: 'stats',
  },
  methods: {
    changeTab(tab) {
      this.previousTab = this.currentTab;
      this.currentTab = tab;
    },
    goBack() {
      this.currentTab = this.previousTab;
    }
  }
});
