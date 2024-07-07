export const load = async ({ fetch, params }) => {
  const res = await fetch(
    `https://valorant-api.com/v1/agents/${params.agentId}`
  );
  const data = await res.json();
  return {
    data: data.data,
  };
};
