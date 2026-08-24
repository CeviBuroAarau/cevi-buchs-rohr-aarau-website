#!/usr/bin/env bash
#
# Sets up branch protection on main so that GitHub's auto-merge feature can be
# used (see .github/workflows/dependabot_automerge.yml). Auto-merge is only
# allowed on pull requests that are blocked by a required check or review --
# without protection there is nothing for auto-merge to wait on.
#
# Requires an authenticated `gh` CLI with admin rights on the repository.
# Run once; re-running is idempotent.

set -euo pipefail

REPO="$(gh repo view --json nameWithOwner --jq .nameWithOwner)"

echo "Enabling auto-merge on ${REPO} ..."
gh api -X PATCH "repos/${REPO}" -f allow_auto_merge=true --silent

echo "Protecting branch main on ${REPO} ..."
# strict=false          -- do not force a rebase onto the latest main before every
#                          merge, which would serialize the parallel Dependabot PRs
# enforce_admins=false  -- admins keep the ability to push to main directly
# contexts              -- job name from .github/workflows/build_branch.yml;
#                          CodeQL is deliberately absent since it reports
#                          "skipping" on Dependabot pull requests
gh api -X PUT "repos/${REPO}/branches/main/protection" --input - <<'JSON'
{
  "required_status_checks": {
    "strict": false,
    "contexts": ["Build and Test"]
  },
  "enforce_admins": false,
  "required_pull_request_reviews": null,
  "restrictions": null,
  "allow_force_pushes": false,
  "allow_deletions": false
}
JSON

echo "Done."
