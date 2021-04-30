import { PrismicClient } from "@/lib/api.js";
import { linkResolver } from "@/lib/linkResolver.js";

export default async (req, res) => {
  const { token: ref, documentId } = req.query;
  const redirectUrl = await PrismicClient(req)
    .getPreviewResolver(ref, documentId)
    .resolve(linkResolver, "/");

  if (!redirectUrl) {
    return res.status(401).json({ message: "Invalid token" });
  }

  console.log(redirectUrl);

  res.setPreviewData({ ref });

  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${redirectUrl}" />
    <script>window.location.href = '${redirectUrl}'</script>
    </head>`
  );
  res.end();
};
