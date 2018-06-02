<template lang="html">
<div>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Wejścia
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <table class="table">
          <thead>
            <tr>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Akcja</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="entry in entries">
              <td>{{entry.pracownik_id}}</td>
              <td>{{entry.pracownik_id}}</td>
              <td v-if="entry.We_Wy == 'We'">
                <button type="button" class="button is-success"> <fai icon="sign-in-alt"/> </button>
              </td>
              <td v-else>
                <button type="button" class="button is-danger"> <fai icon="sign-out-alt"/> </button>
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
  name: 'Jobs',
  data() {
    return {
      alert: {},
      entries: []
    }
  },
  components: {
    fai: FontAwesomeIcon
  },
  methods: {
    getEntries() {
      this.$http.get(this.globalURL + '/api/entries')
        .then(res => {
          if (res.status == 200) {
            this.entries = res.body;
            console.log(res)
          } else {
            this.alert = {
              success: false,
              message: 'Nie udało się pobrać wejść z serwera'
            };
          }
        })
        .catch(err => {
          this.alert = {
            success: false,
            message: 'Nie można połączyć się z bazą danych.'
          };
        });
    }
  },
  mounted() {
    this.getEntries();
  }
}
</script>

<style lang="css">
</style>
