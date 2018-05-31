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

</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Workers',
  data() {
    return {
      workers: [{
        imie: 'Bob',
        nazwisko: 'Cookie',
        data_urodzenia: '1/4/2000',
        plec: 'm',
        pracownik_id: 1,
        stanowisko_id: 'Programista'
      }]
    }
  },
  components: {
    fai: FontAwesomeIcon
  },
  methods: {
    getWorkers() {
      this.$http.get(this.globalURL + '/api/workers').
      then(res => {
        this.workers = res.body;
      }).catch(err => {
        console.error(err);
      });
    },
    getJobs(){
      // let jobs = [];
      // for(worker of workers){
      //   jobs.push(worker.stanowisko_id);
      // }
      // jobs.join
    },
    deleteWorker(id) {
      this.$http.delete(this.globalURL + '/api/workers/' + id)
        .then(res => {
          console.log(res.body);
          this.getWorkers();
        }).catch(err => {
          console.error(err);
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
