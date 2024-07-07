<script>
  import "../app.css";
  import { page } from "$app/stores";
</script>

<div class="min-h-screen bg-[#0F1923]">
  <nav class="w-full bg-transparent text-white font-bold text-lg py-8 px-20">
    <ul class="flex flex-row items-center gap-10">
      <li
        class={`${$page.url.pathname === "/" ? "border-b-2 border-[#FF4655]" : ""}`}
      >
        <a href="/"> Home </a>
      </li>
      <li
        class={`${$page.url.pathname === "/charms" ? "border-b-2 border-[#FF4655]" : ""}`}
      >
        <a href="/charms">Charms</a>
      </li>
      <li
        class={`${$page.url.pathname === "/about" ? "border-b-2 border-[#FF4655]" : ""}`}
      >
        <a href="/about">About</a>
      </li>
    </ul>
  </nav>
  <slot />
</div>
