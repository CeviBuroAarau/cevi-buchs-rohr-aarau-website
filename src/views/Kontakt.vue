<template>
  <section class="section">
    <div class="container">
      <h1 class="title is-1">Kontakt</h1>
      <div class="content">
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left">
            <input class="input" type="text" placeholder="" />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left">
            <input class="input" type="email" placeholder="" value="" />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Nachricht</label>
          <div class="control">
            <textarea class="textarea" placeholder=""></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Nachricht senden</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
