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
      name: null,
      surrname: null,
      gender: 'male',
      job: null,
      born: null
    }
  },
  methods: {
    submit() {
      let {_data} = this
      console.log(_data);
    }
  },
  template: `
          <div class="card" v-else-if="currentTab == 'add'">
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
                    <input id="name" class="input" type="text" placeholder="Podaj swoje imię..." v-model="name">
                  </div>
                </div>

                <div class="field">
                  <label class="label" for="surrname">Nazwisko</label>
                  <div class="control">
                    <input id="surrname" class="input" type="text" placeholder="Podaj swoję nazwisko..."  v-model="surrname">
                  </div>
                </div>

                <div class="field">
                  <label class="label">Stanowisko</label>
                  <div class="select">
                    <select  v-model="job">
                      <option value="podawacz">Podawacz kawy</option>
                      <option value="Koder">Koder</option>
                    </select>
                  </div>
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
