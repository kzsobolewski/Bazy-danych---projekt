<template lang="html">
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        Wypłaty
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        <table class="table">
          <thead>
            <tr>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Stanowisko</th>
              <th>Godziny</th>
              <th>Wynagrodzenie</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>Programista</td>
              <td>112</td>
              <td>3420$</td>
            </tr>
            <tr>
              <td>Bob</td>
              <td>Cookie</td>
              <td>Programista</td>
              <td>80</td>
              <td>1400$</td>
            </tr>
            <tr>
              <td>Susan</td>
              <td>Kowalska</td>
              <td>Sprzątaczka</td>
              <td>65</td>
              <td>1850$</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Payments',
}
</script>

<style lang="css">
</style>
