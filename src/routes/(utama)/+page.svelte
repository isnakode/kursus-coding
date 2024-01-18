<script>
  import { base } from "$app/paths";
  import Header from "./Header.svelte";
</script>

<div class="flex flex-col h-dvh">
  <Header />
  <div
    class="flex grow flex-col justify-center items-start md:items-center gap-4 px-8 lg:px-16"
  >
    <h2 class="text-4xl font-bold">BELAJAR CODING SUPER GAMPANG</h2>
    <p>
      Disini kami menawarkan kursus coding dengan materi yang sangat mudah
      difahami
    </p>
    <div class="flex gap-4">
      <a href="{base}/" class="md:w-48 btn btn-success">Ikut kursus</a>
      <a href="{base}/paket" class="md:w-48 btn btn-ghost btn-outline"
        >Lihat daftar paket</a
      >
    </div>
  </div>
</div>
