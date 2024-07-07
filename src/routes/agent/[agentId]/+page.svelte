<script>
  export let data;
  const agentData = data.data;
  console.log(agentData);
  // Reactive variable to store the current ability description
  let currentAbilityDescription = agentData.abilities[0].description;
  let selectedAbilityIndex = 0;

  // Function to update the current ability description
  const updateDescription = (description, index) => {
    currentAbilityDescription = description;
    selectedAbilityIndex = index;
  };
</script>

<div class="w-full">
  <img src={agentData.bustPortrait} alt="" class="h-96" />
</div>

<div class="flex flex-row items-center justify-center text-white px-20">
  <div class="flex flex-row gap-20 min-h-80 max-h-96">
    <div class="w-96 flex flex-col justify-between">
      <div>
        <p>{currentAbilityDescription}</p>
      </div>

      <div class="flex justify-between flex-wrap">
        {#each agentData.abilities as ability, index}
          <button
            class="p-4 border-2 border-white h-fit w-fit rounded-lg {selectedAbilityIndex ===
            index
              ? 'bg-[#FF4655] border-transparent'
              : ''}"
            on:click={() => updateDescription(ability.description, index)}
          >
            <img
              src={ability.displayIcon}
              alt={ability.displayName}
              class="w-9 h-9"
              title={ability.displayName}
            />
          </button>
        {/each}
      </div>
    </div>

    <div class="w-72 flex gap-4">
      <div class="flex flex-col gap-2">
        <h3 class="text-2xl font-bold">BIOGRAPHY</h3>
        <p>{agentData.description}</p>
      </div>
    </div>

    <div class="w-60 flex">
      <div class="flex flex-col gap-2">
        <h3 class="text-2xl font-bold">ROLE</h3>
        <div class="flex flex-row gap-2 items-center">
          <p class="font-semibold text-xl">{agentData.role.displayName}</p>
          <img src={agentData.role.displayIcon} alt="" class="h-5" />
        </div>
        {agentData.role.description}
      </div>
    </div>
  </div>
</div>
