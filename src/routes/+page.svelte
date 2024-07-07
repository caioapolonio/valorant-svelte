<script>
  export let data;
  const agents = data.data;
  console.log(agents);
</script>

<div class=" grid grid-cols-6 gap-6 px-20">
  {#each agents as agent}
    <a
      href="/agent/{agent.uuid}"
      class="min-h-96 flex flex-col items-center justify-center overflow-hidden w-full grayscale hover:grayscale-0 transition-all duration-300 ease-in-out group rounded-xl cursor-pointer"
      style={`background-color: #${agent.backgroundGradientColors[0]};`}
    >
      <img
        src={agent.background}
        alt=""
        class="h-full absolute grayscale-0 object-cover"
      />
      <img
        src={agent.bustPortrait}
        alt=""
        class="relative -bottom-32 scale-125 h-full group-hover:scale-150 object-cover transition-all duration-300 ease-in-out"
      />
      <div
        class="absolute top-0 right-0 h-full w-12 bg-gradient-to-t from-white/10 via-black to-white/10 opacity-90"
      >
        <div
          class="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <span class="transform rotate-90 text-white text-sm font-bold"
            >{agent.role.displayName.toUpperCase()}</span
          >
        </div>
      </div>
    </a>
  {/each}
</div>
