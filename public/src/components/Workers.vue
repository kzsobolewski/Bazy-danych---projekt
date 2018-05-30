<template lang="html">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Pracownicy
      </p>
      <a href="#" class="card-header-icon" aria-label="more options">
            <span class="icon">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </a>
    </header>
    <div class="card-content">
      <div class="content">
        <table class="table">
          <thead>
            <tr>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Data urodzin</th>
              <th>Płeć</th>
              <th>Stanowisko</th>
              <th>Edytuj</th>
              <th>Usuń</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>14.02.1986</td>
              <td>Mężczyzna</td>
              <td>Programista</td>
              <td>
                <button type="button" class="button is-info"> <fai icon="user-edit"/> </button>
              </td>
              <td>
                <button type="button" class="button is-danger"> <fai icon="user-times"/> </button>
              </td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>Cookie</td>
              <td>11.03.2006</td>
              <td>Mężczyzna</td>
              <td>Programista</td>
              <td>
                <button type="button" class="button is-info"> <fai icon="user-edit"/> </button>
              </td>
              <td>
                <button type="button" class="button is-danger"> <fai icon="user-times"/> </button>
              </td>
            </tr>
            <tr>
              <td>Susan</td>
              <td>Kowalska</td>
              <td>27.09.1906</td>
              <td>Kobieta</td>
              <td>Sprzątaczka</td>
              <td>
                <button type="button" class="button is-info"> <fai icon="user-edit"/> </button>
              </td>
              <td>
                <button type="button" class="button is-danger"> <fai icon="user-times"/> </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Workers',
  data() {
    return {
      workers: []
    }
  },
  components: {
    fai: FontAwesomeIcon
  },
  methods: {
    getWorkers() {
      this.$http.get(this.globalURL + '/worker/get').
      then(res => {
        console.log(res.body);
      }).catch(err => {
        console.error(err);
      });
    }
  },
  mounted() {
    this.getWorkers();
  },
}
</script>

<style lang="css">
</style>
