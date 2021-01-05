<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
          height="30"
          alt=""
          loading="lazy"
        />
      </a>
      <ul class="navbar-nav">
        <li class="nav-item me-2">
          <div class="dropdown">
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              Color type
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li class="dropdown-item text-uppercase">
                Rgb
              </li>
              <li class="dropdown-item text-uppercase">
                Hex
              </li>
            </ul>
          </div>
        </li>
        <li class="nav-item me-2">
          <button type="button" class="btn btn-primary">
            Refresh
          </button>
        </li>
        <li class="nav-item">
          <button type="button" class="btn btn-primary">
            Generate PDF
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>
<style scoped lang="scss">
nav {
  height: 50px;
}
</style>
