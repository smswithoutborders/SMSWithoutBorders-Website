function toRawGithubUrl(url) {
  if (!url) return url;
  try {
    const u = new URL(url);
    if (u.hostname === "github.com" && u.pathname.includes("/blob/")) {
      // /{owner}/{repo}/blob/{branch}/{path...} -> {owner}/{repo}@{branch}/{path...}
      const parts = u.pathname.split("/").filter(Boolean);
      const [owner, repo, , branch, ...rest] = parts;
      if (owner && repo && branch && rest.length) {
        return `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/${rest.join("/")}`;
      }
    }
    if (u.hostname === "raw.githubusercontent.com") {
      // raw.githubusercontent.com serves files as application/octet-stream
      // and sets X-Frame-Options: deny, which makes them undownloadable AND
      // unembeddable in an <iframe> — even worse than a plain blob link.
      // /{owner}/{repo}/{branch}/{path...} -> {owner}/{repo}@{branch}/{path...}
      const parts = u.pathname.split("/").filter(Boolean);
      const [owner, repo, branch, ...rest] = parts;
      if (owner && repo && branch && rest.length) {
        return `https://cdn.jsdelivr.net/gh/${owner}/${repo}@${branch}/${rest.join("/")}`;
      }
    }
  } catch {
    // not a valid URL, fall through and return as-is
  }
  return url;
}

const papers = [
  {
    id: "relaysms-payload-specs",
    title: "RelaySMS - Payload Specifications",
    authors: ["SMSWithoutBorders"],
    year: 2026,
    version: "1",
    type: "whitepaper",
    abstract:
      "Specification of the RelaySMS payload format used to encode and transmit messages over SMS-based channels.",
    topics: ["relaysms", "payload", "specification"],
    pdfUrl: toRawGithubUrl(process.env.REACT_APP_PAYLOAD_SPECS_PAPER),
  },
];

export default papers;