<script>
  import { page } from "$app/stores";
  import { courses } from "$lib/courses";
  import NoScrolbar from "$widgets/NoScrolbar.svelte";

  const currentCourses = courses.find(function (c) {
    console.log(c.nama);
    console.log($page.url.pathname.split("/").pop());
    return c.slug == $page.url.pathname.split("/").pop();
  });
</script>

<NoScrolbar />

<div class="flex flex-col py-8 px-16 gap-2">
  {#if currentCourses}
    {#each currentCourses.materi as m}
      <p
        class="first-letter:uppercase font-medium p-3 bg-blue-200 hover:bg-blue-500 rounded-md text-black hover:text-white"
      >
        {m}
      </p>
    {/each}
  {/if}
</div>
