<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Medien</h1>
      <p class="content">
        Hier finden Sie eine Übersicht von uns veröffentlichter Artikel:
      </p>
      <table
        class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth"
      >
        <tr>
          <td>03. November 2020</td>
          <td>
            <a
              :href="`${publicPath}files/medien/2020-11-03DieSchlümpfeimFarbenchaos.pdf`"
              >Die Schlümpfe im Farbenchaos</a
            >
          </td>
        </tr>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      publicPath: process.env.BASE_URL,
    };
  },
};
</script>
