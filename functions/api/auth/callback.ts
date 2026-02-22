interface Env {
  BLIZZARD_CLIENT_ID: string;
  BLIZZARD_CLIENT_SECRET: string;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { code, redirect_uri, region } = await context.request.json<{
    code: string;
    redirect_uri: string;
    region?: string;
  }>();

  if (!code || !redirect_uri) {
    return Response.json({ error: "Missing code or redirect_uri" }, { status: 400 });
  }

  const clientId = context.env.BLIZZARD_CLIENT_ID;
  const clientSecret = context.env.BLIZZARD_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return Response.json({ error: "OAuth credentials not configured" }, { status: 500 });
  }

  const regionHost = region || "us";
  const tokenUrl = `https://${regionHost}.battle.net/oauth/token`;

  const credentials = btoa(`${clientId}:${clientSecret}`);

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri,
  });

  const tokenResponse = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body,
  });

  if (!tokenResponse.ok) {
    const errorText = await tokenResponse.text();
    return Response.json(
      { error: "Token exchange failed", details: errorText },
      { status: tokenResponse.status },
    );
  }

  const tokenData = await tokenResponse.json<{
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
  }>();

  return Response.json({
    access_token: tokenData.access_token,
    expires_in: tokenData.expires_in,
  });
};
