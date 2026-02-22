interface Env {
  BLIZZARD_CLIENT_ID: string;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const url = new URL(context.request.url);
  const region = url.searchParams.get("region") || "us";

  const clientId = context.env.BLIZZARD_CLIENT_ID;
  if (!clientId) {
    return Response.json({ error: "BLIZZARD_CLIENT_ID not configured" }, { status: 500 });
  }

  const redirectUri = `${url.origin}/callback`;
  const state = crypto.randomUUID();

  const authorizeUrl = new URL(`https://${region}.battle.net/oauth/authorize`);
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("scope", "wow.profile");
  authorizeUrl.searchParams.set("response_type", "code");
  authorizeUrl.searchParams.set("redirect_uri", redirectUri);
  authorizeUrl.searchParams.set("state", state);

  return Response.json({
    url: authorizeUrl.toString(),
    state,
  });
};
