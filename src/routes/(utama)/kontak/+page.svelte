<script>
  const sosmed = [
    {
      nama: "Whatsapp",
      url: "https://wa.me/6283142861763?text=halo kak%0Dsaya ingin bertanya tentang kursus coding",
      color: "#1ebea5",
    },
    { nama: "Instagram", url: "/", color: "#b134af" },
    { nama: "Telegram", url: "/", color: "#0088cc" },
  ];
</script>

<div class="flex flex-col items-center justify-center h-dvh p-8 lg:p-16">
  <a href="/" class="text-4xl link-hover link font-bold mb-8">Kursus Coding</a>
  <ul
    class="flex flex-col gap-4 text-black dark:text-white self-stretch md:self-auto md:w-2/5"
  >
    {#each sosmed as s}
      <a
        style="--color:{s.color};--lesscolor:{s.color}66;"
        class="px-4 py-3 font-semibold bg-white hover:text-white rounded-full hover:bg-emerald-500"
        href={s.url}>{s.nama}</a
      >
    {/each}
  </ul>
</div>

<style>
  a:hover {
    background-color: var(--color);
  }
  a {
    background-color: var(--lesscolor);
  }
</style>
