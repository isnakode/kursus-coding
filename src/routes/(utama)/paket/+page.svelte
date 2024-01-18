<script>
  import { courses } from "$lib/courses";
  import NoScrolbar from "$widgets/NoScrolbar.svelte";
  import Header from "../Header.svelte";
  import CourseCard from "./CourseCard.svelte";
</script>

<NoScrolbar />

<Header />
<div class="flex flex-col p-8 lg:px-16">
  <h1 class="text-4xl font-bold self-center group mb-12">Daftar Harga</h1>
  <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
    {#each courses as course}
      <CourseCard {course} />
    {/each}
  </div>
</div>
