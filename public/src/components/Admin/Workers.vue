<template lang="html">
  <div>
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
            <tr v-for="worker in workers">
              <td>{{worker.imie}}</td>
              <td>{{worker.nazwisko}}</td>
              <td>{{worker.data_urodzenia.slice(0,10)}}</td>
              <td v-if="worker.plec == 'm'">Mężczyzna</td>
                <td v-else-if="worker.plec == 'k'">Kobieta</td>
              <td>{{worker.stanowisko_id}}</td>
              <td>
                <button type="button" class="button is-info" @click="enterEdit(worker.pracownik_id)"> <fai icon="user-edit"/> </button>
              </td>
              <td>
                <button type="button" class="button is-danger" @click="deleteWorker(worker.pracownik_id)"> <fai icon="user-times"/> </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div class="notification" :class="{'is-success':alert.success, 'is-danger':!alert.success}" v-if="alert.message">
    {{alert.message}}
  </div>
</div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Workers',
  data() {
    return {
      workers: [],
      alert: {}
    }
  },
  components: {
    fai: FontAwesomeIcon
  },
  methods: {
    getWorkers() {
      this.$http.get(this.globalURL + '/api/workers').
      then(res => {
        if (res.status == 200) {
          this.workers = res.body;
        } else {
          this.alert = {
            success: false,
            message: 'Nie udało się pobrać pracowników z serwera'
          };
        }
      }).catch(err => {
        this.alert = {
          success: false,
          message: 'Nie można połączyć się z bazą danych.'
        };
      });
    },
    deleteWorker(id) {
      this.$http.delete(this.globalURL + '/api/workers/' + id)
        .then(res => {
          if (res.status == 200)
            this.getWorkers();
          else {
            this.alert = {
              success: false,
              message: 'Nie udało się usunąć pracownika'
            };
          }
        }).catch(err => {
          this.alert = {
            success: false,
            message: 'Nie można połączyć się z bazą danych.'
          };
        });
    },
    enterEdit(id) {
      this.$emit('edit-user', id);
    }
  },
  mounted() {
    this.getWorkers();
  },
}
</script>

<style lang="css">
</style>
