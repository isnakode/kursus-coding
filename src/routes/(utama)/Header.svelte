<script>
  import { base } from "$app/paths";

  /** @type {string} */
  export let title = "Daisy UI";

  /** @type {{title:string,url:string}[]} */
  const menus = [
    { title: "Beranda", url: "/" },
    { title: "Daftar paket", url: "/paket" },
  ];
  export let position = "static";
</script>

<div class="navbar bg-base-100 !px-8 lg:!px-16 {position}">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h8m-8 6h16"
          /></svg
        >
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {#each menus as menu}
          <li><a href="{base}{menu.url}">{menu.title}</a></li>
        {/each}
      </ul>
    </div>
    <a class="text-xl font-bold" href="{base}/">{title}</a>
  </div>
  <div class="navbar-end hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      {#each menus as menu}
        <li><a href="{base}{menu.url}">{menu.title}</a></li>
      {/each}
    </ul>
  </div>
</div>
