<script>
  import { base } from "$app/paths";

  /**@type {{
    slug: string,
    nama: string,
    color: string,
    harga: string,
    materi: string[],
  }}*/
  export let course;
</script>

<div
  style="--color:#{course.color}"
  class="parent border-4 transition-all rounded-2xl relative flex flex-col mb-8"
>
  <h2
    class="border-4 transition-all rounded-lg self-center -mt-6 bg-base-100 font-bold py-2 px-8"
  >
    {course.nama}
  </h2>

  <div class="flex flex-col p-8 gap-4">
    <p class="font-bold text-2xl text-center">{course.harga} / jam</p>
    {#if course.materi.length > 0}
      <div class="flex gap-4 lg:flex-row flex-col">
        <a href="{base}/paket/pesan" class="btn text-white btn-success flex-1"
          >Pesan</a
        >
        <a
          href="{base}/paket/{course.slug}"
          class="btn text-white btn-ghost flex-1 btn-outline">Materi</a
        >
        <a
          href="https://www.youtube.com/results?search_query={course.nama} bahasa indonesia"
          target="_blank"
          class="btn btn-error btn-outline flex-1"
        >
          Youtube (GRATIS)
        </a>
      </div>
    {:else}
      <button class="btn btn-ghost btn-outline">Segera dibuat</button>
    {/if}
  </div>
</div>

<style>
  .parent:hover,
  .parent:hover h2 {
    border-color: var(--color);
  }
</style>
