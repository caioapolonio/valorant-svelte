export const load = async ({ fetch }) => {
  const res = await fetch(
    `https://valorant-api.com/v1/agents?isPlayableCharacter=true`
  );
  const data = await res.json();
  return {
    data: data.data,
  };
};
