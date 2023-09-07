import { serverSupabaseClient } from "#supabase/server";

export default eventHandler(async event => {
  const client = await serverSupabaseClient(event);

  const { category, size, limit } = getQuery(event);

  const query = client.from("products").select("*, category(name)");

  if (category) {
    query.eq("category", category);
  }
  if (size) {
    query.contains("sizes", [`${size}`]);
  }
  if (limit) {
    query.limit(limit);
  }

  const { data } = await query;

  return data;
});