<script>
  import { courses } from "$lib/courses";
  let durasi = 1;
  let alamat = "";
  let lokasi = "Online";
  let kursus = "HTML";

  $: message = `https://wa.me/6283142861763?text=halo kak%0Dsaya ingin pesan kursus ${kursus}%0DDurasi: ${durasi} jam%0DLokasi: ${lokasi} ${
    lokasi == "Rumah murid" ? `%0DAlamat: ${alamat}` : ""
  }`;
</script>

<div class="flex flex-col md:items-center lg:p-16 p-8 bg-success/10">
  <form
    on:submit|preventDefault={() => open(message, "blank")}
    class="flex flex-col p-8 bg-white dark:bg-base-300 gap-4 rounded-xl lg:w-1/2"
  >
    <label class="form-control w-full">
      <span class="label-text label">Pilih kursus</span>
      <select bind:value={kursus} class="select select-bordered w-full">
        {#each courses as course}
          <option value={course.nama}>{course.nama}</option>
        {/each}
      </select>
    </label>
    <label class="form-control w-full">
      <span class="label-text label">Pilih Durasi</span>
      <input
        bind:value={durasi}
        type="range"
        min="1"
        max="5"
        class="range"
        step="1"
      />
      <div class="w-full flex justify-between text-xs px-2">
        {#each { length: 5 } as _, i}
          <span>{i + 1} jam</span>
        {/each}
      </div>
    </label>
    <label class="form-control w-full">
      <span class="label-text label">Pilih lokasi kursus</span>
      <select bind:value={lokasi} class="select select-bordered w-full">
        <option value="Online">Online</option>
        <option value="Rumah guru">Rumah guru</option>
        <option value="Rumah murid"
          >Rumah murid (biaya tergantung lokasi)</option
        >
      </select>
    </label>
    {#if lokasi == "Rumah murid"}
      <label class="form-control w-full">
        <span class="label-text label">Masukkan alamat kamu</span>
        <input
          bind:value={alamat}
          type="text"
          class="input input-bordered"
          required
        />
      </label>
    {/if}
    <button
      type="submit"
      class="btn btn-success mt-4 dark:!text-black !text-white"
      >Pesan kursus</button
    >
    <a
      href="/paket"
      class="btn btn-error btn-outline dark:hover:!text-black hover:!text-white"
      >Kembali ke daftar paket</a
    >
  </form>
</div>
